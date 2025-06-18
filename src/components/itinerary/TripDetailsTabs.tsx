
import { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TripItineraryTab from './tabs/TripItineraryTab';
import TripHighlightsTab from './tabs/TripHighlightsTab';
import TripInclusionsTab from './tabs/TripInclusionsTab';
import TripFaqsTab from './tabs/TripFaqsTab';
import TripCancellationPolicyTab from './tabs/TripCancellationPolicyTab';
import TripThingsToCarryTab from './tabs/TripThingsToCarryTab';
import { useIsMobile } from '@/hooks/use-mobile';

interface TripDetailsTabsProps {
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

const TripDetailsTabs = ({
  itinerary,
  highlights,
  inclusions,
  exclusions,
  faqs,
  cancellationPolicy,
  thingsToCarry,
  tripId,
  tripName
}: TripDetailsTabsProps) => {
  const [activeTab, setActiveTab] = useState('itinerary');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeButton = container.querySelector(`[data-state="active"]`) as HTMLElement;
      
      if (activeButton) {
        const scrollLeft = activeButton.offsetLeft - (container.clientWidth / 2) + (activeButton.clientWidth / 2);
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeTab]);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-10">
      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar pb-2"
      >
        <TabsList className="min-w-max inline-flex justify-start mb-6 p-1">
          <TabsTrigger value="itinerary" className="flex-shrink-0">Itinerary</TabsTrigger>
          <TabsTrigger value="highlights" className="flex-shrink-0">Highlights</TabsTrigger>
          <TabsTrigger value="inclusions" className="flex-shrink-0">Inclusions</TabsTrigger>
          <TabsTrigger value="faqs" className="flex-shrink-0">FAQs</TabsTrigger>
          <TabsTrigger value="cancellation" className="flex-shrink-0">Cancellation Policy</TabsTrigger>
          <TabsTrigger value="things-to-carry" className="flex-shrink-0">Things to Carry</TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value="itinerary">
        <TripItineraryTab itinerary={itinerary} tripId={tripId} tripName={tripName} />
      </TabsContent>
      
      <TabsContent value="highlights">
        <TripHighlightsTab highlights={highlights} />
      </TabsContent>
      
      <TabsContent value="inclusions">
        <TripInclusionsTab inclusions={inclusions} exclusions={exclusions} />
      </TabsContent>
      
      <TabsContent value="faqs">
        <TripFaqsTab faqs={faqs} />
      </TabsContent>

      <TabsContent value="cancellation">
        <TripCancellationPolicyTab cancellationPolicy={cancellationPolicy} />
      </TabsContent>

      <TabsContent value="things-to-carry">
        <TripThingsToCarryTab thingsToCarry={thingsToCarry} />
      </TabsContent>
    </Tabs>
  );
};

export default TripDetailsTabs;
