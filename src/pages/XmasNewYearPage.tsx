
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MinimalHero from '@/components/MinimalHero';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from '@/components/home/CarouselCard';
import { xmasNewYearTrips } from '@/data/XmasNewYearTrips';
import { useIsMobile } from '@/hooks/use-mobile';
import Breadcrumb from '@/components/seo/Breadcrumb';
import { useSEOOptimization } from '@/hooks/useSEOOptimization';

const XmasNewYearPage = () => {
  const isMobile = useIsMobile();
   // Initialize SEO optimization
  useSEOOptimization({
    enableAutoInternalLinking: true,
    enableHeadingOptimization: true,
    enableImageAltOptimization: true
  });


  return (
   <div className="min-h-screen flex flex-col relative">
      <EnhancedSEOHead 
        title="X-MAS & New Year Travel Packages - Awaiting Adventures"
        description="Celebrate Christmas and New Year with our specially curated holiday packages. Explore festive destinations across India with amazing deals and unforgettable experiences."
        keywords="christmas packages, new year travel, holiday packages, festive travel, christmas destinations, new year celebrations, winter packages"
        url="https://awaitingadventures.com/xmas-new-year"
      />
      
      <Navbar />
      
      
      <main className="flex-grow">
        <MinimalHero title="X-MAS & New Year Specials" />
        
        {/* Trips Carousel Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Popular Festival Destinations
            </h2>
           
            
            <TripCarousel 
              title=""
              description=""
              itemsPerView={4}
            >
              {xmasNewYearTrips.map((trip, index) => (
                <CarouselCard 
                  key={trip.id} 
                  {...trip}
                  xmasNewYear={true}
                  index={index}
                  priority={index < 2}
                />
              ))}
            </TripCarousel>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default XmasNewYearPage;