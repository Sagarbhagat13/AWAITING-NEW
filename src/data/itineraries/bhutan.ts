export const bhutanItinerary = {
  id: 'xny7',
  title: 'Bhutan Bliss – Monasteries, Mountains & Culture',
  location: 'Bhutan',
  price: 29999,
  discount: 0,
  duration: '7 Days / 6 Nights',
  description:
    'A serene journey through the Kingdom of Bhutan covering Paro, Thimphu, Punakha, and Dochula Pass. Explore monasteries, stunning valleys, Himalayan landscapes, and immerse yourself in Bhutanese culture.',
  coverImage:
    'https://images.unsplash.com/photo-1587574293230-5c67e5a01050?auto=format&fit=crop&w=1200&q=80',
  rating: 4.8,
  reviews: 112,
  images: [
    'https://images.unsplash.com/photo-1587574293230-5c67e5a01050?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1610986600415-d6f2db6a0eef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1594897030261-9dfc88413167?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1583318052116-6a70c2a7e94a?auto=format&fit=crop&w=1200&q=80'
  ],
  placesCovered: ['Paro', 'Thimphu', 'Punakha', 'Dochula Pass'],
  highlights: [
    'Visit Paro Taktsang (Tiger’s Nest Monastery)',
    'Explore Tashichho Dzong & Buddha Dordenma in Thimphu',
    'Dochula Pass with 108 Chortens',
    'Punakha Dzong & Suspension Bridge',
    'Paro Rinpung Dzong & National Museum',
    'Local markets & cultural immersion'
  ],
  inclusions: [
    'Accommodation on twin sharing basis',
    'Daily breakfast & dinner (Half Board)',
    'All transfers & sightseeing in private vehicle',
    'English-speaking guide',
    'Bhutan Sustainable Development Fee (SDF)',
    'All permits and entry fees as per itinerary'
  ],
  exclusions: [
    'Airfares & Bhutan VISA fee (if applicable)',
    'Lunches during the tour',
    'Travel insurance',
    'Personal expenses like tips, laundry, phone calls',
    'Any activity or entry not mentioned in inclusions',
    'Alcoholic beverages'
  ],
  faqs: [
    {
      question: 'Do Indians need a visa for Bhutan?',
      answer:
        'Indian nationals do not require a visa but must carry a valid passport (minimum 6 months validity) or Voter ID. SDF and permits are mandatory.'
    },
    {
      question: 'What is the best time to visit Bhutan?',
      answer:
        'October to May is the best time, with clear skies and pleasant weather. December–January offers crisp mountain views but cold nights.'
    },
    {
      question: 'Is the trek to Tiger’s Nest difficult?',
      answer:
        'The trek is moderate, about 4–5 hours round trip. Horses are available up to halfway. Good physical fitness is recommended.'
    }
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Paro – Transfer to Thimphu',
      description: 'Arrive in Paro and transfer to Bhutan’s capital city, Thimphu.',
      activities: [
        'Meet & greet at Paro Airport',
        'Drive to Thimphu (approx. 1.5 hrs)',
        'Evening leisure walk around Thimphu market',
        'Overnight stay in Thimphu'
      ],
      meals: ['Dinner'],
      accommodation: 'Hotel in Thimphu'
    },
    {
      day: 2,
      title: 'Thimphu Sightseeing',
      description: 'Explore the highlights of Thimphu.',
      activities: [
        'Breakfast at hotel',
        'Visit Buddha Dordenma Statue',
        'Explore Tashichho Dzong',
        'National Memorial Chorten',
        'Changangkha Lhakhang monastery',
        'Leisure shopping at craft bazaar'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Hotel in Thimphu'
    },
    {
      day: 3,
      title: 'Thimphu – Dochula Pass – Punakha',
      description: 'Drive to Punakha via scenic Dochula Pass.',
      activities: [
        'Breakfast at hotel',
        'Drive to Punakha (approx. 3 hrs)',
        'Stop at Dochula Pass (3,100m) – 108 Chortens',
        'Visit Punakha Dzong',
        'Walk across Punakha Suspension Bridge'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Hotel in Punakha'
    },
    {
      day: 4,
      title: 'Punakha – Paro',
      description: 'Return to Paro with sightseeing en route.',
      activities: [
        'Breakfast at hotel',
        'Drive back to Paro (approx. 4 hrs)',
        'Visit Chimi Lhakhang (Fertility Temple)',
        'Evening leisure in Paro town'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Hotel in Paro'
    },
    {
      day: 5,
      title: 'Paro – Tiger’s Nest Hike',
      description: 'Full day excursion to the iconic Taktsang Monastery.',
      activities: [
        'Breakfast at hotel',
        'Hike to Tiger’s Nest Monastery (Taktsang)',
        'Enjoy stunning Himalayan views',
        'Return to Paro for leisure evening'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Hotel in Paro'
    },
    {
      day: 6,
      title: 'Paro Sightseeing',
      description: 'Explore the cultural highlights of Paro.',
      activities: [
        'Breakfast at hotel',
        'Visit Paro Rinpung Dzong',
        'Explore National Museum of Bhutan (Ta Dzong)',
        'Kyichu Lhakhang (one of Bhutan’s oldest temples)',
        'Leisure walk in Paro town'
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: 'Hotel in Paro'
    },
    {
      day: 7,
      title: 'Departure from Paro',
      description: 'After breakfast, transfer to Paro Airport for onward journey.',
      activities: ['Breakfast at hotel', 'Private transfer to Paro Airport'],
      meals: ['Breakfast'],
      accommodation: 'Departure day – no stay'
    }
  ],
  pricingOptions: [
    {
      id: 'standard',
      title: 'Triple Sharing',
      price: 29999,
      description: 'Standard hotels with Half Board basis (breakfast & dinner)',
      isPopular: true
    },
    {
      id: 'deluxe',
      title: 'Twin Sharing ',
      price: 31999,
      description: 'Upgraded comfort in 4-star properties with enhanced inclusions'
    }
  ],
  batchDates: [
    {
      id: 'batch-1',
      startDate: '27-12-2025',
      endDate: '02-01-2026',
      totalSlots: 20,
      availableSlots: 15,
      price: 29999
    }
  ],
  travelNotes: [
    'General hotel check-in time: 14:00 hrs; check-out: 12:00 hrs.',
    'Tiger’s Nest trek requires good walking shoes and fitness.',
    'Bhutan SDF (₹1,200 per person per night for Indians) is included in pricing.'
  ],
  supplements: [
    'Tiger’s Nest Pony Ride (one way) – US$ 25 per person',
    'Hot Stone Bath Experience – US$ 20 per person',
    'Archery Experience – US$ 15 per person',
    'National Museum Entry – US$ 5 per person',
    'Punakha Dzong Entry – US$ 3 per person'
  ]
};
