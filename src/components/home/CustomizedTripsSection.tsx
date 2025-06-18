import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Plane, Home } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { useIsMobile } from '@/hooks/use-mobile';
import TripCarousel from '@/components/TripCarousel';

type CustomTripProps = {
  id: string;
  title: string;
  location: string;
  image: string;
  isInternational: boolean;
};

// Sample data for customized trips
const customizedTrips: CustomTripProps[] = [
  {
    id: "custom-1",
    title: "Mountain Retreat",
    location: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isInternational: false
  },
  {
    id: "custom-2",
    title: "Beach Paradise",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    isInternational: false
  },
  {
    id: "custom-3",
    title: "Desert Safari",
    location: "Rajasthan",
    image: "https://images.unsplash.com/photo-1604596529732-eda197ef53d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isInternational: false
  },
  {
    id: "custom-4",
    title: "Backwater Cruise",
    location: "Kerala",
    image: "https://images.unsplash.com/photo-1602501415308-526eb77a7025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    isInternational: false
  },
  {
    id: "custom-5",
    title: "Alpine Adventure",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1527683040093-3a2b80ed1592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isInternational: true
  },
  {
    id: "custom-6",
    title: "Mediterranean Escape",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    isInternational: true
  },
  {
    id: "custom-7",
    title: "Northern Lights",
    location: "Iceland",
    image: "https://images.unsplash.com/photo-1579033385971-a7bc8c5f8c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
    isInternational: true
  },
  {
    id: "custom-8",
    title: "Ancient Wonders",
    location: "Italy",
    image: "https://images.unsplash.com/photo-1529155157179-963abf419b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isInternational: true
  }
];

// Custom trip card component
const CustomTripCard = ({ id, title, location, image }: CustomTripProps) => {
  return (
    <Link to={`/custom-trip/${id}`} className="block rounded-lg overflow-hidden group">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const CustomizedTripsSection = () => {
  const [showInternational, setShowInternational] = useState(false);
  const isMobile = useIsMobile();
  
  // Filter trips based on toggle state
  const filteredTrips = customizedTrips.filter(trip => 
    showInternational ? trip.isInternational : !trip.isInternational
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Customized Trips</h2>
        
        <div className="flex justify-center items-center space-x-2 mb-8">
          <Toggle 
            variant="outline" 
            pressed={!showInternational} 
            onPressedChange={() => setShowInternational(false)}
            className={`${!showInternational ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-gray-200 text-gray-700'} font-medium`}
          >
            <Home className="h-4 w-4 mr-2" />
            Domestic
          </Toggle>
          <Toggle 
            variant="outline" 
            pressed={showInternational} 
            onPressedChange={() => setShowInternational(true)}
            className={`${showInternational ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-gray-200 text-gray-700'} font-medium`}
          >
            <Plane className="h-4 w-4 mr-2" />
            International
          </Toggle>
        </div>
        
        {isMobile ? (
          <TripCarousel 
            title=""
            itemsPerView={1.2}
            className="mt-6"
          >
            {filteredTrips.map((trip) => (
              <CustomTripCard 
                key={trip.id} 
                {...trip}
              />
            ))}
          </TripCarousel>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredTrips.map((trip) => (
              <CustomTripCard 
                key={trip.id} 
                {...trip}
              />
            ))}
          </div>
        )}
        
        {filteredTrips.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No {showInternational ? 'international' : 'domestic'} custom trips available at the moment.
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomizedTripsSection;
