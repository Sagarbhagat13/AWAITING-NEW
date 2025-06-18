
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import EarlyBirdBanner from '@/components/EarlyBirdBanner';
import GroupDiscountBanner from '@/components/GroupDiscountBanner';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import { Trip } from '@/data/popularTrips';
import { optimizedSearchService } from '@/services/optimizedSearchService';
import { dataLoader } from '@/services/dataLoader';
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor';
import { useSEOOptimization } from '@/hooks/useSEOOptimization';

import SearchResults from '@/components/home/SearchResults';
import LongWeekendSection from '@/components/home/LongWeekendSection';
import PopularTripsSection from '@/components/home/PopularTripsSection';
import StatePackagesSection from '@/components/home/StatePackagesSection';
import DreamTripCta from '@/components/home/DreamTripCta';
import FamilyToursSection from '@/components/home/FamilyToursSection';
import RegionalTripsSection from '@/components/home/RegionalTripsSection';
import HoneymoonSection from '@/components/home/HoneymoonSection';
import WeekendTripsSection from '@/components/home/WeekendTripsSection';
import InternationalToursSection from '@/components/home/InternationalToursSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import LadakhDeparturesSection from '@/components/home/LadakhDeparturesSection';
import OffBeatTripsSection from '@/components/home/OffBeatTripsSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import CustomizedTripsSection from '@/components/home/CustomizedTripsSection';
import PhotoGallery from '@/components/home/PhotoGallery';
import GovAffiliationsSection from '@/components/home/GovAffiliationsSection';

const Index = () => {
  const { toast } = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState<Trip[] | null>(null);
  const [currentSearchTerm, setCurrentSearchTerm] = useState<string>("");
  const [isSearching, setIsSearching] = useState(false);
  const { measureSearchTime } = usePerformanceMonitor('Index');
  
  // Initialize SEO optimization
  useSEOOptimization({
    enableAutoInternalLinking: true,
    enableHeadingOptimization: true,
    enableImageAltOptimization: true
  });
  
  // Preload essential data on mount
  useEffect(() => {
    dataLoader.preloadEssentials();
  }, []);
  
  // Check for search parameter on mount and when URL changes
  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      handleSearch(searchQuery);
    } else {
      setSearchResults(null);
      setCurrentSearchTerm("");
    }
  }, [searchParams]);
  
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults(null);
      setCurrentSearchTerm("");
      setIsSearching(false);
      return;
    }
    
    setCurrentSearchTerm(query);
    setIsSearching(true);
    
    // Use debounced search for better performance
    optimizedSearchService.searchTripsDebounced(
      query,
      (results) => {
        setSearchResults(results);
        setIsSearching(false);
        
        // Update the URL with the search parameter
        setSearchParams({ search: query });
        
        if (results.length === 0) {
          toast({
            title: "No trips found",
            description: "Try different search terms or explore our featured trips",
            variant: "destructive",
          });
        } else {
          toast({
            title: `Found ${results.length} trips`,
            description: `Showing results for "${query}"`,
          });
        }
      },
      300 // 300ms debounce
    );
  };
  
  const clearSearchResults = () => {
    setSearchResults(null);
    setCurrentSearchTerm("");
    setIsSearching(false);
    // Remove the search parameter from the URL
    setSearchParams({});
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <EnhancedSEOHead 
        title="Awaiting Adventures - Discover Amazing Travel Experiences"
        description="Explore curated travel packages, adventure trips, and honeymoon destinations across India and internationally. Book your next unforgettable journey with expert-planned itineraries and 24/7 support."
        keywords="travel packages india, adventure trips, honeymoon destinations, backpacking tours, family vacations, international tours, weekend getaways, customized trips, group tours, solo travel"
        url="https://awaitingadventures.com"
        type="website"
        image="https://awaitingadventures.com/og-image.png"
      />
      
      <Navbar />
      
      <Banner onSearch={handleSearch} />
      
      <main className="flex-grow">
        <h1 className="sr-only">Awaiting Adventures - Premier Travel Agency for India and International Tours</h1>
        
        {searchResults || isSearching ? (
          <SearchResults 
            searchResults={searchResults || []} 
            clearResults={clearSearchResults} 
            searchTerm={currentSearchTerm}
            isSearching={isSearching}
          />
        ) : (
          <>
            <LongWeekendSection />
            
            <PopularTripsSection />
            
            <EarlyBirdBanner />
            
            <StatePackagesSection />
            
            <RegionalTripsSection />
            
            <CustomizedTripsSection />
            
            <LadakhDeparturesSection />
            
            <OffBeatTripsSection />
            
            <GroupDiscountBanner />
            
            <FamilyToursSection />
            
            <HoneymoonSection />
            
            <WeekendTripsSection />
            
            <InternationalToursSection />
            
            <TestimonialsSection />
            
            <WhyUsSection />
            
            <PhotoGallery />
            
            <GovAffiliationsSection />
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
