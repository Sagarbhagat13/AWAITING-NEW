
import { Trip } from './popularTrips';

// Extend Trip interface to maintain type compatibility
export interface LongWeekendTrip  extends Trip {
  longWeekend: boolean;
}

export const longWeekendTrips: LongWeekendTrip[] = [
  {
    id: 'lw1',
    title: 'Experience Spiti With Chandratal',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1697984286841-5cedb7885109?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 17999,
    duration: '8D/7N',
    longWeekend: true,
    rating: 4.7,
    reviews: 120,
    independence: true
  },
  {
    id: 'lw2',
    title: 'Spiti-Biking Mars on Earth.',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1653844573020-71f77a0ccb8c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 31999,
    duration: '8D/7N',
    longWeekend: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'lw3',
    title: 'Experience Ladakh with Turtuk',
    location: 'Ladakh',
    image: 'https://images.unsplash.com/photo-1566323124805-757e5c41d37c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 18999,
    duration: '7D/6N',
    longWeekend: true,
    rating: 4.6,
    reviews: 98
  },
  ,
  {
    id: 'lw6',
    title: 'Ladakh Biking',
    location: 'Ladakh',
    image: 'https://images.unsplash.com/photo-1738494777740-21b07e9da9a2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 32999,
    duration: '12D/11N',
    longWeekend: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: 'lw4',
    title: 'Kerala Holiday Special',
    location: 'Kerala',
    image: '/images/xmasnykr.png',
    price: 18000,
    duration: '5N/6D',
    longWeekend: true,
    rating: 4.9,
    reviews: 145
  },
  {
    id: 'lw5',
    title: 'Experience Rajasthan',
    location: 'Rajasthan',
    image: '/images/xmasnyrj.png',
    price: 20900,
    duration: '5N/6D',
     longWeekend: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 'lw7',
    title: 'Simpply Meghalaya',
    location: 'Meghalaya',
    image: '/images/xmasnymg.png',
    price: 19999,
    duration: '5N/6D',
    longWeekend: true,
    rating: 4.7,
    reviews: 167
  },
  {
    id: 'lw8',
    title: 'Winter Spiti valley',
    location: 'Himachal Pradesh',
    image: '/images/xmasnyspiti1.png',
    price: 19999,
    duration: '5N/6D',
    longWeekend: true,
    rating: 4.8,
    reviews: 189
  },
  {
    id: 'lw9',
    title: 'Winter Rann of Kutch',
    location: 'Gujarat',
    image: '/images/xmasnyrann.png',
    price: 7499,
    duration: '1N/2D',
    longWeekend: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'lw10',
    title: 'Himachal With Kasol',
    location: 'Himachal Pradesh',
    image: '/images/xmasnyhima2.png',
    price: 19500,
    duration: '7N/8D',
    longWeekend: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'lw11',
    title: 'Experience Best Of Uttarakhand ',
    location: 'Uttarakhand',
    image: '/images/Uttarakhand.png',
    price: 22499,
    duration: '6N/7D',
    longWeekend: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 'lw12',
    title: 'Meghalaya with Kaziranga: Wildlife, Waterfalls & Wonders',
    location: 'Meghalaya & Assam',
    image: 'https://images.unsplash.com/photo-1625826415766-001bd75aaf52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVnaGFsYXlhfGVufDB8fDB8fHww',
    price: 23999,
    duration: '6N/7D',
    longWeekend: true,
    rating: 4.9,
    reviews: 154
  },
  {
    id: 'lw13',
    title: 'Royal Rajasthan ',
    location: 'Rajasthan',
    image: '/images/xmasnyrj.png',
    price: 28200,
    duration: '5N/6D',
    longWeekend: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 'lw14',
    title: 'Sikkim & Darjeeling Delight',
    location: 'sikkim',
    image: '/images/Sikkim.webp',
    price: 21999,
    duration: '5N/6D',
    longWeekend: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 'lw15',
    title: 'best of Kerala ',
    location: 'Kerala',
    image: '/images/xmasnykr.png',
    price: 26100,
    duration: '7N/8D',
    longWeekend: true,
    rating: 4.9,
    reviews: 195
  },
  {
    id: 'lw16',
    title: 'Himachal with Dharamshala and manali',
    location: 'Himachal Pradesh',
    image: '/images/xmasnyhima2.png',
    price: 19999,
    duration: '7N/8D',
    longWeekend: true,
    rating: 5.0,
    reviews: 167
  }
];
