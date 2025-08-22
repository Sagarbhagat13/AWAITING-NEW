
import { useState, useEffect, Suspense, lazy } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import OptimizedBanner from '@/components/OptimizedBanner';
import Footer from '@/components/Footer';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import PromotionalBanner from '@/components/PromotionalBanner';
import { Trip } from '@/data/popularTrips';
import { optimizedSearchService } from '@/services/optimizedSearchService';
import { dataLoader } from '@/services/dataLoader';
import { enhancedPerformanceService } from '@/services/enhancedPerformanceService';
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor';
import { useSEOOptimization } from '@/hooks/useSEOOptimization';
import { secondSetOfferBanners } from '@/components/home/OfferBannerCarousel';

// Lazy load non-critical sections for better initial load performance
const SearchResults = lazy(() => import('@/components/home/SearchResults'));
const OfferBannerCarousel = lazy(() => import('@/components/home/OfferBannerCarousel'));
const LongWeekendSection = lazy(() => import('@/components/home/LongWeekendSection'));
const PopularTripsSection = lazy(() => import('@/components/home/PopularTripsSection'));
const StatePackagesSection = lazy(() => import('@/components/home/StatePackagesSection'));
const RegionalTripsSection = lazy(() => import('@/components/home/RegionalTripsSection'));
const EarlyBirdBanner = lazy(() => import('@/components/EarlyBirdBanner'));
const GroupDiscountBanner = lazy(() => import('@/components/GroupDiscountBanner'));

// Lazy load remaining sections with lower priority
const YouTubeSection = lazy(() => import('@/components/home/YouTubeSection'));
const CustomizedTripsSection = lazy(() => import('@/components/home/CustomizedTripsSection'));
const LadakhDeparturesSection = lazy(() => import('@/components/home/LadakhDeparturesSection'));
const OffBeatTripsSection = lazy(() => import('@/components/home/OffBeatTripsSection'));
const FamilyToursSection = lazy(() => import('@/components/home/FamilyToursSection'));
const HoneymoonSection = lazy(() => import('@/components/home/HoneymoonSection'));
const WeekendTripsSection = lazy(() => import('@/components/home/WeekendTripsSection'));
const InternationalToursSection = lazy(() => import('@/components/home/InternationalToursSection'));
const TestimonialsSection = lazy(() => import('@/components/home/TestimonialsSection'));
const WhyUsSection = lazy(() => import('@/components/home/WhyUsSection'));
const PhotoGallery = lazy(() => import('@/components/home/PhotoGallery'));
const GovAffiliationsSection = lazy(() => import('@/components/home/GovAffiliationsSection'));


// Loading component for better UX
const SectionLoader = () => (
  <div className="h-32 flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 rounded-lg h-16 w-full max-w-md"></div>
  </div>
);

const OptimizedIndex = () => {
  const { toast } = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState<Trip[] | null>(null);
  const [currentSearchTerm, setCurrentSearchTerm] = useState<string>("");
  const [isSearching, setIsSearching] = useState(false);
  const [sectionsToLoad, setSectionsToLoad] = useState<string[]>([]);
  const { measureSearchTime } = usePerformanceMonitor('OptimizedIndex');
  
  // Track page load performance
  const measurePageLoad = enhancedPerformanceService.measureCriticalPath('page-load');

  // Initialize SEO optimization
  useSEOOptimization({
    enableAutoInternalLinking: true,
    enableHeadingOptimization: true,
    enableImageAltOptimization: true
  });
  
  // Preload essential data and complete page load measurement
  useEffect(() => {
    dataLoader.preloadEssentials();
    
    // Progressive section loading based on user interaction
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section');
          if (sectionName && !sectionsToLoad.includes(sectionName)) {
            setSectionsToLoad(prev => [...prev, sectionName]);
          }
        }
      });
    }, { rootMargin: '200px 0px' });

    // Observe section placeholders
    setTimeout(() => {
      document.querySelectorAll('[data-section]').forEach(el => {
        observer.observe(el);
      });
    }, 1000);

    // Complete page load measurement
    setTimeout(() => {
      measurePageLoad();
    }, 100);

    return () => observer.disconnect();
  }, [measurePageLoad]);
  
  // Optimized search parameter handling
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
    
    // Use debounced search with performance measurement
    const searchStart = enhancedPerformanceService.measureCriticalPath('search-operation');
    
    optimizedSearchService.searchTripsDebounced(
      query,
      (results) => {
        searchStart();
        setSearchResults(results);
        setIsSearching(false);
        
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
      300
    );
  };
  
  const clearSearchResults = () => {
    setSearchResults(null);
    setCurrentSearchTerm("");
    setIsSearching(false);
    setSearchParams({});
  };

  const shouldLoadSection = (sectionName: string) => sectionsToLoad.includes(sectionName);
  
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
      
      <OptimizedBanner onSearch={handleSearch} />
            
      <Suspense fallback={<SectionLoader />}>
        <OfferBannerCarousel />
      </Suspense>
      
      <main className="flex-grow">
        <h1 className="sr-only">Awaiting Adventures - Premier Travel Agency for India and International Tours</h1>
        
        {searchResults || isSearching ? (
          <Suspense fallback={<SectionLoader />}>
            <SearchResults 
              searchResults={searchResults || []} 
              clearResults={clearSearchResults} 
              searchTerm={currentSearchTerm}
              isSearching={isSearching}
            />
          </Suspense>
        ) : (
          <>
            {/* Critical above-the-fold sections loaded immediately */}
            <Suspense fallback={<SectionLoader />}>
              <LongWeekendSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
              <PopularTripsSection />
            </Suspense>
            
            {/* Progressive loading placeholders */}
            <div data-section="early-bird" className="min-h-[100px]">
              {shouldLoadSection('early-bird') && (
                <Suspense fallback={<SectionLoader />}>
                  {/* <EarlyBirdBanner /> */}
                </Suspense>
              )}
            </div>
            
            {/* <div data-section="state-packages" className="min-h-[400px]">
              {shouldLoadSection('state-packages') && (
                <Suspense fallback={<SectionLoader />}>
                  <StatePackagesSection />
                </Suspense>
              )}
            </div> */}
                 
            <Suspense fallback={<SectionLoader />}>
                <OfferBannerCarousel slides={secondSetOfferBanners} />
            </Suspense>
            
            
            {/* <div data-section="regional-trips" className="min-h-[400px]">
              {shouldLoadSection('regional-trips') && (
                <Suspense fallback={<SectionLoader />}>
                  <RegionalTripsSection />
                </Suspense>
              )}
            </div> */}
            
            {/* <div data-section="customized-trips" className="min-h-[300px]">
              {shouldLoadSection('customized-trips') && (
                <Suspense fallback={<SectionLoader />}>
                  <CustomizedTripsSection />
                </Suspense>
              )}
            </div> */}
            
            {/* <div data-section="ladakh-departures" className="min-h-[400px]">
              {shouldLoadSection('ladakh-departures') && (
                <Suspense fallback={<SectionLoader />}>
                  <LadakhDeparturesSection />
                </Suspense>
              )}
            </div> */}
            
            {/* <div data-section="offbeat-trips" className="min-h-[400px]">
              {shouldLoadSection('offbeat-trips') && (
                <Suspense fallback={<SectionLoader />}>
                  <OffBeatTripsSection />
                </Suspense>
              )}
            </div> */}
            
            <div data-section="group-discount" className="min-h-[100px]">
              {shouldLoadSection('group-discount') && (
                <Suspense fallback={<SectionLoader />}>
                  {/* <GroupDiscountBanner /> */}
                </Suspense>
              )}
            </div>
            
            {/* Lower priority sections */}
            {/* <div data-section="family-tours" className="min-h-[400px]">
              {shouldLoadSection('family-tours') && (
                <Suspense fallback={<SectionLoader />}>
                  <FamilyToursSection />
                </Suspense>
              )}
            </div> */}
            
            <div data-section="honeymoon" className="min-h-[400px]">
              {shouldLoadSection('honeymoon') && (
                <Suspense fallback={<SectionLoader />}>
                  <HoneymoonSection />
                </Suspense>
              )}
            </div>
            
            {/* <div data-section="weekend-trips" className="min-h-[400px]">
              {shouldLoadSection('weekend-trips') && (
                <Suspense fallback={<SectionLoader />}>
                  <WeekendTripsSection />
                </Suspense>
              )}
            </div> */}
            
            <div data-section="international-tours" className="min-h-[400px]">
              {shouldLoadSection('international-tours') && (
                <Suspense fallback={<SectionLoader />}>
                  <InternationalToursSection />
                </Suspense>
              )}
            </div>
            
            {/* YouTube Section - Added above testimonials */}
            <div data-section="youtube-experiences" className="min-h-[500px]">
              {shouldLoadSection('youtube-experiences') && (
                <Suspense fallback={<SectionLoader />}>
                  <YouTubeSection />
                </Suspense>
              )}
            </div>
            
            <div data-section="testimonials" className="min-h-[300px]">
              {shouldLoadSection('testimonials') && (
                <Suspense fallback={<SectionLoader />}>
                  <TestimonialsSection />
                </Suspense>
              )}
            </div>
            
            <div data-section="why-us" className="min-h-[400px]">
              {shouldLoadSection('why-us') && (
                <Suspense fallback={<SectionLoader />}>
                  <WhyUsSection />
                </Suspense>
              )}
            </div>
            
            <div data-section="photo-gallery" className="min-h-[300px]">
              {shouldLoadSection('photo-gallery') && (
                <Suspense fallback={<SectionLoader />}>
                  <PhotoGallery />
                </Suspense>
              )}
            </div>
            
            <div data-section="gov-affiliations" className="min-h-[200px]">
              {shouldLoadSection('gov-affiliations') && (
                <Suspense fallback={<SectionLoader />}>
                  <GovAffiliationsSection />
                </Suspense>
              )}
            </div>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default OptimizedIndex;
