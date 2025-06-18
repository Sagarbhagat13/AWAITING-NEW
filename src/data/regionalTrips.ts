
import { Trip } from './popularTrips';

// Define type for regional trips data
export interface RegionalTrips {
  region: string;
  trips: Trip[];
}

// Creating regional trips data
export const regionalTrips: RegionalTrips[] = [
  {
    region: "North",
    trips: [
      {
        id: 'north-1',
        title: 'Kashmir Paradise',
        location: 'Jammu & Kashmir',
        price: 24999,
        discount: 15,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1612436395449-509dab4a5642?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 156
      },
      {
        id: 'north-2',
        title: 'Manali Adventure',
        location: 'Himachal Pradesh',
        price: 18999,
        discount: 10,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 134
      },
      {
        id: 'north-3',
        title: 'Spiritual Varanasi',
        location: 'Uttar Pradesh',
        price: 16999,
        discount: 8,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 98
      }
    ]
  },
  {
    region: "South",
    trips: [
      {
        id: 'south-1',
        title: 'Kerala Backwaters',
        location: 'Kerala',
        price: 22999,
        discount: 12,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1609766428302-a39ddcacad7f?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 187
      },
      {
        id: 'south-2',
        title: 'Mysore Heritage',
        location: 'Karnataka',
        price: 17999,
        discount: 8,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1600100292781-ad9f4b9ce5bd?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 112
      },
      {
        id: 'south-3',
        title: 'Pondicherry Beach Retreat',
        location: 'Tamil Nadu',
        price: 19999,
        discount: 10,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1598222864721-b743b9f1d9cb?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 143
      }
    ]
  },
  {
    region: "East",
    trips: [
      {
        id: 'east-1',
        title: 'Darjeeling Tea Trails',
        location: 'West Bengal',
        price: 21999,
        discount: 12,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1586420930295-7a7d26b54fdf?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 132
      },
      {
        id: 'east-2',
        title: 'Kaziranga Wildlife',
        location: 'Assam',
        price: 26999,
        discount: 8,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 118
      },
      {
        id: 'east-3',
        title: 'Gangtok & Pelling',
        location: 'Sikkim',
        price: 23999,
        discount: 10,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1626077578726-744055a7c979?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 96
      }
    ]
  },
  {
    region: "West",
    trips: [
      {
        id: 'west-1',
        title: 'Goa Beach Holiday',
        location: 'Goa',
        price: 18999,
        discount: 15,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 176
      },
      {
        id: 'west-2',
        title: 'Udaipur Lake City',
        location: 'Rajasthan',
        price: 22999,
        discount: 10,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897ec8548?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 146
      },
      {
        id: 'west-3',
        title: 'Rann of Kutch',
        location: 'Gujarat',
        price: 20999,
        discount: 8,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1584487487374-6aa12cfced1f?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 122
      }
    ]
  }
];
