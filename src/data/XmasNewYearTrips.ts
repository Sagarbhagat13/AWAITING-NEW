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
    price: 20800,
    duration: '5N/6D',
    xmasNewYear: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 'xny3',
    title: 'Experience X-MAS & New Year in Meghalaya',
    location: 'Meghalaya',
    image: '/images/Meghalaya2.webp',
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
    image: '/images/rok.webp',
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
    price: 49999,
    duration: '7D/6N',
    xmasNewYear: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 'xny7',
    title: 'Experince Bhutan X-MAS & New Year Special',
    location: 'Bhutan',
    image: '/images/Bhutan.webp',
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
    title: 'Christmas in Himachal with kasol',
    location: 'Himachal Pradesh',
    image: '/images/xmasnyhima2.png',
    price: 19999,
    duration: '7N/8D',
    xmasNewYear: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'xny10',
    title: 'Experience Uttarakhand in New Year',
    location: 'Uttarakhand',
    image: '/images/Uttarakhand.png',
    price: 22499,
    duration: '6N/7D',
    xmasNewYear: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 'xny11',
    title: 'Meghalaya with Kaziranga: Xmas & New Year',
    location: 'Meghalaya & Assam',
    image: 'https://images.unsplash.com/photo-1625826415766-001bd75aaf52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVnaGFsYXlhfGVufDB8fDB8fHww',
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
    duration: '7N/8D',
    xmasNewYear: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 'xny13',
    title: 'Sikkim & Darjeeling Escape in X-MAS & New Year',
    location: 'sikkim',
    image: '/images/Sikkim.webp',
    price: 21999,
    duration: '5N/6D',
    xmasNewYear: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 'xny14',
    title: 'best of Kerala in X-MAS & New Year',
    location: 'Kerala',
    image: '/images/xmasnykr.png',
    price: 26100,
    duration: '7N/8D',
    xmasNewYear: true,
    rating: 4.9,
    reviews: 195
  },
  {
    id: 'xny15',
    title: 'New Year in Himachal with Dharamshala',
    location: 'Himachal Pradesh',
    image: '/images/xmasnyhima2.png',
    price: 19999,
    duration: '7N/8D',
    xmasNewYear: true,
    rating: 5.0,
    reviews: 167
  }
];
