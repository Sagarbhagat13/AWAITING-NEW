
import { Trip } from '@/data/popularTrips';
import { popularTrips } from '@/data/popularTrips';
import { weekendTrips } from '@/data/weekendTrips';
import { familyTours } from '@/data/familyTours';
import { internationalTours } from '@/data/internationalTours';
import { honeymoonPackages } from '@/data/honeymoonPackages';
import { ladakhBikingTrips, ladakhSUVTrips } from '@/data/ladakhTrips';
import { offBeatTrips } from '@/data/offBeatTrips';
import { regionalTrips } from '@/data/regionalTrips';
import { monthlyTrips } from '@/data/monthlyTrips';

// Combine all trips from different sources
const getAllTrips = (): Trip[] => {
  const allTrips: Trip[] = [
    ...popularTrips,
    ...weekendTrips,
    ...familyTours,
    ...internationalTours,
    ...honeymoonPackages,
    ...ladakhBikingTrips,
    ...ladakhSUVTrips,
    ...offBeatTrips
  ];
  
  // Add trips from regional data
  regionalTrips.forEach(region => {
    allTrips.push(...region.trips);
  });
  
  // Add trips from monthly data
  monthlyTrips.forEach(month => {
    allTrips.push(...month.trips);
  });
  
  return allTrips;
};

// Get similar trips based on current trip
export const getSimilarTrips = (
  currentTripId: string,
  currentLocation: string,
  limit: number = 3
): Trip[] => {
  // Get all trips
  const allTrips = getAllTrips();
  
  // Filter out the current trip
  const otherTrips = allTrips.filter(trip => trip.id !== currentTripId);
  
  // Find trips from the same location
  const sameLocationTrips = otherTrips.filter(
    trip => trip.location.toLowerCase().includes(currentLocation.toLowerCase()) || 
           currentLocation.toLowerCase().includes(trip.location.toLowerCase())
  );
  
  // If we have enough trips from the same location, randomly select some
  if (sameLocationTrips.length >= limit) {
    return getRandomTrips(sameLocationTrips, limit);
  }
  
  // If not enough trips from the same location, add some random trips
  const randomTrips = getRandomTrips(
    otherTrips.filter(trip => !sameLocationTrips.includes(trip)),
    limit - sameLocationTrips.length
  );
  
  return [...sameLocationTrips, ...randomTrips];
};

// Get random trips from a list
const getRandomTrips = (trips: Trip[], limit: number): Trip[] => {
  const shuffled = [...trips].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
};
