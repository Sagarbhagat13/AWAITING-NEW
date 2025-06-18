
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Clock, ArrowLeft } from 'lucide-react';
import { checkPaymentStatus } from '@/services/phonePeService';

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState<'loading' | 'success' | 'failed' | 'pending'>('loading');
  const [paymentData, setPaymentData] = useState<any>(null);

  useEffect(() => {
    const checkStatus = async () => {
      const merchantTransactionId = searchParams.get('merchantTransactionId');
      
      if (merchantTransactionId) {
        const status = await checkPaymentStatus(merchantTransactionId);
        if (status) {
          setPaymentData(status);
          if (status.payment_status === 'SUCCESS') {
            setPaymentStatus('success');
          } else if (status.payment_status === 'FAILED') {
            setPaymentStatus('failed');
          } else {
            setPaymentStatus('pending');
          }
        } else {
          setPaymentStatus('failed');
        }
      } else {
        setPaymentStatus('failed');
      }
    };

    checkStatus();
  }, [searchParams]);

  const getStatusIcon = () => {
    switch (paymentStatus) {
      case 'success':
        return <CheckCircle className="h-16 w-16 text-green-500" />;
      case 'failed':
        return <XCircle className="h-16 w-16 text-red-500" />;
      case 'pending':
        return <Clock className="h-16 w-16 text-yellow-500" />;
      default:
        return <Clock className="h-16 w-16 text-gray-400 animate-spin" />;
    }
  };

  const getStatusMessage = () => {
    switch (paymentStatus) {
      case 'success':
        return {
          title: 'Payment Successful!',
          description: 'Your trip booking has been confirmed. You will receive a confirmation email shortly.',
          buttonText: 'View My Trips',
          buttonLink: '/my-trips'
        };
      case 'failed':
        return {
          title: 'Payment Failed',
          description: 'Your payment could not be processed. Please try again or contact support.',
          buttonText: 'Try Again',
          buttonLink: '/'
        };
      case 'pending':
        return {
          title: 'Payment Pending',
          description: 'Your payment is being processed. Please wait for confirmation.',
          buttonText: 'Check Status',
          buttonLink: '/my-trips'
        };
      default:
        return {
          title: 'Checking Payment Status...',
          description: 'Please wait while we verify your payment.',
          buttonText: 'Please Wait',
          buttonLink: ''
        };
    }
  };

  const statusInfo = getStatusMessage();

  return (
    <div className="min-h-screen flex flex-col relative">
      <SEOHead 
        title="Payment Status - Awaiting Adventures"
        description="Check your payment status for trip bookings"
        url={`${window.location.origin}/payment/success`}
        type="website"
      />
      
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="flex justify-center">
            {getStatusIcon()}
          </div>
          
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-gray-900">
              {statusInfo.title}
            </h1>
            <p className="text-gray-600">
              {statusInfo.description}
            </p>
          </div>

          {paymentData && (
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-left">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Transaction ID:</span>
                  <span className="font-mono text-xs">{paymentData.merchant_transaction_id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-semibold">₹{paymentData.amount?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-semibold ${
                    paymentData.payment_status === 'SUCCESS' ? 'text-green-600' :
                    paymentData.payment_status === 'FAILED' ? 'text-red-600' :
                    'text-yellow-600'
                  }`}>
                    {paymentData.payment_status}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-3">
            {statusInfo.buttonLink && (
              <Button 
                onClick={() => window.location.href = statusInfo.buttonLink}
                className="w-full"
                disabled={paymentStatus === 'loading'}
              >
                {statusInfo.buttonText}
              </Button>
            )}
            
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/'}
              className="w-full"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PaymentSuccessPage;
