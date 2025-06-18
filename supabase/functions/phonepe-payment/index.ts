
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface PaymentRequest {
  amount: number
  tripName: string
  tripBookingId?: string
  userDetails: {
    name: string
    email: string
    phone: string
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    // Get the user
    const { data: { user } } = await supabaseClient.auth.getUser()
    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (req.method === 'POST') {
      const { amount, tripName, tripBookingId, userDetails }: PaymentRequest = await req.json()

      // PhonePe configuration
      const MERCHANT_ID = Deno.env.get('PHONEPE_MERCHANT_ID')
      const SALT_KEY = Deno.env.get('PHONEPE_SALT_KEY')
      const SALT_INDEX = Deno.env.get('PHONEPE_SALT_INDEX') || '1'
      const PHONEPE_ENV = Deno.env.get('PHONEPE_ENV') || 'UAT' // UAT or PROD

      if (!MERCHANT_ID || !SALT_KEY) {
        return new Response(
          JSON.stringify({ error: 'PhonePe credentials not configured' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }

      // Generate unique merchant transaction ID
      const merchantTransactionId = `MT${Date.now()}_${user.id.substring(0, 8)}`
      
      // Base URLs based on environment
      const baseUrl = PHONEPE_ENV === 'PROD' 
        ? 'https://api.phonepe.com/apis/hermes'
        : 'https://api-preprod.phonepe.com/apis/pg-sandbox'

      const redirectUrl = `${req.headers.get('origin')}/payment/success`
      const callbackUrl = `${Deno.env.get('SUPABASE_URL')}/functions/v1/phonepe-payment/callback`

      // Create payment payload
      const paymentPayload = {
        merchantId: MERCHANT_ID,
        merchantTransactionId,
        merchantUserId: user.id,
        amount: amount * 100, // Convert to paise
        redirectUrl,
        redirectMode: 'POST',
        callbackUrl,
        mobileNumber: userDetails.phone.replace(/\D/g, ''),
        paymentInstrument: {
          type: 'PAY_PAGE'
        }
      }

      // Generate checksum
      const base64Payload = btoa(JSON.stringify(paymentPayload))
      const checksumString = base64Payload + '/pg/v1/pay' + SALT_KEY
      
      const encoder = new TextEncoder()
      const data = encoder.encode(checksumString)
      const hashBuffer = await crypto.subtle.digest('SHA-256', data)
      const hashArray = Array.from(new Uint8Array(hashBuffer))
      const checksum = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
      const finalChecksum = checksum + '###' + SALT_INDEX

      // Store payment transaction in database
      const { error: dbError } = await supabaseClient
        .from('payment_transactions')
        .insert({
          user_id: user.id,
          trip_booking_id: tripBookingId,
          merchant_transaction_id: merchantTransactionId,
          amount,
          currency: 'INR',
          payment_status: 'PENDING',
          callback_url: callbackUrl,
          redirect_url: redirectUrl
        })

      if (dbError) {
        console.error('Database error:', dbError)
        return new Response(
          JSON.stringify({ error: 'Failed to create payment record' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }

      // Make request to PhonePe
      const response = await fetch(`${baseUrl}/pg/v1/pay`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-VERIFY': finalChecksum
        },
        body: JSON.stringify({
          request: base64Payload
        })
      })

      const result = await response.json()

      if (result.success) {
        // Update transaction with PhonePe response
        await supabaseClient
          .from('payment_transactions')
          .update({
            phonepe_transaction_id: result.data.transactionId,
            phonepe_response: result,
            updated_at: new Date().toISOString()
          })
          .eq('merchant_transaction_id', merchantTransactionId)

        return new Response(
          JSON.stringify({
            success: true,
            paymentUrl: result.data.instrumentResponse.redirectInfo.url,
            merchantTransactionId
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      } else {
        return new Response(
          JSON.stringify({ error: 'Payment initiation failed', details: result }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
    }

    // Handle callback from PhonePe
    if (req.method === 'POST' && req.url.includes('/callback')) {
      const callbackData = await req.json()
      console.log('PhonePe Callback:', callbackData)

      // Update payment status based on callback
      const { response } = callbackData
      if (response) {
        const decodedResponse = JSON.parse(atob(response))
        
        await supabaseClient
          .from('payment_transactions')
          .update({
            payment_status: decodedResponse.code === 'PAYMENT_SUCCESS' ? 'SUCCESS' : 'FAILED',
            phonepe_response: decodedResponse,
            completed_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })
          .eq('phonepe_transaction_id', decodedResponse.transactionId)
      }

      return new Response('OK', { headers: corsHeaders })
    }

    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
