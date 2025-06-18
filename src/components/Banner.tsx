
import { useState } from 'react';
import { MessageCircle, Users, MapPin, Award } from 'lucide-react';
import { popularTrips } from '@/data/popularTrips';
import { weekendTrips } from '@/data/weekendTrips';
import { internationalTours } from '@/data/internationalTours';
import { honeymoonPackages } from '@/data/honeymoonPackages';
import { ladakhBikingTrips, ladakhSUVTrips } from '@/data/ladakhTrips';
import { offBeatTrips } from '@/data/offBeatTrips';
import BannerSlider from './banner/BannerSlider';
import BannerSearchBar from './banner/BannerSearchBar';
import StatsCounter from './banner/StatsCounter';
import { bannerImages } from './banner/bannerImages';
import { useIsMobile } from '@/hooks/use-mobile';

const Banner = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const isMobile = useIsMobile();
  const allTrips = [
    ...popularTrips, 
    ...weekendTrips, 
    ...internationalTours,
    ...honeymoonPackages,
    ...ladakhBikingTrips,
    ...ladakhSUVTrips,
    ...offBeatTrips
  ];
  
  return (
    <div className="relative h-[70vh] md:h-[90vh] overflow-hidden">
      <BannerSlider images={bannerImages} />
      
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-10 animate-fade-in drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
          Discover Incredible Destinations
        </h1>
        
        <BannerSearchBar onSearch={onSearch} allTrips={allTrips} />
        
        {/* Stats Counters */}
        <div className={`absolute ${isMobile ? 'bottom-8' : 'bottom-24 md:bottom-32'} left-0 right-0 mx-auto px-4 mb-8`}>
          <div className="flex justify-center w-full">
            <div className={`grid ${isMobile ? 'grid-cols-4 gap-1 mt-8' : 'grid-cols-4 gap-4'} w-full max-w-3xl mx-auto`}>
              <StatsCounter 
                count="300+" 
                label="Reviews" 
                icon={MessageCircle} 
              />
              <StatsCounter 
                count="5000+" 
                label="Travelers" 
                icon={Users} 
              />
              <StatsCounter 
                count="80+" 
                label="Destinations" 
                icon={MapPin} 
              />
              <StatsCounter 
                count="8+" 
                label="Years" 
                icon={Award} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
