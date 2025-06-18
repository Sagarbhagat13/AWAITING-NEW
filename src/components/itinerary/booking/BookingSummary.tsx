import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Users, CreditCard, Loader2, CalendarDays } from 'lucide-react';
import { PricingOption } from './PricingTabs';
import { useState } from 'react';
import { validateCoupon, CouponData } from '@/services/couponService';
import PhonePePayment from './PhonePePayment';

interface BatchDate {
  id: string;
  startDate: string;
  endDate: string;
  totalSlots: number;
  availableSlots: number;
  price: number;
}

interface BookingSummaryProps {
  isOpen: boolean;
  onClose: () => void;
  tripName: string;
  duration: string;
  activePricing: PricingOption;
  guestCount: number;
  discount: number;
  selectedBatchDate?: BatchDate | null;
  onProceedToPayment: () => void;
}

const BookingSummary = ({ 
  isOpen, 
  onClose, 
  tripName, 
  duration, 
  activePricing, 
  guestCount, 
  discount,
  selectedBatchDate,
  onProceedToPayment 
}: BookingSummaryProps) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<CouponData | null>(null);
  const [couponError, setCouponError] = useState('');
  const [isValidatingCoupon, setIsValidatingCoupon] = useState(false);
  const [showPhonePePayment, setShowPhonePePayment] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Use the same pricing logic as TripBookingCard
  const baseTotal = activePricing.price * guestCount;
  
  const couponDiscountAmount = appliedCoupon ? baseTotal * (appliedCoupon.discountPercentage / 100) : 0;
  const finalTotal = baseTotal - couponDiscountAmount;

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) return;
    
    setIsValidatingCoupon(true);
    setCouponError('');
    
    try {
      const result = await validateCoupon(couponCode.trim(), baseTotal);
      
      if (result.isValid && result.coupon) {
        setAppliedCoupon(result.coupon);
        setCouponCode('');
        console.log('Coupon applied successfully:', result.coupon);
      } else {
        setCouponError(result.error || 'Invalid coupon code');
      }
    } catch (error) {
      setCouponError('Failed to validate coupon. Please try again.');
      console.error('Coupon validation error:', error);
    } finally {
      setIsValidatingCoupon(false);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleApplyCoupon();
    }
  };

  const handleProceedToPhonePe = () => {
    // Validate user details
    if (!userDetails.name || !userDetails.email || !userDetails.phone) {
      setCouponError('Please fill in all required details');
      return;
    }

    setShowPhonePePayment(true);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Booking Summary</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Trip Details */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">{tripName}</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{duration}</span>
                </div>
                
                {selectedBatchDate && (
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    <span>{selectedBatchDate.startDate} - {selectedBatchDate.endDate}</span>
                  </div>
                )}
                
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{guestCount} {guestCount === 1 ? 'Guest' : 'Guests'}</span>
                </div>
              </div>
            </div>

            {/* User Details Form */}
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Traveler Details</h4>
              <Input
                placeholder="Full Name *"
                value={userDetails.name}
                onChange={(e) => setUserDetails(prev => ({ ...prev, name: e.target.value }))}
              />
              <Input
                placeholder="Email Address *"
                type="email"
                value={userDetails.email}
                onChange={(e) => setUserDetails(prev => ({ ...prev, email: e.target.value }))}
              />
              <Input
                placeholder="Phone Number *"
                value={userDetails.phone}
                onChange={(e) => setUserDetails(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>

            {/* Coupon Code Section */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Input
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                  disabled={isValidatingCoupon || !!appliedCoupon}
                />
                <Button 
                  onClick={handleApplyCoupon}
                  disabled={!couponCode.trim() || isValidatingCoupon || !!appliedCoupon}
                  variant="outline"
                  size="sm"
                >
                  {isValidatingCoupon ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    'Apply'
                  )}
                </Button>
              </div>
              
              {couponError && (
                <p className="text-sm text-red-600 mb-2">{couponError}</p>
              )}
              
              {appliedCoupon && (
                <div className="bg-green-50 p-3 rounded-md flex justify-between items-center">
                  <div>
                    <span className="text-sm font-medium text-green-800">
                      {appliedCoupon.code} Applied
                    </span>
                    <p className="text-xs text-green-600">{appliedCoupon.description}</p>
                  </div>
                  <Button 
                    onClick={handleRemoveCoupon}
                    variant="ghost" 
                    size="sm"
                    className="text-green-700 hover:text-green-800"
                  >
                    Remove
                  </Button>
                </div>
              )}
            </div>

            {/* Pricing Details */}
            <div className="border-t pt-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Package ({activePricing.title})</span>
                  <span className="font-medium">₹{activePricing.price.toLocaleString()} × {guestCount}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{baseTotal.toLocaleString()}</span>
                </div>
                
                {appliedCoupon && (
                  <div className="flex justify-between items-center text-green-600">
                    <span>Coupon Discount ({appliedCoupon.discountPercentage}%)</span>
                    <span>-₹{couponDiscountAmount.toLocaleString()}</span>
                  </div>
                )}
              </div>
              
              <div className="border-t pt-2 mt-2 flex justify-between items-center">
                <span className="font-semibold text-lg">Total Amount</span>
                <div className="text-right">
                  <span className="font-bold text-xl text-tripvidya-primary">₹{Math.round(finalTotal).toLocaleString()}</span>
                  {appliedCoupon && (
                    <div className="text-sm text-gray-500 line-through">₹{baseTotal.toLocaleString()}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <Button 
                onClick={handleProceedToPhonePe}
                className="w-full bg-purple-600 hover:bg-purple-700"
                size="lg"
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Pay with PhonePe
              </Button>
              
              <Button 
                variant="outline" 
                onClick={onClose}
                className="w-full"
              >
                Back to Trip Details
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* PhonePe Payment Dialog */}
      <PhonePePayment
        isOpen={showPhonePePayment}
        onClose={() => setShowPhonePePayment(false)}
        paymentData={{
          amount: Math.round(finalTotal),
          tripName,
          userDetails
        }}
      />
    </>
  );
};

export default BookingSummary;
