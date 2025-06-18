
import { Trip } from '@/data/popularTrips';

interface DataLoaderCache {
  [key: string]: {
    data: Trip[];
    timestamp: number;
    expiry: number;
  };
}

class DataLoaderService {
  private cache: DataLoaderCache = {};
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
  
  private async loadDataChunk(chunkName: string): Promise<Trip[]> {
    // Check cache first
    const cached = this.cache[chunkName];
    if (cached && Date.now() < cached.expiry) {
      return cached.data;
    }

    let data: Trip[] = [];
    
    try {
      switch (chunkName) {
        case 'popular':
          const { popularTrips } = await import('@/data/popularTrips');
          data = popularTrips;
          break;
        case 'weekend':
          const { weekendTrips } = await import('@/data/weekendTrips');
          data = weekendTrips;
          break;
        case 'international':
          const { internationalTours } = await import('@/data/internationalTours');
          data = internationalTours;
          break;
        case 'honeymoon':
          const { honeymoonPackages } = await import('@/data/honeymoonPackages');
          data = honeymoonPackages;
          break;
        case 'ladakh':
          const { ladakhBikingTrips, ladakhSUVTrips } = await import('@/data/ladakhTrips');
          data = [...ladakhBikingTrips, ...ladakhSUVTrips];
          break;
        case 'offbeat':
          const { offBeatTrips } = await import('@/data/offBeatTrips');
          data = offBeatTrips;
          break;
        default:
          console.warn(`Unknown data chunk: ${chunkName}`);
      }

      // Cache the data
      this.cache[chunkName] = {
        data,
        timestamp: Date.now(),
        expiry: Date.now() + this.CACHE_DURATION
      };

      return data;
    } catch (error) {
      console.error(`Failed to load data chunk ${chunkName}:`, error);
      return [];
    }
  }

  async getPopularTrips(): Promise<Trip[]> {
    return this.loadDataChunk('popular');
  }

  async getWeekendTrips(): Promise<Trip[]> {
    return this.loadDataChunk('weekend');
  }

  async getInternationalTours(): Promise<Trip[]> {
    return this.loadDataChunk('international');
  }

  async getHoneymoonPackages(): Promise<Trip[]> {
    return this.loadDataChunk('honeymoon');
  }

  async getLadakhTrips(): Promise<Trip[]> {
    return this.loadDataChunk('ladakh');
  }

  async getOffBeatTrips(): Promise<Trip[]> {
    return this.loadDataChunk('offbeat');
  }

  async getAllTrips(): Promise<Trip[]> {
    const chunks = await Promise.all([
      this.getPopularTrips(),
      this.getWeekendTrips(),
      this.getInternationalTours(),
      this.getHoneymoonPackages(),
      this.getLadakhTrips(),
      this.getOffBeatTrips()
    ]);

    return chunks.flat();
  }

  // Preload essential data
  async preloadEssentials(): Promise<void> {
    try {
      await Promise.all([
        this.getPopularTrips(),
        this.getWeekendTrips()
      ]);
    } catch (error) {
      console.error('Failed to preload essential data:', error);
    }
  }

  clearCache(): void {
    this.cache = {};
  }
}

export const dataLoader = new DataLoaderService();
