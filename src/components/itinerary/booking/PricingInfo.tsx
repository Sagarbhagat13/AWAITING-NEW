
import { PricingOption } from './PricingTabs';

interface PricingInfoProps {
  activePricing: PricingOption;
  discount: number;
  guestCount: number;
}

const PricingInfo = ({ activePricing, discount, guestCount }: PricingInfoProps) => {
  const totalPrice = activePricing.price * guestCount;
  const originalTotalPrice = discount > 0 ? Math.round((activePricing.price / (1 - discount/100)) * guestCount) : 0;

  return (
    <div className="mb-3">
      <div className="flex items-baseline">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 mb-1">
            Total for {guestCount} {guestCount === 1 ? 'guest' : 'guests'}
          </span>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-tripvidya-primary">₹{totalPrice.toLocaleString()}</span>
            {discount > 0 && (
              <span className="text-base text-gray-500 line-through ml-2">₹{originalTotalPrice.toLocaleString()}</span>
            )}
            {discount > 0 && (
              <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                {discount}% OFF
              </span>
            )}
          </div>
          <span className="text-xs text-gray-500 mt-1">
            ₹{activePricing.price.toLocaleString()} per person
          </span>
        </div>
      </div>
    </div>
  );
};

export default PricingInfo;
