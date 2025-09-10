
export const rannofkutch = {
  
  id: 'xny5',
  title: 'Experience the White Rann of Kutch',
  location: 'Gujarat',
  price: 11150,
  discount: 0,
  duration: '4 Days / 3 Nights',
  description: 'Witness the surreal beauty of the Great Rann of Kutch, famous for its white salt desert, cultural programs, and heritage monuments. Enjoy traditional stays, vibrant folk performances, and breathtaking sunsets.',
  coverImage: 'https://images.unsplash.com/photo-1602605004437-b0df59e2f25d?auto=format&fit=crop&w=1200&q=80',
  rating: 4.6,
  reviews: 72,
images: [
  'https://images.unsplash.com/photo-1607354508900-d18bcb5086f6?auto=format&fit=crop&w=1200&q=80', // White salt desert at Rann of Kutch
  'https://images.unsplash.com/photo-1612444530248-f28285a44c6f?auto=format&fit=crop&w=1200&q=80', // Sunset at Dhordo Village
  'https://images.unsplash.com/photo-1638096249615-fcf989baf4c3?auto=format&fit=crop&w=1200&q=80', // Camel ride in Rann of Kutch
  'https://images.unsplash.com/photo-1602605004437-b0df59e2f25d?auto=format&fit=crop&w=1200&q=80'  // Cultural festival at Rann
]
,
  placesCovered: ['Bhuj', 'Rann of Kutch', 'Kala Dungar', 'Dhordo Village', 'Aaina Mahal', 'Kutch Museum', 'Swaminarayan Temple'],
  highlights: [
    'Witness the surreal White Rann during sunset & sunrise',
    'Attend the cultural festival with folk music & dance',
    'Visit Kala Dungar with panoramic desert views',
    'Stay in traditional Kutchi tents and resorts',
    'Explore Aaina Mahal, Chhatedi & Kutch Museum',
    'Shop handicrafts & local art in Bhuj markets'
  ],
  inclusions: [
    '3 Star accommodations in Bhuj / Dhordo',
    'Breakfast & Dinner during the trip',
    'AC Mini Bus / Tempo Traveller (AC off in hilly regions)',
    'Pickup & Drop from Bhuj Railway Station / Airport',
    'Rann Cultural Program entry',
    'Guided sightseeing in Bhuj & Rann'
  ],
  exclusions: [
    'Train/flight fare to Bhuj (unless mentioned)',
    'Lunch during the trip',
    'Personal expenses & shopping',
    'Entry fees (if not mentioned)',
    'Travel Insurance',
    'Any cost due to unforeseen circumstances'
  ],
  faqs: [
    {
      question: 'What is the best time to visit Rann of Kutch?',
      answer: 'The best time is during the Rann Utsav (Nov–Feb) when the salt desert shines under the moonlight and cultural programs are held daily.'
    },
    {
      question: 'How cold does it get at night?',
      answer: 'During December & January, temperatures can drop to 7–10°C at night. Carry warm clothes and jackets.'
    },
    {
      question: 'Are meals included?',
      answer: 'Breakfast & Dinner are included. Lunch is at your own expense, giving you the flexibility to try local cuisine.'
    },
    {
      question: 'What type of accommodation is provided?',
      answer: 'You’ll stay in 3-star hotels in Bhuj and traditional Kutchi-style tents/resorts in Dhordo near the Rann.'
    },
    {
      question: 'Can children join this trip?',
      answer: 'Yes, children are welcome. Kids below 5 years of age have no cost. However, parents must supervise them during cultural events and sightseeing.'
    }
  ],

itinerary: [
  {
    day: 1,
    title: 'Mumbai / Surat / Vadodara / Ahmedabad to Bhuj',
    description: 'Begin your Rann of Kutch journey with an overnight train ride from Mumbai or other boarding cities.',
    activities: [
      'Mumbai participants catch Sayaji Express (20907) from Dadar',
      'Overnight train journey to Bhuj',
      'Arrive in Bhuj next morning by 6:30 AM'
    ],
    meals: [],
    accommodation: 'Overnight Train Journey'
  },
  {
    day: 2,
    title: 'Bhuj to Rann of Kutch',
    description: 'Explore Bhuj and the stunning White Rann with a cultural evening.',
    activities: [
      'Pickup from Bhuj Railway Station / Airport / Bus Stand',
      'Breakfast and drive to Kala Dungor',
      'Enjoy scenic views and glimpse the India–Pakistan border',
      'Check-in to a luxurious stay',
      'Visit Dhordo Village and witness a majestic sunset',
      'Attend the Rann cultural program/festival with music & dance',
      'Optional: Experience the glistening White Rann under moonlight'
    ],
    meals: ['Breakfast', 'Dinner'],
    accommodation: 'Traditional Tent Stay near Rann'
  },
  {
    day: 3,
    title: 'Rann of Kutch to Bhuj',
    description: 'Return to Bhuj and explore its heritage landmarks & markets.',
    activities: [
      'Catch the first rays of sunrise at the Rann',
      'Breakfast and hotel check-out',
      'Drive back to Bhuj with enroute sightseeing',
      'Visit Aadhiyogi Statue, Khari Nadi, Kutch Museum',
      'Explore Aaina Mahal, Chhatedi & Swaminarayan Temple',
      'Shop for handicrafts at local markets',
      'Evening drop at Bhuj Railway Station / Airport',
      'Board Sayajinagari Express (20908) for return journey'
    ],
    meals: ['Breakfast'],
    accommodation: 'Overnight Train Journey'
  },
  {
    day: 4,
    title: 'Arrival at Ahmedabad / Vadodara / Surat / Mumbai',
    description: 'Return back to your city with memories of the White Rann.',
    activities: [
      'Arrival in respective cities',
      'Mumbai participants reach Borivali by 1:10 PM and Dadar by 1:50 PM'
    ],
    meals: [],
    accommodation: '-'
  }
],


  // Pricing tiers
  pricingOptions: [
    {
      id: 'standard',
      title: 'Without Train Fare',
      price: 7500,
      description: 'Standard package with basic amenities',
      isPopular: true
    },
    {
      id: 'deluxe',
      title: 'Sleeping Berth in Train',
      price: 8550,
      description: 'Double occupancy with enhanced comfort',
    },
    ,
    {
      id: 'premium',
      title: '3AC Berth in Train',
      price: 10150,
      description: 'Double occupancy with enhanced comfort',
    }
  ],
  
  // Available batch dates
batchDates: [
  {
    id: 'batch-1',
    startDate: '25-12-2025',
    endDate: '28-12-2025',
    totalSlots: 12,
    availableSlots: 8,
    price: 7499
  }
]

    // Add more batch dates...
  
};
