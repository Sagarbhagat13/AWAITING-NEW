
// Popular trip data

export interface Trip {
  id: string;
  title: string;
  location: string;
  price: number;
  discount?: number;
  duration: string;
  image: string;
  rating: number;
  reviews: number;
  stateHighlight?: boolean;
  honeymoonSpecial?: boolean;
  international?: boolean;
  familySpecial?: boolean;
  longWeekend?: boolean;
  bikingPackage?: boolean;
  suvPackage?: boolean;
  offbeat?: boolean;
  // Holiday badges
  diwali?: boolean;
  christmas?: boolean;
  newYear?: boolean;
  independence?: boolean;
}

export const popularTrips: Trip[] = [
  {
    id: 'lw16',
    title: 'Himachal with Dharamshala and manali',
    location: 'Himachal Pradesh',
    image: '/images/xmasnyhima2.png',
    price: 15500,
    duration: '7N/8D',
    longWeekend: true,
    rating: 5.0,
    reviews: 167
  },
  {
    id: 'lw12',
    title: 'Meghalaya with Kaziranga: Wildlife, Waterfalls & Wonders',
    location: 'Meghalaya & Assam',
    image: 'https://images.unsplash.com/photo-1625826415766-001bd75aaf52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVnaGFsYXlhfGVufDB8fDB8fHww',
    price: 21999,
    duration: '6N/7D',
    longWeekend: true,
    rating: 4.9,
    reviews: 154
  },
  {
    id: 'lw8',
    title: 'Winter Spiti valley',
    location: 'Himachal Pradesh',
    image: '/images/xmasnyspiti1.png',
    price: 17999,
    duration: '5N/6D',
    longWeekend: true,
    rating: 4.8,
    reviews: 189
  },
  ,
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
    id: 'lw11',
    title: 'Experience Best Of Uttarakhand ',
    location: 'Uttarakhand',
    image: '/images/Uttarakhand.png',
    price: 18999,
    duration: '6N/7D',
    longWeekend: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 'lw14',
    title: 'Sikkim & Darjeeling Delight',
    location: 'sikkim',
    image: '/images/Sikkim.webp',
    price: 19999,
    duration: '5N/6D',
    longWeekend: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 'lw1',
    title: 'Spiti Valley Road Trip',
    location: 'Himachal Pradesh',
    price: 19999,
    discount:0,
    duration: '8D/7N',
    image: 'https://images.unsplash.com/photo-1653844573020-71f77a0ccb8c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7,
    reviews: 176,
    diwali: true,
    
  },
  {
    id: 'lw3',
    title: 'Ladakh with turtuk',
    location: 'Ladakh',
    price: 18999,
    discount: 0,
    duration: '6D/5N',
    image: 'https://images.unsplash.com/photo-1617824077360-7a77db40aae1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.6,
    reviews: 134,
    diwali: true,
  },
  {
    id: 'lw6',
    title: 'Ladakh Bike Expedition',
    location: 'Ladakh',
    price: 37999,
    discount: 0,
    duration: '12D/11N',
    image: 'https://images.unsplash.com/photo-1630693147522-1169cad4986e?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.9,
    reviews: 267,
    diwali: true,
  },  {
    id: 'lw4',
    title: 'Kerala Holiday Special',
    location: 'Kerala',
    image: '/images/xmasnykr.png',
    price: 15500,
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
    price: 17300,
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
    price: 17999,
    duration: '5N/6D',
    longWeekend: true,
    rating: 4.7,
    reviews: 167
  },
];
