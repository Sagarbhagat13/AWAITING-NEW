
import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { MessageCircle, Users, MapPin, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { popularTrips } from '@/data/popularTrips';
import { weekendTrips } from '@/data/weekendTrips';
import { internationalTours } from '@/data/internationalTours';
import { honeymoonPackages } from '@/data/honeymoonPackages';
import { ladakhBikingTrips, ladakhSUVTrips } from '@/data/ladakhTrips';
import { offBeatTrips } from '@/data/offBeatTrips';
import BannerSearchBar from './banner/BannerSearchBar';
import StatsCounter from './banner/StatsCounter';
import ProgressiveImage from './ProgressiveImage';
import { useIsMobile } from '@/hooks/use-mobile';
import { enhancedPerformanceService } from '@/services/enhancedPerformanceService';

interface OptimizedBannerProps {
  onSearch: (query: string) => void;
}

const OptimizedBanner: React.FC<OptimizedBannerProps> = React.memo(({ onSearch }) => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  
  // Check banner visibility from localStorage
  useEffect(() => {
    const checkBannerVisibility = () => {
      const isDismissed = localStorage.getItem('winter-promo-dismissed-2024') === 'true';
      setIsBannerVisible(!isDismissed);
    };
    
    // Check initially
    checkBannerVisibility();
    
    // Listen for localStorage changes
    window.addEventListener('storage', checkBannerVisibility);
    
    // Poll for changes (in case localStorage is updated in same tab)
    const interval = setInterval(checkBannerVisibility, 500);
    
    return () => {
      window.removeEventListener('storage', checkBannerVisibility);
      clearInterval(interval);
    };
  }, []);
  
  // Handle user interaction for autoplay policy compliance
  useEffect(() => {
    const handleUserInteraction = () => {
      setHasUserInteracted(true);
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          console.log('Video play failed even after user interaction');
        });
      }
    };

    // Add interaction listeners
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  // Video intersection observer for play when visible
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasUserInteracted) {
            video.play().catch(() => {
              console.log('Video autoplay prevented');
            });
          } else if (!entry.isIntersecting) {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [hasUserInteracted]);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const isMobile = useIsMobile();

  // Memoize trip data aggregation
  const allTrips = useMemo(() => [
    ...popularTrips, 
    ...weekendTrips, 
    ...internationalTours,
    ...honeymoonPackages,
    ...ladakhBikingTrips,
    ...ladakhSUVTrips,
    ...offBeatTrips
  ], []);

   const isMobile = useIsMobile();

   // Travel-themed video sources for better compatibility  
  const videoSources = useMemo(() => [
    '/images/bggirlhero.webm'
  ], []);

  // Handle video events
  const handleVideoLoad = useCallback(() => {
    console.log('Video loaded successfully');
  }, []);

  const handleVideoError = useCallback(() => {
    console.log('Video failed to load, using fallback');
  }, []);

  // // Optimized banner images with priority loading
  // const bannerImages = useMemo(() => [
  //   'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=2000&q=90&fm=webp',
  //   'https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=2000&q=90&fm=webp',
  //   'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=90&fm=webp',
  //   'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=2000&q=90&fm=webp'
  // ], []);

  // // Preload next images when current changes
  // React.useEffect(() => {
  //   enhancedPerformanceService.preloadNextImages(bannerImages, currentImageIndex);
  // }, [currentImageIndex, bannerImages]);

  // // Optimized image rotation
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  //   }, 5000);
    
  //   return () => clearInterval(interval);
  // }, [bannerImages.length]);

  // const handleImageChange = useCallback((index: number) => {
  //   setCurrentImageIndex(index);
  // }, []);

//   return (
//     <div className="relative h-[70vh] md:h-[90vh] overflow-hidden">
//       {/* Optimized Image Slider */}
//       <div className="absolute inset-0">
//         {bannerImages.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               index === currentImageIndex ? 'opacity-100' : 'opacity-0'
//             }`}
//             style={{
//               transform: index === currentImageIndex ? 'scale(1.02)' : 'scale(1)',
//               transition: 'transform 8s ease-out, opacity 1s ease-in-out',
//             }}
//           >
//             <ProgressiveImage
//               src={image}
//               alt={`Banner image ${index + 1}`}
//               className="w-full h-full"
//               priority={index === 0}
//               quality={index === 0 ? 90 : 80}
//               sizes="100vw"
//               placeholder="blur"
//             />
//           </div>
//         ))}
        
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
//       </div>

//       {/* Content */}
//       <div className="relative container mx-auto h-full flex flex-col justify-center items-center px-4 text-center z-10">
//         <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-10 animate-fade-in drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
//           Discover Incredible Destinations
//         </h1>
        
//         <BannerSearchBar onSearch={onSearch} allTrips={allTrips} />
        
//         {/* Stats Counters */}
//         <div className={`absolute ${isMobile ? 'bottom-8' : 'bottom-24 md:bottom-32'} left-0 right-0 mx-auto px-4 mb-8`}>
//           <div className="flex justify-center w-full">
//             <div className={`grid ${isMobile ? 'grid-cols-4 gap-1 mt-8' : 'grid-cols-4 gap-4'} w-full max-w-3xl mx-auto`}>
//               <StatsCounter count="300+" label="Reviews" icon={MessageCircle} />
//               <StatsCounter count="5000+" label="Travelers" icon={Users} />
//               <StatsCounter count="80+" label="Destinations" icon={MapPin} />
//               <StatsCounter count="8+" label="Years" icon={Award} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Image Navigation Dots */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
//         {bannerImages.map((_, index) => (
//           <button
//             key={index}
//             className={`h-2.5 rounded-full transition-all duration-300 ${
//               index === currentImageIndex ? "bg-white w-8" : "bg-white/50 w-2.5 hover:bg-white/70"
//             }`}
//             onClick={() => handleImageChange(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// });

// OptimizedBanner.displayName = 'OptimizedBanner';

// export default OptimizedBanner;
return (
       // Frame-like structure with responsive spacing - mobile optimized
    // Frame-like structure with responsive spacing - mobile optimized
    <div className={cn(
     "px-6 md:px-8 lg:px-12 pb-8 md:pb-12 bg-background transition-all duration-300",
      isBannerVisible ? "pt-24 md:pt-28" : "pt-20 md:pt-24"
    )}>
       <div className="relative h-[60vh] md:h-[75vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden rounded-2xl shadow-2xl">
        {/* Video Background */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=2000&q=90&fm=webp"
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            onCanPlay={() => {
              if (videoRef.current && hasUserInteracted) {
                videoRef.current.play().catch(() => {
                  console.log('Video autoplay prevented by browser policy');
                });
              }
            }}
            onLoadedMetadata={() => {
              // Try to play when metadata is loaded and user has interacted
              if (videoRef.current && hasUserInteracted) {
                videoRef.current.play().catch(() => {
                  console.log('Video play attempt failed');
                });
              }
            }}
          >
            {videoSources.map((src, index) => (
              <source key={index} src={src} type="video/mp4" />
            ))}
          </video>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-16 text-center z-10">
          {/* Brand Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
            Now is the time
          </h1>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12">
             
            <br className="hidden sm:block" />
            <span className="text-primary font-semibold"></span>
          </p>
          
          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:block w-full max-w-2xl mb-8 md:mb-12">
            <BannerSearchBar onSearch={onSearch} allTrips={allTrips} />
          </div>
          
          {/* Stats Counters */}
              <div className="grid grid-cols-4 gap-1 md:gap-8 w-full max-w-4xl mt-8 md:mt-0">
            <StatsCounter count="300+" label="Reviews" icon={MessageCircle} />
            <StatsCounter count="5000+" label="Travelers" icon={Users} />
            <StatsCounter count="80+" label="Destinations" icon={MapPin} />
            <StatsCounter count="8+" label="Years" icon={Award} />
          </div>
        </div>
      </div>
    </div>
  );
});

OptimizedBanner.displayName = 'OptimizedBanner';

export default OptimizedBanner;