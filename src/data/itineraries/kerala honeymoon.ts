export const keralaItinerary = {
  id: 'kerala-001',
  title: 'Kerala Backwaters & Hills Tour',
  location: 'Kerala, India',
  price: 19999, // Add INR cost if available
  discount: 0,
  duration: '7 Days / 6 Nights',
  description:
    'Experience the best of Kerala with scenic hill stations, wildlife, spice plantations, and a stay on a traditional Alleppey houseboat. This trip offers a perfect mix of nature, culture, and relaxation.',
  
  rating: 4.9,
  reviews: 142,
  images: [
    'https://images.unsplash.com/photo-1628918098760-471c0fad230c?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1704365159747-1f7b8913044f?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1306&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ],
  placesCovered: ['Mumbai', 'Cochin', 'Munnar', 'Thekkady', 'Alleppey'],
  highlights: [
    'Scenic train journey from Mumbai to Cochin',
    'Hill station stay in Munnar with Echo Point, Kundala Lake, Tea Gardens, and Tea Museum',
    'Periyar Wildlife Sanctuary visit in Thekkady with optional elephant ride and jeep safari',
    'Traditional Kathakali and Kalaripayattu cultural shows',
    'Stay on a traditional Kerala houseboat in Alleppey with meals on board'
  ],
  inclusions: [
    'Accommodation in hotels/houseboat with meals as per itinerary',
    'Breakfast and dinner at hotels',
    'All transfers and sightseeing as per itinerary',
    'Mumbai–Cochin train journey (Panvel to Ernakulam Town) and return (Alleppey to Panvel)',
    'Taxes and service charges'
  ],
  exclusions: [
    'Airfare, if any',
    'Personal expenses like tips, laundry, beverages',
    'Optional activities: elephant ride, jeep safari, Kathakali & Kalaripayattu shows',
    'Lunches except on houseboat',
    'Travel insurance',
    'Anything not mentioned in inclusions'
  ],
  faqs: [
    {
      question: 'Is the houseboat stay private?',
      answer: 'Yes. The Alleppey houseboat stay is private for the couple/group with meals included.'
    },
    {
      question: 'Are train tickets included?',
      answer: 'Yes. Train tickets from Panvel to Ernakulam Town and Alleppey to Panvel are included.'
    },
    {
      question: 'What meals are included?',
      answer: 'Breakfast and dinner at hotels; all meals on the Alleppey houseboat.'
    },
    {
      question: 'Is Periyar Wildlife Safari included?',
      answer: 'No. Wildlife boating/jeep safari is at your own cost and can be arranged locally.'
    },
    {
      question: 'What is the best time to visit Kerala?',
      answer: 'October to March is the best time with pleasant weather for sightseeing and backwaters.'
    }
  ],
  itinerary: [
    {
      day: 1,
      title: 'Mumbai to Cochin by Train',
      description:
        'Depart from Panvel Railway Station at 16:55 hrs by train to Ernakulam Town. Overnight journey on train.',
      activities: ['Board train at Panvel Railway Station', 'Overnight train journey to Cochin'],
      meals: ['-'],
      accommodation: 'Overnight train journey'
    },
    {
      day: 2,
      title: 'Cochin to Munnar',
      description:
        'Arrive at Ernakulam Town at 17:30 hrs and depart for Munnar (130 km / 4 hrs). Evening arrival and hotel check-in.',
      activities: ['Arrival at Ernakulam Town', 'Drive to Munnar', 'Hotel check-in'],
      meals: ['Dinner'],
      accommodation: 'Stay in Munnar (hotel)'
    },
    {
      day: 3,
      title: 'Munnar Sightseeing',
      description:
        'Full-day sightseeing of Munnar including Echo Point, Kundala Lake, Mattupetty Dam, Tea Gardens, Tea Museum & Factory, and Rose Garden.',
      activities: ['Echo Point', 'Kundala Lake', 'Mattupetty Dam', 'Tea Gardens', 'Tea Museum & Factory', 'Rose Garden'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay in Munnar'
    },
    {
      day: 4,
      title: 'Munnar to Thekkady',
      description:
        'After breakfast proceed to Thekkady (85 km / 3 hrs). Visit Elephant Park (optional elephant ride), Periyar Wildlife Sanctuary (optional boating/jeep safari). In the evening, watch Kathakali or Kalaripayattu shows (at own cost).',
      activities: ['Drive to Thekkady', 'Visit Elephant Park', 'Periyar Wildlife Sanctuary', 'Optional Kathakali/Kalaripayattu shows'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay in Thekkady'
    },
    {
      day: 5,
      title: 'Thekkady to Alleppey (Houseboat)',
      description:
        'Drive to Alleppey (150 km / 4.5 hrs). Check-in to traditional houseboat by noon. Cruise through backwaters and enjoy meals on board.',
      activities: ['Drive to Alleppey', 'Check-in at houseboat', 'Backwater cruise', 'Lunch, snacks, and dinner on board'],
      meals: ['Breakfast', 'Lunch', 'Dinner'],
      accommodation: 'Stay in Alleppey (houseboat)'
    },
    {
      day: 6,
      title: 'Alleppey Departure',
      description:
        'Check out from houseboat after breakfast. Proceed to Alleppey Railway Station and board train at 11:54 hrs to Mumbai.',
      activities: ['Check-out from houseboat', 'Board train at Alleppey Railway Station'],
      meals: ['Breakfast'],
      accommodation: 'Overnight train journey'
    },
    {
      day: 7,
      title: 'Arrival in Mumbai',
      description: 'Arrive at Panvel Railway Station at 14:52 hrs. Trip ends with happy memories.',
      activities: ['Arrival at Panvel', 'End of trip'],
      meals: ['-'],
      accommodation: '-'
    }
  ],
  pricingOptions: [
    {
      id: 'standard',
      title: 'Per Person (Double Sharing)',
      price: 19999, // Add INR price if available
      description: '7D/6N Kerala package with train, hotel, and houseboat stay on double sharing basis'
    }
  ]
};
