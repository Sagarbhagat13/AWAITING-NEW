
import { MapPin, Calendar, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface TripCardContentProps {
  title: string;
  location: string;
  duration: string;
  price: number;
  discountedPrice: number;
  discount?: number;
  rating?: number;
  reviews?: number;
  variant?: 'default' | 'horizontal' | 'compact';
  stateHighlight?: boolean;
  honeymoonSpecial?: boolean;
  international?: boolean;
  familySpecial?: boolean;
  offbeat?: boolean;
}

export const TripCardContent = ({
  title,
  location,
  duration,
  price,
  discountedPrice,
  discount = 0,
  rating = 0,
  reviews = 0,
  variant = 'default',
  stateHighlight,
  honeymoonSpecial,
  international,
  familySpecial,
  offbeat
}: TripCardContentProps) => {
  const getColorClass = () => {
    if (familySpecial) return "text-green-700";
    if (stateHighlight) return "text-amber-800";
    if (honeymoonSpecial) return "text-rose-700";
    if (international) return "text-blue-800";
    if (offbeat) return "text-teal-700";
    return "text-tripvidya-dark";
  };

  if (variant === 'compact') {
    return (
      <div className="p-3">
        <div className="flex items-center mb-1">
          <MapPin className="h-3 w-3 text-tripvidya-primary mr-1" />
          <span className="text-xs text-gray-600 truncate">{location}</span>
        </div>
        
        <h3 className="text-sm font-bold text-tripvidya-dark mb-2 truncate">{title}</h3>
        
        <div className="flex justify-between items-center">
          <div className="flex items-baseline">
            <span className="text-sm font-bold text-tripvidya-primary">₹{discountedPrice.toLocaleString()}</span>
            {discount > 0 && (
              <span className="text-xs text-gray-500 line-through ml-1">₹{price.toLocaleString()}</span>
            )}
          </div>
          
          <div className="flex items-center">
            <Calendar className="h-3 w-3 text-gray-500 mr-1" />
            <span className="text-xs text-gray-600">{duration}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center mb-2">
          <MapPin className={cn(
            "h-4 w-4 mr-1",
            familySpecial ? "text-green-500" :
            stateHighlight ? "text-amber-500" : 
            honeymoonSpecial ? "text-rose-500" : 
            international ? "text-blue-500" :
            offbeat ? "text-teal-500" : "text-tripvidya-primary"
          )} />
          <span className="text-sm text-gray-600">{location}</span>
        </div>
        
        <h3 className={cn(
          "text-lg font-bold mb-2",
          getColorClass()
        )}>{title}</h3>
        
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{duration}</span>
          </div>
          {rating > 0 && (
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
              <span className="text-sm text-gray-600">{rating}</span>
              {reviews > 0 && (
                <span className="text-xs text-gray-500 ml-1">({reviews})</span>
              )}
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="flex items-baseline mb-2">
          <span className="text-lg font-bold text-tripvidya-primary">₹{discountedPrice.toLocaleString()}</span>
          {discount > 0 && (
            <span className="text-sm text-gray-500 line-through ml-2">₹{price.toLocaleString()}</span>
          )}
        </div>
        
        <Button variant="default" className={cn(
          "w-full",
          familySpecial ? "bg-green-500 hover:bg-green-600" :
          stateHighlight ? "bg-amber-500 hover:bg-amber-600" : 
          honeymoonSpecial ? "bg-rose-500 hover:bg-rose-600" : 
          international ? "bg-blue-500 hover:bg-blue-600" :
          offbeat ? "bg-teal-500 hover:bg-teal-600" : "bg-tripvidya-primary hover:bg-tripvidya-primary/90"
        )}>
          View Details
        </Button>
      </div>
    </div>
  );
};
