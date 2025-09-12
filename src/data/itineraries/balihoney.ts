export const baliItinerary = {
  id: 'bali-001',
  title: 'Bali Escape',
  location: 'Kuta, Nusa Penida, Ubud',
  price: 280, // base option in USD per person
  discount: 0,
  duration: '7 Days / 6 Nights',
  description:
    'Experience the magic of Bali with 3 nights in Kuta, 1 night in Nusa Penida, and 2 nights in Ubud. From beaches and temples to rice terraces and snorkeling adventures, this itinerary offers culture, nature, and relaxation.',
  
  rating: 4.9,
  reviews: 87,
    images: [
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QkFMSXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1604500693431-647f9e76dafc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TlVTYSUyMHBlbmlkYXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1636992165457-57634aa64dfa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtlZGFjJTIwZGFuY2UlMjBiYWxpfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1567329916012-26f1f39f04c3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmlubnMlMjBjbHVifGVufDB8fDB8fHww'
  ],
  placesCovered: ['Kuta', 'Nusa Penida', 'Ubud'],
  highlights: [
    'Garuda Wisnu Kencana Cultural Park',
    'Padang Padang Beach',
    'Uluwatu Temple & Kecak Fire Dance',
    'Goa Gajah Temple & Coffee Plantation',
    'My Swing Adventure',
    'East & West Nusa Penida Tours with snorkeling',
    'Kintamani Volcano Viewpoint',
    'Tegalalang Rice Terrace',
    'Ubud Market exploration'
  ],
  inclusions: [
    'Accommodation in hotels as per chosen option',
    'Daily breakfast at hotels',
    'Private AC vehicle (Avanza) at disposal as per itinerary',
    'Return transfers to/from DPS Airport',
    'Entry fees for attractions mentioned in itinerary',
    'Nusa Penida East & West tours with shared boat',
    'Snorkeling with local lunch in Nusa Penida',
    'Assistance at all arrival/departure points'
  ],
  exclusions: [
    'Flights (quoted separately if required)',
    'Visa on Arrival (IDR 500,000 per person, payable directly)',
    'Lunches & dinners (unless specified)',
    'Personal expenses (tips, laundry, phone, drinks, etc.)',
    'Travel insurance',
    'Optional activities beyond inclusions',
    '5% GST extra'
  ],
  faqs: [
    {
      question: 'Are flights included in this package?',
      answer:
        'No. Flights are not included in the base package, but can be arranged at an additional cost if required.'
    },
    {
      question: 'Is snorkeling included?',
      answer:
        'Yes. Snorkeling with local lunch is included in the Nusa Penida West Island tour.'
    },
    {
      question: 'What meals are included?',
      answer:
        'Daily breakfast is included at hotels. Lunch and dinner are at your own expense unless mentioned (like in Nusa Penida tour).'
    },
    {
      question: 'Is this package suitable for honeymooners?',
      answer:
        'Yes. Honeymoon supplements like candlelight dinner, flower bed decoration, or spa can be added at extra cost.'
    },
    {
      question: 'Is the Visa included?',
      answer:
        'No. Visa on Arrival (IDR 500,000 per person) is payable directly at the airport in Bali.'
    }
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Bali – Transfer to Kuta',
      description:
        'Arrive at Ngurah Rai International Airport (DPS). Meet your driver and transfer to Kuta hotel. Receive welcome garland and bottled water.',
      activities: ['Airport pickup', 'Hotel check-in', 'Garland & water bottle welcome'],
      meals: [],
      accommodation: 'Stay in Kuta'
    },
    {
      day: 2,
      title: 'GWK, Padang Padang Beach, Uluwatu & Kecak Dance',
      description:
        'Full day private vehicle at disposal. Visit Garuda Wisnu Kencana, relax at Padang Padang Beach, witness sunset at Uluwatu Temple, and enjoy Kecak & Fire Dance performance.',
      activities: ['GWK Cultural Park', 'Padang Padang Beach', 'Uluwatu Temple', 'Kecak & Fire Dance'],
      meals: ['Breakfast'],
      accommodation: 'Stay in Kuta'
    },
    {
      day: 3,
      title: 'Goa Gajah, My Swing & Coffee Plantation',
      description:
        'Explore Goa Gajah Temple, enjoy adrenaline and romantic swings at My Swing Bali, and visit a local coffee plantation for tasting.',
      activities: ['Goa Gajah Temple', 'My Swing Adventure', 'Coffee Plantation Tour'],
      meals: ['Breakfast'],
      accommodation: 'Stay in Kuta'
    },
    {
      day: 4,
      title: 'Nusa Penida East Island',
      description:
        'Take shared boat to Nusa Penida East. Visit Diamond Beach, Atuh Beach, Tree House, and Thousand Beach. Local snack lunch included.',
      activities: ['Boat transfer', 'Diamond Beach', 'Atuh Beach', 'Tree House', 'Thousand Beach'],
      meals: ['Breakfast', 'Lunch (local snack)'],
      accommodation: 'Stay in Nusa Penida'
    },
    {
      day: 5,
      title: 'Nusa Penida West Island & Snorkeling',
      description:
        'Snorkeling adventure with local lunch included. Explore West Nusa Penida highlights. Evening inter-hotel transfer.',
      activities: ['Snorkeling', 'West Island tour', 'Hotel transfer'],
      meals: ['Breakfast', 'Lunch'],
      accommodation: 'Stay in Ubud'
    },
    {
      day: 6,
      title: 'Kintamani, Rice Terraces & Ubud Market',
      description:
        'Scenic drive to Kintamani for views of Mount Batur & Lake Batur. Visit Tegalalang Rice Terrace and shop at Ubud Market.',
      activities: ['Kintamani Volcano Viewpoint', 'Tegalalang Rice Terrace', 'Ubud Market'],
      meals: ['Breakfast'],
      accommodation: 'Stay in Ubud'
    },
    {
      day: 7,
      title: 'Departure from Bali',
      description:
        'Check-out from hotel. Transfer to Ngurah Rai International Airport (DPS) for departure.',
      activities: ['Hotel check-out', 'Airport transfer'],
      meals: ['Breakfast'],
      accommodation: '-'
    }
  ],
  pricingOptions: [
    {
      id: "standard",
      title: "Option 1 - Standard Hotels",
      price: 30000,
      description: "Per person on double sharing (Eden Kuta + Mere Sea View Resort + The Evitel Ubud)"
    },
    {
      id: "deluxe",
      title: "Option 2 - Deluxe Hotels",
      price: 37000,
      description: "Per person on double sharing (Anathera Resort + Semabu Hills + Radha Phala Ubud)"
    },
    {
      id: "premium",
      title: "Option 3 - Premium Hotels",
      price: 44000,
      description: "Per person on double sharing (Cross Vibe Paasha + Semabu Hills + Ubud Wana Resort)"
    }
  ]
};
