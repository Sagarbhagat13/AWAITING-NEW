import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from '@/components/home/CarouselCard';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import Breadcrumb from '@/components/seo/Breadcrumb';
import MinimalHero from '@/components/MinimalHero';
import { longWeekendTrips } from '@/data/longWeekendTrips';
import { useSEOOptimization } from '@/hooks/useSEOOptimization';

const LongWeekendTripsPage = () => {
  // Initialize SEO optimization
  useSEOOptimization({
    enableAutoInternalLinking: true,
    enableHeadingOptimization: true,
    enableImageAltOptimization: true
  });

  return (
    <div className="min-h-screen flex flex-col relative">
      <EnhancedSEOHead 
        title="Best Long Weekend Trips in India - 3-5 Day Holiday Packages"
        description="Discover amazing long weekend getaways across India. Perfect 3-5 day holiday packages for festivals, holidays, and extended weekends. Book your next short escape with expert-planned itineraries."
        keywords="long weekend trips, weekend getaways, short holidays, 3 day trips, 4 day packages, festival packages, holiday trips, weekend packages india"
        url="https://awaitingadventures.com/long-weekend-trips"
        type="website"
        image="https://awaitingadventures.com/og-image.png"
      />
      
      <Navbar />
      
      <main className="flex-grow">
        <MinimalHero title="LongWeekend Trips" />
       
        
        
        
        {/* Trips Carousel Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Popular Long Weekend Destinations
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Explore our collection of handpicked long weekend trips designed for maximum relaxation 
              and adventure in minimum time. Perfect for busy professionals and adventure seekers.
            </p>
            
            <TripCarousel 
              title=""
              description=""
              itemsPerView={4}
            >
              {longWeekendTrips.map((trip, index) => (
                <CarouselCard 
                  key={trip.id} 
                  {...trip} 
                  longWeekend={true}
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

export default LongWeekendTripsPage;