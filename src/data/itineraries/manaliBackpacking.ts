
export const manaliBackpackingItinerary = {
  id: '1',
  title: 'Manali Backpacking Trip',
  location: 'Himachal Pradesh',
  price: 13999,
  discount: 15,
  duration: '5 Days / 4 Nights',
  description: 'Experience the magic of the mountains with our Manali backpacking trip. Perfect for adventure seekers and nature lovers alike.',
  coverImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
  rating: 4.8,
  reviews: 245,
  images: [
    'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1574953488043-a436ccbd7a6c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1585543805890-6c5ae5eeaef3?q=80&w=2070&auto=format&fit=crop'
  ],
  placesCovered: ['Old Manali', 'Solang Valley', 'Naggar Castle', 'Kullu Valley', 'Hadimba Temple'],
  highlights: [
    'Experience a thrilling mountain adventure in the heart of Himachal Pradesh',
    'Explore the quaint charm of Old Manali and its vibrant cafes',
    'Enjoy adventure activities at Solang Valley including paragliding options',
    'Visit the historic Naggar Castle and learn about the local heritage',
    'Experience the serene beauty of Jana Waterfall tucked in the mountains',
    'Shop for authentic handcrafted items at the local markets',
    'Enjoy cozy bonfires under the starlit skies (weather permitting)',
    'Comfortable accommodation with mountain views',
    'Transportation in comfortable AC vehicles'
  ],
  inclusions: [
    'Accommodation in well-appointed hotels/camps (4 nights)',
    'Meals as per itinerary (4 Breakfasts, 4 Dinners)',
    'Transfers and sightseeing by AC vehicle',
    'English-speaking tour guide',
    'All applicable taxes and service charges',
    'Bonfire evening (weather permitting)',
    'Local sightseeing as per itinerary'
  ],
  exclusions: [
    'Airfare or train tickets to/from Delhi',
    'Personal expenses such as laundry, telephone calls, tips, etc',
    'Additional meals or beverages not mentioned in the inclusions',
    'Adventure activities (paragliding, zip-lining, etc.) - available at extra cost',
    'Travel insurance',
    'Anything not mentioned in the inclusions',
    'Additional expenses arising due to weather conditions or other unforeseen factors'
  ],
  faqs: [
    {
      question: 'What is the best time to visit Manali?',
      answer: 'The best time to visit Manali is from March to June for pleasant weather and outdoor activities. July to September is the monsoon season with lush green landscapes but occasional road blockages. October to February offers snowfall experiences but some areas might be inaccessible.'
    },
    {
      question: 'Are adventure activities included in the package?',
      answer: 'Adventure activities like paragliding, zip-lining, etc. at Solang Valley are available at an additional cost and are subject to weather conditions and availability.'
    },
    {
      question: 'What kind of accommodation can we expect?',
      answer: 'We provide comfortable 3-star category hotels or equivalent with all necessary amenities. Rooms are on a twin-sharing basis and have mountain views where possible.'
    },
    {
      question: 'Is it safe for solo female travelers?',
      answer: 'Yes, Manali is generally safe for solo female travelers. Our group trips always have tour managers who ensure the safety of all participants. We also maintain a healthy gender ratio in our groups.'
    },
    {
      question: 'What should I pack for the trip?',
      answer: 'Pack comfortable walking shoes, warm clothes (even in summer as evenings can be cool), a light rain jacket, sunscreen, personal medications, and a day backpack. A detailed packing list will be shared after booking.'
    }
  ],
  itinerary: [
    {
      day: 1,
      title: 'Delhi to Manali Overnight Journey',
      description: 'Your journey begins with an overnight bus ride from Delhi to Manali. Meet your fellow travelers at the pickup point in Delhi and get ready for an exciting adventure.',
      activities: [
        'Meeting point at Kashmiri Gate ISBT, Delhi',
        'Departure from Delhi in an AC Volvo bus',
        'Dinner at a highway dhaba (not included in package)',
        'Overnight journey to Manali'
      ],
      meals: ['None (Dinner on your own at highway restaurant)'],
      accommodation: 'Overnight in AC Volvo bus'
    },
    {
      day: 2,
      title: 'Arrival in Manali & Local Exploration',
      description: 'Arrive in Manali by late morning. After checking into your hotel and freshening up, explore Old Manali and its vibrant markets.',
      activities: [
        'Arrival in Manali and check-in at the hotel',
        'Lunch and briefing about the trip',
        'Visit to Hadimba Temple and Old Manali',
        'Evening at leisure at Mall Road',
        'Dinner and bonfire at the hotel'
      ],
      meals: ['Breakfast at highway dhaba (not included)', 'Dinner at hotel'],
      accommodation: 'Hotel in Manali'
    },
    {
      day: 3,
      title: 'Solang Valley Adventure Day',
      description: 'Spend the day at Solang Valley, known for its adventure activities. Try paragliding, zip-lining, or simply enjoy the beautiful views.',
      activities: [
        'Breakfast at the hotel',
        'Departure for Solang Valley',
        'Adventure activities at Solang Valley (paragliding, zip-lining at extra cost)',
        'Lunch amidst the mountains',
        'More adventure or leisure time',
        'Return to the hotel',
        'Dinner and overnight stay'
      ],
      meals: ['Breakfast at hotel', 'Dinner at hotel'],
      accommodation: 'Hotel in Manali'
    },
    {
      day: 4,
      title: 'Kullu Valley and Naggar Castle',
      description: 'Visit the historic Naggar Castle and explore the beautiful Kullu Valley. Experience local culture and traditions.',
      activities: [
        'Breakfast at the hotel',
        'Departure for Naggar Castle',
        'Explore Naggar Castle and its art gallery',
        'Lunch at a local restaurant',
        'Visit to Jana Waterfall',
        'Shopping at Kullu shawl factories',
        'Return to Manali',
        'Farewell dinner and cultural evening'
      ],
      meals: ['Breakfast at hotel', 'Dinner at hotel'],
      accommodation: 'Hotel in Manali'
    },
    {
      day: 5,
      title: 'Manali to Delhi Departure',
      description: 'After breakfast, spend some leisure time in Manali. Later in the evening, board your bus back to Delhi with memories to cherish.',
      activities: [
        'Late breakfast at the hotel',
        'Check-out from the hotel',
        'Free time for shopping or relaxation',
        'Lunch',
        'Visit to Vashisht Hot Springs (optional)',
        'Departure for Delhi',
        'Overnight journey to Delhi'
      ],
      meals: ['Breakfast at hotel'],
      accommodation: 'Overnight in AC Volvo bus'
    }
  ]
};
