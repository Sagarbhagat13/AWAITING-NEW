
import TripDescription from './TripDescription';
import TripDetailsTabs from './TripDetailsTabs';

interface TripDetailsProps {
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
  cancellationPolicy?: {
    period: string;
    refundPercentage: number;
    description: string;
  }[];
  thingsToCarry?: {
    category: string;
    items: string[];
    essential: boolean;
  }[];
  tripId?: string;
  tripName: string;
}

const TripDetails = ({ 
  description, 
  itinerary, 
  highlights, 
  inclusions, 
  exclusions,
  faqs,
  cancellationPolicy,
  thingsToCarry,
  tripId, 
  tripName 
}: TripDetailsProps) => {
  return (
    <div className="w-full lg:w-2/3">
      <TripDescription description={description} />
      
      <TripDetailsTabs 
        itinerary={itinerary}
        highlights={highlights}
        inclusions={inclusions}
        exclusions={exclusions}
        faqs={faqs}
        cancellationPolicy={cancellationPolicy}
        thingsToCarry={thingsToCarry}
        tripId={tripId}
        tripName={tripName}
      />
    </div>
  );
};

export default TripDetails;
