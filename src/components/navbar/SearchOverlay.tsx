
import React, { memo, useMemo } from 'react';
import { popularTrips, weekendTrips, internationalTours, honeymoonPackages, ladakhBikingTrips, ladakhSUVTrips, offBeatTrips } from '@/data/tripData';
import SearchInputOverlay from './SearchInputOverlay';
import SearchSuggestionsOverlay from './SearchSuggestionsOverlay';
import PopularKeywords from './PopularKeywords';
import QuickLinks from './QuickLinks';
import { useSearchOverlayLogic } from '@/hooks/useSearchOverlayLogic';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = memo(({ isOpen, onClose }: SearchOverlayProps) => {
  // Memoize allTrips to prevent recreation on every render
  const allTrips = useMemo(() => [
    ...popularTrips,
    ...weekendTrips,
    ...internationalTours,
    ...honeymoonPackages,
    ...ladakhBikingTrips,
    ...ladakhSUVTrips,
    ...offBeatTrips
  ], []);
  
  const {
    searchTerm,
    setSearchTerm,
    suggestions,
    popularKeywords,
    handleSearch,
    handleKeywordClick,
    handleSuggestionClick
  } = useSearchOverlayLogic(allTrips, onClose);
  
  if (!isOpen) return null;
  
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 animate-fade-in">
      <div className="container mx-auto">
        <SearchInputOverlay 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
          onClose={onClose}
        />
        
        <SearchSuggestionsOverlay 
          suggestions={suggestions}
          handleSuggestionClick={handleSuggestionClick}
        />
        
        <PopularKeywords 
          keywords={popularKeywords}
          handleKeywordClick={handleKeywordClick}
        />
        
        <QuickLinks />
      </div>
    </div>
  );
});

SearchOverlay.displayName = 'SearchOverlay';

export default SearchOverlay;
