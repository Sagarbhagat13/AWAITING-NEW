
import React from 'react';
import { Button } from '@/components/ui/button';

const DreamTripCta = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=2000&q=80" 
          alt="Travel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Plan Your Dream Trip Today
        </h2>
        <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
          Need help planning the perfect getaway? Our travel experts are here to customize
          the ideal travel experience just for you.
        </p>
        <Button 
          size="lg"
          className="bg-tripvidya-primary hover:bg-tripvidya-primary/90"
        >
          Contact Our Experts
        </Button>
      </div>
    </section>
  );
};

export default DreamTripCta;
