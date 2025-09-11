import { Trip } from './popularTrips';

// Extend Trip interface to maintain type compatibility
export interface XmasNewYearTrip extends Trip {
  xmasNewYear: boolean;
}

export const xmasNewYearTrips: XmasNewYearTrip[] = [
  {
    id: 'xny1',
    title: 'X-MAS & New Year In Kerala',
    location: 'Kerala',
    image: '/images/xmasnykr.png',
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
    image: '/images/xmasnyrj.png',
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
    image: '/images/xmasnymg.png',
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
    image: '/images/xmasnyspiti1.png',
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
    image: '/images/xmasnyrann.png',
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
    image: '/images/nybali.png',
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
    image: '/images/xmasnybhutan.png',
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
    image: '/images/xmasnysl.png',
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
    image: '/images/xmasnyhima2.png',
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
  },
  {
    id: 'xny11',
    title: 'Meghalaya with Kaziranga: Wildlife, Waterfalls & Wonders',
    location: 'Meghalaya & Assam',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80',
    price: 23999,
    duration: '6N/7D',
    xmasNewYear: true,
    rating: 4.9,
    reviews: 154
  },
  {
    id: 'xny12',
    title: 'Royal Rajasthan X-MAS & New Year Special',
    location: 'Rajasthan',
    image: '/images/xmasnyrj.png',
    price: 28200,
    duration: '5N/6D',
    xmasNewYear: true,
    rating: 4.8,
    reviews: 203
  }
];
