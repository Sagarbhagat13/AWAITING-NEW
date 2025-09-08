import React from 'react';
import { Link } from 'react-router-dom';
import TripCarousel from '../TripCarousel';
import CarouselCard from './CarouselCard';
import { Button } from '../ui/button';
import { xmasNewYearTrips } from '@/data/XmasNewYearTrips';
import { ChevronRight, Snowflake, Gift } from 'lucide-react';

const XmasNewYearSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-red-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Christmas & New Year Specials
            </h2>
          </div>
        </div>

        {/* Trip Carousel */}
        <TripCarousel 
          title=""
          description=""
          itemsPerView={4}
        >
          {xmasNewYearTrips.slice(0, 6).map((trip, index) => (
            <CarouselCard 
              key={trip.id} 
              id={trip.id}
              title={trip.title}
              location={trip.location}
              duration={trip.duration}
              price={trip.price}
              discount={trip.discount}
              image={trip.image}
              className="holiday-package"
              priority={index < 4}
              index={index}
            />
          ))}
        </TripCarousel>

        <div className="text-center mt-10">
        <Link to="/xmas-new-year">
            <Button variant="outline" className="group">
              View All Holiday Packages
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          </div>

     
      </div>
    </section>
  );
};

export default XmasNewYearSection;