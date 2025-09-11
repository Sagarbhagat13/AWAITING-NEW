
export const spitixmas = {
  id: 'lw10',
  title: 'Experience Spiti Valley with chandratal ',
  location: 'Himachal Pradesh',
  price: 17999,
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
      description: ' transfer to kaza',
      activities: [
        'langza vilagge',
        'Komic',
        'Hikkim ',
  
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Guesthouse in Kaza'
    },
    {
      day: 6,
      title: 'kaza to chandratal',
      description: 'Final exploration of Kaza before departure.',
      activities: [
        'Visit Key Monastery',
        'Last-minute shopping',
        'Departure from Kaza'
      ],
      meals: ['Breakfast'],
      accommodation: 'Camp near chandratal'
    },
    {
      day: 7,
      title: ' chandratal to manali',
      description: 'Final exploration of manali via atal tunnel.',
      activities: [
        'atal tunnel',
        'Last-minute shopping',
        'Departure from manali'
      ],
      meals: ['Breakfast'],
      accommodation: 'Camp near chandratal'
    },
    {
      day: 8,
      title: '  manali to delhi',
      description: 'transfer to delhi with bag full of memories.',
      activities: [
        'atal tunnel',
        'Last-minute shopping',
        'Departure from manali'
      ],
      meals: [],
      accommodation: 'Overnight bus'
    }
  ],

  // Pricing tiers
  pricingOptions: [
    {
      id: 'standard',
      title: 'Triple Sharing',
      price: 17999,
      description: 'Standard package with basic amenities',
      isPopular: true
    },
    {
      id: 'deluxe',
      title: 'Double Sharing',
      price: 19999,
      description: 'Double occupancy with enhanced comfort',
    },
    
  ],
  
  // Available batch dates
batchDates: [
  {
    id: 'batch-1',
    startDate: '11-10-2025',
    endDate: '18-10-2025',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-2',
    startDate: '18-10-2025',
    endDate: '25-10-2025',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-3',
    startDate: '23-10-2025',
    endDate: '30-10-2025',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-4',
    startDate: '25-10-2025',
    endDate: '01-11-2025',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-5',
    startDate: '01-11-2025',
    endDate: '08-11-2025',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-6',
    startDate: '22-11-2025',
    endDate: '29-11-2025',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-7',
    startDate: '13-12-2025',
    endDate: '20-12-2025',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-8',
    startDate: '20-12-2025',
    endDate: '27-12-2025',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-9',
    startDate: '25-12-2025',
    endDate: '01-01-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-10',
    startDate: '27-12-2025',
    endDate: '03-01-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-11',
    startDate: '10-01-2026',
    endDate: '17-01-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-12',
    startDate: '24-01-2026',
    endDate: '31-01-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-13',
    startDate: '14-02-2026',
    endDate: '21-02-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-14',
    startDate: '21-02-2026',
    endDate: '28-02-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-15',
    startDate: '28-02-2026',
    endDate: '07-03-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-16',
    startDate: '07-03-2026',
    endDate: '14-03-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-17',
    startDate: '14-03-2026',
    endDate: '21-03-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-18',
    startDate: '19-03-2026',
    endDate: '26-03-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-19',
    startDate: '03-04-2026',
    endDate: '10-04-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-20',
    startDate: '11-04-2026',
    endDate: '18-04-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-21',
    startDate: '25-04-2026',
    endDate: '02-05-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-22',
    startDate: '01-05-2026',
    endDate: '08-05-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-23',
    startDate: '09-05-2026',
    endDate: '16-05-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-24',
    startDate: '16-05-2026',
    endDate: '23-05-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  },
  {
    id: 'batch-25',
    startDate: '23-05-2026',
    endDate: '30-05-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 17999
  }
]


};
