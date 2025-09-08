import { Trip } from './popularTrips';

// Extend Trip interface to maintain type compatibility
export interface XmasNewYearTrip extends Trip {
  xmasNewYear: boolean;
}

export const xmasNewYearTrips: XmasNewYearTrip[] = [
  {
    id: 'xny1',
    title: 'Christmas in Kashmir',
    location: 'Kashmir',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80',
    price: 24999,
    duration: '5D/4N',
    xmasNewYear: true,
    rating: 4.9,
    reviews: 145
  },
  {
    id: 'xny2',
    title: 'New Year in Goa',
    location: 'Goa',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80',
    price: 18999,
    duration: '4D/3N',
    xmasNewYear: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 'xny3',
    title: 'X-MAS Himachal Adventure',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    price: 21500,
    duration: '6D/5N',
    xmasNewYear: true,
    rating: 4.7,
    reviews: 167
  },
  {
    id: 'xny4',
    title: 'New Year in Rajasthan',
    location: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897ec8548?auto=format&fit=crop&w=1200&q=80',
    price: 19999,
    duration: '5D/4N',
    xmasNewYear: true,
    rating: 4.8,
    reviews: 189
  },
  {
    id: 'xny5',
    title: 'Christmas in Kerala',
    location: 'Kerala',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    price: 22999,
    duration: '6D/5N',
    xmasNewYear: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'xny6',
    title: 'New Year in Andaman',
    location: 'Andaman',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80',
    price: 28999,
    duration: '7D/6N',
    xmasNewYear: true,
    rating: 4.8,
    reviews: 134
  }
];
