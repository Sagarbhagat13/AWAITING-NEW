
import { cn } from "@/lib/utils";
import { Hotel } from "lucide-react";

export interface HotelCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
  price?: number;
  rating?: number;
  className?: string;
}

const HotelCard = ({ id, name, location, image, price, rating, className }: HotelCardProps) => {
  return (
    <div 
      className={cn(
        "relative group overflow-hidden rounded-lg h-32 trip-card-shadow transition-all",
        className
      )}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      
      {/* Minimalistic design as requested */}
      <div className="absolute bottom-0 left-0 w-full p-2.5 text-white">
        <h3 className="font-medium text-sm truncate text-left">{name}</h3>
        <p className="text-xs text-gray-200 truncate">{location}</p>
      </div>
    </div>
  );
};

export default HotelCard;
