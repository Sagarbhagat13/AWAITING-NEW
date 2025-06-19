
import TripDetails from '@/components/itinerary/TripDetails';
import TripBookingCard from '@/components/itinerary/TripBookingCard';
import { PricingOption } from './booking/PricingTabs';
import { BatchDate } from './booking/types';

interface TripContentSectionProps {
  description: string;
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
    meals: string[];
    accommodation: string;
  }[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  price: number;
  discount: number;
  duration: string;
  tripId?: string;
  tripName: string;
  isCustomizedTrip?: boolean;
  isSuggestedTrip?: boolean;
  showBookingForm?: boolean;
  setShowBookingForm?: (show: boolean) => void;
  showBookingSummary?: boolean;
  setShowBookingSummary?: (show: boolean) => void;
  activePricingId?: string;
  onPricingChange?: (pricingId: string, pricingData: PricingOption) => void;
  guestCount?: number;
  onGuestCountChange?: (count: number) => void;
  pricingOptions?: PricingOption[];
  batchDates?: BatchDate[];
}

const TripContentSection = ({
  description,
  itinerary,
  highlights,
  inclusions,
  exclusions,
  faqs,
  price,
  discount,
  duration,
  tripId,
  tripName,
  isCustomizedTrip = false,
  isSuggestedTrip = false,
  showBookingForm,
  setShowBookingForm,
  showBookingSummary,
  setShowBookingSummary,
  activePricingId,
  onPricingChange,
  guestCount = 1,
   onGuestCountChange,
  pricingOptions,
  batchDates
}: TripContentSectionProps) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <TripDetails 
            description={description}
            itinerary={itinerary}
            highlights={highlights}
            inclusions={inclusions}
            exclusions={exclusions}
            faqs={faqs}
            tripId={tripId}
            tripName={tripName}
          />
          
          <TripBookingCard 
            price={price}
            discount={discount}
            duration={duration}
            isCustomizedTrip={isCustomizedTrip}
            isSuggestedTrip={isSuggestedTrip}
            tripName={tripName}
            isOpen={showBookingForm}
            onClose={() => setShowBookingForm?.(false)}
            showBookingSummary={showBookingSummary}
            setShowBookingSummary={setShowBookingSummary}
            activePricingId={activePricingId}
            onPricingChange={onPricingChange}
            guestCount={guestCount}
            onGuestCountChange={onGuestCountChange}
            pricingOptions={pricingOptions}
            batchDates={batchDates}

          />
        </div>
      </div>
    </section>
  );
};

export default TripContentSection;
