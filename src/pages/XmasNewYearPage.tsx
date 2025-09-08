import { Helmet } from "react-helmet";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from '@/components/home/CarouselCard';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import Breadcrumb from '@/components/seo/Breadcrumb';

import { useSEOOptimization } from '@/hooks/useSEOOptimization';
import { xmasNewYearTrips } from '@/data/XmasNewYearTrips';

const XmasNewYearPage = () => {
  // Initialize SEO optimization
  useSEOOptimization({
    enableAutoInternalLinking: true,
    enableHeadingOptimization: true,
    enableImageAltOptimization: true
  });

 

  return (
    <div className="min-h-screen flex flex-col relative">
      <EnhancedSEOHead 
        title="Christmas & New Year Holiday Packages | TripVidya - Festive Travel Deals"
        description="Celebrate Christmas and New Year with specially curated holiday packages. Experience festive magic with family and friends in India's most beautiful destinations with exclusive deals and celebrations."
        keywords="christmas packages, new year trips, holiday packages, festive tours, christmas vacation, new year celebration, holiday travel deals, winter holiday packages"
        url="https://tripvidya.com/xmas-new-year"
        type="website"
        image="https://tripvidya.com/og-image.png"
      />
      
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-20">
          <Breadcrumb />
        </div>
        
          {/* Minimal Hero Section */}
        <section className="py-20 bg-gradient-to-r from-red-50 to-green-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Christmas & New Year Specials
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Celebrate the festive season with magical holiday experiences across India's most beautiful destinations.
            </p>
          </div>
        </section>

        {/* Trip Carousel Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            
            
            <TripCarousel 
              title=""
              description=""
              itemsPerView={4}
            >
            {xmasNewYearTrips.map((trip, index) => (
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
        
        
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default XmasNewYearPage;