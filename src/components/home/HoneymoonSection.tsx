
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from './CarouselCard';
import { honeymoonPackages } from '@/data/honeymoonPackages';

const HoneymoonSection = () => {
  const [showInternational, setShowInternational] = useState(false);
  
  // Filter packages based on toggle state
  const filteredPackages = honeymoonPackages.filter(trip => 
    showInternational ? trip.international : !trip.international
  );

  return (
    <section className="py-12 bg-gradient-to-r from-[#FFDEE2] to-[#FEC6A1]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Honeymoon Specials</h2>
        
        <div className="flex justify-center items-center space-x-2 mb-8">
          <Toggle 
            variant="outline" 
            pressed={!showInternational} 
            onPressedChange={() => setShowInternational(false)}
            className={`${!showInternational ? 'bg-rose-100 border-rose-300 text-rose-700' : 'border-gray-200 text-gray-700'} font-medium`}
          >
            <Home className="h-4 w-4 mr-2" />
            Domestic
          </Toggle>
          <Toggle 
            variant="outline" 
            pressed={showInternational} 
            onPressedChange={() => setShowInternational(true)}
            className={`${showInternational ? 'bg-blue-100 border-blue-300 text-blue-700' : 'border-gray-200 text-gray-700'} font-medium`}
          >
            <Plane className="h-4 w-4 mr-2" />
            International
          </Toggle>
        </div>
        
        <TripCarousel 
          title=""
          description=""
          itemsPerView={4}
        >
          {filteredPackages.length > 0 ? (
            filteredPackages.map((trip) => (
              <CarouselCard 
                key={trip.id} 
                {...trip}
                honeymoonSpecial={true}
                international={trip.international}
              />
            ))
          ) : (
            <div className="w-full text-center py-8 text-gray-600">
              No {showInternational ? 'international' : 'domestic'} honeymoon packages available.
            </div>
          )}
        </TripCarousel>
        
        <div className="text-center mt-10">
          <Link to="/honeymoon-packages">
            <Button variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white">
              Explore All Honeymoon Packages
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HoneymoonSection;
