
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar } from 'lucide-react';

interface ItineraryCardProps {
  id: string;
  title: string;
  image: string;
  duration: string;
  cities: string[];
  isCustomizable?: boolean;
  isSuggested?: boolean;
}

const ItineraryCard = ({ 
  id, 
  title, 
  image, 
  duration, 
  cities, 
  isCustomizable = true,
  isSuggested = false
}: ItineraryCardProps) => {
  // For customizable cards, always link to suggested-trip route
  const linkRoute = `/suggested-trip/${id}`;
  
  return (
    <Link to={linkRoute} className="block group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {isCustomizable && (
          <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Customizable
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          
          <div className="flex items-center mb-2">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{duration}</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{cities.join(' • ')}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItineraryCard;
