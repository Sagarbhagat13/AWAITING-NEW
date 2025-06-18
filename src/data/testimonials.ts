
export interface Testimonial {
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  tripName: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Ankit Sharma',
    location: 'Delhi',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'Amazing experience with TripVidya! The trip was perfectly planned and our trip captain was knowledgeable and friendly. Will definitely book my next trip with them.',
    tripName: 'Manali Backpacking',
  },
  {
    name: 'Priya Patel',
    location: 'Mumbai',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4,
    text: 'Had a great time on the Spiti Valley tour. The accommodations were comfortable and the itinerary covered all the must-see spots. Highly recommended!',
    tripName: 'Spiti Valley Road Trip',
  },
  {
    name: 'Rahul Mehra',
    location: 'Bangalore',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    rating: 5,
    text: 'Kashmir trip was a dream come true! TripVidya made everything so easy and hassle-free. The photographs we took at Dal Lake were magical. Cant wait for my next trip!',
    tripName: 'Kashmir Great Lakes Trek',
  },
  {
    name: 'Neha Gupta',
    location: 'Pune',
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
    rating: 5,
    text: 'The Meghalaya trip was beyond my expectations. The group was fun and our guide was exceptional. Every detail was taken care of perfectly.',
    tripName: 'Meghalaya Exploration',
  },
];
