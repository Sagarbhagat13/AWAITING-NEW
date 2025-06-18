
import React, { useState, useEffect } from 'react';
import { Trip } from '@/data/popularTrips';
import VirtualizedTripGrid from '@/components/optimized/VirtualizedTripGrid';

interface TripGridProps {
  trips: Trip[];
  path: string;
}

const TripGrid = ({ trips, path }: TripGridProps) => {
  const [shouldOptimize, setShouldOptimize] = useState(false);

  useEffect(() => {
    // Use optimized grid for larger lists (>8 items)
    setShouldOptimize(trips.length > 8);
  }, [trips.length]);

  if (trips.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-600">No trips found for this category.</p>
      </div>
    );
  }

  // Process trips with appropriate badges
  const processedTrips = trips.map(trip => {
    // Determine if a month badge should be applied
    const isMonthlyPackage = path.includes('monthly');
    const monthName = isMonthlyPackage ? path.split('-')[0] : undefined;
    
    return {
      ...trip,
      stateHighlight: path === 'india' ? trip.stateHighlight : undefined,
      honeymoonSpecial: path === 'honeymoon-packages' ? true : trip.honeymoonSpecial && path === 'popular-trips',
      international: path === 'international-tours' || path === 'world' ? true : trip.international && path === 'popular-trips',
      familySpecial: path === 'family-tours' ? true : trip.familySpecial && path === 'popular-trips',
      bikingPackage: path === 'ladakh-trips' && trip.bikingPackage ? true : trip.bikingPackage && path === 'popular-trips',
      suvPackage: path === 'ladakh-trips' && trip.suvPackage ? true : trip.suvPackage && path === 'popular-trips',
      longWeekend: path === 'long-weekend-trips' ? true : trip.longWeekend && path === 'popular-trips',
      offbeat: path === 'off-beat-trips' ? true : trip.offbeat && path === 'popular-trips',
      month: monthName
    };
  });

  if (shouldOptimize) {
    return <VirtualizedTripGrid trips={processedTrips} />;
  }

  // For smaller lists, use regular grid
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {processedTrips.map(trip => {
        const CarouselCard = React.lazy(() => import('@/components/home/CarouselCard'));
        
        return (
          <div key={trip.id} className="aspect-[3/4]">
            <React.Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse rounded-lg" />}>
              <CarouselCard
                {...trip}
                className="h-full"
              />
            </React.Suspense>
          </div>
        );
      })}
    </div>
  );
};

export default TripGrid;
