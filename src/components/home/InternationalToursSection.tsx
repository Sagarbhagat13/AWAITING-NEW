
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from './CarouselCard';
import { internationalTours } from '@/data/internationalTours';

const InternationalToursSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-[#D3E4FD] to-[#E5DEFF]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">International Tours</h2>
        
        <TripCarousel 
          title=""
          description=""
          itemsPerView={4}
        >
          {internationalTours.map((trip) => (
            <CarouselCard 
              key={trip.id} 
              {...trip} 
              international={true}
              className="international-package"
            />
          ))}
        </TripCarousel>
        
        <div className="text-center mt-10">
          <Link to="/international-tours">
            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
              View All International Tours
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InternationalToursSection;
