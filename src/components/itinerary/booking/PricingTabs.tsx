
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PricingOption {
  id: string;
  title: string;
  price: number;
  description: string;
  isPopular?: boolean;
}

interface PricingTabsProps {
  pricingOptions: PricingOption[];
  activePricingId: string;
  onPricingSelect: (id: string) => void;
}

const PricingTabs = ({ pricingOptions, activePricingId, onPricingSelect }: PricingTabsProps) => {
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-8 mt-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-medium text-gray-700">Select Package</h3>
        <div className="flex space-x-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 rounded-full bg-gray-100 hover:bg-gray-200" 
            onClick={() => scrollTabs('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 rounded-full bg-gray-100 hover:bg-gray-200" 
            onClick={() => scrollTabs('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="pricing-tabs-container">
        <div 
          ref={tabsRef}
          className="flex overflow-x-auto pt-2 pb-4 scrollbar-none"
        >
          {pricingOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => onPricingSelect(option.id)}
              className={cn(
                "pricing-tab flex-none px-5 py-3 rounded-lg text-sm font-medium cursor-pointer relative mr-3 min-w-[100px] transition-all text-center",
                option.id === activePricingId 
                  ? "active bg-tripvidya-primary text-white shadow-md" 
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
              )}
            >
              {option.title}
              {option.isPopular && (
                <span className="pricing-tab-badge bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  Popular
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTabs;
