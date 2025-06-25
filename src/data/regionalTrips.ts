
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
        id: '',
        title: 'Kashmir Paradise',
        location: 'Jammu & Kashmir',
        price: 24999,
        discount: 15,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.8,
        reviews: 156
      },
      {
        id: '',
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
        id: '',
        title: 'Spiritual Varanasi',
        location: 'Uttar Pradesh',
        price: 16999,
        discount: 8,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 98
      },
      {
        id: 'lw1',
        title: 'Spiti valley in chandratal',
        location: 'Himachal Pradesh',
        price: 19999,
        discount: 5,
        duration: '8D/7N',
        image: 'https://images.unsplash.com/photo-1697984286841-5cedb7885109?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.9,
        reviews: 156
      }
    ]
  },
  {
    region: "South",
    trips: [
      
      {
        id: '',
        title: 'Kerala Backwaters',
        location: 'Kerala',
        price: 22999,
        discount: 12,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1583513645242-25a32d451084?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.9,
        reviews: 187
      },
      {
        id: '',
        title: 'Mysore Heritage',
        location: 'Karnataka',
        price: 17999,
        discount: 8,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1579429223126-29d2f6f9c1ac?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.6,
        reviews: 112
      },
      {
        id: '',
        title: 'Pondicherry Beach Retreat',
        location: 'Tamil Nadu',
        price: 19999,
        discount: 10,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1665908560822-26f88255dcab?q=80&w=1880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.7,
        reviews: 143
      },
      {
    id: 'lw4',
    title: 'Kerala mansoon',
    location: 'kerala',
    price: 14900,
    discount: 5,
    duration: '8D/7N',
    image: 'https://images.unsplash.com/photo-1629813538702-64c925934e19?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.9,
    reviews: 189,
  }
      
    ]
  },
  {
    region: "East",
    trips: [
      {
        id: '',
        title: 'Darjeeling Tea Trails',
        location: 'West Bengal',
        price: 21999,
        discount: 12,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1622308644420-b20142dc993c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.7,
        reviews: 132
      },
      {
        id: '',
        title: 'Kaziranga Wildlife',
        location: 'Assam',
        price: 26999,
        discount: 8,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1675296098616-53e3d4a1dd57?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.8,
        reviews: 118
      },
      {
        id: '',
        title: 'Gangtok & Pelling',
        location: 'Sikkim',
        price: 23999,
        discount: 10,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1603755962670-a6f92be76d5e?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.6,
        reviews: 96
      },
      {
        id: '',
        title: 'Gangtok & Pelling',
        location: 'Sikkim',
        price: 23999,
        discount: 10,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1603755962670-a6f92be76d5e?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.6,
        reviews: 96
      }
    ]
  },
  {
    region: "West",
    trips: [
      {
        id: '',
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
        id: '',
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
        id: '',
        title: 'Rann of Kutch',
        location: 'Gujarat',
        price: 20999,
        discount: 8,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1584487487374-6aa12cfced1f?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 122
      },
      {
        id: '',
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
