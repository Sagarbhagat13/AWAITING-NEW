
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReviewProps {
  review: {
    name: string;
    location: string;
    image: string;
    rating: number;
    text: string;
  };
  isActive: boolean;
}

export const renderStars = (rating: number) => {
  return Array(5).fill(0).map((_, i) => (
    <Star
      key={i}
      className={cn(
        "h-3 w-3",
        i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
      )}
    />
  ));
};

const ReviewCard = ({ review, isActive }: ReviewProps) => {
  return (
    <div 
      className={cn(
        "review-card p-3 rounded-lg border border-gray-100 transition-all",
        isActive ? "bg-gray-50" : "bg-white"
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <img 
          src={review.image} 
          alt={review.name} 
          className="h-8 w-8 rounded-full object-cover"
        />
        <div>
          <p className="text-xs font-medium text-gray-800">{review.name}</p>
          <p className="text-xs text-gray-500">{review.location}</p>
        </div>
      </div>
      <div className="flex mb-1">{renderStars(review.rating)}</div>
      <p className="text-xs text-gray-700 line-clamp-2">{review.text}</p>
    </div>
  );
};

export default ReviewCard;
