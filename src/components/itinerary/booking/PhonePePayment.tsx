
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader2, Shield, ArrowLeft } from 'lucide-react';
import { initiatePhonePePayment, PaymentRequest } from '@/services/phonePeService';
import { toast } from 'sonner';

interface PhonePePaymentProps {
  isOpen: boolean;
  onClose: () => void;
  paymentData: {
    amount: number;
    tripName: string;
    tripBookingId?: string;
    userDetails: {
      name: string;
      email: string;
      phone: string;
    };
  };
}

const PhonePePayment = ({ isOpen, onClose, paymentData }: PhonePePaymentProps) => {
  const [loading, setLoading] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);

  const handlePayment = async () => {
    setLoading(true);
    
    try {
      const response = await initiatePhonePePayment(paymentData);
      
      if (response.success && response.paymentUrl) {
        setPaymentUrl(response.paymentUrl);
        // Open PhonePe payment page in a new window
        const paymentWindow = window.open(
          response.paymentUrl, 
          'phonepe_payment',
          'width=600,height=700,scrollbars=yes,resizable=yes'
        );

        // Monitor the payment window
        const checkClosed = setInterval(() => {
          if (paymentWindow?.closed) {
            clearInterval(checkClosed);
            // Payment window closed, you might want to check payment status
            toast.info('Payment window closed. Please check your payment status.');
            onClose();
          }
        }, 1000);

      } else {
        toast.error(response.error || 'Failed to initiate payment');
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Payment initiation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToBooking = () => {
    setPaymentUrl(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Shield className="mr-2 h-5 w-5 text-green-600" />
            Secure Payment with PhonePe
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Payment Summary */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">{paymentData.tripName}</div>
            <div className="font-bold text-lg text-tripvidya-primary">₹{paymentData.amount.toLocaleString()}</div>
            <div className="text-sm text-gray-500 mt-2">
              <div>Name: {paymentData.userDetails.name}</div>
              <div>Email: {paymentData.userDetails.email}</div>
              <div>Phone: {paymentData.userDetails.phone}</div>
            </div>
          </div>

          {/* PhonePe Info */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <img 
                src="https://www.phonepe.com/webstatic/5.12.0/images/phonepe-logo.svg" 
                alt="PhonePe" 
                className="h-8"
              />
              <span className="text-lg font-semibold text-purple-600">PhonePe</span>
            </div>
            <p className="text-sm text-gray-600">
              Pay securely using UPI, Credit/Debit Cards, Net Banking, and Wallets
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <Button 
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700"
              size="lg"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Initiating Payment...
                </>
              ) : (
                'Pay with PhonePe'
              )}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleBackToBooking}
              className="w-full"
              disabled={loading}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Booking
            </Button>
          </div>
          
          <div className="text-xs text-gray-500 text-center">
            <Shield className="inline h-3 w-3 mr-1" />
            Your payment is secured by PhonePe's 256-bit SSL encryption
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhonePePayment;
