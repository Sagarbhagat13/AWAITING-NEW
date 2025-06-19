
export const spitiTrekItinerary = {
  id: 'lw1',
  title: 'Experience Spiti Valley with chandratal ',
  location: 'Himachal Pradesh',
  price: 15999,
  discount: 0,
  duration: '8 Days / 7 Nights',
  description: 'Embark on an unforgettable trek through the mystical Spiti Valley, often called "Little Tibet". Experience high-altitude desert landscapes, ancient monasteries, and remote villages frozen in time.',
  coverImage: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
  rating: 4.7,
  reviews: 89,
  images: [
    'https://images.unsplash.com/photo-1697984286841-5cedb7885109?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1628782379401-4fff9cdcbbfe?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1698753935121-153a106616d5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80'
  ],
  placesCovered: ['Sangla', 'Tabo', 'Komic', 'Pin valley', 'Kaza', 'Chandratal'],
  highlights: [
    'Trek through the world\'s highest villages',
    'Visit Hikkim - world\'s highest post office',
    'Explore ancient Dhankar Monastery perched on cliffs',
    'Witness unique cold desert landscape',
    'Interact with local Spitian communities',
    'Search for fossils in Langza village'
  ],
  inclusions: [
    'Accommodation in homestays and guesthouses',
    'All meals during the trek',
    'Experienced trekking guide',
    'Permits for restricted areas',
    'Transportation within Spiti Valley',
    'First aid and safety equipment',
    'Porter support for common luggage'
  ],
  exclusions: [
    'Transportation to/from Shimla or Manali',
    'Personal trekking gear',
    'Travel insurance',
    'Tips for guides and porters',
    'Personal expenses',
    'Emergency evacuation costs'
  ],
  faqs: [
    {
      question: 'What is the difficulty level of this trek?',
      answer: 'This is a moderate to challenging trek requiring good physical fitness. You\'ll be trekking at altitudes between 3,200m to 4,500m with daily walks of 4-6 hours.'
    },
    {
      question: 'How do we handle altitude sickness?',
      answer: 'Our itinerary includes proper acclimatization days. We carry first aid and oxygen cylinders. Gradual ascent and staying hydrated are key to preventing altitude sickness.'
    },
    {
      question: 'What should I pack for this trek?',
      answer: 'Essential items include warm clothes (temperature can drop below freezing), trekking boots, sleeping bag, sun protection, personal medications, and quick-dry clothing.'
    }
  ],
  itinerary: [
    {
      day: 1,
      title: 'Delhi to Shimla',
      description: 'Meetup at delhi bus standn and  proceed for overnight journey to shimla.',
      activities: [
        'Arrival in Delhi before 7pm',
        'Gather at majnu ka tila'
      ],
      meals: ['Dinner on own'],
      accommodation: 'Overnight Journey in volvo'
    },
    {
      day: 2,
      title: 'Shimla to Sangla/Chitkul',
      description: 'after freshen up, Embark on a beautiful jouney from shimla to chitkul.',
      activities: [
        'Drive through kufri',
        'Narkanda',
        'Indo tebitan Highway',
        
      ],
      meals: [ 'Dinner'],
      accommodation: 'Guesthouse in Sangla/Chitkul'
    },
    {
      day: 3,
      title: 'sangla to tabo via nako',
      description: 'Travel by road from sangla to nako.',
      activities: [
        'Explore nako lake ',
        'explore nako village',
        'Visit giant Buddha statue',
        'transfer to tabo',
        'Interact with local families'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Homestay in Tabo'
    },
    {
      day: 4,
      title: 'tabo to pin valley via dhankar',
      description: 'Drive through scenic mountains of spiti.',
      activities: [
        'Explore tabo  Monastery',
        'Explore the 1000-year-old monastery',
        'Trek to Dhankar Lake (optional)',
        'Beautiful viilage of pin valley',
        'stay at pin village'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Guesthouse in Pin valley'
    },
    {
      day: 5,
      title: 'Pin Valley to kaza',
      description: '.',
      activities: [
        'Drive to Pin Valley',
        'Short trek in the valley',
        'Wildlife spotting (blue sheep, ibex)',
        'Visit Mudh village',
        'Return to Kaza'
      ],
      meals: ['Breakfast', 'Packed lunch', 'Dinner'],
      accommodation: 'Guesthouse in Kaza'
    },
    {
      day: 6,
      title: 'Departure from Kaza',
      description: 'Final exploration of Kaza before departure.',
      activities: [
        'Visit Key Monastery',
        'Last-minute shopping',
        'Departure from Kaza'
      ],
      meals: ['Breakfast'],
      accommodation: 'N/A (Tour ends)'
    }
  ],

  // Pricing tiers
  pricingOptions: [
    {
      id: 'standard',
      title: 'Standard',
      price: 12999,
      description: 'Standard package with basic amenities',
      isPopular: true
    },
    {
      id: 'deluxe',
      title: 'Deluxe',
      price: 13799,
      description: 'Enhanced package with premium accommodations'
    },
    {
      id: 'premium',
      title: 'Premium',
      price: 14999,
      description: 'Luxury package with all premium amenities'
    }
  ],
  
  // Available batch dates
  batchDates: [
    {
      id: 'batch-1',
      startDate: '2024-07-01',
      endDate: '2024-07-01',
      totalSlots: 15,
      availableSlots: 8,
      price: 13999
    },
    {
      id: 'batch-2', 
      startDate: '2024-07-02',
      endDate: '2024-07-02',
      totalSlots: 15,
      availableSlots: 12,
      price: 13999
    }
    // Add more batch dates...
  ]
};
