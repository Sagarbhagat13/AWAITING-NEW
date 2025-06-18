
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from './CarouselCard';
import { familyTours } from '@/data/familyTours';

const FamilyToursSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Family Group Tours</h2>
        
        <TripCarousel 
          title=""
          description=""
          itemsPerView={4}
        >
          {familyTours.map((trip) => (
            <CarouselCard 
              key={trip.id} 
              {...trip} 
              familySpecial={true}
            />
          ))}
        </TripCarousel>
        
        <div className="text-center mt-10">
          <Link to="/family-tours">
            <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white">
              View All Family Tours
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FamilyToursSection;
