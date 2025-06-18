
import { supabase } from '@/integrations/supabase/client';

export interface PaymentRequest {
  amount: number;
  tripName: string;
  tripBookingId?: string;
  userDetails: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface PaymentResponse {
  success: boolean;
  paymentUrl?: string;
  merchantTransactionId?: string;
  error?: string;
  details?: any;
}

export const initiatePhonePePayment = async (paymentData: PaymentRequest): Promise<PaymentResponse> => {
  try {
    const { data, error } = await supabase.functions.invoke('phonepe-payment', {
      body: paymentData
    });

    if (error) {
      console.error('PhonePe payment error:', error);
      return {
        success: false,
        error: error.message || 'Payment initiation failed'
      };
    }

    return data;
  } catch (error) {
    console.error('PhonePe service error:', error);
    return {
      success: false,
      error: 'Failed to connect to payment service'
    };
  }
};

export const checkPaymentStatus = async (merchantTransactionId: string) => {
  try {
    const { data, error } = await supabase
      .from('payment_transactions')
      .select('*')
      .eq('merchant_transaction_id', merchantTransactionId)
      .single();

    if (error) {
      console.error('Payment status check error:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Payment status service error:', error);
    return null;
  }
};
