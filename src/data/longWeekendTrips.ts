
import { Trip } from './popularTrips';

// Extend Trip interface to maintain type compatibility
export interface LongWeekendTrip extends Trip {
  longWeekend: boolean;
}

export const longWeekendTrips: LongWeekendTrip[] = [
  {
    id: 'lw1',
    title: 'Coorg Weekend Getaway',
    location: 'Karnataka',
    image: 'https://images.unsplash.com/photo-1582560475093-ba66accbc953?auto=format&fit=crop&w=1200&q=80',
    price: 12999,
    duration: '3D/2N',
    longWeekend: true,
    rating: 4.7,
    reviews: 120
  },
  {
    id: 'lw2',
    title: 'Goa Beach Holiday',
    location: 'Goa',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    price: 14500,
    duration: '3D/2N',
    longWeekend: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'lw3',
    title: 'Rishikesh Adventure',
    location: 'Uttarakhand',
    image: 'https://images.unsplash.com/photo-1530866495561-456252f9f28a?auto=format&fit=crop&w=1200&q=80',
    price: 11999,
    duration: '3D/2N',
    longWeekend: true,
    rating: 4.6,
    reviews: 98
  },
  {
    id: 'lw4',
    title: 'Diwali in Jaipur',
    location: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897ec8548?auto=format&fit=crop&w=1200&q=80',
    price: 16999,
    duration: '4D/3N',
    longWeekend: true,
    rating: 4.9,
    reviews: 135
  },
  {
    id: 'lw5',
    title: 'Christmas in Manali',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1558347718-8647c28991c0?auto=format&fit=crop&w=1200&q=80',
    price: 18500,
    duration: '5D/4N',
    longWeekend: true,
    rating: 4.8,
    reviews: 142
  }
];
