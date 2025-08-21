import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const PromotionalBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const isDismissed = localStorage.getItem('winter-promo-dismissed-2024') === 'true';
     console.log('Banner dismissed status:', isDismissed);
    if (!isDismissed) {
     // Show banner immediately for testing
      setIsVisible(true);
      console.log('Banner should be visible now');
    }
  }, []);

  const handleDismiss = () => {
    setIsAnimatingOut(true);
    localStorage.setItem('winter-promo-dismissed-2024', 'true');
    
    // Hide after animation completes
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleClick = () => {
    // Open WhatsApp or scroll to enquiry form
    const whatsappUrl = "https://wa.me/918219214214?text=Hi! I'm interested in winter and new year packages. Please share details.";
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div 
      className={cn(
       "fixed top-0 left-0 right-0 z-[100] h-12 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white transition-all duration-300 cursor-pointer",
        isAnimatingOut ? "transform -translate-y-full opacity-0" : "transform translate-y-0 opacity-100"
      )}
      onClick={handleClick}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-center relative">
        {/* Content */}
        <div className="flex items-center space-x-2 text-center">
          <span className="text-lg animate-pulse">🎿</span>
          <span className="font-semibold text-sm md:text-base">
            <span className="hidden sm:inline">Hurry Up! Limited Seats for </span>
            <span className="text-yellow-200 font-bold">Winter & New Year Packages</span>
            <span className="hidden sm:inline"> - </span>
            <span className="inline sm:hidden"> - </span>
            <span className="text-white font-bold">Book Now!</span>
          </span>
          <span className="text-lg animate-pulse">❄️</span>
        </div>
        
        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDismiss();
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-white/20 rounded-full p-1 transition-colors duration-200"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PromotionalBanner;