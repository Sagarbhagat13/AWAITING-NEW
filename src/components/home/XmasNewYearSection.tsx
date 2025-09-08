import React from 'react';
import { Link } from 'react-router-dom';
import TripCarousel from '../TripCarousel';
import CarouselCard from './CarouselCard';
import { Button } from '../ui/button';
import { xmasNewYearTrips } from '../../data/XmasNewYearTrips';
import { ChevronRight, Snowflake, Gift } from 'lucide-react';

const XmasNewYearSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-red-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Snowflake className="h-6 w-6 text-red-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Christmas & New Year Specials
            </h2>
            <Gift className="h-6 w-6 text-green-500" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Celebrate the festive season with magical holiday experiences. From snowy mountain celebrations 
            to tropical beach parties, create unforgettable memories this holiday season.
          </p>
          <Link to="/xmas-new-year">
            <Button variant="outline" className="group">
              View All Holiday Packages
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
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

        {/* Festive Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg text-center">
            <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Snowflake className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Festive Celebrations</h3>
            <p className="text-gray-600 text-sm">Special Christmas and New Year events</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Gift className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Exclusive Packages</h3>
            <p className="text-gray-600 text-sm">Holiday deals with complimentary perks</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg text-center">
            <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">🎉</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Premium Experience</h3>
            <p className="text-gray-600 text-sm">Luxury accommodations and fine dining</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XmasNewYearSection;