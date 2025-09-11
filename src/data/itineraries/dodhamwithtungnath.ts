export const dodham = {
  id: 'lw9',
  title: 'Do Dham Yatra – Kedarnath & Badrinath',
  location: 'Uttarakhand, India',
  price: 17999,
  discount: 0,
  duration: '7n/8d',
  description:
    'A spiritual journey through the Himalayas covering Haridwar, Kedarnath, Badrinath, and sacred confluences. Experience devotion, trekking, and divine energy of the Do Dham Yatra.',
  rating: 4.9,
  reviews: 248,
  images: [
    'https://images.unsplash.com/photo-1649147313351-c86537fda0eb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2VkYXJuYXRofGVufDB8fDB8fHww', // Kedarnath Temple
    'https://images.unsplash.com/photo-1601821139314-66a4d14cfc00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFkcmluYXRofGVufDB8fDB8fHww', // Badrinath Temple
    'https://images.unsplash.com/photo-1699214101660-df4e21fbabcd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNob3B0YXxlbnwwfHwwfHx8MA%3D%3D', // Chopta Valley
    'https://images.unsplash.com/photo-1622206591629-012126483664?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2cHJheWFnfGVufDB8fDB8fHww' // Rishikesh Ganga Aarti
  ],

  placesCovered: [
    'Haridwar',
    'Guptkashi',
    'Kedarnath',
    'Chopta',
    'Govindghat',
    'Badrinath',
    'Rishikesh/Rudraprayag'
  ],

  highlights: [
    'Evening Ganga Aarti at Har Ki Pauri, Haridwar',
    'Darshan at Kedarnath Temple with evening Aarti',
    'Trek to Tungnath Temple at Chopta',
    'Badrinath Darshan & Tapt Kund holy bath',
    'Confluences of Devprayag, Rudraprayag & Nandaprayag',
    'Visit to Ram Jhula & Parmarth Niketan Ashram in Rishikesh'
  ],

  inclusions: [
    '3★ Hotels & Camps with quad sharing accommodation',
    'Breakfast & Dinner as per itinerary',
    'Train fares (Mumbai–Delhi–Mumbai)',
    'Transfers & Sightseeing as per itinerary',
    'Fuel, Toll, Parking, Driver Allowances, Border Tax'
  ],
  exclusions: [
    'Lunch expenses',
    'Monument entry, guide & camera charges',
    'Small vehicle charges Sonprayag–Gaurikund',
    'Pony/Doli charges for Kedarnath trek',
    'Adventure activities (rafting, ropeway, etc.)',
    'Beverages (alcohol, mineral water, soft drinks)',
    'Personal expenses (calls, laundry, tips, room heaters, bar, etc.)',
    'Extra meals not mentioned in inclusions',
    'Cost due to delays/weather/road closure/medical issues',
    'Travel insurance',
    'GST (5%)'
  ],

  faqs: [
    {
      question: 'Is the Kedarnath trek included?',
      answer:
        'The trek is included in the itinerary, but expenses for Pony/Doli are extra and at personal cost.'
    },
    {
      question: 'What is the accommodation type?',
      answer:
        'Accommodation will be in 3★ hotels and camps on a quad sharing basis.'
    },
    {
      question: 'Are meals included?',
      answer:
        'Yes, breakfast and dinner are included as per the itinerary. Lunch is at personal cost.'
    },
    {
      question: 'Is there a double/triple sharing option?',
      answer:
        'Yes, double sharing is available at ₹3,000 per person and triple sharing at ₹1,500 per person extra.'
    }
  ],

  itinerary: [
    {
      day: 1,
      title: 'Mumbai ➝ Delhi',
      description: 'Board overnight train from Mumbai to Delhi.',
      activities: ['Overnight train journey'],
      meals: ['-'],
      accommodation: 'Overnight Train'
    },
    {
      day: 2,
      title: 'Delhi ➝ Haridwar (210 KM | 6–7 Hrs)',
      description:
        'Arrival in Delhi, transfer to Haridwar. Evening visit Har Ki Pauri for Ganga Aarti.',
      activities: ['Delhi to Haridwar drive', 'Har Ki Pauri Ganga Aarti'],
      meals: ['Dinner'],
      accommodation: 'Stay at Haridwar'
    },
    {
      day: 3,
      title: 'Haridwar ➝ Guptkashi',
      description:
        'Drive to Guptkashi via Devprayag & Rudraprayag (confluences).',
      activities: [
        'Visit Devprayag (Alaknanda & Bhagirathi confluence)',
        'Visit Rudraprayag (Alaknanda & Mandakini confluence)'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay at Guptkashi'
    },
    {
      day: 4,
      title: 'Guptkashi ➝ Kedarnath',
      description:
        'Drive to Sonprayag, then trek/pony/doli to Kedarnath. Evening Darshan & Aarti.',
      activities: [
        'Drive to Sonprayag',
        'Small vehicle to Gaurikund',
        'Trek to Kedarnath Temple',
        'Evening Aarti'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay at Kedarnath'
    },
    {
      day: 5,
      title: 'Kedarnath ➝ Guptkashi',
      description:
        'Descend trek from Kedarnath to Gaurikund and drive back to Guptkashi.',
      activities: ['Morning trek down', 'Drive to Guptkashi'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay at Guptkashi'
    },
    {
      day: 6,
      title: 'Guptkashi ➝ Chopta',
      description: 'Drive to Chopta & trek to Tungnath Temple.',
      activities: ['Scenic drive to Chopta', 'Trek to Tungnath Temple'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay at Chopta (Camp)'
    },
    {
      day: 7,
      title: 'Chopta ➝ Govindghat',
      description:
        'Drive to Govindghat with enroute visits to Narsingh Temple & Adi Shankaracharya Samadhi at Joshimath.',
      activities: [
        'Drive to Govindghat',
        'Visit Narsingh Temple',
        'Visit Adi Shankaracharya Samadhi'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay at Govindghat'
    },
    {
      day: 8,
      title: 'Govindghat ➝ Badrinath ➝ Rishikesh/Rudraprayag',
      description:
        'Early morning drive to Badrinath for Darshan. Later proceed to Rishikesh/Rudraprayag.',
      activities: [
        'Badrinath Temple Darshan',
        'Tapt Kund holy bath',
        'Visit Vyas Gufa, Bheem Pul & Saraswati River'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay at Rishikesh/Rudraprayag'
    },
    {
      day: 9,
      title: 'Rishikesh/Rudraprayag ➝ Delhi',
      description:
        'Morning visit Ram Jhula & Parmarth Niketan (if time permits). Drive to Delhi Railway Station.',
      activities: ['Ram Jhula', 'Parmarth Niketan', 'Drive to Delhi'],
      meals: ['Breakfast'],
      accommodation: 'Overnight Train'
    },
    {
      day: 10,
      title: 'Arrival in Mumbai',
      description: 'Arrive back in Mumbai with divine memories.',
      activities: ['Arrival in Mumbai'],
      meals: ['-']
    }
  ],

  pricingOptions: [
    {
      id: 'standard',
      title: 'Quad Sharing',
      price: 17999,
      description: 'Standard package cost with quad sharing',
      isPopular: true
    },
    {
      id: 'deluxe',
      title: 'Sl train',
      price: 20100,
      description: 'Triple sharing package (extra ₹1,500 per person)'
    },
    {
      id: 'premium',
      title: '3AC train',
      price: 21300,
      description: 'Double sharing package (extra ₹3,000 per person)'
    }
  ],

  batchDates: [
    {
      id: 'batch-1',
      startDate: '26-09-2025',
      endDate: '05-10-2025',
      totalSlots: 30,
      availableSlots: 20,
      price: 17999
    },
    {
      id: 'batch-2',
      startDate: '03-10-2025',
      endDate: '12-10-2025',
      totalSlots: 30,
      availableSlots: 18,
      price: 17999
    }
  ]
};
