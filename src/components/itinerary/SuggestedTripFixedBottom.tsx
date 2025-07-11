
import { useState } from 'react';
import { IndianRupee, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PricingOption } from './booking/PricingTabs';
import SuggestedTripForm from './booking/SuggestedTripForm';

interface SuggestedTripFixedBottomProps {
  price: number;
  discount: number;
  onCheckDetails?: () => void; // Make this optional
  tripName: string;
  activePricing: PricingOption | null;
  guestCount: number;
}

const SuggestedTripFixedBottom = ({ 
  price, 
  discount, 
  onCheckDetails,
  tripName,
  activePricing,
  guestCount
}: SuggestedTripFixedBottomProps) => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const discountedPrice = price - (price * discount) / 100;
  
  // Use the selected pricing option's price if available, otherwise use the default discounted price
  const basePrice = activePricing ? activePricing.price : discountedPrice;
  const totalPrice = basePrice * guestCount;
  
  // Calculate the original price before discount for the strike-through display
  const originalPricePerPerson = activePricing 
    ? Math.round(activePricing.price / (1 - discount/100)) 
    : price;
  const originalTotalPrice = originalPricePerPerson * guestCount;
    
  const openEnquiryForm = () => {
    setShowEnquiryForm(true);
  };
  
  const closeEnquiryForm = () => {
    setShowEnquiryForm(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex items-center justify-between gap-4 md:hidden z-50">
      <div className="flex flex-col">
        <span className="text-xs text-gray-500">
          Total for {guestCount} {guestCount === 1 ? 'guest' : 'guests'}
        </span>
        <div className="flex items-center gap-1">
          <IndianRupee className="h-4 w-4" />
          <span className="text-lg font-bold">{totalPrice.toLocaleString()}</span>
          {discount > 0 && (
            <span className="text-sm text-gray-500 line-through ml-2">₹{originalTotalPrice.toLocaleString()}</span>
          )}
        </div>
        {discount > 0 && (
          <span className="text-xs text-green-600 font-medium">{discount}% off</span>
        )}
      </div>
      
      <Button 
        onClick={openEnquiryForm}
        className="bg-tripvidya-primary hover:bg-tripvidya-primary/90 text-white flex items-center gap-2"
      >
        <Info className="h-4 w-4" />
        Know More
      </Button>
      
      <SuggestedTripForm 
        isOpen={showEnquiryForm} 
        onClose={closeEnquiryForm} 
        tripName={tripName}
      />
    </div>
  );
};

export default SuggestedTripFixedBottom;
