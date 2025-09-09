import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from '@/components/home/CarouselCard';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import Breadcrumb from '@/components/seo/Breadcrumb';
import { familyTours } from '@/data/familyTours';
import { useSEOOptimization } from '@/hooks/useSEOOptimization';
import MinimalHero from '@/components/MinimalHero';

const FamilyPackagesPage = () => {
  // Initialize SEO optimization
  useSEOOptimization({
    enableAutoInternalLinking: true,
    enableHeadingOptimization: true,
    enableImageAltOptimization: true
  });

  return (
    <div className="min-h-screen flex flex-col relative">
      <EnhancedSEOHead 
        title="Best Family Vacation Packages in India - Kid-Friendly Tours"
        description="Discover amazing family vacation packages across India. Kid-friendly tours with safe accommodations, family activities, and memorable experiences for all ages. Perfect for family bonding and fun."
        keywords="family vacation packages, family tours india, kid friendly tours, family holiday packages, family trips, children travel, multi generation tours, family bonding vacations"
        url="https://awaitingadventures.com/family-packages"
        type="website"
        image="https://awaitingadventures.com/og-image.png"
      />
      
      <Navbar />
      
      <main className="flex-grow">
        <MinimalHero title="Family Packages" />
        
        
       
        
        {/* Trips Carousel Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Popular Family Destinations
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Explore our collection of family-friendly destinations designed with children and parents in mind. 
              Each package ensures safety, comfort, and fun activities for the entire family to enjoy together.
            </p>
            
            <TripCarousel 
              title=""
              description=""
              itemsPerView={4}
            >
              {familyTours.map((trip, index) => (
                <CarouselCard 
                  key={trip.id} 
                  {...trip} 
                  familySpecial={true}
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

export default FamilyPackagesPage;