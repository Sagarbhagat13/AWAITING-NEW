
import React from 'react';
import { Heart, ShieldCheck, Star, ThumbsUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import TripCarousel from '@/components/TripCarousel';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-tripvidya-dark">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const WhyUsSection = () => {
  const isMobile = useIsMobile();
  
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Trusted Experience",
      description: "Over 50,000+ happy travelers with 4.9 star ratings across platforms"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Curated Trips",
      description: "Handcrafted itineraries designed by travel experts and local guides"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Top-Quality Service",
      description: "Premium accommodations and services at the best possible prices"
    },
    {
      icon: <ThumbsUp className="h-6 w-6" />,
      title: "Hassle-Free Travel",
      description: "End-to-end trip management from booking to return journey"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#E6E9F0] to-[#EEF1F5]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-12 text-center">Why Choose TripVidya</h2>
        
        {isMobile ? (
          <TripCarousel 
            title=""
            itemsPerView={1}
            className="mt-6"
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </TripCarousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyUsSection;
