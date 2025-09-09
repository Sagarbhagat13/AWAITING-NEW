import { Trip } from './popularTrips';

// Extend Trip interface to maintain type compatibility
export interface XmasNewYearTrip extends Trip {
  xmasNewYear: boolean;
}

export const xmasNewYearTrips: XmasNewYearTrip[] = [
  {
    id: 'xny1',
    title: 'X-MAS & New Year In Kerala.',
    location: 'Kerala',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80',
    price: 18000,
    duration: '5N/6D',
    xmasNewYear: true,
    rating: 4.9,
    reviews: 145
  },
  {
    id: 'xny2',
    title: 'X-MAS & New Year In Rajasthan',
    location: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80',
    price: 20900,
    duration: '5N/6D',
    xmasNewYear: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 'xny3',
    title: 'Experience X-MAS & New Year in Meghalaya',
    location: 'Meghalaya',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    price: 19999,
    duration: '5N/6D',
    xmasNewYear: true,
    rating: 4.7,
    reviews: 167
  },
  {
    id: 'xny4',
    title: 'Spiti valley X-MAS & New Year Special',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897ec8548?auto=format&fit=crop&w=1200&q=80',
    price: 19999,
    duration: '5N/6D',
    xmasNewYear: true,
    rating: 4.8,
    reviews: 189
  },
  {
    id: 'xny5',
    title: 'Rann of Kutch X-MAS & New Year Special',
    location: 'Gujarat',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    price: 7499,
    duration: '1N/2D',
    xmasNewYear: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'xny6',
    title: 'New year Party in Bali',
    location: 'Bali',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80',
    price: 45999,
    duration: '7D/6N',
    xmasNewYear: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 'xny7',
    title: 'Experince Bhutan X-MAS & New Year Special',
    location: 'Bhutan',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    price: 29999,
    duration: '7N/8D',
    xmasNewYear: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'xny8',
    title: 'Srilanka in New Year',
    location: 'Srilanka',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80',
    price: 55555,
    duration: '7N/8D',
    xmasNewYear: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 'xny9',
    title: 'Christmas in Himachal',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    price: 19500,
    duration: '7N/8D',
    xmasNewYear: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'xny10',
    title: 'Experience Uttarakhand in New Year',
    location: 'Uttarakhand',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80',
    price: 22499,
    duration: '6N/7D',
    xmasNewYear: true,
    rating: 4.8,
    reviews: 134
  }
];
