
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TripCarousel from '@/components/TripCarousel';
import { regionalTrips } from '@/data/regionalTrips';

// Custom trip card component for regional destinations
const RegionalTripCard = ({ id, title, location, image, duration, price }) => {
  return (
    <Link to={`/trip/${id}`} className="block group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{location}</span>
          </div>
          
          <div className="flex items-baseline mt-2">
            <span className="text-sm">{duration} • </span>
            <span className="text-sm font-medium ml-1">₹{price.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const RegionalTripsSection = () => {
  const [activeRegion, setActiveRegion] = useState("North");
  
  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Explore Trips By Region</h2>
        
        <Tabs defaultValue="North" onValueChange={setActiveRegion}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-blue-50 rounded-full p-1.5 w-auto">
              {regionalTrips.map((regionData) => (
                <TabsTrigger 
                  key={regionData.region} 
                  value={regionData.region}
                  className="rounded-full px-4 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  {regionData.region}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {regionalTrips.map((regionData) => (
            <TabsContent key={regionData.region} value={regionData.region}>
              <TripCarousel 
                title=""
                description=""
                itemsPerView={4}
              >
                {regionData.trips.map((trip) => (
                  <RegionalTripCard 
                    key={trip.id} 
                    {...trip}
                  />
                ))}
              </TripCarousel>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-10">
          <Link to="/regional-tours">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              View All Regional Packages
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegionalTripsSection;
