
import { Share2, Heart, Star, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface TripHeaderProps {
  title: string;
  location: string;
  duration: string;
  rating: number;
  reviews: number;
  isFavorite: boolean;
  places?: string[];
  toggleFavorite: () => void;
  handleShare: () => void;
}

const TripHeader = ({ 
  title, 
  location, 
  duration, 
  rating, 
  reviews, 
  isFavorite, 
  places,
  toggleFavorite, 
  handleShare 
}: TripHeaderProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <MapPin className="h-4 w-4 text-tripvidya-primary mr-1" />
        <span>{location}</span>
      </div>
      
      <h1 className="text-3xl font-bold text-tripvidya-dark mb-3">{title}</h1>
      
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 text-gray-500 mr-1" />
          <span className="text-sm text-gray-600">{duration}</span>
        </div>
        
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-xs text-gray-500 ml-1">({reviews} reviews)</span>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-gray-600 border-gray-300 hover:bg-gray-100"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4 mr-1" />
            Share
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className={isFavorite ? "text-red-500 border-red-500" : "text-gray-600 border-gray-300"}
            onClick={toggleFavorite}
          >
            <Heart className={`h-4 w-4 mr-1 ${isFavorite ? "fill-red-500" : ""}`} />
            {isFavorite ? 'Saved' : 'Save'}
          </Button>
        </div>
      </div>
      
      {places && places.length > 0 && (
        <div className="mt-2">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Places Covered:</h3>
          <div className="flex flex-wrap gap-2">
            {places.map((place) => (
              <div 
                key={place} 
                className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm"
              >
                <MapPin className="h-3 w-3 text-tripvidya-primary mr-1" />
                <span>{place}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TripHeader;
