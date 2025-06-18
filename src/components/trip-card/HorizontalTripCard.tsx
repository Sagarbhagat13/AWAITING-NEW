
import { Link } from 'react-router-dom';
import { MapPin, Calendar, IndianRupee, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FavoriteButton } from './FavoriteButton';
import { Trip } from '@/data/popularTrips';

interface HorizontalTripCardProps {
  trip: Trip;
  className?: string;
  isFavorite?: boolean;
  onFavoriteToggle?: (id: string) => void;
  useDynamicRoutes?: boolean;
}

const HorizontalTripCard = ({
  trip,
  className,
  isFavorite = false,
  onFavoriteToggle,
  useDynamicRoutes = true, // Default to new dynamic routes
}: HorizontalTripCardProps) => {
  const {
    id,
    title,
    location,
    price,
    discount = 0,
    duration,
    image,
    rating,
    reviews,
  } = trip;

  const discountedPrice = price - (price * discount) / 100;
  const routePath = useDynamicRoutes ? `/itinerary/${id}` : `/trip/${id}`;
  
  return (
    <div
      className={cn(
        'group relative flex overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md',
        className
      )}
    >
      <Link to={routePath} className="block overflow-hidden w-1/3">
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {onFavoriteToggle && (
            <FavoriteButton
              isFavorite={isFavorite}
              onClick={() => onFavoriteToggle(id)}
            />
          )}
        </div>
      </Link>
      
      <div className="flex flex-1 flex-col p-4">
        <Link to={routePath} className="block">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <div className="mt-1 flex items-center text-sm text-gray-600">
          <MapPin className="mr-1 h-4 w-4 text-tripvidya-primary" />
          <span>{location}</span>
        </div>
        
        <div className="mt-1 flex items-center text-sm text-gray-600">
          <Calendar className="mr-1 h-4 w-4 text-tripvidya-primary" />
          <span>{duration}</span>
        </div>
        
        <div className="mt-2 flex items-center">
          <Star className="mr-1 h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="ml-1 text-xs text-gray-500">({reviews})</span>
        </div>
        
        <div className="mt-auto flex items-center">
          <IndianRupee className="h-4 w-4 text-tripvidya-primary" />
          <span className="text-lg font-bold">
            {Math.floor(discountedPrice).toLocaleString()}
          </span>
          
          {discount > 0 && (
            <>
              <span className="ml-2 text-sm text-gray-500 line-through">
                ₹{price.toLocaleString()}
              </span>
              <span className="ml-2 rounded bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-800">
                {discount}% OFF
              </span>
            </>
          )}
        </div>
        
        <Link
          to={routePath}
          className="mt-3 inline-flex items-center justify-center rounded-md bg-tripvidya-primary px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-tripvidya-primary/90 focus:outline-none focus:ring-2 focus:ring-tripvidya-primary focus:ring-offset-2"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default HorizontalTripCard;
