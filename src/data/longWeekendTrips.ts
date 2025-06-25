
import { Trip } from './popularTrips';

// Extend Trip interface to maintain type compatibility
export interface LongWeekendTrip extends Trip {
  longWeekend: boolean;
}

export const longWeekendTrips: LongWeekendTrip[] = [
  {
    id: 'lw1',
    title: 'Experience Spiti With Chandratal',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1697984286841-5cedb7885109?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 19999,
    duration: '8D/7N',
    longWeekend: true,
    rating: 4.7,
    reviews: 120
  },
  {
    id: 'lw2',
    title: 'Spiti-Biking Mars on Earth.',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1653844573020-71f77a0ccb8c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 31999,
    duration: '3D/2N',
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
    duration: '6D/5N',
    longWeekend: true,
    rating: 4.6,
    reviews: 98
  },
  {
    id: 'lw4',
    title: 'Experience Kerala',
    location: 'Kerala',
    image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 14900,
    duration: '8D/7N',
    longWeekend: true,
    rating: 4.9,
    reviews: 135
  },
  {
    id: 'lw5',
    title: 'Experience Rajasthan',
    location: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1587295656906-b06dca8f2340?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15900,
    duration: '8D/7N',
    longWeekend: true,
    rating: 4.8,
    reviews: 142
  }
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
  }
];
