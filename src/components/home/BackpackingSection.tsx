
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from './CarouselCard';
import { popularTrips } from '@/data/popularTrips';
import { weekendTrips } from '@/data/weekendTrips';
import { internationalTours } from '@/data/internationalTours';
import { honeymoonPackages } from '@/data/honeymoonPackages';
import { ladakhBikingTrips, ladakhSUVTrips } from '@/data/ladakhTrips';
import { offBeatTrips } from '@/data/offBeatTrips';

const BackpackingSection = () => {
  // Combine all trips suitable for backpacking
  const backpackingTrips = [
    ...popularTrips.slice(0, 3),
    ...weekendTrips.slice(0, 2),
    ...offBeatTrips.slice(0, 3),
    ...ladakhBikingTrips.slice(0, 2)
  ].slice(0, 8); // Limit to 8 trips for better performance

  return (
    <section className="py-12 bg-gradient-to-r from-[#E8F5E8] to-[#D4F1D4]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Backpacking Adventures</h2>
        
        <TripCarousel 
          title=""
          description=""
          itemsPerView={4}
        >
          {backpackingTrips.map((trip) => (
            <CarouselCard 
              key={trip.id} 
              {...trip} 
              className="backpacking-package"
            />
          ))}
        </TripCarousel>
        
        <div className="text-center mt-10">
          <Link to="/backpacking">
            <Button variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white">
              Explore All Backpacking Trips
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BackpackingSection;
