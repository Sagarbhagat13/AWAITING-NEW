export const vietnamRomanticItinerary = {
  id: 'vietnam-002',
  title: 'Vietnam Romantic Escape',
  location: 'Vietnam (Hanoi – Ninh Binh – Halong Bay)',
  price: 29999, // Add INR cost if available
  discount: 0,
  duration: '5 Days / 4 Nights',
  description:
    'A romantic getaway through the cultural charm of Hanoi, the natural beauty of Ninh Binh, and the magical Halong Bay cruise. Perfect for couples looking for a blend of adventure and intimacy.',

  rating: 4.9,
  reviews: 215,
  images: [
    'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZpZXRuYW18ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1603852452378-a4e8d84324a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZpZXRuYW18ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1555921015-5532091f6026?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHZpZXRuYW18ZW58MHx8MHx8fDA%3D'
  ],
  placesCovered: ['Hanoi', 'Ninh Binh', 'Halong Bay'],
  highlights: [
    'Hanoi city tour with Hoan Kiem Lake and Old Quarter',
    'Boat ride at Trang An or Tam Coc (Ninh Binh)',
    'Visit Bai Dinh Pagoda – the largest in Vietnam',
    'Luxury overnight cruise in Halong Bay',
    'Romantic sunset and sunrise views on deck'
  ],
  inclusions: [
    'Accommodation in 4-star hotels and luxury cruise',
    'Daily breakfast',
    'Transfers by private car/coach',
    'Guided tours and entrance fees as per itinerary',
    'Overnight Halong Bay cruise with all meals included'
  ],
  exclusions: [
    'Airfare (International & Domestic)',
    'Visa fees for Vietnam',
    'Personal expenses such as drinks, laundry, tips',
    'Travel insurance',
    'Anything not mentioned in inclusions'
  ],
  faqs: [
    {
      question: 'Is the Halong Bay cruise private?',
      answer: 'The cruise is luxury shared, but private upgrades are available on request.'
    },
    {
      question: 'Are meals included?',
      answer: 'Breakfast is included daily, and all meals are included on the Halong Bay cruise.'
    },
    {
      question: 'Do I need a visa for Vietnam?',
      answer: 'Yes. Indian passport holders require a visa, which can be applied online (e-visa).'
    },
    {
      question: 'What is the best time to visit Vietnam?',
      answer: 'October to April is the best time with cool weather and clear skies.'
    },
    {
      question: 'Is the package suitable for honeymooners?',
      answer: 'Yes. The package is designed for couples and includes romantic experiences like Halong Bay sunset and private moments in Ninh Binh.'
    }
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Hanoi',
      description:
        'Arrive at Hanoi Airport, meet your guide, and transfer to hotel. Evening free to explore Hoan Kiem Lake and Old Quarter.',
      activities: ['Arrival in Hanoi', 'Hotel check-in', 'Evening stroll around Hoan Kiem Lake & Old Quarter'],
      meals: ['-'],
      accommodation: 'Stay in Hanoi (hotel)'
    },
    {
      day: 2,
      title: 'Hanoi – Ninh Binh (Trang An/Tam Coc & Bai Dinh Pagoda)',
      description:
        'After breakfast, drive to Ninh Binh (2 hrs). Visit Bai Dinh Pagoda and enjoy a boat ride through the scenic Trang An or Tam Coc caves. Evening return to Hanoi.',
      activities: ['Drive to Ninh Binh', 'Visit Bai Dinh Pagoda', 'Boat ride at Trang An/Tam Coc', 'Return to Hanoi'],
      meals: ['Breakfast'],
      accommodation: 'Stay in Hanoi (hotel)'
    },
    {
      day: 3,
      title: 'Hanoi – Halong Bay Cruise',
      description:
        'Depart for Halong Bay (3.5 hrs). Board luxury cruise and enjoy lunch while sailing through limestone karsts. Visit caves, swim, or kayak. Evening sunset on deck with dinner.',
      activities: ['Drive to Halong Bay', 'Check-in on cruise', 'Cruise & sightseeing', 'Sunset views', 'Dinner onboard'],
      meals: ['Breakfast', 'Lunch', 'Dinner'],
      accommodation: 'Overnight on Halong Bay cruise'
    },
    {
      day: 4,
      title: 'Halong Bay – Hanoi',
      description:
        'Morning Tai Chi session on deck. Explore a cave or fishing village before brunch. Disembark and transfer back to Hanoi. Evening free for leisure or shopping.',
      activities: ['Morning Tai Chi', 'Cave/fishing village visit', 'Brunch onboard', 'Return to Hanoi'],
      meals: ['Breakfast', 'Brunch'],
      accommodation: 'Stay in Hanoi (hotel)'
    },
    {
      day: 5,
      title: 'Departure from Hanoi',
      description:
        'After breakfast, check out and transfer to Hanoi Airport for your onward journey. Trip ends with beautiful memories.',
      activities: ['Check-out from hotel', 'Airport transfer'],
      meals: ['Breakfast'],
      accommodation: '-'
    }
  ],
  pricingOptions: [
    {
      id: 'standard',
      title: 'Per Person (4-Star Hotels + Cruise)',
      price: 29999, // Add INR price if available
      description: '5D/4N Vietnam romantic package with 4-star hotels and luxury Halong Bay cruise'
    }
  ]
};
