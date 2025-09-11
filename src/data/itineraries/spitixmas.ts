export const spitiMars = {
  id: 'xny4',
  title: 'Winter Spiti Xmas & New Year!',
  location: 'Spiti Valley, Himachal Pradesh, India',
  // primary (default) price set to Triple Sharing as indicated in your header (see pricingOptions for other tiers)
  price: 19999,
  discount: 0,
  duration: '8 Days / 7 Nights (Volvo/Bus based transfer)',
  description:
    'Explore otherworldly landscapes of Spiti — high-altitude deserts, ancient monasteries, dramatic gorges and friendly Himalayan villages. Perfect for photographers, culture seekers and adventure lovers.',
  coverImage:
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80', // Spiti valley panorama
  rating: 4.8,
  reviews: 124,
  images: [
    'https://images.unsplash.com/photo-1697984286841-5cedb7885109?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1628782379401-4fff9cdcbbfe?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1698753935121-153a106616d5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80'
  ],

  placesCovered: ['Sangla (Chitkul)', 'Tabo', 'Kaza', 'Kalpa', 'Shimla'],
  highlights: [
    'Drive along the Indo-Tibetan Highway via Kufri & Narkanda',
    'Chitkul village — last inhabited village near Indo-Tibetan border',
    'Tabo Monastery & ancient gompas (Tabo famed for frescoes)',
    'Kaza: Key Monastery, Langza, Komik, Hikkim (village post office) & Chicham Bridge',
    'Kalpa: Spectacular views of Kinner Kailash range & local markets',
    'Volvo / overnight bus transfers for comfortable mountain travel',
    'Group tour with fixed departures, breakfast & dinner included'
  ],

  inclusions: [
    'Accommodation on triple sharing basis (as per mentioned category or similar)',
    'Breakfast & Dinner as per itinerary',
    'Volvo / Bus transfers: Delhi ⇄ Shimla (to meet up) and other transfers as per itinerary',
    'Local transfers & sightseeing (per itinerary)',
    'Experienced local driver/guide where required',
    'Fuel, tolls, parking & driver allowance'
  ],
  exclusions: [
    'Lunch expenses & personal meals',
    'Monument/monastery entry fees, guide & camera charges (unless specified)',
    'Any private transport (4x4) extra cost in case of heavy snowfall or road block',
    'Personal expenses: tips, phone calls, laundry, minibar, room heaters, bar, etc.',
    'Adventure activities (treks requiring permits, pony/horse rides, rafting, etc.)',
    'Travel insurance',
    'GST (5%)'
  ],

  faqs: [
    {
      question: 'What is the accommodation standard?',
      answer:
        '3★ category / guesthouses and mountain camps as per availability; triple sharing is standard. Expect basic-to-comfortable mountain accommodation.'
    },
    {
      question: 'Is high-altitude acclimatisation required?',
      answer:
        'Yes — Spiti is high-altitude. We recommend staying hydrated, avoiding alcohol, and informing us of any prior health conditions. Short acclimatisation stops are built into the route.'
    },
    {
      question: 'How strenuous is this trip?',
      answer:
        'This is a moderate-level trip: long drives, short walks and optional short treks (like local monastery visits). Not a technical trek.'
    },
    {
      question: 'Are transfers done by bus?',
      answer:
        'Yes — the package uses Volvo/overnight buses for long transfers (Delhi–Shimla–Delhi), and local minibuses for mountain transfers. A/C may not operate in hilly legs.'
    }
  ],

  itinerary: [
    {
      day: 1,
      title: 'Delhi ➝ Shimla (Meet-up & Overnight Bus)',
      description:
        'Meet at Delhi bus terminal and board the overnight Volvo/Bus towards Shimla.',
      activities: ['Meet at Delhi Bus Terminal', 'Overnight bus to Shimla'],
      meals: ['-'],
      accommodation: 'Overnight Bus'
    },
    {
      day: 2,
      title: 'Shimla ➝ Sangla / Chitkul (Drive via Kufri & Narkanda)',
      description:
        'Drive through Kufri and Narkanda then along the Indo-Tibetan Highway to Sangla/Chitkul region.',
      activities: ['Drive Shimla → Sangla/Chitkul', 'Evening at village / local stroll'],
      meals: ['Dinner'],
      accommodation: 'Stay at Sangla / Chitkul'
    },
    {
      day: 3,
      title: 'Sangla / Chitkul ➝ Tabo',
      description:
        'Explore Chitkul, Khab Sangam (confluence of Spiti & Sutlej), then proceed to Tabo. Visit local spots en route.',
      activities: ['Chitkul Village', 'Khab Sangam', 'Gue Monastery (if open)', 'Nako Lake (route option)'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay at Tabo'
    },
    {
      day: 4,
      title: 'Tabo ➝ Kaza (Short drive, monastery visits en route)',
      description:
        'Visit Tabo Monastery, Dhankar Monastery, Lingti waterfall and proceed to Kaza.',
      activities: ['Tabo Monastery', 'Dhankar Monastery', 'Lingti Waterfall', 'Drive to Kaza'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay at Kaza'
    },
    {
      day: 5,
      title: 'Kaza Sightseeing (Key Monastery, Langza, Komik, Hikkim)',
      description:
        'Full day exploring Kaza region — Key Monastery, Langza, Komik (one of highest villages with post office), Hikkim and Chicham Bridge.',
      activities: ['Key Monastery', 'Langza Village', 'Komik Village', 'Hikkim', 'Chicham Bridge'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay at Kaza'
    },
    {
      day: 6,
      title: 'Kaza ➝ Kalpa (Drive with stops at Reckong Peo)',
      description:
        'Long scenic drive to Kalpa with market visit at Reckong Peo and evening views of Kinner Kailash.',
      activities: ['Drive to Kalpa', 'Reckong Peo Market', 'Sunset / Kinner Kailash view'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay at Kalpa'
    },
    {
      day: 7,
      title: 'Kalpa ➝ Shimla (Return) ➝ Overnight Bus to Delhi',
      description:
        'Drive back to Shimla (time permitting: Mall Road / Christ Church / café hopping) and board overnight bus to Delhi.',
      activities: ['Drive to Shimla', 'Short Shimla city visit (time permitting)', 'Overnight bus to Delhi'],
      meals: ['Breakfast'],
      accommodation: 'Overnight Bus'
    },
    {
      day: 8,
      title: 'Arrival Delhi — Trip Ends',
      description: 'Arrival at Delhi bus terminal. Trip concludes with memories from Spiti.',
      activities: ['Arrival at Delhi Bus Terminal', 'Disperse / onward travel'],
      meals: ['-']
    }
  ],

  pricingOptions: [
    // Header in your text listed multiple price rows — interpreted here as primary and alternate tiers.
    // Primary / peak: Triple Sharing ₹19,999 / Double Sharing ₹21,999
    // Secondary / off-season: Triple Sharing ₹17,999 / Double Sharing ₹19,999
    {
      id: 'standard',
      title: 'Triple Sharing',
      price: 19999,
      description: 'Double sharing price (peak/festive departures)'
    },
    {
      id: 'deluxe',
      title: 'double sharing',
      price: 21999,
      description: 'Triple sharing price (regular/off-season)'
    },
    {
      id: 'double-offseason',
      title: 'Double Sharing (Off-season)',
      price: 19999,
      description: 'Double sharing price (regular/off-season)'
    }
  ],

  // Provided fixed departures in your content — three sample batches shown below.
  // You can add more batch objects following this pattern.
  batchDates: [
    {
      id: 'batch-1',
      startDate: '20-12-2025',
      endDate: '27-12-2025',
      totalSlots: 30,
      availableSlots: 20,
      price: 19999
    },
    {
      id: 'batch-2',
      startDate: '25-12-2025',
      endDate: '01-01-2026',
      totalSlots: 30,
      availableSlots: 18,
      price: 21999
    },
    {
      id: 'batch-3',
      startDate: '27-12-2025',
      endDate: '03-01-2026',
      totalSlots: 30,
      availableSlots: 15,
      price: 19999
    }
  ]
};
