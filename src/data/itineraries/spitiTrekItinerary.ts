
export const spitiTrekItinerary = {
  id: 'ob1',
  title: 'Spiti Valley Trek',
  location: 'Himachal Pradesh',
  price: 15999,
  discount: 0,
  duration: '6 Days / 5 Nights',
  description: 'Embark on an unforgettable trek through the mystical Spiti Valley, often called "Little Tibet". Experience high-altitude desert landscapes, ancient monasteries, and remote villages frozen in time.',
  coverImage: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
  rating: 4.7,
  reviews: 89,
  images: [
    'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1599891628402-944da038957f?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1624818112191-5b109a8fe19b?q=80&w=2070&auto=format&fit=crop'
  ],
  placesCovered: ['Kaza', 'Hikkim', 'Komic', 'Langza', 'Dhankar', 'Pin Valley'],
  highlights: [
    'Trek through the world\'s highest villages',
    'Visit Hikkim - world\'s highest post office',
    'Explore ancient Dhankar Monastery perched on cliffs',
    'Witness unique cold desert landscape',
    'Interact with local Spitian communities',
    'Search for fossils in Langza village'
  ],
  inclusions: [
    'Accommodation in homestays and guesthouses',
    'All meals during the trek',
    'Experienced trekking guide',
    'Permits for restricted areas',
    'Transportation within Spiti Valley',
    'First aid and safety equipment',
    'Porter support for common luggage'
  ],
  exclusions: [
    'Transportation to/from Shimla or Manali',
    'Personal trekking gear',
    'Travel insurance',
    'Tips for guides and porters',
    'Personal expenses',
    'Emergency evacuation costs'
  ],
  faqs: [
    {
      question: 'What is the difficulty level of this trek?',
      answer: 'This is a moderate to challenging trek requiring good physical fitness. You\'ll be trekking at altitudes between 3,200m to 4,500m with daily walks of 4-6 hours.'
    },
    {
      question: 'How do we handle altitude sickness?',
      answer: 'Our itinerary includes proper acclimatization days. We carry first aid and oxygen cylinders. Gradual ascent and staying hydrated are key to preventing altitude sickness.'
    },
    {
      question: 'What should I pack for this trek?',
      answer: 'Essential items include warm clothes (temperature can drop below freezing), trekking boots, sleeping bag, sun protection, personal medications, and quick-dry clothing.'
    }
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Kaza',
      description: 'Arrive in Kaza, the administrative center of Spiti Valley, and acclimatize to the high altitude.',
      activities: [
        'Arrival in Kaza (3,650m)',
        'Check-in at guesthouse',
        'Rest and acclimatization',
        'Local orientation walk',
        'Visit local market'
      ],
      meals: ['Dinner'],
      accommodation: 'Guesthouse in Kaza'
    },
    {
      day: 2,
      title: 'Kaza to Hikkim and Komic',
      description: 'Trek to the world\'s highest villages of Hikkim and Komic.',
      activities: [
        'Trek to Hikkim village',
        'Visit world\'s highest post office',
        'Continue to Komic village (4,587m)',
        'Explore the highest motorable village',
        'Return to Kaza'
      ],
      meals: ['Breakfast', 'Packed lunch', 'Dinner'],
      accommodation: 'Guesthouse in Kaza'
    },
    {
      day: 3,
      title: 'Langza Village and Fossil Hunting',
      description: 'Visit Langza village famous for fossils and the giant Buddha statue.',
      activities: [
        'Trek to Langza village',
        'Fossil hunting activity',
        'Visit giant Buddha statue',
        'Photography session with Chau Chau Kang Nilda peak',
        'Interact with local families'
      ],
      meals: ['Breakfast', 'Packed lunch', 'Dinner'],
      accommodation: 'Homestay in Langza'
    },
    {
      day: 4,
      title: 'Dhankar Monastery Trek',
      description: 'Trek to the spectacular Dhankar Monastery perched on a cliff.',
      activities: [
        'Trek to Dhankar Monastery',
        'Explore the 1000-year-old monastery',
        'Trek to Dhankar Lake (optional)',
        'Photography of dramatic landscapes',
        'Return to Dhankar village'
      ],
      meals: ['Breakfast', 'Packed lunch', 'Dinner'],
      accommodation: 'Guesthouse in Dhankar'
    },
    {
      day: 5,
      title: 'Pin Valley Exploration',
      description: 'Explore the beautiful Pin Valley National Park.',
      activities: [
        'Drive to Pin Valley',
        'Short trek in the valley',
        'Wildlife spotting (blue sheep, ibex)',
        'Visit Mudh village',
        'Return to Kaza'
      ],
      meals: ['Breakfast', 'Packed lunch', 'Dinner'],
      accommodation: 'Guesthouse in Kaza'
    },
    {
      day: 6,
      title: 'Departure from Kaza',
      description: 'Final exploration of Kaza before departure.',
      activities: [
        'Visit Key Monastery',
        'Last-minute shopping',
        'Departure from Kaza'
      ],
      meals: ['Breakfast'],
      accommodation: 'N/A (Tour ends)'
    }
  ]
};
