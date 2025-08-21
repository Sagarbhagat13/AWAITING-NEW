import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const PromotionalBanner = () => {
 const [isVisible, setIsVisible] = useState(true); // Always show for debugging
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
   console.log('PromotionalBanner rendering, isVisible:', isVisible);

  useEffect(() => {
    // Always show for debugging - ignore localStorage for now
    setIsVisible(true);
    console.log('Banner force set to visible for debugging');
  }, []);

  const handleDismiss = () => {
    setIsAnimatingOut(true);
    localStorage.setItem('winter-promo-dismissed-2024', 'true');
     // Trigger storage event for same-tab updates
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'winter-promo-dismissed-2024',
      newValue: 'true'
    }));
    
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

 if (!isVisible) {
    console.log('Banner not visible, returning null');
    return null;
  }
  
  console.log('Banner is visible, rendering...');

  return (
    <div 
       className={cn(
        "fixed top-0 left-0 right-0 z-[9999] h-8 bg-gradient-to-r from-red-500 via-pink-500 to-red-400 text-white flex items-center justify-center cursor-pointer transition-all duration-300",
        isAnimatingOut ? "transform -translate-y-full opacity-0" : "transform translate-y-0 opacity-100"
      )}
      onClick={handleClick}
    >
     <div className="container mx-auto px-4 flex items-center justify-center relative">
        {/* Content */}
        <div className="flex items-center space-x-3 text-center">
          <span className="text-xs animate-pulse">❄️</span>
          <span className="font-light text-xs md:text-sm tracking-wide">
            <span className="hidden sm:inline">Limited Seats • </span>
            <span className="font-medium">Winter & New Year Packages</span>
            <span className="hidden sm:inline"> • Book Now</span>
            <span className="inline sm:hidden"> • Book Now</span>
          </span>
           <span className="text-xs animate-pulse">🎿</span>
        </div>
        
        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDismiss();
          }}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:bg-white/10 rounded-full p-0.5 transition-colors duration-200 group"
          aria-label="Dismiss banner"
        >
          <X className="w-3 h-3 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default PromotionalBanner;