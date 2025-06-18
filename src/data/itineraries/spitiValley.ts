
export const spitiValleyItinerary = {
  id: '3',
  title: 'Spiti Valley Road Trip',
  location: 'Himachal Pradesh',
  price: 17999,
  discount: 0,
  duration: '8 Days / 7 Nights',
  description: 'Embark on an epic road journey to Spiti Valley, a desert mountain valley located high in the Himalayas. Experience breathtaking landscapes, ancient monasteries, and the unique culture of this remote region often called "Little Tibet".',
  coverImage: 'https://images.unsplash.com/photo-1518002054494-3a6f23e8d5d8?q=80&w=2070&auto=format&fit=crop',
  rating: 4.7,
  reviews: 176,
  images: [
    'https://images.unsplash.com/photo-1518002054494-3a6f23e8d5d8?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599891628402-944da038957f?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1624818112191-5b109a8fe19b?q=80&w=2070&auto=format&fit=crop'
  ],
  placesCovered: ['Shimla', 'Kinnaur', 'Kalpa', 'Kaza', 'Key Monastery', 'Chandratal Lake', 'Manali'],
  highlights: [
    'Drive through one of the world\'s most dangerous roads - Kinnaur',
    'Visit the 1000-year-old Key Monastery perched at 4,166 meters',
    'Experience the unique landscape of Spiti - a cold desert mountain valley',
    'Stay in remote villages and experience the local culture',
    'Visit Chandratal Lake - the Moon Lake with its pristine blue waters',
    'Cross high mountain passes including Kunzum Pass (4,590m)',
    'Witness the confluence of Spiti and Sutlej rivers',
    'Explore ancient Buddhist monasteries and their art treasures'
  ],
  inclusions: [
    'Accommodation in hotels/homestays on twin sharing basis',
    'Meals as per itinerary (7 Breakfasts, 7 Dinners)',
    'Transportation in SUVs/Tempo Travelers suitable for mountain terrain',
    'Experienced driver and guide familiar with the region',
    'Inner line permits for restricted areas',
    'All applicable taxes and service charges',
    'First-aid kit and oxygen cylinder for emergencies'
  ],
  exclusions: [
    'Airfare or train tickets to/from Delhi',
    'Personal expenses, tips, and gratuities',
    'Travel insurance',
    'Any meals not mentioned in inclusions',
    'Monument/monastery entrance fees',
    'Cost incurred due to emergency evacuation',
    'Anything not specifically mentioned in inclusions'
  ],
  faqs: [
    {
      question: 'How is the road condition in Spiti Valley?',
      answer: 'The roads in Spiti Valley are challenging with some stretches being quite rough. Landslides are common during monsoon season. Our experienced drivers navigate these roads daily and prioritize safety above all else.'
    },
    {
      question: 'Is altitude sickness common on this trip?',
      answer: 'Altitude sickness is possible as Spiti Valley is located at high altitudes (3,000-4,500m). Our itinerary is designed for gradual acclimatization. We carry oxygen cylinders, and our guides are trained to recognize and manage altitude sickness symptoms.'
    },
    {
      question: 'What type of accommodation can we expect?',
      answer: 'Accommodation varies from standard hotels in towns like Shimla and Manali to simple guesthouses and homestays in remote villages of Spiti. All accommodations are clean and comfortable but basic in remote areas.'
    },
    {
      question: 'When is the best time to visit Spiti Valley?',
      answer: 'The best time is from June to September when all passes are open and weather is relatively stable. July-August can see some rain in certain sections, while June and September offer clearer skies but can be colder.'
    },
    {
      question: 'Is there mobile connectivity in Spiti?',
      answer: 'Mobile connectivity is limited in Spiti Valley. BSNL works in some areas, while other networks have very limited coverage. Most homestays and hotels do not have WiFi. Consider this trip a digital detox.'
    }
  ],
  itinerary: [
    {
      day: 1,
      title: 'Delhi to Shimla',
      description: 'Early morning departure from Delhi to Shimla, the capital of Himachal Pradesh and former summer capital of British India.',
      activities: [
        'Departure from Delhi by AC vehicle',
        'Drive through the plains and then ascend to Shimla',
        'Evening walk on the famous Mall Road',
        'Briefing about the journey ahead'
      ],
      meals: ['Dinner at hotel'],
      accommodation: 'Hotel in Shimla'
    },
    {
      day: 2,
      title: 'Shimla to Kalpa',
      description: 'Drive along the Hindustan-Tibet Road through Kinnaur Valley to reach Kalpa, a beautiful village offering stunning views of Kinner Kailash peaks.',
      activities: [
        'Early breakfast and departure',
        'Drive along the Sutlej River',
        'Cross Narkanda and enter Kinnaur region',
        'Evening exploration of Kalpa village',
        'Visit to Roghi village (time permitting)'
      ],
      meals: ['Breakfast at hotel', 'Dinner at hotel/homestay'],
      accommodation: 'Hotel/Homestay in Kalpa'
    },
    {
      day: 3,
      title: 'Kalpa to Nako',
      description: 'Continue the journey deeper into the mountains to reach Nako, a small village with an ancient monastery and lake.',
      activities: [
        'Morning views of Kinner Kailash mountain range',
        'Drive through Recong Peo and Pooh',
        'Visit Nako Lake and monastery',
        'Explore the 1000-year-old village'
      ],
      meals: ['Breakfast at hotel', 'Dinner at guesthouse'],
      accommodation: 'Guesthouse in Nako'
    },
    {
      day: 4,
      title: 'Nako to Kaza',
      description: 'Enter Spiti Valley and drive to Kaza, the administrative headquarters of Spiti.',
      activities: [
        'Cross Sumdo (confluence of Spiti and Sutlej rivers)',
        'Visit Tabo Monastery (founded in 996 AD)',
        'Explore Dhankar Monastery perched on a cliff',
        'Arrive at Kaza by evening'
      ],
      meals: ['Breakfast at guesthouse', 'Dinner at hotel'],
      accommodation: 'Hotel in Kaza'
    },
    {
      day: 5,
      title: 'Kaza and surroundings (Key, Kibber, Komic)',
      description: 'Explore the highest villages and ancient monasteries around Kaza.',
      activities: [
        'Visit Key Monastery, the largest in Spiti Valley',
        'Explore Kibber village (4,270m) - once the highest motorable village',
        'Visit Komic village with its ancient monastery',
        'Explore Langza village famous for fossils and Buddha statue'
      ],
      meals: ['Breakfast at hotel', 'Dinner at hotel'],
      accommodation: 'Hotel in Kaza'
    },
    {
      day: 6,
      title: 'Kaza to Chandratal Lake',
      description: 'Drive to the beautiful crescent-shaped Chandratal Lake over Kunzum Pass.',
      activities: [
        'Early departure from Kaza',
        'Cross Losar village, the last in Spiti Valley',
        'Drive over Kunzum Pass (4,590m)',
        'Trek to Chandratal Lake (moderate 1.5 km trek)',
        'Evening by the lakeside'
      ],
      meals: ['Breakfast at hotel', 'Dinner at camp'],
      accommodation: 'Camps near Chandratal (basic)'
    },
    {
      day: 7,
      title: 'Chandratal to Manali',
      description: 'Drive from Chandratal to Manali through Rohtang Pass completing the circuit.',
      activities: [
        'Last views of Chandratal in morning light',
        'Drive through Batal and Chhota Dhara',
        'Cross Rohtang Pass (weather permitting)',
        'Descend to Manali',
        'Evening at leisure in Manali'
      ],
      meals: ['Breakfast at camp', 'Dinner at hotel'],
      accommodation: 'Hotel in Manali'
    },
    {
      day: 8,
      title: 'Manali to Delhi',
      description: 'Final day with drive from Manali back to Delhi.',
      activities: [
        'Breakfast at hotel',
        'Departure for Delhi',
        'Lunch break en route (not included)',
        'Arrive in Delhi by evening'
      ],
      meals: ['Breakfast at hotel'],
      accommodation: 'N/A (Tour ends)'
    }
  ]
};
