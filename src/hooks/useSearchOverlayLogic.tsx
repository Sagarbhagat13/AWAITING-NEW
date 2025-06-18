
import { useState, useEffect, useMemo, useCallback } from 'react';
import { Trip } from '@/data/popularTrips';
import { searchKeywords } from '@/data/searchKeywords';
import { useNavigate } from 'react-router-dom';

export const useSearchOverlayLogic = (allTrips: Trip[], onClose: () => void) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Trip[]>([]);
  const navigate = useNavigate();
  
  // Memoize popular keywords to prevent unnecessary re-renders
  const popularKeywords = useMemo(() => 
    searchKeywords
      .slice(0, 10)
      .map(k => k.keyword), 
    []
  );
  
  // Debounced search effect with proper cleanup
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm.length > 1) {
        const lowercaseSearch = searchTerm.toLowerCase();
        const filteredTrips = allTrips
          .filter(trip => 
            trip.title.toLowerCase().includes(lowercaseSearch) || 
            trip.location.toLowerCase().includes(lowercaseSearch)
          )
          .slice(0, 5);
        
        setSuggestions(filteredTrips);
      } else {
        setSuggestions([]);
      }
    }, 300); // 300ms debounce

    // Cleanup function
    return () => clearTimeout(timeoutId);
  }, [searchTerm, allTrips]);
  
  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm)}`);
      onClose();
      setSearchTerm('');
    }
  }, [searchTerm, navigate, onClose]);
  
  const handleKeywordClick = useCallback((keyword: string) => {
    setSearchTerm(keyword);
  }, []);
  
  const handleSuggestionClick = useCallback((trip: Trip) => {
    navigate(`/?search=${encodeURIComponent(trip.title)}`);
    onClose();
    setSearchTerm('');
  }, [navigate, onClose]);

  return {
    searchTerm,
    setSearchTerm,
    suggestions,
    popularKeywords,
    handleSearch,
    handleKeywordClick,
    handleSuggestionClick
  };
};
