
import React, { useEffect, useRef } from 'react';
import { Trip } from '@/data/popularTrips';

interface SearchSuggestionsProps {
  showSuggestions: boolean;
  filteredSuggestions: Trip[];
  handleSuggestionClick: (suggestion: Trip) => void;
  activeIndex: number;
}

const SearchSuggestions = ({
  showSuggestions,
  filteredSuggestions,
  handleSuggestionClick,
  activeIndex
}: SearchSuggestionsProps) => {
  const suggestionsRef = useRef<HTMLUListElement>(null);
  
  useEffect(() => {
    // Scroll active suggestion into view when navigating with keyboard
    if (activeIndex >= 0 && suggestionsRef.current) {
      const activeElement = suggestionsRef.current.children[activeIndex] as HTMLElement;
      if (activeElement) {
        activeElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [activeIndex]);

  if (!showSuggestions || filteredSuggestions.length === 0) {
    return null;
  }

  return (
    <div className="absolute w-full mt-1 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto z-50 border border-gray-200 animate-fade-in">
      <ul ref={suggestionsRef}>
        {filteredSuggestions.map((trip, index) => (
          <li 
            key={trip.id}
            className={`px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center border-b last:border-0 border-gray-100 transition-colors ${activeIndex === index ? 'bg-gray-100' : ''}`}
            onClick={() => handleSuggestionClick(trip)}
          >
            <div className="w-12 h-12 rounded-md overflow-hidden mr-3 flex-shrink-0">
              <img 
                src={trip.image} 
                alt={trip.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">{trip.title}</p>
              <p className="text-sm text-gray-500">{trip.location} • {trip.duration}</p>
            </div>
            <div className="text-wanderon-primary font-medium">
              ₹{trip.price.toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSuggestions;
