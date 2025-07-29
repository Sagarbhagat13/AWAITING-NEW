
import React from 'react';
import { Star, Users, MapPin, Award } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const LandingHero = () => {
  const isMobile = useIsMobile();

  return (
    //  <section className={`relative overflow-hidden ${isMobile ? 'min-h-[50vh]' : 'min-h-[70vh]'} bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 flex items-center`}>
    //   {/* Animated Background */}
    //   <div className="absolute inset-0">
    //      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 via-purple-600/50 to-teal-600/60" />
    //     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        
    //     {/* Floating elements for animation */}
    //     <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/20 rounded-full animate-bounce" 
    //          style={{ animationDelay: '0s', animationDuration: '3s' }} />
    //     <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yellow-400/30 rounded-full animate-bounce" 
    //          style={{ animationDelay: '1s', animationDuration: '4s' }} />
    //     <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-orange-400/25 rounded-full animate-bounce" 
    //          style={{ animationDelay: '2s', animationDuration: '5s' }} />
    //   </div>
      
    //    <div className="relative container mx-auto h-full flex flex-col justify-center items-center px-4 text-center z-20 py-12">
    //     {/* Main Headline */}
    //     <div className="mb-8">
    //      <h1 className={`font-bold text-white mb-4 leading-tight ${
    //         isMobile ? 'text-3xl md:text-4xl' : 'text-5xl md:text-6xl'
    //       }`} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
    //         Plan Your
    //         <span className="block text-yellow-300 mt-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
    //           Dream Adventure
    //         </span>
    //       </h1>
          
    //       <p className={`text-white font-medium max-w-2xl mx-auto leading-relaxed ${
    //         isMobile ? 'text-lg' : 'text-xl md:text-2xl'
    //        }`} style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
    //         Get expert travel consultation & personalized itineraries.
    //         <span className="block mt-2 text-yellow-200 font-semibold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
    //           FREE planning session with our travel experts!
    //         </span>
    //       </p>
    //     </div>

    //     {/* Key Benefits */}
    //     <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 ${isMobile ? 'text-xs' : 'text-sm'}`}>
    //      <div className="flex flex-col items-center text-white p-2 rounded-lg bg-white/10 backdrop-blur-sm">
    //         <Star className="h-6 w-6 mb-2 text-yellow-400" />
    //         <span className="font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>5-Star Rated</span>
    //       </div>
    //       <div className="flex flex-col items-center text-white p-2 rounded-lg bg-white/10 backdrop-blur-sm">
    //         <Users className="h-6 w-6 mb-2 text-green-400" />
    //          <span className="font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>5000+ Travelers</span>
    //       </div>
    //       <div className="flex flex-col items-center text-white p-2 rounded-lg bg-white/10 backdrop-blur-sm">
    //         <MapPin className="h-6 w-6 mb-2 text-blue-400" />
    //          <span className="font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>80+ Destinations</span>
    //       </div>
    //       <div className="flex flex-col items-center text-white p-2 rounded-lg bg-white/10 backdrop-blur-sm">
    //         <Award className="h-6 w-6 mb-2 text-purple-400" />
    //          <span className="font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Expert Guides</span>
    //       </div>
    //     </div>

    //     {/* CTA Arrow pointing down */}
    //     <div className="animate-bounce">
    //        <div className="w-8 h-8 border-l-2 border-b-2 border-white transform rotate-45 opacity-80" />
    //     </div>
    <section className={`relative overflow-hidden ${isMobile ? 'min-h-[35vh]' : 'min-h-[70vh]'} flex items-center`}>
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=2000&q=80"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          <source
            src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Fallback image if video doesn't load */}
        <img
          src='/images/Lead_w.png'
          alt="Travel Background"
          className="w-full h-full object-cover"
          style={{ display: 'none' }}
          onError={(e) => {
            e.currentTarget.style.display = 'block';
          }}
        />
        
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
};

export default LandingHero;