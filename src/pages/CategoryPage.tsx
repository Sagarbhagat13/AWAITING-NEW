import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LocationCarousels from '@/components/LocationCarousels';
import TripGrid from '@/components/category/TripGrid';
import MinimalHero from '@/components/MinimalHero';
import { useCategoryData } from '@/hooks/useCategoryData';

const CategoryPage = () => {
  const { 
    pageTitle, 
    pageDescription, 
    trips, 
    stateData, 
    countryData, 
    path 
  } = useCategoryData();
  
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      
      <main className="flex-grow">
        <MinimalHero title={pageTitle} />
        
        <div className="container mx-auto px-4 py-12">
          {/* Render state/country specific carousels */}
          {stateData && (
            <LocationCarousels 
              groupTours={stateData.groupTours} 
              customTrips={stateData.customTrips}
              locationName={stateData.name}
            />
          )}
          
          {countryData && (
            <LocationCarousels 
              groupTours={countryData.groupTours} 
              customTrips={countryData.customTrips}
              locationName={countryData.name}
            />
          )}
          
          {/* Render trips grid with appropriate styling based on category */}
          {!stateData && !countryData && (
            <TripGrid 
              trips={trips} 
              path={path}
            />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
