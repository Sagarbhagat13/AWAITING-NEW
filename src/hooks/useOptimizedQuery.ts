
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export interface OptimizedQueryOptions<T> extends Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'> {
  cacheTime?: number;
  staleTime?: number;
}

export const useOptimizedQuery = <T>(
  queryKey: string[],
  queryFn: () => Promise<T>,
  options: OptimizedQueryOptions<T> = {}
) => {
  const {
    cacheTime = 5 * 60 * 1000, // 5 minutes
    staleTime = 2 * 60 * 1000,  // 2 minutes
    ...restOptions
  } = options;

  return useQuery({
    queryKey,
    queryFn,
    gcTime: cacheTime,
    staleTime,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: (failureCount, error) => {
      // Don't retry on 4xx errors
      if (error && typeof error === 'object' && 'status' in error) {
        const status = (error as { status: number }).status;
        if (status >= 400 && status < 500) return false;
      }
      return failureCount < 3;
    },
    ...restOptions
  });
};

// Helper function to transform ItineraryData to Trip format
const transformItineraryToTrip = (itinerary: any) => ({
  id: itinerary.id,
  title: itinerary.title,
  location: itinerary.location,
  price: itinerary.price,
  discount: itinerary.discount || 0,
  duration: itinerary.duration,
  image: itinerary.images?.[0] || itinerary.coverImage || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
  rating: itinerary.rating,
  reviews: itinerary.reviews
});

// Pre-configured hooks for common queries
export const useItinerariesQuery = () => {
  return useOptimizedQuery(
    ['itineraries'],
    async () => {
      const { getAllItineraries } = await import('@/services/itineraryRegistry');
      return getAllItineraries();
    },
    {
      staleTime: 10 * 60 * 1000, // 10 minutes for relatively static data
    }
  );
};

export const useSearchQuery = (searchTerm: string) => {
  return useOptimizedQuery(
    ['search', searchTerm],
    async () => {
      const { searchTrips } = await import('@/services/searchService');
      const { getAllItineraries } = await import('@/services/itineraryRegistry');
      const allItineraries = getAllItineraries();
      
      // Transform ItineraryData to Trip format
      const tripsFormat = allItineraries.map(transformItineraryToTrip);
      
      return searchTrips(tripsFormat, searchTerm);
    },
    {
      enabled: searchTerm.length > 2,
      staleTime: 30 * 1000, // 30 seconds for search results
    }
  );
};
