
import { Trip } from './popularTrips';

// Extend Trip interface to maintain type compatibility
export interface LongWeekendTrip  extends Trip {
  longWeekend: boolean;
}

export const longWeekendTrips: LongWeekendTrip[] = [
  {
    id: 'lw4',
    title: 'Simply Meghalaya',
    location: 'Meghalaya',
    image: '/images/xmasnymg.png',
    price: 17999,
    duration: '5N/6D',
    rating: 4.7,
    reviews: 167,
    longWeekend: true
  },
  {
    id: 'lw9',
    title: 'Do Dham With Tungnath & Chandrashila',
    location: 'Uttarakhand',
    image: 'https://images.unsplash.com/photo-1617860931879-19d32ec9912d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtlZGFybmF0aHxlbnwwfHwwfHx8MA%3D%3D',
    price: 17999,
    duration: '7N/8D',
    rating: 4.9,
    reviews: 167,
    longWeekend: true
  },
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
    id: 'lw5',
    title: 'Experience Kerala ',
    location: 'Kerala',
    image: '/images/xmasnykr.png',
    price: 15500,
    duration: '5N/6D',
    longWeekend: true,
    rating: 4.9,
    reviews: 145
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
    id: 'lw7',
    title: 'Rann of Kutch Winter Special',
    location: 'Gujarat',
    image: '/images/xmasnyrann.png',
    price: 7499,
    duration: '1N/2D',
    longWeekend: true,
    rating: 4.9,
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
    id: 'lw8',
    title: 'Winter in Rajasthan',
    location: 'Rajasthan',
    image: '/images/xmasnyrj.png',
    price: 17300,
    duration: '5N/6D',
    longWeekend: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 'lw9',
    title: 'Christmas in Himachal',
    location: 'Himachal Pradesh',
    image: '/images/xmasnyhima2.png',
    price: 19500,
    duration: '7N/8D',
    longWeekend: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'lw10',
    title: 'winter Spiti',
    location: 'Himachal Pradesh',
    image: '/images/xmasnyspiti1.png',
    price: 19999,
    duration: '5N/6D',
    longWeekend: true,
    rating: 4.8,
    reviews: 189
  },

];
