
import React, { useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  clearSearch: () => void;
}

const SearchInput = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  clearSearch
}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form 
      onSubmit={handleSearch} 
      className="bg-white/95 rounded-xl shadow-2xl overflow-hidden animate-fade-in backdrop-blur-sm border border-gray-200 transition-all duration-300 focus-within:shadow-wanderon-primary/20"
    >
      <div className="flex items-center px-5 py-2">
        <Search className="h-5 w-5 text-tripvidya-primary mr-3" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search trips, destinations, activities like 'Manali', 'Beach', 'Trekking'..."
          className="flex-1 py-3 border-none focus-visible:ring-0 text-base placeholder:text-gray-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <Button 
            type="button" 
            variant="ghost" 
            className="p-1 h-auto" 
            onClick={clearSearch}
          >
            <X className="h-4 w-4 text-gray-500" />
          </Button>
        )}
        <Button 
          type="submit"
          className="bg-tripvidya-primary hover:bg-tripvidya-primary/90 ml-2 transition-all duration-300 transform hover:scale-105"
        >
          <span className="hidden sm:inline mr-2">Search</span>
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default SearchInput;
