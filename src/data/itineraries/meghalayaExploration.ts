
export const meghalayaExplorationItinerary = {
  id: '4',
  title: 'Meghalaya Explorationn',
  location: 'North East',
  price: 24999,
  discount: 5,
  duration: '6 Days / 5 Nights',
  description: 'Discover the abode of clouds in this immersive journey through Meghalaya. Explore living root bridges, crystal clear rivers, magnificent waterfalls, and experience the unique culture of this northeastern state.',
  coverImage: 'https://images.unsplash.com/photo-1461301214746-1e109215d6d3?q=80&w=2070&auto=format&fit=crop',
  rating: 4.6,
  reviews: 134,
  images: [
    'https://images.unsplash.com/photo-1461301214746-1e109215d6d3?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=2069&auto=format&fit=crop'
  ],
  placesCovered: ['Shillong', 'Cherrapunji', 'Mawlynnong', 'Dawki', 'Nongriat', 'Krang Shuri'],
  highlights: [
    'Trek to the unique Double Decker Living Root Bridge - a bio-engineering marvel',
    'Visit Mawlynnong, recognized as the cleanest village in Asia',
    'Experience boating in the crystal clear waters of Dawki River',
    'Explore numerous waterfalls including the majestic Nohkalikai Falls',
    'Visit the wettest place on Earth - Cherrapunji',
    'Discover natural swimming pools and blue lagoons',
    'Experience local Khasi culture and cuisine',
    'Visit ancient sacred forests with unique biodiversity'
  ],
  inclusions: [
    'Accommodation in hotels and homestays on twin-sharing basis',
    'Meals as per itinerary (5 Breakfasts, 5 Dinners)',
    'All transfers and sightseeing in private vehicle',
    'English-speaking local guide',
    'Permits for restricted areas',
    'Trek to Double Decker Living Root Bridge with guide',
    'Boat ride at Dawki River',
    'All applicable taxes'
  ],
  exclusions: [
    'Airfare/train tickets to/from Guwahati',
    'Personal expenses and tips',
    'Camera fees at monuments/attractions',
    'Any meals not mentioned in inclusions',
    'Travel insurance',
    'Any additional activities not mentioned in the itinerary',
    'Additional expenses due to natural calamities or political disturbances'
  ],
  faqs: [
    {
      question: 'How do I reach Meghalaya?',
      answer: 'The nearest airport is in Guwahati (Assam). From there, it\'s approximately a 3-hour drive to Shillong, the capital of Meghalaya. We provide pickup from Guwahati airport.'
    },
    {
      question: 'Is the trek to Double Decker Root Bridge difficult?',
      answer: 'The trek involves approximately 3,500 steps down and then back up. It\'s of moderate difficulty and takes about 3-4 hours round trip. Good physical fitness is recommended, but most people can complete it with periodic rest.'
    },
    {
      question: 'When is the best time to visit Meghalaya?',
      answer: 'October to May is ideal. October-November offers clear skies post-monsoon with lush landscapes. December-February is cooler but pleasant. March-May is warmer with generally good weather. June-September experiences heavy rainfall and while stunningly green, some activities may be limited.'
    },
    {
      question: 'What kind of clothing should I pack?',
      answer: 'Lightweight, quick-dry clothing is recommended. A light jacket or sweater for evenings, good trekking shoes, rain gear (even in dry season), swimwear for natural pools, and modest clothing for village visits are essential.'
    },
    {
      question: 'Is Meghalaya safe for tourists?',
      answer: 'Yes, Meghalaya is generally very safe for tourists. The local Khasi, Jaintia, and Garo communities are friendly and hospitable. Like anywhere, basic travel precautions are advised.'
    }
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Guwahati and drive to Shillong',
      description: 'Arrive at Guwahati airport/railway station and drive to Shillong, the capital of Meghalaya. Stop at Umiam Lake (Barapani) en route.',
      activities: [
        'Airport/railway station pickup',
        'Drive to Shillong (3 hours)',
        'Stop at Umiam Lake for photography',
        'Evening leisure walk at Police Bazaar'
      ],
      meals: ['Dinner at hotel'],
      accommodation: 'Hotel in Shillong'
    },
    {
      day: 2,
      title: 'Shillong to Cherrapunji',
      description: 'Explore Shillong in the morning and then drive to Cherrapunji, famous for being one of the wettest places on Earth.',
      activities: [
        'Visit Shillong Peak for panoramic views',
        'Explore Don Bosco Museum of Indigenous Cultures',
        'Drive to Cherrapunji',
        'Visit Nohkalikai Falls, India\'s tallest plunge waterfall',
        'Explore Seven Sisters Falls (Nohsngithiang Falls)'
      ],
      meals: ['Breakfast at hotel', 'Dinner at hotel/homestay'],
      accommodation: 'Hotel/Homestay in Cherrapunji'
    },
    {
      day: 3,
      title: 'Trek to Double Decker Living Root Bridge',
      description: 'Early morning drive to Tyrna village followed by a trek to the famous Double Decker Living Root Bridge in Nongriat village.',
      activities: [
        'Drive to Tyrna village, the starting point of the trek',
        'Trek to Nongriat village (3500 steps, approximately 3-4 hours round trip)',
        'Experience the unique Double Decker Living Root Bridge',
        'Swim in natural pools (optional)',
        'Trek back to Tyrna',
        'Return to Cherrapunji'
      ],
      meals: ['Breakfast at hotel', 'Packed lunch', 'Dinner at hotel/homestay'],
      accommodation: 'Hotel/Homestay in Cherrapunji'
    },
    {
      day: 4,
      title: 'Cherrapunji to Mawlynnong and Dawki',
      description: 'Drive to Mawlynnong, known as Asia\'s cleanest village, and visit the India-Bangladesh border at Dawki with its crystal clear river.',
      activities: [
        'Visit Mawlynnong village',
        'See the Living Root Bridge in Riwai',
        'Visit Sky View platform (bamboo structure)',
        'Drive to Dawki',
        'Boat ride on the crystal-clear Dawki River',
        'View the Bangladesh border'
      ],
      meals: ['Breakfast at hotel', 'Dinner at homestay'],
      accommodation: 'Homestay in Mawlynnong/Shnongpdeng'
    },
    {
      day: 5,
      title: 'Krang Shuri Waterfall and return to Shillong',
      description: 'Visit the stunning blue waters of Krang Shuri Waterfall before returning to Shillong.',
      activities: [
        'Drive to Krang Shuri Waterfall',
        'Swimming in the blue lagoon (optional)',
        'Return to Shillong',
        'Evening shopping at local markets',
        'Cultural dinner experience'
      ],
      meals: ['Breakfast at homestay', 'Dinner at local restaurant'],
      accommodation: 'Hotel in Shillong'
    },
    {
      day: 6,
      title: 'Shillong to Guwahati Departure',
      description: 'After breakfast, drive back to Guwahati for your onward journey.',
      activities: [
        'Last minute shopping in Shillong (if time permits)',
        'Drive to Guwahati airport/railway station',
        'Tour concludes'
      ],
      meals: ['Breakfast at hotel'],
      accommodation: 'N/A (Tour ends)'
    }
  ]
};
