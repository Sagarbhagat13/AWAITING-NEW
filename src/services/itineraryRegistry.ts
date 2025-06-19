// Dynamic itinerary registry that automatically discovers and loads all itinerary files

export interface ItineraryMetadata {
  id: string;
  category: 'honeymoon' | 'family' | 'adventure' | 'weekend' | 'offbeat' | 'popular';
  destination: string;
  type: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string[];
  accommodation: string;
}

export interface ItineraryFAQ {
  question: string;
  answer: string;
}

export interface PricingOption {
  id: string;
  title: string;
  price: number;
  description: string;
  isPopular?: boolean;
}

export interface BatchDate {
  id: string;
  startDate: string;
  endDate: string;
  totalSlots: number;
  availableSlots: number;
  price: number;
}


export interface ItineraryData {
  id: string;
  title: string;
  location: string;
  price: number;
  discount?: number;
  duration: string;
  rating: number;
  reviews: number;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  images: string[];
  coverImage?: string;
  itinerary: ItineraryDay[];
  faqs: ItineraryFAQ[];
  placesCovered: string[];
  pricingOptions?: PricingOption[];
  batchDates?: BatchDate[];
}

export interface ItineraryModule {
  [key: string]: ItineraryData | unknown;
}

export interface RegistryStats {
  totalItineraries: number;
  categories: Record<string, number>;
}

// Use Vite's import.meta.glob to dynamically import all itinerary files
const itineraryModules = import.meta.glob ('/src/data/itineraries/*.ts', { eager: true });

// Registry to store all discovered itineraries
const itineraryRegistry = new Map<string, ItineraryData>();
const categoryRegistry = new Map<string, string[]>();

// Auto-detect category from filename or content
const detectCategory = (filename: string, itinerary: ItineraryData): string => {
  const name = filename.toLowerCase();
  
  if (name.includes('honeymoon')) return 'honeymoon';
  if (name.includes('family')) return 'family';
  if (name.includes('weekend')) return 'weekend';
  if (name.includes('trek') || name.includes('expedition') || name.includes('adventure')) return 'adventure';
  if (name.includes('offbeat') || name.includes('valley') || name.includes('lakes')) return 'offbeat';
  
  return 'popular';
};

// Type guard to check if object is an ItineraryData
const isItineraryData = (obj: unknown): obj is ItineraryData => {
  return typeof obj === 'object' && 
         obj !== null && 
         'id' in obj && 
         'title' in obj && 
         typeof (obj as ItineraryData).id === 'string';
};

// Initialize the registry by processing all discovered modules
const initializeRegistry = (): void => {
  Object.entries(itineraryModules).forEach(([filePath, module]) => {
    const moduleObj = module as ItineraryModule;
    
    Object.entries(moduleObj).forEach(([exportName, itinerary]) => {
      if (isItineraryData(itinerary)) {
        const filename = filePath.split('/').pop()?.replace('.ts', '') || '';
        const category = detectCategory(filename, itinerary);
        
        itineraryRegistry.set(itinerary.id, itinerary);
        
        if (!categoryRegistry.has(category)) {
          categoryRegistry.set(category, []);
        }
        categoryRegistry.get(category)?.push(itinerary.id);
      }
    });
  });
};

// Initialize the registry
initializeRegistry();

// Export functions for accessing the registry
export const getAllItineraries = (): ItineraryData[] => {
  return Array.from(itineraryRegistry.values());
};

export const getItineraryById = (id: string): ItineraryData | null => {
  return itineraryRegistry.get(id) || null;
};

export const getItinerariesByCategory = (category: string): ItineraryData[] => {
  const ids = categoryRegistry.get(category) || [];
  return ids.map(id => itineraryRegistry.get(id)).filter((item): item is ItineraryData => item !== undefined);
};

export const getAllCategories = (): string[] => {
  return Array.from(categoryRegistry.keys());
};

export const getRegistryStats = (): RegistryStats => {
  return {
    totalItineraries: itineraryRegistry.size,
    categories: Object.fromEntries(
      Array.from(categoryRegistry.entries()).map(([cat, ids]) => [cat, ids.length])
    )
  };
};
