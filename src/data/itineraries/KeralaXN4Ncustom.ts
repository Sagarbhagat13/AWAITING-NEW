export const spitiTrekItinerary = {
  id: 'xny19',
  title: "Experience Kerala — God's Own Country",
  location: 'Kerala',
  price: 18900, // Base price WITHOUT train fare
  discount: 0, // Discount applied (final = 14999)
  duration: '5 Days / 4 Nights',
  description: 'Experience the best of Kerala on this journey through charming Cochin, the misty tea gardens of Munnar, the wildlife and spice plantations of Thekkady, and a tranquil houseboat stay in Alleppey. A perfect blend of culture, nature, and relaxation.',
  rating: 4.7,
  reviews: 89,
  images: [
    'https://images.unsplash.com/photo-1628918098760-471c0fad230c?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1704365159747-1f7b8913044f?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1306&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ],
  placesCovered: ['Cochin', 'Munnar', 'Thekkady', 'Alleppey', 'Ernakulam'],
  highlights: [
    'Explore Fort Kochi and its colonial heritage',
    'Drive through scenic tea plantations and rolling hills of Munnar',
    'Visit Cheeyapara & Valara waterfalls enroute to Munnar',
    'Explore Mattupetty Dam, Echo Point, Kundala Lake and Tea Gardens',
    'Periyar Wildlife Sanctuary & spice plantation experience in Thekkady',
    'Enjoy a traditional Kettuvallam (houseboat) stay in Alleppey with meals onboard',
    'Witness traditional cultural performances (Kathakali / Kalaripayattu) — optional',
    'Relax amid coconut-fringed backwaters and lagoons'
  ],
  inclusions: [
    'Accommodation on a triple sharing basis in 3★ hotels (as per itinerary) or similar',
    'Breakfast and dinner as per the itinerary; lunch provided on the houseboat in Alleppey',
    'Land transportation by Mini Bus (A/C will not be operational in hilly regions)',
    'All vehicle expenses including driver allowances, fuel, tolls, parking (as per quotation date)',
    'Fixed departure group tour (group leader/representative) as mentioned'
  ],
  exclusions: [
    'Train fare (unless package option selected)',
    'Entry fees for monuments, cultural shows, guide charges, and camera fees',
    'Optional activities & rides (boat safaris, elephant/pony rides, Kathakali/Kalaripayattu entry, etc.)',
    'Any beverages (including alcoholic drinks, mineral water, aerated drinks)',
    'Personal expenses such as tips, phone calls, laundry, internet, bar charges, room heaters, etc.',
    'Travel insurance (guests should arrange their own coverage)',
    'Costs due to itinerary changes arising from weather, road closures, health or other unforeseen circumstances',
    'Any items not explicitly mentioned under "inclusions"',
    'Applicable GST (5%)'
  ],

  faqs: [
    {
      question: 'What type of accommodation is provided?',
      answer: '3★ hotels on a triple-sharing basis as per itinerary. Houseboat stay in Alleppey is included for the specified night.'
    },
    {
      question: 'Are meals included?',
      answer: 'Breakfast and dinner included daily as per itinerary. Lunch is included on the houseboat in Alleppey; other lunches are not included unless specified.'
    },
    {
      question: 'Is transportation included?',
      answer: 'Yes — land transportation by Mini Bus is included (A/C may not work in hilly regions). Train fare is not included unless you select a pricing option that includes it.'
    },
    {
      question: 'What about children and extra beds?',
      answer: 'No cost for children below 5 years of age. Additional cost for double-sharing basis (i.e., if you want double instead of triple) is ₹2,000 per person.'
    },
    {
      question: 'Are cultural shows and wildlife boat rides included?',
      answer: 'These are optional and at own cost (Kathakali, Kalaripayattu, Periyar boating, elephant rides, etc. are not included).'
    }
  ],

  itinerary: [
  {
      day: 1,
      title: 'Cochin Pickup & Transfer to Munnar (Enroute Waterfalls)',
      description: 'Arrival / transfer and proceed to Munnar (approx. 130 km ~ 4 hrs).',
      activities: [
        'Arrival at Cochin and transfer towards Munnar',
        'Enroute visit Cheeyapara Waterfalls',
        'Enroute visit Valara Waterfalls',
        'Check-in at hotel in Munnar'
      ],
      meals: ['Dinner'],
      accommodation: 'Enjoy your stay at Munnar'
    },
    {
      day: 2,
      title: 'Munnar Sightseeing',
      description: 'Full day exploring Munnar’s highlights.',
      activities: [
        'Echo Point',
        'Kundala Lake',
        'Mattupetty Dam',
        'Munnar Tea Gardens',
        'Munnar Tea Museum & Tea Factory',
        'Rose Garden'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Enjoy your stay at Munnar'
    },
    {
      day: 3,
      title: 'Munnar To Thekkady',
      description: 'Transfer to Thekkady — wildlife & spice region.',
      activities: [
        'Drive to Thekkady / Periyar region',
        'Visit spice garden',
        'Periyar Wildlife Sanctuary (afternoon slot)',
        'Optional wildlife boating at Periyar lake (at own cost)',
        'Visit Elephant Park (if available)',
        'Optional evening cultural shows: Kathakali / Kalaripayattu (at own cost)'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Enjoy your stay at Thekkady'
    },
    {
      day: 4,
      title: 'Thekkady To Alleppey — Houseboat Stay',
      description: 'Drive to Alleppey and board a traditional Kettuvallam (houseboat) — boat ready around 12:00 hrs.',
      activities: [
        'Drive from Thekkady to Alleppey',
        'Check-in on a traditional houseboat (Kettuvallam) around 12:00 hrs',
        'Enjoy on-board meals: Lunch, Evening Tea & Snacks, Dinner',
        'Relax on the backwaters and enjoy the houseboat experience'
      ],
      meals: ['Breakfast', 'Lunch', 'Dinner'],
      accommodation: 'Houseboat (Kettuvallam)'
    },
    {
      day: 5,
      title: 'Alleppey To Cochin Drop & Return Train',
      description: 'Proceed to Ernakulam/Cochin and board return train to Mumbai.',
      activities: [
        'Disembark from houseboat and proceed to Ernakulam',
        'Transfer to railway station for return overnight train journey to Mumbai'
      ],
      meals: ['Breakfast'],
      accommodation: 'Overnight Train'
    },
  ],

  // Pricing tiers (train fare options & discounted rates shown)
  pricingOptions: [
    {
      id: 'standard',
      title: 'on 4 pax',
      price: 18900,
      description: 'Package without Train Fare — fixed departure group tour (Breakfast & Dinner).',
      isPopular: true
    },
    {
      id: 'sleeper',
      title: 'on 2 pax ',
      price: 22600,
      description: 'Package including Sleeper train fare.'
    }
  ],
  
  // Available batch dates (fixed departures)
  batchDates: [
    {
      id: 'batch-1',
      startDate: '21-12-2025',
      endDate: '27-12-2025',
      totalSlots: 12,
      availableSlots: 8,
      price: 14999
    },
    {
      id: 'batch-2',
      startDate: '26-12-2025',
      endDate: '01-01-2026',
      totalSlots: 12,
      availableSlots: 8,
      price: 14999
    },
    {
      id: 'batch-3',
      startDate: '28-12-2025',
      endDate: '03-01-2026',
      totalSlots: 12,
      availableSlots: 8,
      price: 14999
    }
  ],

 
};
