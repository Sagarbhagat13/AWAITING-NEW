
import { useEffect, useState } from 'react';
import { getSimilarTrips } from '@/utils/tripRecommendations';
import { Trip } from '@/data/popularTrips';
import { useIsMobile } from '@/hooks/use-mobile';
import TripCarousel from '@/components/TripCarousel';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import CarouselCard from '@/components/home/CarouselCard';

interface SimilarTripsSectionProps {
  currentTripId: string;
  currentLocation: string;
}

const SimilarTripsSection = ({ currentTripId, currentLocation }: SimilarTripsSectionProps) => {
  const [similarTrips, setSimilarTrips] = useState<Trip[]>([]);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const recommendations = getSimilarTrips(currentTripId, currentLocation, 3);
    setSimilarTrips(recommendations);
  }, [currentTripId, currentLocation]);

  if (similarTrips.length === 0) {
    return null;
  }
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">You Might Also Like</h2>
        
        {isMobile ? (
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
          >
            <CarouselContent className="px-4">
              {similarTrips.map((trip) => (
                <CarouselItem key={trip.id} className="basis-[77%]">
                  <CarouselCard {...trip} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 border-none bg-black/30 text-white hover:bg-black/50" />
            <CarouselNext className="right-2 border-none bg-black/30 text-white hover:bg-black/50" />
          </Carousel>
        ) : (
          <TripCarousel 
            title="" 
            description=""
            itemsPerView={3}
          >
            {similarTrips.map((trip) => (
              <div key={trip.id} className="h-full">
                <CarouselCard {...trip} />
              </div>
            ))}
          </TripCarousel>
        )}
      </div>
    </section>
  );
};

export default SimilarTripsSection;
