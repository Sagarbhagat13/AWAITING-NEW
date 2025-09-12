export const singaporeItinerary = {
  id: 'singapore-001',
  title: 'Singapore Getaway',
  location: 'Singapore',
  price: 57999, // Per person in SGD
  discount: 0,
  duration: '5 Days / 4 Nights',
  description:
    'Explore the vibrant city of Singapore with a mix of culture, attractions, and adventure. From Sentosa and Universal Studios to Gardens by the Bay and the iconic Singapore Flyer, this trip promises unforgettable experiences.',
  
  rating: 4.9,
  reviews: 138,
  images: [
    'https://images.unsplash.com/photo-1506719040632-20292e08b6a3?w=900&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=900&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1584352585361-210f8c72e54f?w=900&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1575987116919-746941bb248a?w=900&auto=format&fit=crop&q=60'
  ],
  placesCovered: ['Sentosa Island', 'Universal Studios', 'Gardens by the Bay', 'Singapore Flyer', 'City Tour'],
  highlights: [
    'Sentosa Combo with Singapore Cable Car Sky Pass',
    'Wings of Time Fireworks Symphony',
    'Oceanarium (Ex SEA Aquarium)',
    'Harry Potter: Visions of Magic',
    'Gardens by the Bay - Cloud Forest, Jurassic World, and Flower Dome',
    'Singapore City Tour with Flyer',
    'Singapore Flyer + Time Capsule',
    'Universal Studios Singapore'
  ],
  inclusions: [
    'Accommodation at Ibis Novena (3-star) with breakfast',
    'All transfers and tours on SIC (Seat in Coach) basis as per itinerary',
    'Entry tickets to all attractions mentioned in the itinerary',
    'Airport pick-up and drop',
    'GST included in package price'
  ],
  exclusions: [
    'Airfare, train fare, or bus fare from originating city',
    'Meals other than breakfast',
    'Personal expenses like tips, laundry, phone calls, room service, beverages',
    'Insurance of any kind',
    'Additional sightseeing or services not mentioned in inclusions',
    'Surcharges if applicable during peak dates'
  ],
  faqs: [
    {
      question: 'Are flights included in this package?',
      answer: 'No. Flights are not included; guests need to arrange their own travel to Singapore.'
    },
    {
      question: 'Is Universal Studios ticket included?',
      answer: 'Yes. One-day admission to Universal Studios Singapore with SIC transfers is included.'
    },
    {
      question: 'What meals are included?',
      answer: 'Daily breakfast at the hotel is included. Lunch and dinner are not included.'
    },
    {
      question: 'Are transfers private?',
      answer: 'No. All transfers and tours are provided on SIC (Seat in Coach) basis.'
    },
    {
      question: 'Is this package suitable for families with kids?',
      answer: 'Yes. With attractions like Universal Studios, Sentosa, Oceanarium, and Gardens by the Bay, this package is family-friendly.'
    }
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Singapore',
      description: 'Arrival at Singapore Changi Airport and transfer to hotel. Rest of the day free at leisure.',
      activities: ['Airport transfer', 'Check-in at hotel'],
      meals: ['Breakfast'],
      accommodation: 'Stay in Singapore (Ibis Novena or similar)'
    },
    {
      day: 2,
      title: 'Sentosa Island Experience',
      description:
        'Enjoy Sentosa attractions including Singapore Cable Car Sky Pass (1 way), Oceanarium, Harry Potter Visions of Magic, and Wings of Time Fireworks Symphony.',
      activities: [
        'Singapore Cable Car Sky Pass (1 Way)',
        'Oceanarium Admission (Ex SEA Aquarium)',
        'Harry Potter Visions of Magic',
        'Wings of Time Fireworks Symphony'
      ],
      meals: ['Breakfast'],
      accommodation: 'Stay in Singapore'
    },
    {
      day: 3,
      title: 'Gardens by the Bay + City Tour',
      description:
        'Visit Gardens by the Bay with Cloud Forest, Jurassic World: The Experience, and Flower Dome. Later enjoy a Singapore City Tour with Singapore Flyer + Time Capsule.',
      activities: [
        'Gardens by the Bay - Cloud Forest',
        'Jurassic World: The Experience',
        'Flower Dome',
        'Singapore City Tour',
        'Singapore Flyer + Time Capsule'
      ],
      meals: ['Breakfast'],
      accommodation: 'Stay in Singapore'
    },
    {
      day: 4,
      title: 'Universal Studios Singapore',
      description: 'Spend a fun-filled day at Universal Studios Singapore with exciting rides and shows.',
      activities: ['Universal Studios Singapore admission', 'SIC transfers'],
      meals: ['Breakfast'],
      accommodation: 'Stay in Singapore'
    },
    {
      day: 5,
      title: 'Departure from Singapore',
      description: 'Check out from hotel and transfer to Singapore Airport for departure.',
      activities: ['Airport drop'],
      meals: ['Breakfast'],
      accommodation: '-'
    }
  ],
  pricingOptions: [
    {
      id: 'standard',
      title: 'Per Person (Double Sharing)',
      price: 57999,
      description: 'SGD 702 per person on double sharing basis (Total: SGD 1,404 for 2 adults)'
    }
  ]
};
