
import React, { useState, useCallback, useMemo } from 'react';
import { MessageCircle, Users, MapPin, Award } from 'lucide-react';
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
    'https://videos.pexels.com/video-files/5235133/5235133-hd_1920_1080_25fps.mp4'
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
    // Frame-like structure with padding on all sides like Desh Videsh
    <div className="p-4 md:p-6 lg:p-8 bg-background min-h-screen">
      <div className="relative h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] overflow-hidden rounded-2xl shadow-2xl">
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
            TripVidya
          </h1>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12">
            Where every trip starts with a smile and 
            <br className="hidden sm:block" />
            <span className="text-primary font-semibold">ends with a story</span>
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-xl md:max-w-2xl mb-8 md:mb-12">
            <BannerSearchBar onSearch={onSearch} allTrips={allTrips} />
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8">
            <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              24×7 Support
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              100% Personalised
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              4.9+ Rated
            </div>
          </div>
          
          {/* Stats Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl">
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