export const rishikeshRaftingItinerary = {
  id: '7',
  title: 'Rishikesh River Rafting',
  location: 'Uttarakhand',
  price: 5500,
  discount: 0,
  duration: '2 Days / 1 Night',
  description: 'Dive into the adventure capital of India with thrilling white water rafting on the Ganges, along with spiritual experiences and scenic beauty of the Himalayas.',
  coverImage: 'https://images.unsplash.com/photo-1530866495561-456252f9f28a?auto=format&fit=crop&w=800&q=80',
  rating: 4.6,
  reviews: 98,
  images: [
    'https://images.unsplash.com/photo-1530866495561-456252f9f28a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80'
  ],
  placesCovered: ['Rishikesh', 'Shivpuri', 'Laxman Jhula', 'Ram Jhula'],
  highlights: [
    '16 km white water rafting from Shivpuri to Rishikesh',
    'Grade II & III rapids for thrilling experience',
    'Visit iconic Laxman Jhula and Ram Jhula',
    'Evening Ganga Aarti at Triveni Ghat',
    'Yoga session by the Ganges (optional)',
    'Cliff jumping and body surfing activities'
  ],
  inclusions: [
    'Accommodation in Rishikesh (1 night)',
    'Meals as per itinerary (1 Breakfast, 1 Dinner)',
    '16 km river rafting with safety equipment',
    'Certified river guide',
    'Transportation for rafting activities',
    'All applicable taxes'
  ],
  exclusions: [
    'Transportation to/from Delhi',
    'Personal expenses',
    'Travel insurance',
    'Lunch on both days',
    'Additional adventure activities',
    'Camera for rafting (waterproof)'
  ],
  cancellationPolicy: [
    {
      period: "30+ days before departure",
      refundPercentage: 100,
      description: "Full refund minus processing fee"
    },
    {
      period: "15-29 days before departure", 
      refundPercentage: 75,
      description: "75% refund of total trip cost"
    },
    {
      period: "7-14 days before departure",
      refundPercentage: 50,
      description: "50% refund of total trip cost"
    },
    {
      period: "0-6 days before departure",
      refundPercentage: 0,
      description: "No refund applicable"
    }
  ],
  thingsToCarry: [
    {
      category: "Rafting Essentials",
      essential: true,
      items: [
        "Quick-dry shorts/pants",
        "Swimwear",
        "Secure water shoes or old sneakers",
        "Waterproof bag for valuables",
        "Extra set of dry clothes",
        "Towel"
      ]
    },
    {
      category: "Protection",
      essential: true,
      items: [
        "Sunscreen (waterproof SPF 30+)",
        "Sunglasses with strap",
        "Cap or hat",
        "Personal medications",
        "First aid basics"
      ]
    },
    {
      category: "Optional Items",
      essential: false,
      items: [
        "Waterproof camera/GoPro",
        "Dry bag for electronics",
        "Energy bars/snacks",
        "Water bottle",
        "Power bank"
      ]
    }
  ],
  faqs: [
    {
      question: 'Do I need to know swimming for rafting?',
      answer: 'While knowing swimming is helpful, it\'s not mandatory. We provide life jackets and certified guides accompany every raft. However, basic comfort with water is recommended.'
    },
    {
      question: 'What is the difficulty level of the rapids?',
      answer: 'The rapids are graded II & III, which are suitable for beginners and intermediate rafters. Our experienced guides will navigate through the challenging sections.'
    },
    {
      question: 'What should I wear for rafting?',
      answer: 'Wear quick-dry clothes, secure footwear (no flip-flops), and bring extra clothes. We provide life jackets and helmets. Avoid cotton clothes as they take long to dry.'
    }
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival and River Rafting Adventure',
      description: 'Arrive in Rishikesh, experience thrilling white water rafting, and explore the spiritual side of the city.',
      activities: [
        'Arrival and check-in at accommodation',
        'Safety briefing and equipment distribution',
        'Drive to Shivpuri rafting starting point',
        '16 km white water rafting to Rishikesh',
        'Visit Laxman Jhula and Ram Jhula',
        'Evening Ganga Aarti at Triveni Ghat',
        'Dinner and overnight stay'
      ],
      meals: ['Dinner at local restaurant'],
      accommodation: 'Hotel in Rishikesh'
    },
    {
      day: 2,
      title: 'Yoga and Departure',
      description: 'Start with a peaceful yoga session, explore local markets, and depart with renewed energy.',
      activities: [
        'Early morning yoga session by the Ganges',
        'Breakfast at accommodation',
        'Visit Beatles Ashram (optional)',
        'Local market shopping',
        'Departure'
      ],
      meals: ['Breakfast'],
      accommodation: 'N/A (Tour ends)'
    }
  ]
};
