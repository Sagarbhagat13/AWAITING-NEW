
export const spitiTrekItinerary = {
  id: '',
  title: 'The Ultimate Spiti Circuit - Delhi to the Land of Monasteries',
  location: 'Himachal Pradesh',
  price: 19999,
  discount: 0,
  duration: '6 Days / 5 Nights',
  description: '"Experience the ultimate high-altitude adventure from Delhi to Spiti Valley, where every turn unveils ancient culture, raw beauty, and Himalayan magic".',
  coverImage: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
  rating: 4.7,
  reviews: 89,
  images: [
    'https://images.unsplash.com/photo-1697984286841-5cedb7885109?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1628782379401-4fff9cdcbbfe?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1698753935121-153a106616d5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80'
  ],
  placesCovered: ['Chitkul', 'Tabo', 'Kaza', 'Kalpa'],
  highlights: [
    'Drive Along the Indo-Tibetan Highway – One of the most scenic and thrilling routes in the world',
    'Explore the last inhabited village near the Indo-China border',
    'Nako Lake – A tranquil high-altitude lake nestled amidst barren mountains.',
    'Experience Spiritual Bliss at Tabo Monastery',
    'A 1000-year-old cliffside marvel overlooking the confluence of rivers',
    'Kaza - Key Monastery, Langza, Komic, Hikkim & Chicham Bridge (Asia’s highest)',
    'Peo Market - Authentic Himachali vibes and local handicrafts',
    'Kalpa - With panoramic views of Kinner Kailash range',
    'Optional Shimla Attractions – Mall Road, Christ Church & Cafe Hopping (if time permits)'

  ],
  inclusions: [
    'Triple sharing accommodation in listed or similar hotels',
    'Breakfast and dinner included as per itinerary',
    'Land transportation from pick-up to drop-off (stations, airports, etc.) and for sightseeing',
    'All Vehicle expenses covered'
  ],
  exclusions: [
    'Lunch expenses not included',
    'Entry fees for monuments, cultural shows, guides, and camera use',
    'Beverages (alcoholic drinks, mineral water, soft drinks)',
    'Personal expenses (tips, calls, internet, laundry, sauna, bar, etc.)',
    'Adventure activities (elephant/pony/horse rides, boat trips, safaris, rafting, skiing, cable car, etc.)',
    'Extra food/drinks outside buffet or fixed menu',
    'Vehicle use limited to allowed parking/specific points only, Travel Insurance',
    'Incidental costs due to delays, weather, health issues, etc.',
    'Any unmentioned items under "Cost Includes"',
    'GST (5%) extra'
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
      title: 'Delhi To Shimla',
      description: 'Kick off your Himalayan adventure with an overnight journey. ',
      activities: [
        'Meet-up at Delhi Bus Terminal',
        'Overnight bus journey to Shimla',
        
      ],
      meals: ['-'],
      accommodation: 'Overnight Bus'
    },
    {
      day: 2,
      title: 'Shimla To Sangla/Chitkul',
      description: 'Journey from Shimla to Sangla/Chitkul through the scenic & Breathtaking Views.',
      activities: [
        'Drive from Shimla to Sangla / Chitkul',
        'Scenic route via Kufri & Narkanda',
        'Travel along the stunning Indo-Tibetan Highway',
        
      ],
      meals: ['Dinner'],
      accommodation: 'Enjoy your Stay at Sangla/Chitkul'
    },
    {
      day: 3,
      title: 'Sangla/Chitkul To Tabo',
      description: 'Drive from Sangla/Chitkul to Tabo through stunning Himalayan landscapes.',
      activities: [
        'Cliff Point',
        'Nako Lake',
        'Tabo Monastery',

      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Enjoy your Stay at Tabo'
    },
    {
      day: 4,
      title: 'Tabo To Kaza',
      description: 'Enjoy your journey to Kaza.',
      activities: [
        'Visit to Dhankar Monastery',

      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Enjoy your Stay at Kaza'
    },
    {
      day: 5,
      title: 'kaza Sightseeing',
      description: 'Explore the Beauty of Kaza',
      activities: [
        'Key Monastery',
        'Langza',
        'Komic',
        'Hikkim',
        'Chicham Bridge',
  
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Enjoy your Stay at Kaza'
    },
    {
      day: 6,
      title: 'Kaza to Kalpa',
      description: 'Amid the Serene Himalayan Charm of Kalpa.',
      activities: [
        'Shopping at Reckong Peo Market',

      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Enjoy your Stay at Kalpa'
    },
    {
      day: 7,
      title: 'Kalpa To Shimla To Delhi',
      description: 'Final exploration of Shimla & return to Delhi.',
      activities: [
        'Mall Road (If time permits)',
        'Christ Church (If time permits)',
        'Cafe Hopping (If time permits)',

      ],
      meals: ['Breakfast'],
      accommodation: 'Overnight Bus journey towards Delhi'
    },
    {
      day: 8,
      title: 'Delhi',
      description: 'Transfer to delhi with bag full of memories.',

    }
  ],

  // Pricing tiers
  pricingOptions: [
    {
      id: 'standard',
      title: 'Triple Sharing Basis',
      price: 19999,
      description: 'Package for Triple Sharing',
      isPopular: true
    },
    {
      id: 'deluxe',
      title: 'Double Sharing Basis',
      price: 20999,
      description: 'Package for Double Sharing'
    }
  ],
  
  // Available batch dates
  batchDates: [
    {
      id: 'Batches On',
      startDate: '2025-10-12',
      endDate: '2025-10-19',
      totalSlots: 12,
      availableSlots: 12,
      price: 19999
    },
    {
      id: 'Batches On',
      startDate: '2025-10-19',
      endDate: '2025-10-26',
      totalSlots: 12,
      availableSlots: 12,
      price: 19999    
    },
    {
      id: 'Batches On',
      startDate: '2025-11-23',
      endDate: '2025-11-30',
      totalSlots: 12,
      availableSlots: 12,
      price: 19999
    },
    {
      id: 'Batches On',
      startDate: '2025-11-30',
      endDate: '2025-12-07',
      totalSlots: 12,
      availableSlots: 12,
      price: 19999
    },
    {
      id: 'Batches On',
      startDate: '2025-12-07',
      endDate: '2025-12-14',
      totalSlots: 12,
      availableSlots: 12,
      price: 19999
    },
    {
      id: 'Batches On',
      startDate: '2025-12-21',
      endDate: '2025-12 -28',
      totalSlots: 12,
      availableSlots: 12,
      price: 19999
    }
  
    // Add more batch dates...
  ]
};
