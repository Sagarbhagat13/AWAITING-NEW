
import { Trip } from '@/data/popularTrips';
import { getTripData } from '@/services/tripService';

/**
 * Search trips by keyword across all trip data including itineraries
 * @param allTrips Array of all trip objects
 * @param query Search query string
 * @returns Filtered array of trips that match the search criteria
 */
export const searchTrips = (allTrips: Trip[], query: string): Trip[] => {
  if (!query.trim()) return [];
  
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  
  return allTrips.filter(trip => {
    // Basic trip details
    const title = trip.title.toLowerCase();
    const location = trip.location.toLowerCase();
    const duration = trip.duration.toLowerCase();
    const price = trip.price.toString().toLowerCase();
    const discount = trip.discount ? trip.discount.toString().toLowerCase() : '';
    
    // Check if the trip has itinerary data
    const tripData = getTripData(trip.id);
    let itineraryContent = '';
    
    if (tripData && tripData.itinerary) {
      // Extract and combine all itinerary text
      itineraryContent = tripData.itinerary.map(day => {
        return `${day.title} ${day.description} ${day.activities.join(' ')} ${day.meals.join(' ')} ${day.accommodation}`;
      }).join(' ').toLowerCase();
    }
    
    // Extract and combine inclusion/exclusion data if available
    let inclusionsContent = '';
    let exclusionsContent = '';
    
    if (tripData) {
      if (tripData.inclusions) {
        inclusionsContent = tripData.inclusions.join(' ').toLowerCase();
      }
      if (tripData.exclusions) {
        exclusionsContent = tripData.exclusions.join(' ').toLowerCase();
      }
    }
    
    // Combine all searchable content
    const allContent = `${title} ${location} ${duration} ${price} ${discount} ${itineraryContent} ${inclusionsContent} ${exclusionsContent}`;
    
    // Check if any search term is found in the content
    return searchTerms.some(term => allContent.includes(term));
  });
};
