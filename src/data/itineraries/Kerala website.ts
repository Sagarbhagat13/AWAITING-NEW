
export const spitiTrekItinerary = {
  id: '',
  title: 'Experience Kerala the Gods Own Country',
  location: 'Kerala',
  price: 14900,
  discount: 0,
  duration: '6 Days / 5 Nights',
  description: 'Embark on an unforgettable trek through the mystical Spiti Valley, often called "Little Tibet". Experience high-altitude desert landscapes, ancient monasteries, and remote villages frozen in time.',
  coverImage: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
  rating: 4.7,
  reviews: 89,
  images: [
    'https://images.unsplash.com/photo-1628918098760-471c0fad230c?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1704365159747-1f7b8913044f?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1306&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ],
  placesCovered: ['Cochin', 'Munnar', 'Thekkady', 'Alleppy', 'Kochi'],
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
      title: 'Mumbai To Cochin',
      description: 'Overnight train departure from Mumbai to Cochin.',
      activities: [
        '-',
        
      ],
      meals: ['-'],
      accommodation: 'Overnight Train'
    },
    {
      day: 2,
      title: 'Pick-Up & Sightseeing',
      description: 'Transfer to Hotel.',
      activities: [
        'Fresh-up & proceed to Cochin sightseeing',
        'Fort Kochi',
        'Chinese Fishing Nets',
        
      ],
      meals: [ 'Dinner'],
      accommodation: ' Enjoy your stay at Cochin'
    },
    {
      day: 3,
      title: 'Cochin To Munnar',
      description: 'Proceed to Munnar.',
      activities: [
        'Explore Cheeyapara Waterfalls',
        'Explore Valara Waterfalls ',
        'Check in at Hotel',
      
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Enjoy your stay at Munnar'
    },
    {
      day: 4,
      title: 'Munnar Sightseeing',
      description: 'Explore the serene beauty of Munnar.',
      activities: [
        'Echo Point',
        'Kundala Lake',
        'Mattupetty Dam',
        'Munnar Tea Gardens',
        'Munnar Tea Museum & Tea Factory',
        'Rose Garden',

      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Enjoy your stay at Munnar'
    },
    {
      day: 5,
      title: 'Munnar To Thekkady',
      description: 'Discover the wild charm of Thekkady.',
      activities: [
        'Periyar Wildlife Sanctuary (AFTERNOON SLOT)',
        'Wildlife Boating (AT OWN COST)',
        'Elephant Park',
        'Spice Garden',
        'Evening Kathakali Show (AT OWN COST)',
        'Evening Kalaripayattu Show (AT OWN COST)',
  
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Enjoy your stay at Thekkady'
    },
    {
      day: 6,
      title: 'Thekkady To Alleppey',
      description: 'Drive to Alleppey.',
      activities: [
        'Check-in to a traditional houseboat (Kettuvallam) around 12:00 hrs',
        'Enjoy meals served on board: Lunch, Evening Tea & Snacks, Dinner',
        'Relax and enjoy your stay on the houseboat',

      ],
      meals: ['Breakfast', 'Lunch', 'Dinner'],
      accommodation: 'Enjoy your stay at Houseboat'
    },
    {
      day: 7,
      title: 'Alleppey To Cochin Drop',
      description: 'Depart with Pleasant Memories.',
      activities: [
        'Proceed to Ernakulam',
        'Enjoy return train journey',
      
      ],
      meals: ['Breakfast'],
      accommodation: 'Overnight Train'
    },
    {
      day: 8,
      title: 'Arrival in Mumbai',
      description: 'Transfer to Mumbai with bag full of memories.',
      activities: [
    
      ],
      meals: ['no meals'],
      accommodation: '-'
    }
  ],

  // Pricing tiers
  pricingOptions: [
    {
      id: 'standard',
      title: 'Without Train Fare',
      price: 14900,
      description: 'Package without Train Fare',
      isPopular: true
    },
    {
      id: 'deluxe',
      title: 'Sleeper Train Fare',
      price: 16300,
      description: 'Package with Sleeper Train Fare'
    },
    {
      id: 'premium',
      title: '3 A/C Train Fare',
      price: 18650,
      description: 'Package with 3 A/C Train Fare'
    }
  ],
  
  // Available batch dates
  batchDates: [
    {
      id: 'batch-1',
      startDate: '09-08-2025',
      endDate: '16-08-2025',
      totalSlots: 12,
      availableSlots: 8,
      price: 14900
    },
    {
      id: 'batch-2',
      startDate: '15-08-2025',
      endDate: '22-08-2025',
      totalSlots: 12,
      availableSlots: 8,
      price: 14900
    },
    {
      id: 'batch-3',
      startDate: '05-09-2025',
      endDate: '12-09-2025',
      totalSlots: 12,
      availableSlots: 8,
      price: 14900
    }
    


    // Add more batch dates...
  ]
};
