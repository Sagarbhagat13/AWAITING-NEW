export const andamanItinerary = {
  id: 'andaman-001',
  title: 'Andaman Delight',
  location: 'Port Blair, Havelock, Neil Island',
  price: 24999, // base option
  discount: 0,
  duration: '6 Days / 5 Nights',
  description:
    'Discover the pristine beauty of the Andaman Islands. From historic Port Blair and the world-famous Radhanagar Beach in Havelock to the natural wonders of Neil Island, enjoy a blend of beaches, adventure, and culture.',
  coverImage:
    'https://images.unsplash.com/photo-1600783246004-1f4f8b3e9c5f?auto=format&fit=crop&w=1200&q=80',
  rating: 4.8,
  reviews: 112,
  images: [
    'https://images.unsplash.com/photo-1600783246004-1f4f8b3e9c5f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1617196031392-9f6f2d79e3a2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1617196032058-25e7e5c2e6a1?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1617196032793-df0c8e4f3f8e?auto=format&fit=crop&w=1200&q=80'
  ],
  placesCovered: ['Port Blair', 'Havelock', 'Neil Island'],
  highlights: [
    'Light & Sound Show at Cellular Jail',
    'Corbyn’s Cove Beach in Port Blair',
    'Radhanagar Beach in Havelock',
    'Elephant Beach excursion with complimentary snorkeling',
    'Water sports like scuba diving, kayaking, jet ski (optional)',
    'Bharatpur Beach & Natural Bridge at Neil Island',
    'Cultural visits: Sagarika Emporium, Fisheries & Anthropological Museum'
  ],
  inclusions: [
    'Accommodation on Double/Triple sharing basis in mentioned or similar hotels',
    'Breakfast and Dinner included as per itinerary',
    'Land transportation covering pick-up/drop, round trips, and local sightseeing',
    'Snorkeling & candid photo shoot complimentary at Elephant Beach',
    'Entry permits, boat tickets, and assistance at all arrival/departure points',
    'Private cruise/speed boat transfers to/from Havelock',
    'Vehicle expenses including fuel, driver allowance, tolls, border taxes & parking'
  ],
  exclusions: [
    'Lunch expenses',
    'Air/Train fares',
    'Monument entry fees, guide charges, camera fees',
    'Adventure/water sports unless specified (scuba, jet ski, etc.)',
    'Beverages: alcoholic, mineral water, aerated drinks',
    'Personal expenses: tips, phone calls, internet, laundry, room heaters, discotheque, etc.',
    'Extra food or beverages beyond buffet/fixed menu',
    'Transport limited to parking/specific points as per govt. regulations',
    'Costs due to delays (weather, health, road closures, unforeseen circumstances)',
    'Travel insurance',
    'Any services/items not mentioned in “Inclusions”',
    '5% GST not included'
  ],
  faqs: [
    {
      question: 'Are flights included in this package?',
      answer:
        'No. Flights or train fares to Port Blair are not included. Guests need to arrange their own travel to Port Blair.'
    },
    {
      question: 'Is snorkeling included?',
      answer:
        'Yes. Complimentary snorkeling and a candid photo shoot are included at Elephant Beach in Havelock.'
    },
    {
      question: 'Can I do scuba diving or sea walk?',
      answer:
        'Yes. Scuba diving, sea walk, jet ski, banana ride, and kayaking are available at extra cost.'
    },
    {
      question: 'What meals are included?',
      answer:
        'Breakfast and dinner are included daily at the hotels. Lunch and snacks are not included.'
    },
    {
      question: 'Is this package suitable for honeymooners?',
      answer:
        'Yes. You can add honeymoon supplements like candlelight dinner, flower bed decoration, or cake at additional cost.'
    }
  ],
  itinerary: [
    {
      day: 1,
      
      title: 'Arrival in Port Blair',
      description:
        'Meet our representative, transfer to hotel. Visit Corbyn’s Cove Beach and witness the Light & Sound Show at Cellular Jail.',
      activities: ['Corbyn’s Cove Beach', 'Light & Sound Show at Cellular Jail'],
      meals: ['Dinner'],
      accommodation: 'Stay in Port Blair'
    },
    {
      day: 2,
      
      title: 'Port Blair to Havelock Island',
      description:
        'Travel by private cruise to Havelock. Afternoon visit to Radhanagar Beach. Optional scuba diving/kayaking available.',
      activities: ['Cruise transfer', 'Radhanagar Beach', 'Optional water sports'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay in Havelock'
    },
    {
      day: 3,
      
      title: 'Elephant Beach Excursion',
      description:
        'Speed boat to Elephant Beach. Enjoy complimentary snorkeling and optional activities like Jet Ski, Banana Ride, Sea Walk.',
      activities: ['Elephant Beach excursion', 'Snorkeling (complimentary)', 'Optional water sports'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay in Havelock'
    },
    {
      day: 4,
     
      title: 'Havelock to Neil Island',
      description:
        'Ferry transfer to Neil Island. Visit Bharatpur Beach and Natural Bridge.',
      activities: ['Bharatpur Beach', 'Natural Bridge'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay in Neil Island'
    },
    {
      day: 5,
      
      title: 'Neil Island to Port Blair',
      description:
        'Return to Port Blair by ferry. Afternoon city tour covering Sagarika Emporium, Fisheries Museum, Anthropological Museum.',
      activities: ['Ferry transfer', 'City tour (Emporium, Museums)'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Stay in Port Blair'
    },
    {
      day: 6,
      
      title: 'Departure from Port Blair',
      description:
        'Check-out from hotel and transfer to airport/harbour for onward journey.',
      activities: ['Airport/Harbour drop'],
      meals: ['Breakfast'],
      accommodation: '-'
    }
  ],
  pricingOptions: [
    {
      id: "standard",
      title: "Option 1",
      price: 24999,
      description: "Per person cost on MAP basis"
    },
    {
      id: "premium",
      title: "Option 2",
      price: 29499,
      description: "Per person cost with upgraded inclusions"
    }
  ],
  
};
