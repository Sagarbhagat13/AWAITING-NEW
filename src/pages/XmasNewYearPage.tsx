
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MinimalHero from '@/components/MinimalHero';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import CarouselCard from '@/components/home/CarouselCard';
import { xmasNewYearTrips } from '@/data/xmasNewYearTrips';
import { useIsMobile } from '@/hooks/use-mobile';

const XmasNewYearPage = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      <EnhancedSEOHead 
        title="X-MAS & New Year Travel Packages - Awaiting Adventures"
        description="Celebrate Christmas and New Year with our specially curated holiday packages. Explore festive destinations across India with amazing deals and unforgettable experiences."
        keywords="christmas packages, new year travel, holiday packages, festive travel, christmas destinations, new year celebrations, winter packages"
        url="https://awaitingadventures.com/xmas-new-year"
      />
      
      <Navbar />
      <MinimalHero title="X-MAS & New Year Specials" />
      
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-gray-600 max-w-2xl mx-auto">
                Make this festive season unforgettable with our specially curated Christmas and New Year packages. 
                Celebrate the holidays in breathtaking destinations with amazing deals and experiences.
              </p>
            </div>
            
            {/* Horizontal Carousel for all screen sizes */}
            <Carousel 
              className="w-full"
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
            >
              <CarouselContent className={isMobile ? "px-4" : "px-8"}>
                {xmasNewYearTrips.map((trip) => (
                  <CarouselItem 
                    key={trip.id} 
                    className={isMobile ? "basis-[85%]" : "basis-1/2 lg:basis-1/3 xl:basis-1/4"}
                  >
                    <div className="p-2">
                      <CarouselCard 
                        {...trip}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 border-none bg-black/30 text-white hover:bg-black/50" />
              <CarouselNext className="right-2 border-none bg-black/30 text-white hover:bg-black/50" />
            </Carousel>
            
            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Festival Packages?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎄</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Festive Celebrations</h3>
                  <p className="text-gray-600">Experience magical Christmas and New Year celebrations at stunning destinations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Special Events</h3>
                  <p className="text-gray-600">Join exclusive holiday events and activities designed for the festive season</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💝</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Amazing Deals</h3>
                  <p className="text-gray-600">Get the best prices for your holiday travel with our special festive offers</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default XmasNewYearPage;