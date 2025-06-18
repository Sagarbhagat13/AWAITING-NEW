
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Star, MapPin, Clock } from 'lucide-react';
import { CardBadge } from './CardBadge';
import { FavoriteButton } from './FavoriteButton';

interface Trip {
  id: string;
  title: string;
  location: string;
  price: number;
  discount?: number;
  duration: string;
  image: string;
  rating?: number;
  reviews?: number;
  stateHighlight?: boolean;
  honeymoonSpecial?: boolean;
  international?: boolean;
  familySpecial?: boolean;
  bikingPackage?: boolean;
  suvPackage?: boolean;
  longWeekend?: boolean;
  offbeat?: boolean;
}

interface DefaultTripCardProps {
  trip: Trip;
  className?: string;
  isFavorite?: boolean;
  onFavoriteToggle?: (tripId: string) => void;
  useDynamicRoutes?: boolean;
}

const DefaultTripCard = ({ 
  trip, 
  className, 
  isFavorite = false, 
  onFavoriteToggle,
  useDynamicRoutes = false
}: DefaultTripCardProps) => {
  const discountedPrice = trip.discount 
    ? trip.price - (trip.price * trip.discount) / 100 
    : trip.price;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onFavoriteToggle) {
      onFavoriteToggle(trip.id);
    }
  };

  // Always use dynamic routes for itinerary pages
  const tripLink = `/itinerary/${trip.id}`;

  return (
    <Link to={tripLink}>
      <div className={cn("group relative overflow-hidden rounded-lg trip-card-shadow transition-all hover:shadow-lg", className)}>
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={trip.image} 
            alt={trip.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          {/* Badge */}
          <CardBadge 
            discount={trip.discount}
            stateHighlight={trip.stateHighlight}
            honeymoonSpecial={trip.honeymoonSpecial}
            international={trip.international}
            familySpecial={trip.familySpecial}
            bikingPackage={trip.bikingPackage}
            suvPackage={trip.suvPackage}
            longWeekend={trip.longWeekend}
            offbeat={trip.offbeat}
          />
          
          {/* Favorite Button */}
          <FavoriteButton
            isFavorite={isFavorite}
            onClick={handleFavoriteClick}
          />
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-gray-900 line-clamp-2 group-hover:text-tripvidya-primary transition-colors">
            {trip.title}
          </h3>
          
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1 text-tripvidya-primary" />
            <span className="text-sm">{trip.location}</span>
          </div>
          
          <div className="flex items-center text-gray-600 mb-3">
            <Clock className="h-4 w-4 mr-1 text-tripvidya-primary" />
            <span className="text-sm">{trip.duration}</span>
          </div>
          
          {trip.rating && (
            <div className="flex items-center mb-3">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{trip.rating}</span>
              {trip.reviews && (
                <span className="text-xs text-gray-500 ml-1">({trip.reviews} reviews)</span>
              )}
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              {trip.discount && trip.discount > 0 ? (
                <>
                  <span className="text-xl font-bold text-gray-900">₹{discountedPrice.toLocaleString()}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₹{trip.price.toLocaleString()}</span>
                </>
              ) : (
                <span className="text-xl font-bold text-gray-900">₹{trip.price.toLocaleString()}</span>
              )}
            </div>
            <span className="text-xs text-gray-500">per person</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DefaultTripCard;
