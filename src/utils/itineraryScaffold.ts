
// Development utility for creating new itinerary files
export interface ItineraryTemplate {
  id: string;
  title: string;
  location: string;
  category: 'honeymoon' | 'family' | 'adventure' | 'weekend' | 'offbeat' | 'popular';
  price: number;
  duration: string;
}

export const generateItineraryTemplate = (template: ItineraryTemplate): string => {
  const filename = `${template.location.toLowerCase().replace(/\s+/g, '')}${template.category.charAt(0).toUpperCase() + template.category.slice(1)}Itinerary`;
  
  return `export const ${filename} = {
  id: '${template.id}',
  title: '${template.title}',
  location: '${template.location}',
  price: ${template.price},
  discount: 15,
  duration: '${template.duration}',
  description: 'Experience the beauty of ${template.location} with our carefully curated ${template.title}. This package offers the perfect blend of adventure, culture, and relaxation.',
  coverImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
  rating: 4.6,
  reviews: 89,
  images: [
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&w=800&q=80'
  ],
  placesCovered: ['${template.location}'],
  highlights: [
    'Explore the scenic beauty of ${template.location}',
    'Professional guide and comfortable accommodation',
    'All major attractions and local experiences',
    'Cultural interactions and local cuisine',
    'Photography opportunities at scenic spots',
  ],
  inclusions: [
    'Accommodation as per itinerary',
    'Daily breakfast and selected meals',
    'Transportation in AC vehicle',
    'Professional tour guide',
    'All entry fees and permits',
    'All applicable taxes'
  ],
  exclusions: [
    'Flights to/from destination',
    'Personal expenses and shopping',
    'Travel insurance',
    'Tips and gratuities',
    'Additional activities not mentioned'
  ],
  faqs: [
    {
      question: 'What makes this ${template.category} package special?',
      answer: 'Our package is carefully designed to provide the best experience in ${template.location} with comfortable accommodation, guided tours, and all major attractions covered.'
    },
    {
      question: 'Is this package customizable?',
      answer: 'Yes, we can customize the itinerary based on your preferences, add extra days, or include specific activities you are interested in.'
    }
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival and Welcome',
      description: 'Begin your ${template.location} adventure.',
      activities: ['Airport/station pickup', 'Check-in at accommodation', 'Welcome briefing', 'Local area exploration', 'Rest and relaxation'],
      meals: ['Welcome drinks'],
      accommodation: 'Hotel/Resort as per package'
    },
    {
      day: 2,
      title: 'Sightseeing and Activities',
      description: 'Explore the main attractions of ${template.location}.',
      activities: ['Morning sightseeing', 'Visit major attractions', 'Local cultural experiences', 'Photography sessions', 'Evening leisure time'],
      meals: ['Breakfast'],
      accommodation: 'Hotel/Resort as per package'
    },
    {
      day: 3,
      title: 'Departure',
      description: 'Final moments and departure.',
      activities: ['Final breakfast', 'Last-minute shopping', 'Check-out', 'Transfer to airport/station'],
      meals: ['Breakfast'],
      accommodation: 'N/A (Departure)'
    }
  ]
};`;
};

// Validation function for itinerary completeness
export const validateItinerary = (itinerary: any): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  const requiredFields = ['id', 'title', 'location', 'price', 'duration', 'description', 'images', 'itinerary'];
  
  requiredFields.forEach(field => {
    if (!itinerary[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  });
  
  if (itinerary.images && itinerary.images.length === 0) {
    errors.push('At least one image is required');
  }
  
  if (itinerary.itinerary && itinerary.itinerary.length === 0) {
    errors.push('Itinerary must have at least one day');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Console utility for developers
export const logItineraryStats = () => {
  import('@/services/itineraryRegistry').then(({ getRegistryStats }) => {
    const stats = getRegistryStats();
    console.table(stats.categories);
    console.log(`Total itineraries registered: ${stats.totalItineraries}`);
  });
};
