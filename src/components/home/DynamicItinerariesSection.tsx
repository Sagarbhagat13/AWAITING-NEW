
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getAllItineraries } from '@/services/itineraryRegistry';
import DefaultTripCard from '@/components/trip-card/DefaultTripCard';
import { useTripActions } from '@/hooks/use-trip-actions';

const DynamicItinerariesSection = () => {
  const { favorites, toggleFavorite } = useTripActions();
  
  // Get all itineraries dynamically from registry
  const allItineraries = getAllItineraries();
  
  // Convert itineraries to trip format for TripCard
  const trips = allItineraries.map(itinerary => ({
    id: itinerary.id,
    title: itinerary.title,
    location: itinerary.location,
    price: itinerary.price,
    discount: itinerary.discount || 0,
    duration: itinerary.duration.split('/')[0].trim(), // Convert "5 Days / 4 Nights" to "5 Days"
    image: itinerary.images?.[0] || itinerary.coverImage,
    rating: itinerary.rating,
    reviews: itinerary.reviews
  }));
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Discover Our Itineraries</h2>
            <p className="text-sm text-gray-600 mt-1">
              {trips.length} trips automatically loaded • Dynamic system active
            </p>
          </div>
          <Link
            to="/popular-trips"
            className="flex items-center text-tripvidya-primary hover:underline"
          >
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {trips.map((trip) => (
            <DefaultTripCard
              key={trip.id}
              trip={trip}
              isFavorite={favorites.includes(trip.id)}
              onFavoriteToggle={toggleFavorite}
              useDynamicRoutes={true}
            />
          ))}
        </div>
        
        {/* Development info - remove in production */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Dev Info:</strong> Dynamic system loaded {trips.length} itineraries automatically. 
              Add new .ts files to /src/data/itineraries/ and they'll appear here automatically!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DynamicItinerariesSection;
