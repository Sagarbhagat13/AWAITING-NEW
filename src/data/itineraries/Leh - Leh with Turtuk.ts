
export const spitiTrekItinerary = {
  id: 'lw3',
  title: 'Experience Leh Ladakh with Turtuk ',
  location: 'Ladakh',
  price: 18999,
  discount: 0,
  duration: '7 Days / 6 Nights',
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
      title: 'Arrival in Leh',
      description: 'Meet our local representative and transfer with him to the hotel.',
      activities: [
        'Take a complete rest for acclimatization to the arid high altitude of Leh (3505)',
        
      ],
      meals: ['Dinner'],
      accommodation: 'Enjoy your stay at Leh'
    },
    {
      day: 2,
      title: 'Leh - City Tour',
      description: 'After breakfast proceed to visit Leh city.',
      activities: [
        'Visit Hall of Fame, Shanti Stupa & Leh Palace',
        'In evening explore the colorful Leh bazaar',

      ],
      meals: [ 'Breakfast', 'Dinner'],
      accommodation: 'Enjoy your stay at Leh'
    },
    {
      day: 3,
      title: 'Leh to Nubra via Khardungla Pass',
      description: 'After breakfast, drive ~4 hrs (120 km) to Nubra Valley, known as the "Valley of Flowers.',
      activities: [
        'En route, cross Khardung La Pass (18,380 ft) the worlds highest motorable road (~2 hrs drive) ',
        'Descend into Nubra Valley and transfer to Hunder Sand Dunes',
        'Optional: Ride double-humped Bactrian camels (at your own cost)',
        'Visit the scenic Diskit Monastery on the hilltop',
      
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Overnight stay in Nubra Valley'
    },
    {
      day: 4,
      title: 'Nubra Valley >> Turtuk >> Nubra Valley',
      description: 'Morning after breakfast, drive to the other side of Nubra Valley (part of the ancient Silk Route).',
      activities: [
        'Visit Turtuk village near the Line of Control (LOC)',
        'Explore the unique culture and landscape of Turtuk',
        'Drive back to the hotel in Nubra Valley',

      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Overnight stay in Nubra Valley'
    },
    {
      day: 5,
      title: 'Nubra to Pangong via Shyok',
      description: 'Drive to the other side of Nubra Valley towards the stunning Changthang Valley.',
      activities: [
        'Enjoy the journey to Pangong Tso Lake (13,930 ft / ~4300 m above sea level)',
        'The lake is 150 km long, 4 km wide at its broadest, and stretches into Tibet (only a quarter lies in India)',
  
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Enjoy your stay at Pangong Tso'
    },
    {
      day: 6,
      title: 'kaza to chandratal',
      description: 'After breakfast, drive back to Leh via Chang La Pass (5,320 m) the highest point of the journey.',
      activities: [
        'En route, visit major sites in the Indus Valley',
        'Shey Palace',
        'Hemis Monastery (Hemis Gompa)',
        'Thiksey Monastery (Thikse Gompa)',

      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Enjoy your stay at Leh'
    },
    {
      day: 7,
      title: 'Drop at Leh',
      description: 'After breakfast, transfer to Leh Airport for your onward journey.',
      activities: [

        'Depart with beautiful memories to cherish forever'
      ],
      meals: ['Breakfast'],
      accommodation: '-'
    }

  ],

  // Pricing tiers
  pricingOptions: [
    {
      id: 'standard',
      title: 'Triple Sharing',
      price: 18999,
      description: 'Accomodation on triple sharing basis',
      isPopular: true
    },
    {
      id: 'deluxe',
      title: 'Double Sharing',
      price: 20999,
      description: 'Accommodations on double sharing basis'
    },
  
  ],
  
  // Available batch dates
  batchDates: [
    {
      id: 'batch-1',
      startDate: '04-08-2025',
      endDate: '10-08-2025',
      totalSlots: 12,
      availableSlots: 7,
      price: 31999
    },
    {
      id: 'batch-2',
      startDate: '10-08-2025',
      endDate: '16-08-2025',
      totalSlots: 12,
      availableSlots: 7,
      price: 31999
    },
    {
      id: 'batch-3',
      startDate: '15-08-2025',
      endDate: '21-08-2025',
      totalSlots: 12,
      availableSlots: 7,
      price: 31999
    },
    {
      id: 'batch-4',
      startDate: '25-08-2025',
      endDate: '31-08-2025',
      totalSlots: 12,
      availableSlots: 7,
      price: 31999
    },
    {
      id: 'batch-5',
      startDate: '08-09-2025',
      endDate: '14-09-2025',
      totalSlots: 12,
      availableSlots: 7,
      price: 31999
    },
    {
      id: 'batch-6',
      startDate: '15-09-2025',
      endDate: '21-09-2025',
      totalSlots: 12,
      availableSlots: 7,
      price: 31999
    },
    {
      id: 'batch-7',
      startDate: '22-09-2025',
      endDate: '28-09-2025',  
      totalSlots: 12,
      availableSlots: 7,
      price: 31999
    }
    
    







      // Add more batch dates...
  ]
};
