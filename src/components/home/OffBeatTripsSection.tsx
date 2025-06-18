
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from './CarouselCard';
import { offBeatTrips } from '@/data/offBeatTrips';

const OffBeatTripsSection = () => {
  return (
    <section className="py-12 bg-[#F3F3F3]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Off-Beat Destinations</h2>
        
        <TripCarousel 
          title=""
          description=""
          itemsPerView={4}
        >
          {offBeatTrips.map((trip) => (
            <CarouselCard 
              key={trip.id} 
              {...trip}
              offbeat={true}
            />
          ))}
        </TripCarousel>
        
        <div className="text-center mt-10">
          <Link to="/off-beat-trips">
            <Button variant="outline" className="border-gray-500 text-gray-600 hover:bg-gray-800 hover:text-white">
              Explore All Off-Beat Adventures
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OffBeatTripsSection;
