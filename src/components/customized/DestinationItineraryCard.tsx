
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface DestinationItineraryCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  className?: string;
}

const DestinationItineraryCard = ({
  id,
  title,
  location,
  image,
  duration,
  price,
  rating,
  reviews,
  className,
}: DestinationItineraryCardProps) => {
  return (
    <Link 
      to={`/custom-trip/${id}`} 
      className={cn("block group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1", className)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-purple-400 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
          Customizable
        </div>
      </div>
      <div className="p-4 bg-white">
        <div className="flex items-center mb-1">
          <MapPin className="h-4 w-4 mr-1 text-purple-500" />
          <span className="text-sm text-gray-600">{location}</span>
        </div>
        
        <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">{title}</h3>
        
        <div className="flex items-center text-amber-500 mb-3">
          <Star className="h-4 w-4 fill-amber-500 mr-1" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-xs text-gray-500 ml-1">({reviews} reviews)</span>
        </div>
        
        <div className="flex items-center mb-3">
          <Calendar className="h-4 w-4 text-gray-500 mr-1" />
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-400">Customizable Trip</span>
          <span className="text-lg font-bold text-purple-600">₹{price.toLocaleString()}</span>
        </div>
      </div>
    </Link>
  );
};

export default DestinationItineraryCard;
