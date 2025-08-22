
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from '@/components/home/CarouselCard';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import MinimalHero from '@/components/MinimalHero';
import { popularTrips } from '@/data/popularTrips';
import { weekendTrips } from '@/data/weekendTrips';
import { internationalTours } from '@/data/internationalTours';
import { honeymoonPackages } from '@/data/honeymoonPackages';
import { ladakhBikingTrips, ladakhSUVTrips } from '@/data/ladakhTrips';
import { offBeatTrips } from '@/data/offBeatTrips';
import { useSEOOptimization } from '@/hooks/useSEOOptimization';

const BackpackingPage = () => {
  // Initialize SEO optimization
  useSEOOptimization({
    enableAutoInternalLinking: true,
    enableHeadingOptimization: true,
    enableImageAltOptimization: true
  });

  // Combine all trips to display on the backpacking page
  const allTrips = [
    ...popularTrips,
    ...weekendTrips,
    ...internationalTours,
    ...honeymoonPackages,
    ...ladakhBikingTrips,
    ...ladakhSUVTrips,
    ...offBeatTrips
  ];
  
  return (
    <div className="min-h-screen flex flex-col relative">
      <EnhancedSEOHead 
        title="Best Backpacking Trips in India & International - Adventure Travel Packages"
        description="Discover amazing backpacking adventures across India and internationally. From Himalayan treks to beach escapes, find your perfect backpacking journey with expert-planned itineraries, group departures, and 24/7 support."
        keywords="backpacking trips india, adventure backpacking, budget travel, solo travel, group backpacking, trekking tours, youth travel, himalayan treks, backpacking packages, adventure travel india"
        url="https://awaitingadventures.com/backpacking"
        type="website"
        image="https://awaitingadventures.com/og-image.png"
      />
      
      <Navbar />
      
      <main className="flex-grow">
        {/* <div className="container mx-auto px-4 pt-20">
          <Breadcrumb />
        </div> */}
        
        {/* Hero Section */}
        {/* <section className="py-20 bg-gradient-to-r from-[#E8F5E8] to-[#D4F1D4]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Backpacking Adventures Across India & Beyond
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Discover incredible backpacking experiences across India and international destinations. 
              Join like-minded travelers on budget-friendly adventures that create lifelong memories. 
              From Himalayan treks to cultural explorations, adventure awaits those who dare to explore.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Group Adventures</h3>
                <p className="text-gray-600">Join fellow backpackers on shared journeys</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Budget-Friendly</h3>
                <p className="text-gray-600">Affordable packages without compromising quality</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Guidance</h3>
                <p className="text-gray-600">Experienced guides and 24/7 support</p>
              </div>
            </div>
          </div>
        </section> */}
                <MinimalHero title="Backpacking Adventures" />
        {/* Trips Carousel Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Popular Backpacking Destinations
            </h2>
            {/* <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Choose from our curated collection of backpacking adventures designed for solo travelers, 
              groups, and adventure enthusiasts seeking authentic travel experiences.
            </p> */}
            
            <TripCarousel 
              title=""
              description=""
              itemsPerView={4}
            >
              {allTrips.map((trip) => (
                <CarouselCard 
                  key={trip.id} 
                  {...trip} 
                  className="backpacking-package"
                />
              ))}
            </TripCarousel>
          </div>
        </section>

        {/* Why Choose Backpacking Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Why Choose Backpacking with Awaiting Adventures?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎒</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Authentic Experiences</h3>
                <p className="text-gray-600">Connect with local cultures and communities</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Like-minded Travelers</h3>
                <p className="text-gray-600">Meet fellow adventurers and make lifelong friends</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Budget-Friendly</h3>
                <p className="text-gray-600">Maximum adventure within your budget</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🗺️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Planning</h3>
                <p className="text-gray-600">Well-researched itineraries and local insights</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BackpackingPage;
