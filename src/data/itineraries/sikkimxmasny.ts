export const sikkimdarjeeling = {
  id: 'xn13',
  title: 'Sikkim & Darjeeling Escape: Where Nature Meets Culture',
  location: 'Sikkim & Darjeeling',
  price: 21999,
  discount: 0,
  duration: '6 Days / 5 Nights',
  description:
    'Explore the serene landscapes of Gangtok and the colonial charm of Darjeeling. Witness pristine lakes, vibrant monasteries, Himalayan sunrises, tea gardens, and cultural gems on this unforgettable journey through Sikkim and Darjeeling.',
  rating: 4.7,
  reviews: 128,
  images: [
    'https://images.unsplash.com/photo-1635346537940-9d51faeb6e32?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FuZ3Rva3xlbnwwfHwwfHx8MA%3D%3D', // Gangtok MG Road
    'https://images.unsplash.com/photo-1641233122088-9562e3ef0105?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FuZ3Rva3xlbnwwfHwwfHx8MA%3D%3D', // Tsomgo Lake
    'https://images.unsplash.com/photo-1698753864905-a447aa362ec9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGRhcmplZWxpbmd8ZW58MHx8MHx8fDA%3D', // Rumtek Monastery
    'https://images.unsplash.com/photo-1620903376453-25f5a6fd533e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGRhcmplZWxpbmd8ZW58MHx8MHx8fDA%3D', // Darjeeling Tea Gardens
    
  ],

  placesCovered: ['Gangtok', 'Tsomgo Lake', 'Baba Mandir', 'Darjeeling', 'Tiger Hill', 'Mirik'],
  highlights: [
    'Leisurely evening at MG Road in Gangtok',
    'Tsomgo Lake & Baba Mandir excursion (Nathula Pass optional)',
    'Explore monasteries – Rumtek, Do Drul Chorten, Tibetology',
    'Flower Exhibition Centre & Handicraft Centre',
    'Darjeeling Mall Road & colonial vibes',
    'Tiger Hill sunrise over Mt. Kanchenjunga',
    'Ghoom Monastery & Batasia Loop',
    'Tea gardens & Peace Pagoda in Darjeeling',
    'Day trip to Mirik Lake & Pashupati Market (en route Bagdogra)'
  ],

  inclusions: [
    'Accommodation on triple sharing basis in hotels or similar',
    'Daily breakfast & dinner as per itinerary',
    'Private land transportation from Bagdogra pick-up to drop (as per itinerary)',
    'Includes fuel, driver allowance, toll & border taxes',
    'Parking and entry charges included (as applicable)'
  ],
  exclusions: [
    'Lunch expenses',
    'Train/Air fares excluded',
    'Entry fees for monuments, cultural shows, guide & camera charges',
    'Nathula Pass entry (to be paid separately as per taxi union rules)',
    'Alcoholic drinks, mineral water, and personal beverages',
    'Personal expenses: tips, calls, laundry, games, spa, etc.',
    'Activities like ropeway rides, pony rides, boating, etc. (other than mentioned)',
    'Extra food/beverages beyond buffet or fixed meals',
    'Vehicle limited to permitted parking points only',
    'Costs due to weather, illness, or roadblocks not covered',
    'Travel insurance not included',
    'Anything not mentioned under "Cost Includes"',
    '5% GST not included'
  ],

  faqs: [
    {
      question: 'Is Nathula Pass included in the package?',
      answer:
        'No, Nathula Pass entry is not included. It must be paid separately as per taxi union rules. Also, note Nathula Pass remains closed on Mondays & Tuesdays and is subject to weather conditions.'
    },
    {
      question: 'What meals are included?',
      answer:
        'Breakfast and dinner are included daily. Lunch is excluded so guests can explore local cuisine.'
    },
    {
      question: 'What kind of accommodation is provided?',
      answer:
        'Comfortable hotels/guesthouses on triple sharing basis in Gangtok and Darjeeling.'
    },
    {
      question: 'Can I do the ropeway in Gangtok?',
      answer:
        'Yes, the Gangtok Ropeway can be done at your own cost, subject to weather and availability.'
    }
  ],

  itinerary: [
    {
      day: 1,
      title: 'Bagdogra to Gangtok',
      description: 'Arrival & transfer to Gangtok (5,480 ft).',
      activities: [
        'Pick-up from Bagdogra Airport',
        'Drive to Gangtok',
        'Evening leisure at MG Road (by walk)',
        'Enjoy your stay at Gangtok'
      ],
      meals: ['Dinner'],
      accommodation: 'Stay at Gangtok'
    },
    {
      day: 2,
      title: 'Tsomgo Lake & Baba Mandir',
      description: 'Day trip to iconic Sikkim highlights.',
      activities: [
        'Visit Tsomgo Lake (12,400 ft)',
        'Visit Baba Mandir (13,200 ft)',
        'Optional Nathula Pass visit (extra cost, subject to permit & weather)',
        'Return to Gangtok'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay at Gangtok'
    },
    {
      day: 3,
      title: 'Gangtok Sightseeing',
      description: 'Explore monasteries, culture & local gems.',
      activities: [
        'Handicraft Centre & Flower Exhibition Centre',
        'Rumtek Monastery',
        'Do Drul Chorten Stupa & Tibetology Institute',
        'Optional Gangtok Ropeway (own cost)'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay at Gangtok'
    },
    {
      day: 4,
      title: 'Gangtok to Darjeeling',
      description: 'Scenic transfer to the Queen of Hills.',
      activities: [
        'Breakfast at hotel',
        'Drive from Gangtok to Darjeeling',
        'Evening leisure at Mall Road',
        'Enjoy your stay at Darjeeling'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay at Darjeeling'
    },
    {
      day: 5,
      title: 'Darjeeling Sightseeing',
      description: 'Discover the cultural & scenic gems of Darjeeling.',
      activities: [
        'Early morning drive to Tiger Hill – sunrise over Kanchenjunga',
        'Ghoom Monastery & Batasia Loop',
        'Himalayan Mountaineering Institute & P.N. Zoological Park',
        'Tenzing Rock & Tea Garden visit',
        'Japanese Temple (Peace Pagoda)',
        'Evening stroll at Mall Road'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay at Darjeeling'
    },
    {
      day: 6,
      title: 'Darjeeling to Bagdogra',
      description: 'Farewell with scenic stopovers en route.',
      activities: [
        'Drive to Bagdogra (approx 70 km / 3 hrs)',
        'En route visit Mirik Lake & Pashupati Market',
        'Drop at Bagdogra Airport / Railway Station'
      ],
      meals: ['Breakfast']
    }
  ],

  pricingOptions: [
    {
      id: 'standard',
      title: 'Triple Sharing',
      price: 21999,
      description: 'Package cost for triple sharing',
      isPopular: true
    },
    {
      id: 'deluxe',
      title: 'Double Sharing',
      price: 23999,
      description: 'Package cost for double sharing'
    }
  ],

  batchDates: [
    {
      id: 'batch-1',
      startDate: '20-12-2025',
      endDate: '25-12-2025',
      totalSlots: 20,
      availableSlots: 12,
      price: 21999
    },
    {
      id: 'batch-2',
      startDate: '25-12-2025',
      endDate: '30-12-2025',
      totalSlots: 20,
      availableSlots: 10,
      price: 21999
    },
    {
      id: 'batch-3',
      startDate: '27-12-2025',
      endDate: '01-01-2026',
      totalSlots: 20,
      availableSlots: 15,
      price: 21999
    }
  ]
};
