
// Define the Hotel type
export interface FeaturedHotel {
  id: string;
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
}

// Sample featured hotels data
export const featuredHotels: FeaturedHotel[] = [
  {
    id: "hotel-1",
    name: "Mountain View Resort",
    location: "Manali, Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGltYWxheWFzJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 5999,
    rating: 4.8
  },
  {
    id: "hotel-2",
    name: "Riverside Retreat",
    location: "Rishikesh, Uttarakhand",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 4500,
    rating: 4.6
  },
  {
    id: "hotel-3",
    name: "Royal Palace Hotel",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 8999,
    rating: 4.9
  },
  {
    id: "hotel-4",
    name: "Beachside Bungalows",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1603777953662-5412335e7921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYWNoJTIwaG90ZWwlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 6500,
    rating: 4.5
  },
  {
    id: "hotel-5",
    name: "Houseboat Stay",
    location: "Alleppey, Kerala",
    image: "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2VyYWxhJTIwaG91c2Vib2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 7500,
    rating: 4.7
  },
  {
    id: "hotel-6",
    name: "Valley View Lodge",
    location: "Darjeeling, West Bengal",
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyamVlbGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    rating: 4.5
  },
  {
    id: "hotel-7",
    name: "Desert Safari Camp",
    location: "Jaisalmer, Rajasthan",
    image: "https://images.unsplash.com/photo-1616684000067-36952fde56ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRlc2VydCUyMGNhbXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 6999,
    rating: 4.6
  },
  {
    id: "hotel-8",
    name: "Backwater Retreat",
    location: "Kumarakom, Kerala",
    image: "https://images.unsplash.com/photo-1602343168117-bb8a12d7bc66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2VyYWxhJTIwYmFja3dhdGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 9000,
    rating: 4.9
  }
];
