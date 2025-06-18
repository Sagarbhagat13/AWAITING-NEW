
import { Trip } from '@/data/popularTrips';
import { dataLoader } from './dataLoader';

interface SearchCache {
  [query: string]: {
    results: Trip[];
    timestamp: number;
  };
}

interface SearchIndex {
  [tripId: string]: string;
}

class OptimizedSearchService {
  private cache: SearchCache = {};
  private searchIndex: SearchIndex = {};
  private isIndexBuilt = false;
  private readonly CACHE_DURATION = 2 * 60 * 1000; // 2 minutes
  private debounceTimers: Map<string, NodeJS.Timeout> = new Map();

  private async buildSearchIndex(): Promise<void> {
    if (this.isIndexBuilt) return;

    try {
      const allTrips = await dataLoader.getAllTrips();
      
      allTrips.forEach(trip => {
        const searchableText = [
          trip.title,
          trip.location,
          trip.duration,
          trip.price.toString(),
          trip.discount?.toString() || '',
        ].join(' ').toLowerCase();
        
        this.searchIndex[trip.id] = searchableText;
      });
      
      this.isIndexBuilt = true;
    } catch (error) {
      console.error('Failed to build search index:', error);
    }
  }

  private async performSearch(query: string): Promise<Trip[]> {
    if (!query.trim()) return [];

    // Build index if not already built
    await this.buildSearchIndex();

    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    const allTrips = await dataLoader.getAllTrips();
    
    return allTrips.filter(trip => {
      const searchableText = this.searchIndex[trip.id];
      return searchTerms.some(term => searchableText.includes(term));
    });
  }

  async searchTrips(query: string): Promise<Trip[]> {
    const trimmedQuery = query.trim().toLowerCase();
    
    if (!trimmedQuery) return [];

    // Check cache first
    const cached = this.cache[trimmedQuery];
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return cached.results;
    }

    // Perform search
    const results = await this.performSearch(trimmedQuery);
    
    // Cache results
    this.cache[trimmedQuery] = {
      results,
      timestamp: Date.now()
    };

    return results;
  }

  searchTripsDebounced(
    query: string, 
    callback: (results: Trip[]) => void, 
    delay: number = 300
  ): void {
    const timerId = this.debounceTimers.get('search');
    
    if (timerId) {
      clearTimeout(timerId);
    }

    const newTimerId = setTimeout(async () => {
      try {
        const results = await this.searchTrips(query);
        callback(results);
      } catch (error) {
        console.error('Search error:', error);
        callback([]);
      }
      this.debounceTimers.delete('search');
    }, delay);

    this.debounceTimers.set('search', newTimerId);
  }

  clearCache(): void {
    this.cache = {};
  }

  rebuildIndex(): void {
    this.searchIndex = {};
    this.isIndexBuilt = false;
  }
}

export const optimizedSearchService = new OptimizedSearchService();
