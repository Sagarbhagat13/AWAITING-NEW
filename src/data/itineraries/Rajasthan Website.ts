
export const spitiTrekItinerary = {
  id: 'lw5',
  title: 'Experience Rajasthan The Land Of Royals',
  location: 'Rajasthan',
  price: 15999,
  discount: 0,
  duration: '6 Days / 5 Nights',
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
      title: 'Mumbai To Udaipur',
      description: 'Overnight Train departure from Mumbai to Udaipur.',
      activities: [
        '-',
        
      ],
      meals: ['-'],
      accommodation: 'Overnight Train'
    },
    {
      day: 2,
      title: ' Arrival at Udaipur',
      description: 'Udaipur City sightseeing.',
      activities: [
        'Udaipur City Palace',
        ' Boat Ride to Jag Mandir (AT OWN COST)',
        
      ],
      meals: [ 'Dinner'],
      accommodation: 'Enjoy your stay at Udaipur'
    },
    {
      day: 3,
      title: ' Udaipur Sightseeing',
      description: 'After breakfast, enjoy a full-day Udaipur city tour.',
      activities: [
        'Visit - ',
        'Fateh Sagar lake ',
        'Sahelion Ki Bari',
        'Monsoon Palace',
        'Gulab Bagh',
        'Later, explore the local city markets and bazaars',

      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Enjoy your stay at Udaipur'
    },
    {
      day: 4,
      title: 'Udaipur To Pushkar via Chittorgarh',
      description: 'Explore the beauty of Chittorgarh & proceed to Pushkar.',
      activities: [
        'Visit the historic Chittorgarh Fort, a UNESCO World Heritage Site and symbol of Rajput bravery',
        'Optional: Dress up in traditional Rajasthani attire for photos',
        'Later, proceed to Pushkar',
      
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Enjoy your stay at Pushkar'
    },
    {
      day: 5,
      title: 'Pushkar To Jaipur',
      description: 'Explore the Religious Places & head towards the Kashmir of Rajasthan',
      activities: [
        'Visit Brahma Mandir - one of the few temples dedicated to Lord Brahma, built in the 14th century',
        'Visit Pushkar Tirth, a sacred pilgrimage site',
        'Proceed to Jaipur',
        'En route, visit Kishangarh - known as the "Kashmir of Rajasthan" ',
  
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Enjoy your stay in Jaipur'
    },
    {
      day: 6,
      title: 'Jaipur Sightseeing',
      description: 'Discover Jaipur Royal Charms.',
      activities: [
        'Visit -',
        'Hawa Mahal',
        'Jantar Mantar',
        'City Palace',
        'Panna Meena Ka Kund',
        'Amer Fort',
        'Shopping at Bapu Market',

      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Enjoy your stay in Jaipur'
    },
    {
      day: 7,
      title: 'Jaipur To Mumbai',
      description: 'Enjoy Return Journey to Mumbai.',
      activities: [
        '-',
      
      ],
      meals: ['Breakfast'],
      accommodation: 'Overnight Train'
    },
    {
      day: 8,
      title: 'Arrivak in Mumbai',
      description: 'Reach Mumbai with a Bag Full of Memories from the Land Of Royals.',
      activities: [
        '-',

      ],
      meals: ['no meals'],
      accommodation: '-'
    }
  ],

  // Pricing tiers
  pricingOptions: [
    {
      id: 'Train Fare',
      title: 'Without Train Fare',
      price: 15900,
      description: 'Package without Train Fare',
      isPopular: true
    },
    {
      id: 'Train Fare',
      title: 'With Sleeper Train Fare',
      price: 16950,
      description: 'Package with Sleeper Train Fare'
    },
    {
      id: 'Train Fare',
      title: 'With 3 A/C Train Fare',
      price: 18700,
      description: 'Package with 3 A/C Train Fare'
    }
  ],
  
  // Available batch dates
  batchDates: [
    {
      id: 'Batches On',
      startDate: '2025-08-09',
      endDate: '2025-08-16',
      totalSlots: 18,
      availableSlots: 18,
      price: 15900
    },
    {
      id: 'Batches On', 
      startDate: '2025-08-15',
      endDate: '2025-08-22',
      totalSlots: 18,
      availableSlots: 18,
      price: 15900
    },
    {
      id: 'Batches On', 
      startDate: '2025-09-05',
      endDate: '2025-09-12',
      totalSlots: 18,
      availableSlots: 18,
      price: 15900
    }
    // Add more batch dates...
  ]
};
