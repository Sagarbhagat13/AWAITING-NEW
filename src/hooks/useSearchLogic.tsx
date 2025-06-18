
import { useState, useEffect, useRef } from 'react';
import { Trip } from '@/data/popularTrips';
import { searchKeywords } from '@/data/searchKeywords';

export const useSearchLogic = (allTrips: Trip[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<Trip[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  
  // Map of all trip IDs to their corresponding Trip object for quick lookup
  const tripMap = useRef<Record<string, Trip>>({});
  
  // Initialize the tripMap on component mount
  useEffect(() => {
    const map: Record<string, Trip> = {};
    allTrips.forEach(trip => {
      map[trip.id] = trip;
    });
    tripMap.current = map;
  }, [allTrips]);
  
  useEffect(() => {
    if (searchQuery.trim() !== '') {
      const searchTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 0);
      
      // First, filter trips directly based on content match
      const directMatches = allTrips.filter(trip => {
        const title = trip.title.toLowerCase();
        const location = trip.location.toLowerCase();
        const duration = trip.duration.toLowerCase();
        const price = trip.price.toString().toLowerCase();
        const discount = trip.discount ? trip.discount.toString().toLowerCase() : '';
        
        const allContent = `${title} ${location} ${duration} ${price} ${discount}`;
        
        return searchTerms.some(term => allContent.includes(term));
      });
      
      // Then, find keyword matches using our searchKeywords data
      const keywordMatches: Trip[] = [];
      
      searchTerms.forEach(term => {
        // Check for exact keyword matches
        const exactKeywordMatch = searchKeywords.find(k => k.keyword.toLowerCase() === term);
        if (exactKeywordMatch) {
          exactKeywordMatch.tripIds.forEach(id => {
            if (tripMap.current[id] && !keywordMatches.includes(tripMap.current[id])) {
              keywordMatches.push(tripMap.current[id]);
            }
          });
        }
        
        // Check for matches in related terms
        searchKeywords.forEach(keyword => {
          if (keyword.relatedTerms.some(relatedTerm => relatedTerm.toLowerCase().includes(term))) {
            keyword.tripIds.forEach(id => {
              if (tripMap.current[id] && !keywordMatches.includes(tripMap.current[id])) {
                keywordMatches.push(tripMap.current[id]);
              }
            });
          }
        });
      });
      
      // Combine direct matches and keyword matches, remove duplicates
      const allMatches = Array.from(new Set([...directMatches, ...keywordMatches]));
      
      // Limit to 6 suggestions for UI
      const limitedMatches = allMatches.slice(0, 6);
      
      setFilteredSuggestions(limitedMatches);
      setShowSuggestions(limitedMatches.length > 0);
    } else {
      setShowSuggestions(false);
      setFilteredSuggestions([]);
    }
    // Reset active index when search query changes
    setActiveIndex(-1);
  }, [searchQuery, allTrips]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions) return;
    
    // Arrow down
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prevIndex => 
        prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
    // Arrow up
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
    }
    // Escape
    else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    showSuggestions,
    setShowSuggestions,
    filteredSuggestions,
    activeIndex,
    setActiveIndex,
    handleKeyDown
  };
};
