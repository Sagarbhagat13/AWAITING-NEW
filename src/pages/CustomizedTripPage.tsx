
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TripCarousel from '@/components/TripCarousel';
import ItineraryCard from '@/components/customized/ItineraryCard';

// Sample data - you can move this to a separate file later
const sampleItineraries = [
  {
    id: "itin-1",
    title: "Enchanting Rajasthan",
    image: "https://images.unsplash.com/photo-1599661046827-dacf0992c65e",
    duration: "7 Days 6 Nights",
    cities: ["Jaipur", "Udaipur", "Jodhpur"],
  },
  {
    id: "itin-2",
    title: "Kerala Backwaters",
    image: "https://images.unsplash.com/photo-1602501415308-526eb77a7025",
    duration: "5 Days 4 Nights",
    cities: ["Kochi", "Munnar", "Alleppey"],
  },
  {
    id: "itin-3",
    title: "Himalayan Expedition",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    duration: "6 Days 5 Nights",
    cities: ["Manali", "Kasol", "Tosh"],
  },
  {
    id: "itin-4",
    title: "Golden Triangle",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    duration: "4 Days 3 Nights",
    cities: ["Delhi", "Agra", "Jaipur"],
  },
];

const CustomizedTripPage = () => {
  const { tripId } = useParams();
  const trip = sampleItineraries.find(t => t.id === tripId) || sampleItineraries[0];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] mt-16">
        <img 
          src={trip.image}
          alt={trip.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{trip.title}</h1>
            <p className="text-xl">Customize Your Perfect Journey</p>
          </div>
        </div>
      </div>

      {/* Itineraries Section */}
      <div className="container mx-auto px-4 py-12">
        <TripCarousel
          title="Suggested Itineraries"
          description="Personalize these journeys to match your preferences"
          itemsPerView={3}
        >
          {sampleItineraries.map((itinerary) => (
            <ItineraryCard
              key={itinerary.id}
              {...itinerary}
            />
          ))}
        </TripCarousel>
      </div>
      
      <Footer />
    </div>
  );
};

export default CustomizedTripPage;
