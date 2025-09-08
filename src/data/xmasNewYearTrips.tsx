export interface XmasNewYearTrip {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  discount: number;
  image: string;
  features: string[];
  category: string;
}

export const xmasNewYearTrips: XmasNewYearTrip[] = [
  {
    id: "xmas-goa-2024",
    title: "Goa Christmas Special",
    location: "Goa",
    duration: "4 Days 3 Nights",
    price: 15999,
    discount: 19,
    image: "/lovable-uploads/2f2cf992-ad1d-47ad-9f83-81862be69fc9.png",
    features: ["Beach Parties", "Christmas Dinner", "Live Music"],
    category: "Holiday Special"
  },
  {
    id: "new-year-manali-2024",
    title: "Manali New Year Celebration",
    location: "Manali, Himachal Pradesh",
    duration: "5 Days 4 Nights",
    price: 18999,
    discount: 16,
    image: "/lovable-uploads/a92cd83f-872e-43e1-a7bb-92c1ff4d6905.png",
    features: ["Snow Activities", "Bonfire Night", "New Year Party"],
    category: "Winter Special"
  },
  {
    id: "xmas-kerala-2024",
    title: "Kerala Christmas Backwaters",
    location: "Kerala",
    duration: "6 Days 5 Nights",
    price: 22999,
    discount: 13,
    image: "/lovable-uploads/2f2cf992-ad1d-47ad-9f83-81862be69fc9.png",
    features: ["Houseboat Stay", "Traditional Feast", "Cultural Shows"],
    category: "Cultural Special"
  },
  {
    id: "xmas-rajasthan-2024",
    title: "Rajasthan Royal Christmas",
    location: "Rajasthan",
    duration: "7 Days 6 Nights",
    price: 28999,
    discount: 15,
    image: "/lovable-uploads/2f2cf992-ad1d-47ad-9f83-81862be69fc9.png",
    features: ["Palace Stay", "Royal Feast", "Cultural Programs"],
    category: "Royal Special"
  },
  {
    id: "new-year-rishikesh-2024",
    title: "Rishikesh New Year Retreat",
    location: "Rishikesh, Uttarakhand",
    duration: "4 Days 3 Nights",
    price: 12999,
    discount: 20,
    image: "/lovable-uploads/a92cd83f-872e-43e1-a7bb-92c1ff4d6905.png",
    features: ["River Rafting", "Yoga Sessions", "Bonfire Night"],
    category: "Adventure Special"
  },
  {
    id: "xmas-andaman-2024",
    title: "Andaman Christmas Paradise",
    location: "Andaman & Nicobar",
    duration: "6 Days 5 Nights",
    price: 35999,
    discount: 12,
    image: "/lovable-uploads/2f2cf992-ad1d-47ad-9f83-81862be69fc9.png",
    features: ["Beach Resort", "Water Sports", "Island Hopping"],
    category: "Island Special"
  },
  {
    id: "new-year-shimla-2024",
    title: "Shimla New Year Snow Festival",
    location: "Shimla, Himachal Pradesh",
    duration: "5 Days 4 Nights",
    price: 16999,
    discount: 18,
    image: "/lovable-uploads/a92cd83f-872e-43e1-a7bb-92c1ff4d6905.png",
    features: ["Snow Activities", "Mountain Views", "Local Cuisine"],
    category: "Mountain Special"
  },
  {
    id: "xmas-udaipur-2024",
    title: "Udaipur Christmas Royal",
    location: "Udaipur, Rajasthan",
    duration: "4 Days 3 Nights",
    price: 24999,
    discount: 14,
    image: "/lovable-uploads/2f2cf992-ad1d-47ad-9f83-81862be69fc9.png",
    features: ["Lake Palace", "Boat Rides", "Heritage Walk"],
    category: "Heritage Special"
  }
];