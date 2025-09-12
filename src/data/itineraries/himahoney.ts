export const himachalItinerary = {
  id: 'himachal-001',
  title: 'Shimla & Manali Holiday',
  location: 'Himachal Pradesh, India',
  price: 11350, // Add INR price if available
  discount: 0,
  duration: '6 Days / 5 Nights',
  description:
    'Discover the beauty of Himachal Pradesh with visits to Shimla and Manali. Explore scenic hill stations, ancient temples, Solang Valley, and more on this exciting journey.',
  
  rating: 4.8,
  reviews: 127,
  images: [
    'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpbWxhfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1609948543911-7f01ff385be5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hpbWxhfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1711359940524-ed5e0ad9b89b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuYWxpfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1516406742981-2b7d67ec4ae8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ],
  placesCovered: ['Chandigarh', 'Shimla', 'Kufri', 'Jakhu Temple', 'Christ Church', 'Mall Road', 'Manali', 'Hadimba Temple', 'Solang Valley'],
  highlights: [
    'Enroute visit to Pinjore Garden',
    'Sightseeing in Shimla: Kufri, Jakhu Temple, Christ Church, Ridge, Mall Road',
    'Manali local tour with Hadimba Temple, Van Vihar, Buddhist Monastery, Vashista Kund',
    'Excursion to Solang Valley',
    'Optional visit to Rohtang Pass (extra cost, subject to weather and permits)'
  ],
  inclusions: [
    'Accommodation in standard hotels with breakfast and dinner',
    'Transfers and sightseeing as per itinerary',
    'Pick-up and drop from Chandigarh Airport/Railway Station',
    'All applicable taxes'
  ],
  exclusions: [
    'Airfare/train fare to Chandigarh',
    'Rohtang Pass and Atal Tunnel excursion (extra payable as per taxi union rules)',
    'Lunches and personal expenses',
    'Travel insurance',
    'Anything not mentioned in inclusions'
  ],
  faqs: [
    {
      question: 'Is Rohtang Pass included in the package?',
      answer: 'No. Rohtang Pass & Atal Tunnel visit is not included and is payable directly as per taxi union rules.'
    },
    {
      question: 'What meals are included?',
      answer: 'Daily breakfast and dinner are included at the hotel.'
    },
    {
      question: 'Is this package suitable for families?',
      answer: 'Yes. Shimla and Manali are family-friendly destinations with both leisure and adventure activities.'
    },
    {
      question: 'What should I carry for this trip?',
      answer: 'Carry sufficient woolen clothes, especially if traveling between October and March when temperatures can drop below 0°C.'
    },
    {
      question: 'Are airport/railway transfers included?',
      answer: 'Yes. Pick-up and drop from Chandigarh Airport or Railway Station are included.'
    }
  ],
  itinerary: [
    {
      day: 1,
      title: 'Chandigarh – Shimla',
      description:
        'Pick up from Chandigarh Airport/Railway Station and transfer to Shimla. Enroute visit Pinjore Garden. On arrival, check-in at hotel and enjoy your stay.',
      activities: ['Chandigarh pick-up', 'Visit Pinjore Garden', 'Drive to Shimla', 'Hotel check-in'],
      meals: ['Dinner'],
      accommodation: 'Stay in Shimla (hotel)'
    },
    {
      day: 2,
      title: 'Shimla Sightseeing',
      description:
        'Explore Kufri and enjoy local sightseeing in Shimla including Jakhu Temple, Christ Church, Ridge, and Mall Road.',
      activities: ['Visit Kufri', 'Jakhu Temple', 'Christ Church', 'The Ridge', 'Mall Road'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay in Shimla'
    },
    {
      day: 3,
      title: 'Shimla – Manali',
      description: 'Check-out from Shimla and drive to Manali (7–8 hrs). Evening arrival and leisure time.',
      activities: ['Drive from Shimla to Manali', 'Hotel check-in'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay in Manali (hotel)'
    },
    {
      day: 4,
      title: 'Manali Local Sightseeing',
      description:
        'Visit Hadimba Temple, Van Vihar, Himalayan Nyinmapa Buddhist Monastery, and Vashista Kund. Evening free for shopping at Mall Road.',
      activities: ['Hadimba Temple', 'Van Vihar', 'Buddhist Monastery', 'Vashista Kund', 'Mall Road'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay in Manali'
    },
    {
      day: 5,
      title: 'Excursion to Solang Valley',
      description:
        'Proceed for a day excursion to Solang Valley. Optionally visit Rohtang Pass (extra payable, subject to weather and permits).',
      activities: ['Solang Valley excursion', 'Optional Rohtang Pass visit'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay in Manali'
    },
    {
      day: 6,
      title: 'Manali – Chandigarh Departure',
      description:
        'After breakfast, check-out from hotel and transfer to Chandigarh Airport/Railway Station for departure.',
      activities: ['Check-out', 'Drive to Chandigarh', 'Departure transfer'],
      meals: ['Breakfast'],
      accommodation: '-'
    }
  ],
  pricingOptions: [
    {
      id: 'standard',
      title: 'Per Person (Double Sharing)',
      price: 11350, // Add INR value if available
      description: '6D/5N Himachal Shimla & Manali package price per person on double sharing basis'
    }
  ]
};
