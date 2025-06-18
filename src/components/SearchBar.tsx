
import { useState } from 'react';
import { MapPin, Calendar, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { searchKeywords } from '@/data/searchKeywords';

interface SearchBarProps {
  onSearch: (query: string, date: string) => void;
  className?: string;
  variant?: 'default' | 'expanded';
}

const SearchBar = ({
  onSearch,
  className,
  variant = 'default',
}: SearchBarProps) => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [isExpanded, setIsExpanded] = useState(variant === 'expanded');
  
  // Get a sample of popular search terms
  const popularSearchTerms = [
    "adventure", "beach", "family", "budget", "weekend", 
    "honeymoon", "luxury", "cultural", "monsoon", "international"
  ];
  
  const getPlaceholderText = () => {
    const randomTerms = popularSearchTerms
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .join(', ');
    return `Try searching for ${randomTerms}...`;
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(destination, date);
  };
  
  const clearSearch = () => {
    setDestination('');
    setDate('');
  };
  
  if (variant === 'expanded' || isExpanded) {
    return (
      <div className={cn(
        "w-full bg-white rounded-lg shadow-lg p-4",
        className
      )}>
        <form onSubmit={handleSearch}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-wanderon-primary" />
              </div>
              <input
                type="text"
                placeholder={getPlaceholderText()}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wanderon-primary focus:border-transparent"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
              {destination && (
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setDestination('')}
                >
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              )}
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-wanderon-primary" />
              </div>
              <input
                type="text"
                placeholder="When do you want to go?"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wanderon-primary focus:border-transparent"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              {date && (
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setDate('')}
                >
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              )}
            </div>
            
            <div className="flex space-x-2">
              <Button 
                type="submit" 
                className="flex-1 bg-wanderon-primary hover:bg-wanderon-primary/90"
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              
              <Button 
                type="button" 
                variant="outline"
                onClick={clearSearch}
              >
                Clear
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  
  // Default compact version
  return (
    <div className={cn(
      "w-full max-w-md",
      className
    )}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder={getPlaceholderText()}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wanderon-primary focus:border-transparent"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          onFocus={() => setIsExpanded(true)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
