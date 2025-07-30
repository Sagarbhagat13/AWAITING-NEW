
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
    id: 'lw5',
    title: 'Experience Rajasthan in monsoon',
    location: 'Rajasthan',
    price: 15900,
    discount: 5,
    duration: '8D/7N',
    image: 'https://images.unsplash.com/photo-1695956353120-54ce5e91632b?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.8,
    reviews: 245,
    
  },
  {
    id: 'lw4',
    title: 'Kerala mansoon',
    location: 'kerala',
    price: 14900,
    discount: 5,
    duration: '8D/7N',
    image: 'https://images.unsplash.com/photo-1629813538702-64c925934e19?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.9,
    reviews: 189,
    independence: true,
  },
  {
    id: 'lw1',
    title: 'Spiti Valley Road Trip',
    location: 'Himachal Pradesh',
    price: 19999,
    discount:5,
    duration: '8D/7N',
    image: 'https://images.unsplash.com/photo-1653844573020-71f77a0ccb8c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7,
    reviews: 176,
    independence  : true,
  },
  {
    id: 'lw3',
    title: 'Ladakh with turtuk',
    location: 'Ladakh',
    price: 18999,
    discount: 5,
    duration: '6D/5N',
    image: 'https://images.unsplash.com/photo-1617824077360-7a77db40aae1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.6,
    reviews: 134,
    independence: true,
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
    independence  : true,
  },
];
