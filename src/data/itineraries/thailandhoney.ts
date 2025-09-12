export const thailandItinerary = {
  id: 'thailand-001',
  title: 'Thailand Honeymoon Special',
  location: 'Thailand (Phuket & Krabi)',
  price: 27499.5, // Per person (INR) since 54,999 per couple
  discount: 0,
  duration: '5 Days / 4 Nights',
  description:
    'A romantic getaway to Phuket and Krabi, combining island adventures with leisure and culture. Perfect for couples looking for the ideal honeymoon in Thailand.',
  
  rating: 4.7,
  reviews: 112,
  images: [
    'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRoYWlsYW5kfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1586820672103-2272d8490ade?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGh1a2V0fGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1615582130525-17caf52c72be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtyYWJpfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1612229370908-5d1648e1d0a3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHRoYWlsYW5kfGVufDB8fDB8fHww'
  ],
  placesCovered: ['Phuket', 'Krabi', 'Phi Phi Islands', 'Four Islands Tour'],
  highlights: [
    'Romantic stay in Phuket & Krabi',
    'Four Island Tour by Long Tail Boat (with lunch, national park fees included)',
    'Phuket City Tour',
    'Phi Phi Island Tour by Speed Boat (with lunch, national park fees included)'
  ],
  inclusions: [
    'Accommodation in 3-star hotels with breakfast',
    'Transfers between Phuket and Krabi',
    'Four Island Tour in Krabi with lunch (SIC)',
    'Phi Phi Island Tour in Phuket with lunch (SIC)',
    'Phuket City Tour',
    'Airport pick-up and drop',
    'All tours and transfers on SIC basis',
    'National park entry fees included'
  ],
  exclusions: [
    'International airfare',
    'Visa fees (if applicable)',
    'Meals other than breakfast & those mentioned',
    'Personal expenses like tips, laundry, beverages',
    'Travel insurance',
    'Anything not mentioned under inclusions'
  ],
  faqs: [
    {
      question: 'Are flights included in this package?',
      answer: 'No. Guests need to arrange their own flights to and from Thailand.'
    },
    {
      question: 'Is this package suitable for honeymoon couples?',
      answer: 'Yes. The package is specially designed for honeymooners with a mix of leisure and island tours.'
    },
    {
      question: 'Are meals included?',
      answer: 'Daily breakfast is included, plus lunch during island tours.'
    },
    {
      question: 'Are transfers private?',
      answer: 'No. All tours and transfers are on SIC (Seat in Coach) basis.'
    },
    {
      question: 'Are national park fees included?',
      answer: 'Yes. Both Phi Phi and Four Island tour national park fees are included.'
    }
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Phuket – Transfer to Krabi',
      description: 'Arrive at Phuket Airport and transfer to Krabi. Day free at leisure.',
      activities: ['Airport pick-up', 'Transfer to Krabi hotel', 'Leisure time'],
      meals: ['Breakfast'],
      accommodation: 'Stay in Krabi (3-star hotel or similar)'
    },
    {
      day: 2,
      title: 'Four Island Tour (Krabi)',
      description:
        'Enjoy the famous Four Island tour by long-tail boat including Poda Island, Chicken Island, Tup Island, and Phra Nang Cave. Lunch and national park fees included.',
      activities: ['Four Island Tour', 'Snorkeling & swimming', 'Thai lunch on tour'],
      meals: ['Breakfast', 'Lunch'],
      accommodation: 'Stay in Krabi'
    },
    {
      day: 3,
      title: 'Transfer to Phuket & City Tour',
      description: 'Check out from Krabi and transfer to Phuket. Later, explore Phuket city attractions.',
      activities: ['Transfer to Phuket', 'Phuket City Tour'],
      meals: ['Breakfast'],
      accommodation: 'Stay in Phuket (3-star hotel or similar)'
    },
    {
      day: 4,
      title: 'Phi Phi Island Tour',
      description: 'Take a speedboat to the world-famous Phi Phi Islands. Lunch and national park fees included.',
      activities: ['Phi Phi Island Tour by speedboat', 'Swimming & beach time', 'Lunch included'],
      meals: ['Breakfast', 'Lunch'],
      accommodation: 'Stay in Phuket'
    },
    {
      day: 5,
      title: 'Departure from Phuket',
      description: 'Check out from hotel and transfer to Phuket Airport for your departure flight.',
      activities: ['Airport drop'],
      meals: ['Breakfast'],
      accommodation: '-'
    }
  ],
  pricingOptions: [
    {
      id: 'honeymoon-couple',
      title: 'Per Couple (Double Sharing)',
      price: 54999,
      description: 'INR 54,999 per couple for 5D/4N Thailand Honeymoon Package'
    }
  ]
};
