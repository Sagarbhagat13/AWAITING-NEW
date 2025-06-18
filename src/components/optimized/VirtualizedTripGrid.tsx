
import React, { useMemo, useState, useRef, useEffect } from 'react';
import { Trip } from '@/data/popularTrips';
import TripCard from '@/components/TripCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

interface VirtualizedTripGridProps {
  trips: Trip[];
  className?: string;
}

const VirtualizedTripGrid: React.FC<VirtualizedTripGridProps> = ({
  trips,
  className = ""
}) => {
  const isMobile = useIsMobile();
  const [visibleItems, setVisibleItems] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  
  const itemsPerPage = isMobile ? 8 : 12;
  const displayedTrips = trips.slice(0, visibleItems);
  const hasMore = visibleItems < trips.length;

  const loadMore = () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleItems(prev => Math.min(prev + itemsPerPage, trips.length));
      setIsLoading(false);
    }, 300);
  };

  if (trips.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-600">No trips found.</p>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedTrips.map((trip) => (
          <div key={trip.id} className="aspect-[3/4]">
            <TripCard {...trip} className="h-full" />
          </div>
        ))}
        
        {/* Loading skeleton */}
        {isLoading && Array.from({ length: itemsPerPage }).map((_, index) => (
          <div key={`loading-${index}`} className="aspect-[3/4] bg-gray-200 animate-pulse rounded-lg" />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <Button 
            onClick={loadMore}
            disabled={isLoading}
            className="bg-wanderon-primary hover:bg-wanderon-primary/90"
          >
            {isLoading ? 'Loading...' : `Load More (${trips.length - visibleItems} remaining)`}
          </Button>
        </div>
      )}
    </div>
  );
};

export default VirtualizedTripGrid;
