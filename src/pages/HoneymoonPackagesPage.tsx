import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from '@/components/home/CarouselCard';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import Breadcrumb from '@/components/seo/Breadcrumb';
import { honeymoonPackages } from '@/data/honeymoonPackages';
import { useSEOOptimization } from '@/hooks/useSEOOptimization';

const HoneymoonPackagesPage = () => {
  // Initialize SEO optimization
  useSEOOptimization({
    enableAutoInternalLinking: true,
    enableHeadingOptimization: true,
    enableImageAltOptimization: true
  });

  return (
    <div className="min-h-screen flex flex-col relative">
      <EnhancedSEOHead 
        title="Best Honeymoon Packages in India & International - Romantic Getaways"
        description="Discover romantic honeymoon packages for couples. From beach resorts to hill stations, explore curated honeymoon destinations in India and internationally with luxury accommodations and intimate experiences."
        keywords="honeymoon packages, romantic getaways, couple tours, honeymoon destinations india, international honeymoon, beach honeymoon, hill station honeymoon, luxury honeymoon"
        url="https://awaitingadventures.com/honeymoon-packages"
        type="website"
        image="https://awaitingadventures.com/og-image.png"
      />
      
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-20">
          <Breadcrumb />
        </div>
        
        {/* Hero Section */}
        
        
        {/* Trips Carousel Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Popular Honeymoon Destinations
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Explore our collection of romantic getaways designed for couples seeking intimate and luxurious experiences. 
              Each package is crafted to create perfect moments for your new journey together.
            </p>
            
            <TripCarousel 
              title=""
              description=""
              itemsPerView={4}
            >
              {honeymoonPackages.map((trip, index) => (
                <CarouselCard 
                  key={trip.id} 
                  {...trip} 
                  honeymoonSpecial={true}
                  index={index}
                  priority={index < 2}
                />
              ))}
            </TripCarousel>
          </div>
        </section>

        {/* Why Choose Our Honeymoon Packages Section */}
       
      </main>
      
      <Footer />
    </div>
  );
};

export default HoneymoonPackagesPage;