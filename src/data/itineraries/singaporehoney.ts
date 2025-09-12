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
    'https://images.unsplash.com/photo-1555217851-6141535bd771?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1542114633831-6c3880908875?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1700307997855-204a0d9e84c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2luZ2Fwb3JlJTIwdW5pdmVyc2FsJTIwc3R1ZGlvfGVufDB8fDB8fHww'
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
