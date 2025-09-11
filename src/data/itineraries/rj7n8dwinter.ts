export const rajasthanRoyals = {
  id: 'xny12',
  title: 'Rajasthan: Land of Royals',
  location: 'Jaipur, Udaipur, Jodhpur & Jaisalmer',
  price: 23200,
  discount: 0,
  duration: '10 Days / 9 Nights',
  description:
    'Discover the regal charm of Rajasthan with its forts, palaces, deserts, and vibrant culture. Explore Jaipur, Udaipur, Jodhpur, and Jaisalmer – the true Land of Royals.',
 
  rating: 4.9,
  reviews: 134,
  images: [
  'https://images.unsplash.com/photo-1587295656906-b06dca8f2340?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFqYXN0aGFufGVufDB8fDB8fHww', // Hawa Mahal, Jaipur
  'https://images.unsplash.com/photo-1598190896090-9dc5c70361d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D', // Amer Fort, Jaipur
  'https://images.unsplash.com/photo-1622225641765-8c8ef0dcb678?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D', // Sand dunes, Jaisalmer
  'https://images.unsplash.com/photo-1695956353120-54ce5e91632b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHVkYWlwdXJ8ZW58MHx8MHx8fDA%3D'  // City Palace, Udaipur
],

  placesCovered: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer'],
  highlights: [
    'Explore Amber Fort, Jal Mahal, Hawa Mahal & City Palace in Jaipur',
    'Visit Brahma Temple in Pushkar (en route to Udaipur)',
    'Boat ride at Lake Pichola in Udaipur',
    'Marvel at Ranakpur Jain Temple on way to Jodhpur',
    'Explore Mehrangarh Fort, Umaid Bhavan Palace & Jaswant Thada in Jodhpur',
    'Camel safari & sunset at Sam Sand Dunes in Jaisalmer',
    'Evening cultural program with folk dance in Jaisalmer desert camp'
  ],

  inclusions: [
    'Accommodation on triple sharing basis in hotels or similar',
    'Daily breakfast & dinner at hotel',
    'Train fare (Sleeper/3AC/2AC/1AC as per package)',
    'Private land transportation from pick-up to drop (as per itinerary)',
    'Includes driver allowance, fuel, tolls & parking',
    'One camel safari at Jaisalmer (2 pax per camel)',
    'Evening cultural program with snacks at Jaisalmer camp'
  ],
  exclusions: [
    'Lunches not included',
    'Monument entry fees, guide & camera charges',
    'Alcoholic drinks, mineral water & personal beverages',
    'Personal expenses like tips, calls, laundry, etc.',
    'Extra activities: boating, pony rides, safaris (other than included)',
    'Travel insurance',
    'Anything not mentioned under "Cost Includes"',
    '5% GST not included'
  ],

  itinerary: [
    {
      day: 1,
      title: 'Mumbai to Jaipur',
      description: 'Overnight train journey from Mumbai to Jaipur.',
      activities: ['Board train from Mumbai to Jaipur'],
      meals: ['-'],
      accommodation: 'Overnight Train'
    },
    {
      day: 2,
      title: 'Arrival at Jaipur',
      description: 'Pick-up and transfer to hotel. Visit Birla Mandir & local bazaar.',
      activities: ['Arrival in Jaipur', 'Visit Birla Mandir', 'Explore Jaipur Bazaar'],
      meals: ['Dinner'],
      accommodation: 'Stay in Jaipur'
    },
    {
      day: 3,
      title: 'Jaipur Sightseeing',
      description: 'Explore Jaipur’s iconic forts and palaces.',
      activities: [
        'Amber Fort',
        'Jal Mahal',
        'Hawa Mahal',
        'Jantar Mantar',
        'City Palace'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay in Jaipur'
    },
    {
      day: 4,
      title: 'Jaipur to Udaipur (400 km / 8 hrs)',
      description: 'Drive to Udaipur via Kishangarh Marble Dumping Yard & Pushkar.',
      activities: [
        'Check-out from Jaipur',
        'Visit Marble Dumping Yard, Kishangarh',
        'Visit Brahma Temple at Pushkar (time permitting)',
        'Transfer to Udaipur'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay in Udaipur'
    },
    {
      day: 5,
      title: 'Udaipur Sightseeing',
      description: 'Experience the Venice of the East with lakes & palaces.',
      activities: [
        'Fateh Sagar',
        'Sahelion-ki-Bari',
        'City Palace',
        'Jagdish Temple',
        'Evening boat ride at Lake Pichola (own cost)'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay in Udaipur'
    },
    {
      day: 6,
      title: 'Udaipur to Jodhpur (250 km / 6 hrs)',
      description: 'Drive to Jodhpur via Ranakpur Jain Temple.',
      activities: ['Check-out from Udaipur', 'Visit Ranakpur Jain Temple', 'Arrive in Jodhpur'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay in Jodhpur'
    },
    {
      day: 7,
      title: 'Jodhpur Sightseeing & Transfer to Jaisalmer (280 km / 5 hrs)',
      description: 'Visit Jodhpur highlights and transfer to Jaisalmer.',
      activities: [
        'Umaid Bhavan Palace Museum',
        'Jaswant Thada',
        'Mehrangarh Fort',
        'Drive to Jaisalmer'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay in Jaisalmer'
    },
    {
      day: 8,
      title: 'Jaisalmer Sightseeing + Desert Camp',
      description:
        'Explore Golden Fort & Havelis before heading to desert for camel safari & cultural evening.',
      activities: [
        'Visit Jaisalmer Fort (Sonar Kella)',
        'Patwon-ki-Haveli',
        'Gadisar Lake',
        'Camel ride & sunset at Sam Sand Dunes',
        'Evening cultural program with folk dance'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Desert Camp at Jaisalmer'
    },
    {
      day: 9,
      title: 'Jaisalmer to Jodhpur Drop',
      description: 'Transfer to Jodhpur railway station for return journey.',
      activities: ['Check-out from Jaisalmer', 'Drive to Jodhpur Railway Station'],
      meals: ['Breakfast'],
      accommodation: 'Overnight Train'
    },
    {
      day: 10,
      title: 'Arrival in Mumbai',
      description: 'Return with memories of Rajasthan – Land of Royals.',
      activities: ['Arrival in Mumbai'],
      meals: ['-']
    }
  ],

  pricingOptions: [
    {
      id: 'standard',
      title: 'Sleeper Class',
      price: 23200,
      description: 'Train journey in Sleeper Class'
    },
    {
      id: 'deluxe',
      title: 'SL class',
      price: 24400,
      description: 'Train journey in 3 AC Class',
      isPopular: true
    },
    {
      id: 'premium',
      title: '3 AC',
      price: 26200,
      description: 'Train journey in 2 AC Class'
    }
  ],

batchDates: [
  {
    id: 'batch-1',
    startDate: '27-09-2025',
    endDate: '06-10-2025',
    totalSlots: 15,
    availableSlots: 15,
    price: 23200
  },
  {
    id: 'batch-2',
    startDate: '02-10-2025',
    endDate: '11-10-2025',
    totalSlots: 15,
    availableSlots: 15,
    price: 23200
  },
  {
    id: 'batch-3',
    startDate: '18-10-2025',
    endDate: '27-10-2025',
    totalSlots: 15,
    availableSlots: 15,
    price: 23200
  },
  {
    id: 'batch-4',
    startDate: '23-10-2025',
    endDate: '01-11-2025',
    totalSlots: 15,
    availableSlots: 15,
    price: 23200
  },
  {
    id: 'batch-5',
    startDate: '01-11-2025',
    endDate: '10-11-2025',
    totalSlots: 15,
    availableSlots: 15,
    price: 23200
  },
  {
    id: 'batch-6',
    startDate: '22-11-2025',
    endDate: '01-12-2025',
    totalSlots: 15,
    availableSlots: 15,
    price: 23200
  },
  {
    id: 'batch-7',
    startDate: '13-12-2025',
    endDate: '22-12-2025',
    totalSlots: 15,
    availableSlots: 15,
    price: 23200
  },
  {
    id: 'batch-8',
    startDate: '20-12-2025',
    endDate: '29-12-2025',
    totalSlots: 25,
    availableSlots: 25,
    price: 23200
  },
  {
    id: 'batch-9',
    startDate: '25-12-2025',
    endDate: '03-01-2026',
    totalSlots: 25,
    availableSlots: 25,
    price: 23200
  },
  {
    id: 'batch-10',
    startDate: '27-12-2025',
    endDate: '05-01-2026',
    totalSlots: 25,
    availableSlots: 25,
    price: 23200
  },
  {
    id: 'batch-11',
    startDate: '10-01-2026',
    endDate: '19-01-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 23200
  },
  {
    id: 'batch-12',
    startDate: '24-01-2026',
    endDate: '02-02-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 23200
  },
  {
    id: 'batch-13',
    startDate: '14-02-2026',
    endDate: '23-02-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 23200
  },
  {
    id: 'batch-14',
    startDate: '21-02-2026',
    endDate: '02-03-2026',
    totalSlots: 15,
    availableSlots: 15,
    price: 23200
  }
]

};
