
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TripImageGallery from '@/components/itinerary/TripImageGallery';
import TripHeaderSection from '@/components/itinerary/TripHeaderSection';
import TripContentSection from '@/components/itinerary/TripContentSection';
import SimilarTripsSection from '@/components/itinerary/SimilarTripsSection';
import GoogleReviewsSlider from '@/components/itinerary/GoogleReviewsSlider';
import MiniGallery from '@/components/itinerary/MiniGallery';
import { getTripData } from '@/services/tripService';
import { useTripActions } from '@/hooks/use-trip-actions';
import MobileFixedBottom from '@/components/itinerary/MobileFixedBottom';
import { useIsMobile } from '@/hooks/use-mobile';
import { PricingOption } from '@/components/itinerary/booking/PricingTabs';

const ItineraryPage = () => {
  const { id, tripId } = useParams<{ id?: string; tripId?: string }>();
  const actualTripId = id || tripId || '1';
  const tripData = getTripData(actualTripId);
  const { isFavorite, toggleFavorite, handleShare } = useTripActions();
  const isMobile = useIsMobile();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showBookingSummary, setShowBookingSummary] = useState(false);
  const isCustomizedTripPage = window.location.pathname.includes('/custom-trip/');
  
  // State for active pricing and guest count - changed default to 1
  const [activePricingId, setActivePricingId] = useState('standard');
  const [activePricing, setActivePricing] = useState<PricingOption | null>(null);
  const [guestCount, setGuestCount] = useState(1);

  const handleBookNowClick = () => {
    setShowBookingSummary(true);
  };

  const handlePricingChange = (pricingId: string, pricingData: PricingOption) => {
    setActivePricingId(pricingId);
    setActivePricing(pricingData);
  };

  const handleGuestCountChange = (count: number) => {
    setGuestCount(count);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16 pb-[72px] md:pb-0 w-full">
        <TripImageGallery 
          images={tripData.images} 
          title={tripData.title}
        />
        
        <div className="container mx-auto px-4 py-6">
          <TripHeaderSection 
            title={tripData.title}
            location={tripData.location}
            duration={tripData.duration}
            rating={tripData.rating}
            reviews={tripData.reviews}
            places={tripData.placesCovered}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
            handleShare={handleShare}
          />
        </div>
        
        <TripContentSection 
          description={tripData.description}
          itinerary={tripData.itinerary}
          highlights={tripData.highlights}
          inclusions={tripData.inclusions}
          exclusions={tripData.exclusions}
          faqs={tripData.faqs}
          price={tripData.price}
          discount={tripData.discount}
          duration={tripData.duration}
          tripId={actualTripId}
          tripName={tripData.title}
          isCustomizedTrip={isCustomizedTripPage}
          showBookingForm={showBookingForm}
          setShowBookingForm={setShowBookingForm}
          showBookingSummary={showBookingSummary}
          setShowBookingSummary={setShowBookingSummary}
          activePricingId={activePricingId}
          onPricingChange={handlePricingChange}
          guestCount={guestCount}
          onGuestCountChange={handleGuestCountChange}
           pricingOptions={tripData.pricingOptions || []}
          batchDates={tripData.batchDates || []}
        />
        
        {/* Google Reviews Slider */}
        <GoogleReviewsSlider />
        
        {/* Mini Gallery (Travel Inspiration) moved below reviews */}
        <MiniGallery />
        
        {/* Similar Trips Section */}
        <SimilarTripsSection 
          currentTripId={actualTripId} 
          currentLocation={tripData.location} 
        />

        {isMobile && (
          <MobileFixedBottom 
            price={tripData.price}
            discount={tripData.discount}
            onBookNowClick={handleBookNowClick}
            tripName={tripData.title}
            activePricing={activePricing}
            guestCount={guestCount}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ItineraryPage;
