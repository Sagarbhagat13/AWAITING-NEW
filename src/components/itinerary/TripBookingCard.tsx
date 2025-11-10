
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { generateBatchDates } from '@/utils/travelersUtil';
import PricingTabs, { PricingOption } from './booking/PricingTabs';
import GuestsCounter from './booking/GuestsCounter';
import BatchDateSelector from './booking/BatchDateSelector';
import BookingForm from './BookingForm';
import BookingSummary from './booking/BookingSummary';
import ActionButtons from './booking/ActionButtons';
import PricingInfo from './booking/PricingInfo';
import ContactSection from './booking/ContactSection';

import { BatchDate } from './booking/types';

interface TripBookingCardProps {
  price: number;
  discount: number;
  duration: string;
  isCustomizedTrip?: boolean;
  isSuggestedTrip?: boolean;
  tripName: string;
  isOpen?: boolean;
  onClose?: () => void;
  showBookingSummary?: boolean;
  setShowBookingSummary?: (show: boolean) => void;
  activePricingId?: string;
  onPricingChange?: (pricingId: string, pricingData: PricingOption) => void;
  guestCount?: number;
  onGuestCountChange?: (count: number) => void;
  pricingOptions?: PricingOption[];
  batchDates?: BatchDate[];
}

const TripBookingCard = ({
  price,
  discount,
  duration,
  isCustomizedTrip = false,
  isSuggestedTrip = false,
  tripName,
  isOpen,
  onClose,
  showBookingSummary = false,
  setShowBookingSummary,
  activePricingId = 'standard',
  onPricingChange,
  guestCount = 1,
  onGuestCountChange,
  pricingOptions,
  batchDates

}: TripBookingCardProps) => {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [activePricing, setActivePricing] = useState<PricingOption | null>(null);
  const [selectedBatchDate, setSelectedBatchDate] = useState<BatchDate | null>(null);

  const discountedPrice = price - (price * discount) / 100;
   // Use provided batch dates or generate fallback dates
  const finalBatchDates = batchDates || generateBatchDates(discountedPrice);

  // Use provided pricing options or create default ones
  const finalPricingOptions: PricingOption[] = pricingOptions || [
    {
      id: 'standard',
      title: 'Standard',
      price: discountedPrice,
      description: 'Standard package',
      isPopular: true
    },
    {
      id: 'deluxe',
      title: 'Deluxe',
      price: discountedPrice * 1.2,
      description: 'Deluxe package'
    },
    {
      id: 'premium',
      title: 'Premium',
      price: discountedPrice * 1.5,
      description: 'Premium package'
    }
  ];

  // Initialize active pricing on component mount
  useEffect(() => {
        const defaultPricing = finalPricingOptions.find(option => option.id === activePricingId);
    if (defaultPricing && !activePricing) {
      setActivePricing(defaultPricing);
      onPricingChange?.(activePricingId, defaultPricing);
    }
  }, [activePricingId, activePricing, onPricingChange]);

  const handlePricingSelect = (pricingId: string) => {
       const selectedPricing = finalPricingOptions.find(option => option.id === pricingId);
    if (selectedPricing) {
      setActivePricing(selectedPricing);
      onPricingChange?.(pricingId, selectedPricing);
    }
  };

  const handleBookNowClick = () => {
    setShowBookingSummary?.(true);
  };

  const handleBookingFormOpen = () => {
    setShowInquiryForm(true);
  };

  const handleInquiryFormClose = () => {
    setShowInquiryForm(false);
  };

  const handleGuestChange = (count: number) => {
    onGuestCountChange?.(count);
  };

  const handleProceedToPayment = () => {
    console.log('Legacy payment method - now using PhonePe');
  };

  const handleBatchDateSelect = (dateId: string | null) => {
    if (dateId) {
         const selected = finalBatchDates.find(batch => batch.id === dateId);
      setSelectedBatchDate(selected || null);
    } else {
      setSelectedBatchDate(null);
    }
  };

  return (
    <>
      <div className="lg:w-1/3">
        <Card className="p-6 sticky top-24">
          {activePricing && (
            <PricingInfo 
              activePricing={activePricing}
              discount={discount}
              guestCount={guestCount}
            />
          )}

          <div className="space-y-4">
            <PricingTabs 
                  pricingOptions={finalPricingOptions}
              activePricingId={activePricingId}
              onPricingSelect={handlePricingSelect}
            />

            <GuestsCounter 
              defaultValue={guestCount}
              maxGuests={15}
              onGuestChange={handleGuestChange}
            />

            {!isCustomizedTrip && !isSuggestedTrip && (
              <BatchDateSelector 
                  batchDates={finalBatchDates}
                onDateSelect={handleBatchDateSelect}
              />
            )}

            {/* Hide action buttons on mobile devices */}
            {/* <div className="hidden md:block">
              <ActionButtons 
                onBookingFormOpen={handleBookingFormOpen}
                onBookNowClick={handleBookNowClick}
              />
            </div> */}
              {/* Inquiry Form - Always Visible */}
            <BookingForm 
              tripName={tripName}
              batchDates={finalBatchDates}
            />

            <ContactSection />
          </div>
        </Card>
      </div>

      {/* Inquiry Form Dialog (Know More)
      <BookingForm 
        isOpen={showInquiryForm || isOpen || false}
        onClose={isOpen ? (onClose || (() => {})) : handleInquiryFormClose}
        tripName={tripName}
         batchDates={finalBatchDates}
      /> */}

      {/* Booking Summary Dialog with PhonePe Integration */}
      {activePricing && (
        <BookingSummary 
          isOpen={showBookingSummary}
          onClose={() => setShowBookingSummary?.(false)}
          tripName={tripName}
          duration={duration}
          activePricing={activePricing}
          guestCount={guestCount}
          discount={discount}
          selectedBatchDate={selectedBatchDate}
          onProceedToPayment={handleProceedToPayment}
        />
      )}
    </>
  );
};

export default TripBookingCard;
