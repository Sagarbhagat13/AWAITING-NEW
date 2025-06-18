
// Dynamic itinerary exports using the registry system
import { 
  getAllItineraries, 
  getItineraryById as getRegistryItineraryById,
  getItinerariesByCategory,
  getAllCategories,
  getRegistryStats
} from '@/services/itineraryRegistry';

// Export functions instead of immediate values to avoid initialization issues
export const getAllItinerariesData = () => getAllItineraries();

// Export function to get itinerary by ID
export const getItineraryById = (id: string) => {
  return getRegistryItineraryById(id);
};

// Export categorized itineraries as functions
export const getHoneymoonItineraries = () => getItinerariesByCategory('honeymoon');
export const getFamilyItineraries = () => getItinerariesByCategory('family');
export const getWeekendItineraries = () => getItinerariesByCategory('weekend');
export const getAdventureItineraries = () => getItinerariesByCategory('adventure');
export const getOffbeatItineraries = () => getItinerariesByCategory('offbeat');
export const getPopularItineraries = () => getItinerariesByCategory('popular');

// Export utility functions - wrapped in functions to avoid initialization issues
export const getAvailableCategories = () => getAllCategories();
export const getItineraryStats = () => getRegistryStats();

// Backward compatibility - export individual itineraries by name
// Using lazy evaluation to avoid initialization issues
export const getManaliBackpackingItinerary = () => getRegistryItineraryById('1');
export const getKashmirLakesItinerary = () => getRegistryItineraryById('2');
export const getSpitiValleyItinerary = () => getRegistryItineraryById('3');
export const getMeghalayaExplorationItinerary = () => getRegistryItineraryById('4');
export const getLadakhExpeditionItinerary = () => getRegistryItineraryById('5');
export const getBirBillingItinerary = () => getRegistryItineraryById('6');
export const getRishikeshRaftingItinerary = () => getRegistryItineraryById('7');
export const getKasolWeekendItinerary = () => getRegistryItineraryById('8');
export const getJibhiItinerary = () => getRegistryItineraryById('9');
export const getSpitiTrekItinerary = () => getRegistryItineraryById('10');
export const getZanskarRiverItinerary = () => getRegistryItineraryById('11');
export const getValleyOfFlowersItinerary = () => getRegistryItineraryById('12');
export const getDzukouValleyItinerary = () => getRegistryItineraryById('13');
export const getSandakphuTrekItinerary = () => getRegistryItineraryById('14');
export const getGoaHoneymoonItinerary = () => getRegistryItineraryById('15');
export const getKeralaHoneymoonItinerary = () => getRegistryItineraryById('16');
export const getRajasthanHoneymoonItinerary = () => getRegistryItineraryById('17');
export const getAndamanHoneymoonItinerary = () => getRegistryItineraryById('18');
export const getShimlaFamilyItinerary = () => getRegistryItineraryById('family1');
export const getDarjeelingFamilyItinerary = () => getRegistryItineraryById('family2');

// For immediate backward compatibility, provide lazy-loaded constants
// Using Object.defineProperty to create getters that call functions when accessed
let _exports: any;
if (typeof exports !== 'undefined') {
  _exports = exports;
} else if (typeof module !== 'undefined' && module.exports) {
  _exports = module.exports;
} else {
  _exports = {};
}

// Only define these properties if we have access to exports
if (_exports && typeof Object.defineProperty === 'function') {
  Object.defineProperty(_exports, 'allItineraries', {
    get() {
      return getAllItineraries();
    }
  });

  Object.defineProperty(_exports, 'honeymoonItineraries', {
    get() {
      return getItinerariesByCategory('honeymoon');
    }
  });

  Object.defineProperty(_exports, 'familyItineraries', {
    get() {
      return getItinerariesByCategory('family');
    }
  });

  Object.defineProperty(_exports, 'weekendItineraries', {
    get() {
      return getItinerariesByCategory('weekend');
    }
  });

  Object.defineProperty(_exports, 'adventureItineraries', {
    get() {
      return getItinerariesByCategory('adventure');
    }
  });

  Object.defineProperty(_exports, 'offbeatItineraries', {
    get() {
      return getItinerariesByCategory('offbeat');
    }
  });

  Object.defineProperty(_exports, 'popularItineraries', {
    get() {
      return getItinerariesByCategory('popular');
    }
  });
}
