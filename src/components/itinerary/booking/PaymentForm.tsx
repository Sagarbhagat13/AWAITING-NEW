
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Lock } from 'lucide-react';
import { useState } from 'react';

interface PaymentFormProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
  tripName: string;
}

const PaymentForm = ({ isOpen, onClose, totalAmount, tripName }: PaymentFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePayment = () => {
    // TODO: Integrate with payment gateway (Stripe/Razorpay)
    console.log('Processing payment for:', { totalAmount, tripName, formData });
    alert('Payment integration coming soon! This is a demo.');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Lock className="mr-2 h-5 w-5" />
            Secure Payment
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Order Summary */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">{tripName}</div>
            <div className="font-bold text-lg text-tripvidya-primary">₹{totalAmount.toLocaleString()}</div>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Payment Information */}
          <div className="space-y-3 border-t pt-4">
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input 
                id="cardNumber"
                value={formData.cardNumber}
                onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                placeholder="1234 5678 9012 3456"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input 
                  id="expiryDate"
                  value={formData.expiryDate}
                  onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                  placeholder="MM/YY"
                />
              </div>
              
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input 
                  id="cvv"
                  value={formData.cvv}
                  onChange={(e) => handleInputChange('cvv', e.target.value)}
                  placeholder="123"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <Button 
              onClick={handlePayment}
              className="w-full bg-tripvidya-primary hover:bg-tripvidya-primary/90"
              size="lg"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Pay ₹{totalAmount.toLocaleString()}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={onClose}
              className="w-full"
            >
              Cancel Payment
            </Button>
          </div>
          
          <div className="text-xs text-gray-500 text-center">
            <Lock className="inline h-3 w-3 mr-1" />
            Your payment information is secure and encrypted
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentForm;
