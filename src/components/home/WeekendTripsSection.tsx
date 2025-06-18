
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from './CarouselCard';
import { weekendTrips } from '@/data/weekendTrips';

const WeekendTripsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Short Trips</h2>
        
        <TripCarousel 
          title=""
          description=""
          itemsPerView={4}
          className="short-trip"
        >
          {weekendTrips.map((trip) => (
            <CarouselCard 
              key={trip.id} 
              {...trip}
              longWeekend={true}
              className="short-trip"
            />
          ))}
        </TripCarousel>
        
        <div className="text-center mt-10">
          <Link to="/short-trips">
            <Button variant="outline" className="border-wanderon-primary text-wanderon-primary hover:bg-wanderon-primary hover:text-white">
              View All Short Trips
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WeekendTripsSection;
