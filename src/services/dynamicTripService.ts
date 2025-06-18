
import { getItineraryById } from '@/services/itineraryRegistry';
import { getTripData } from './tripService';

// Get trip data by ID using the enhanced dynamic registry first, then fallback to trip service
export const getDynamicTripData = (id: string) => {
  // First try the dynamic itinerary registry
  const itinerary = getItineraryById(id);
  if (itinerary) {
    return itinerary;
  }
  
  // Fallback to the existing trip service
  return getTripData(id);
};
