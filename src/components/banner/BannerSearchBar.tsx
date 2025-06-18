
import React, { useEffect, useRef } from 'react';
import { Trip } from '@/data/popularTrips';
import SearchSuggestions from './SearchSuggestions';
import SearchInput from './SearchInput';
import { useSearchLogic } from '@/hooks/useSearchLogic';

interface BannerSearchBarProps {
  onSearch: (query: string) => void;
  allTrips: Trip[];
}

const BannerSearchBar = ({ onSearch, allTrips }: BannerSearchBarProps) => {
  const searchInputRef = useRef<HTMLDivElement>(null);
  
  const {
    searchQuery,
    setSearchQuery,
    showSuggestions,
    setShowSuggestions,
    filteredSuggestions,
    activeIndex,
    setActiveIndex,
    handleKeyDown
  } = useSearchLogic(allTrips);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowSuggestions]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setShowSuggestions(false);
      setSearchQuery(''); // Auto clear the search bar after search
    }
  };
  
  const handleSuggestionClick = (suggestion: Trip) => {
    const searchTerm = suggestion.title;
    setSearchQuery(''); // Auto clear when suggestion is clicked
    onSearch(searchTerm);
    setShowSuggestions(false);
  };
  
  const clearSearch = () => {
    setSearchQuery('');
    setShowSuggestions(false);
  };
  
  const keyboardNavigation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    handleKeyDown(e);
    
    // Enter key handling
    if (e.key === 'Enter' && activeIndex >= 0 && showSuggestions) {
      e.preventDefault();
      handleSuggestionClick(filteredSuggestions[activeIndex]);
    }
  };
  
  return (
    <div ref={searchInputRef} className="w-full max-w-2xl relative">
      <SearchInput 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        clearSearch={clearSearch}
      />
      
      <div onKeyDown={keyboardNavigation}>
        <SearchSuggestions
          showSuggestions={showSuggestions}
          filteredSuggestions={filteredSuggestions}
          handleSuggestionClick={handleSuggestionClick}
          activeIndex={activeIndex}
        />
      </div>
    </div>
  );
};

export default BannerSearchBar;
