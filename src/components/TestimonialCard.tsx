
import { useState } from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface TestimonialCardProps {
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  tripName?: string;
  isGoogleReview?: boolean;
  className?: string;
}

const TestimonialCard = ({
  name,
  location,
  image,
  rating,
  text,
  tripName,
  isGoogleReview,
  className,
}: TestimonialCardProps) => {
  const [imgError, setImgError] = useState(false);
  const fallbackImage = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80";

  // Generate star ratings
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          )}
        />
      );
    }
    return stars;
  };

  return (
    <div className={cn(
      "bg-white rounded-lg p-6 shadow-md",
      className
    )}>
      <div className="flex items-center mb-4">
        {/* User info section */}
        <div className="mr-4">
          <img
            src={imgError ? fallbackImage : image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
            onError={() => setImgError(true)}
          />
        </div>
        <div className="flex-grow">
          <h4 className="font-semibold text-wanderon-dark">{name}</h4>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
        {isGoogleReview && (
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Review"
            className="h-6 w-6"
          />
        )}
      </div>
      
      {/* Rating */}
      <div className="flex mb-3">
        {renderStars()}
      </div>
      
      {/* Review text */}
      <p className="text-gray-700 mb-3 line-clamp-4">{text}</p>
      
      {/* Trip name */}
      {tripName && (
        <p className="text-sm font-medium text-wanderon-primary">Trip: {tripName}</p>
      )}
    </div>
  );
};

export default TestimonialCard;
