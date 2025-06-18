
import { Trip } from './popularTrips';

// Interface for country-specific data
export interface CountryData {
  id: string;
  name: string;
  groupTours: Trip[];
  customTrips: Trip[];
}

// Sample data for each country
export const worldTrips: Record<string, CountryData> = {
  'thailand': {
    id: 'thailand',
    name: 'Thailand',
    groupTours: [
      {
        id: 'thai-group-1',
        title: 'Thailand Discovery Tour',
        location: 'Thailand',
        price: 48999,
        discount: 15,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 178,
        international: true
      },
      {
        id: 'thai-group-2',
        title: 'Bangkok-Phuket-Krabi Circuit',
        location: 'Thailand',
        price: 52500,
        discount: 10,
        duration: '8D/7N',
        image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 156,
        international: true
      },
      {
        id: 'thai-group-3',
        title: 'Thailand Island Adventure',
        location: 'Thailand',
        price: 45999,
        discount: 12,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 132,
        international: true
      }
    ],
    customTrips: [
      {
        id: 'thai-custom-1',
        title: 'Customized Thailand Experience',
        location: 'Thailand',
        price: 65999,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 48,
        international: true
      },
      {
        id: 'thai-custom-2',
        title: 'Private Thai Luxury Tour',
        location: 'Thailand',
        price: 78500,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c8dd0d5?auto=format&fit=crop&w=800&q=80',
        rating: 5.0,
        reviews: 36,
        international: true
      }
    ]
  },
  'singapore': {
    id: 'singapore',
    name: 'Singapore',
    groupTours: [
      {
        id: 'sin-group-1',
        title: 'Singapore City Explorer',
        location: 'Singapore',
        price: 58999,
        discount: 10,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 165,
        international: true
      },
      {
        id: 'sin-group-2',
        title: 'Singapore Family Adventure',
        location: 'Singapore',
        price: 62500,
        discount: 8,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1496939376851-89342e90adcd?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 142,
        international: true
      },
      {
        id: 'sin-group-3',
        title: 'Singapore-Malaysia Explorer',
        location: 'Singapore & Malaysia',
        price: 68999,
        discount: 12,
        duration: '8D/7N',
        image: 'https://images.unsplash.com/photo-1544964338-87266263c82f?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 128,
        international: true
      }
    ],
    customTrips: [
      {
        id: 'sin-custom-1',
        title: 'Customized Singapore Tour',
        location: 'Singapore',
        price: 72999,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 38,
        international: true
      },
      {
        id: 'sin-custom-2',
        title: 'Private Singapore Luxury Experience',
        location: 'Singapore',
        price: 88500,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1574227492706-f65b24c3688a?auto=format&fit=crop&w=800&q=80',
        rating: 5.0,
        reviews: 32,
        international: true
      }
    ]
  },
  'bali': {
    id: 'bali',
    name: 'Bali',
    groupTours: [
      {
        id: 'bali-group-1',
        title: 'Bali Paradise Tour',
        location: 'Indonesia',
        price: 55999,
        discount: 15,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 178,
        international: true
      },
      {
        id: 'bali-group-2',
        title: 'Bali-Gili Islands Hopping',
        location: 'Indonesia',
        price: 62500,
        discount: 10,
        duration: '8D/7N',
        image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 156,
        international: true
      },
      {
        id: 'bali-group-3',
        title: 'Bali Adventure & Culture',
        location: 'Indonesia',
        price: 52999,
        discount: 12,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 132,
        international: true
      }
    ],
    customTrips: [
      {
        id: 'bali-custom-1',
        title: 'Customized Bali Experience',
        location: 'Indonesia',
        price: 68999,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 48,
        international: true
      },
      {
        id: 'bali-custom-2',
        title: 'Private Bali Luxury Retreat',
        location: 'Indonesia',
        price: 82500,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1542897644-e04428948020?auto=format&fit=crop&w=800&q=80',
        rating: 5.0,
        reviews: 36,
        international: true
      }
    ]
  },
  'maldives': {
    id: 'maldives',
    name: 'Maldives',
    groupTours: [
      {
        id: 'mald-group-1',
        title: 'Maldives Paradise Getaway',
        location: 'Maldives',
        price: 78999,
        discount: 10,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 178,
        international: true
      },
      {
        id: 'mald-group-2',
        title: 'Maldives Island Hopping',
        location: 'Maldives',
        price: 85500,
        discount: 8,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 156,
        international: true
      },
      {
        id: 'mald-group-3',
        title: 'Maldives Water Villa Experience',
        location: 'Maldives',
        price: 92999,
        discount: 5,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80',
        rating: 5.0,
        reviews: 132,
        international: true
      }
    ],
    customTrips: [
      {
        id: 'mald-custom-1',
        title: 'Customized Maldives Luxury Tour',
        location: 'Maldives',
        price: 98999,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1578922746465-3a80a228f223?auto=format&fit=crop&w=800&q=80',
        rating: 5.0,
        reviews: 48,
        international: true
      },
      {
        id: 'mald-custom-2',
        title: 'Private Maldives Romantic Getaway',
        location: 'Maldives',
        price: 112500,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=80',
        rating: 5.0,
        reviews: 36,
        international: true
      }
    ]
  },
  'dubai': {
    id: 'dubai',
    name: 'Dubai',
    groupTours: [
      {
        id: 'dubai-group-1',
        title: 'Dubai City Explorer',
        location: 'UAE',
        price: 65999,
        discount: 12,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 178,
        international: true
      },
      {
        id: 'dubai-group-2',
        title: 'Dubai Adventure Tour',
        location: 'UAE',
        price: 72500,
        discount: 10,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 156,
        international: true
      },
      {
        id: 'dubai-group-3',
        title: 'Dubai-Abu Dhabi Explorer',
        location: 'UAE',
        price: 78999,
        discount: 8,
        duration: '8D/7N',
        image: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 132,
        international: true
      }
    ],
    customTrips: [
      {
        id: 'dubai-custom-1',
        title: 'Customized Dubai Experience',
        location: 'UAE',
        price: 85999,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 48,
        international: true
      },
      {
        id: 'dubai-custom-2',
        title: 'Private Dubai Luxury Tour',
        location: 'UAE',
        price: 98500,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&w=800&q=80',
        rating: 5.0,
        reviews: 36,
        international: true
      }
    ]
  },
  'europe': {
    id: 'europe',
    name: 'Europe',
    groupTours: [
      {
        id: 'europe-group-1',
        title: 'European Explorer',
        location: 'Europe',
        price: 125999,
        discount: 10,
        duration: '12D/11N',
        image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 178,
        international: true
      },
      {
        id: 'europe-group-2',
        title: 'Italy-France-Switzerland Circuit',
        location: 'Europe',
        price: 142500,
        discount: 8,
        duration: '14D/13N',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9357976b82?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 156,
        international: true
      },
      {
        id: 'europe-group-3',
        title: 'Eastern Europe Discovery',
        location: 'Europe',
        price: 118999,
        discount: 12,
        duration: '11D/10N',
        image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 132,
        international: true
      }
    ],
    customTrips: [
      {
        id: 'europe-custom-1',
        title: 'Customized European Adventure',
        location: 'Europe',
        price: 165999,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1493707553966-283afac8c358?auto=format&fit=crop&w=800&q=80',
        rating: 5.0,
        reviews: 48,
        international: true
      },
      {
        id: 'europe-custom-2',
        title: 'Private European Luxury Tour',
        location: 'Europe',
        price: 185500,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
        rating: 5.0,
        reviews: 36,
        international: true
      }
    ]
  }
};
