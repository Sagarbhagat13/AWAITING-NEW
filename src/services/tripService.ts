
import { getItineraryById } from '@/services/itineraryRegistry';
import { popularTrips } from '@/data/popularTrips';
import { honeymoonPackages } from '@/data/honeymoonPackages';
import { familyTours } from '@/data/familyTours';
import { weekendTrips } from '@/data/weekendTrips';
import { ladakhBikingTrips, ladakhSUVTrips } from '@/data/ladakhTrips';

// Combine Ladakh trips arrays
const ladakhTrips = [...ladakhBikingTrips, ...ladakhSUVTrips];

// Function to find trip data from various sources
const findTripInCollections = (id: string) => {
  const collections = [
    popularTrips,
    honeymoonPackages,
    familyTours,
    weekendTrips,
    ladakhTrips
  ];
  
  for (const collection of collections) {
    const trip = collection.find(trip => trip.id === id);
    if (trip) return trip;
  }
  return null;
};

// Enhanced function to generate basic itinerary from trip card data
const generateBasicItinerary = (trip: any) => {
  const destinationSpecificContent = {
    goa: {
      description: `Experience the sun, sand, and vibrant culture of Goa with our ${trip.title}. Enjoy pristine beaches, water sports, and the laid-back coastal lifestyle.`,
      highlights: ['Beautiful beaches and water sports', 'Portuguese heritage sites', 'Vibrant nightlife and beach shacks', 'Spice plantations and local markets'],
      activities: ['Beach relaxation', 'Water sports', 'Heritage sightseeing', 'Local market exploration']
    },
    kerala: {
      description: `Discover God's Own Country with our ${trip.title}. Experience backwaters, hill stations, and rich cultural heritage.`,
      highlights: ['Backwater cruises in houseboats', 'Tea plantation visits', 'Ayurvedic treatments', 'Traditional Kathakali performances'],
      activities: ['Houseboat cruise', 'Tea garden tours', 'Spice plantation visits', 'Cultural performances']
    },
    manali: {
      description: `Experience the breathtaking beauty of the Himalayas with our ${trip.title}. Perfect for adventure enthusiasts and nature lovers.`,
      highlights: ['Snow-capped mountain views', 'Adventure activities', 'Local Himachali culture', 'Scenic valley landscapes'],
      activities: ['Mountain trekking', 'Paragliding', 'River rafting', 'Local sightseeing']
    }
  };

  const locationKey = trip.location.toLowerCase();
  const specificContent = destinationSpecificContent[locationKey] || destinationSpecificContent.manali;

  return {
    id: trip.id,
    title: trip.title,
    location: trip.location,
    price: trip.price,
    discount: trip.discount || 0,
    duration: trip.duration,
    rating: trip.rating || 4.5,
    reviews: trip.reviews || 50,
    description: specificContent.description,
    highlights: specificContent.highlights,
    inclusions: [
      'Accommodation as per itinerary',
      'Daily breakfast',
      'Transportation in AC vehicle',
      'Professional tour guide',
      'All entry fees and permits',
      'All applicable taxes',
    ],
    exclusions: [
      'Personal expenses',
      'Travel insurance',
      'Meals not mentioned in inclusions',
      'Any additional activities',
      'Tips and gratuities',
    ],
    images: trip.image ? [trip.image] : [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Welcome',
        description: `Begin your ${trip.title} journey with a warm welcome.`,
        activities: ['Arrival and pickup', 'Check-in at accommodation', 'Welcome briefing', ...specificContent.activities.slice(0, 2)],
        meals: ['Welcome drinks'],
        accommodation: 'Hotel/Resort as per package',
      },
      {
        day: 2,
        title: 'Exploration and Activities',
        description: 'Discover the beauty and culture of your destination.',
        activities: ['Morning sightseeing', 'Visit major attractions', ...specificContent.activities.slice(2)],
        meals: ['Breakfast'],
        accommodation: 'Hotel/Resort as per package',
      }
    ],
    faqs: [
      {
        question: 'What is included in this package?',
        answer: 'The package includes accommodation, breakfast, transportation, guide, and all entry fees as mentioned in the inclusions.',
      },
      {
        question: 'Is this trip suitable for families?',
        answer: 'Yes, this trip is designed to be suitable for travelers of all ages including families with children.',
      },
    ],
    placesCovered: [trip.location]
  };
};

export const getTripData = (id: string) => {
  // First, try to get detailed itinerary data from the dynamic registry
  const detailedItinerary = getItineraryById(id);
  if (detailedItinerary) {
    return detailedItinerary;
  }
  
  // If no detailed itinerary, try to find basic trip data and generate itinerary
  const basicTrip = findTripInCollections(id);
  if (basicTrip) {
    return generateBasicItinerary(basicTrip);
  }
  
  // Fallback for unknown trip IDs
  return {
    id: id,
    title: 'Trip Not Found',
    location: 'Unknown',
    price: 0,
    discount: 0,
    duration: 'N/A',
    rating: 0,
    reviews: 0,
    description: 'This trip could not be found. Please try another trip or contact us for assistance.',
    highlights: ['Trip details not available'],
    inclusions: ['Please contact us for package details'],
    exclusions: ['Details not available'],
    images: ['https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80'],
    itinerary: [
      {
        day: 1,
        title: 'Trip Not Found',
        description: 'This trip information is not available.',
        activities: ['Contact us for trip details'],
        meals: ['Not specified'],
        accommodation: 'Not specified',
      }
    ],
    faqs: [
      {
        question: 'Why can\'t I see this trip?',
        answer: 'This trip may have been removed or the link may be incorrect. Please contact us or browse our available trips.',
      }
    ],
    placesCovered: ['Unknown']
  };
};
