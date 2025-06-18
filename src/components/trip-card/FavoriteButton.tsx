
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface FavoriteButtonProps {
  isFavorite?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export const FavoriteButton = ({ isFavorite = false, onClick }: FavoriteButtonProps) => {
  const [isLocalFavorite, setIsLocalFavorite] = useState(false);
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onClick) {
      onClick(e);
    } else {
      // Local state fallback if no onClick provided
      setIsLocalFavorite(!isLocalFavorite);
    }
  };

  // Use provided isFavorite prop if available, otherwise use local state
  const isFav = onClick ? isFavorite : isLocalFavorite;

  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-3 right-3 bg-white/80 rounded-full p-1 hover:bg-white"
      onClick={handleClick}
    >
      <Heart className={cn("h-5 w-5", isFav ? "fill-red-500 text-red-500" : "text-gray-600")} />
    </Button>
  );
};
