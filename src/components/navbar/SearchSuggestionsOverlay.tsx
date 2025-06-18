
import React from 'react';
import { Trip } from '@/data/popularTrips';

interface SearchSuggestionsOverlayProps {
  suggestions: Trip[];
  handleSuggestionClick: (trip: Trip) => void;
}

const SearchSuggestionsOverlay = ({
  suggestions,
  handleSuggestionClick
}: SearchSuggestionsOverlayProps) => {
  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div className="mt-2 bg-white border border-gray-200 rounded-lg overflow-hidden">
      {suggestions.map((trip) => (
        <div 
          key={trip.id}
          className="p-2 hover:bg-gray-50 cursor-pointer flex items-center border-b last:border-0 border-gray-100"
          onClick={() => handleSuggestionClick(trip)}
        >
          <div className="w-10 h-10 rounded overflow-hidden mr-3">
            <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-medium">{trip.title}</p>
            <p className="text-xs text-gray-500">{trip.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestionsOverlay;
