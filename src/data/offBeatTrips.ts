
import { Trip } from './popularTrips';

// Using the Trip interface directly instead of creating a separate interface
export const offBeatTrips: Trip[] = [
  {
    id: 'ob1',
    title: 'Spiti Valley Trek',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
    price: 15999,
    duration: '6D/5N',
    rating: 4.7,
    reviews: 89,
    discount: 0,
    offbeat: true
  },
  {
    id: 'ob2',
    title: 'Zanskar River Expedition',
    location: 'Ladakh',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1200&q=80',
    price: 22500,
    duration: '8D/7N',
    rating: 4.8,
    reviews: 76,
    discount: 0,
    offbeat: true
  },
  {
    id: 'ob3',
    title: 'Valley of Flowers',
    location: 'Uttarakhand',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    price: 12999,
    duration: '5D/4N',
    rating: 4.6,
    reviews: 92,
    discount: 0,
    offbeat: true
  },
  {
    id: 'ob4',
    title: 'Dzukou Valley',
    location: 'Nagaland',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80',
    price: 18500,
    duration: '7D/6N',
    rating: 4.9,
    reviews: 67,
    discount: 0,
    offbeat: true
  },
  {
    id: 'ob5',
    title: 'Sandakphu Trek',
    location: 'West Bengal',
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80',
    price: 14500,
    duration: '6D/5N',
    rating: 4.7,
    reviews: 83,
    discount: 0,
    offbeat: true
  }
];
