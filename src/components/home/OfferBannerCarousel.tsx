
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface OfferBanner {
  id: string;
  title: string;
  description: string;
   desktopImage: string;
   mobileImage: string;
  ctaText?: string;
  ctaLink?: string;
}

interface OfferBannerCarouselProps {
  slides?: OfferBanner[];
}

const defaultOfferBanners: OfferBanner[] = [
  {
    id: '1',
    title: '',
    description: '',
    desktopImage:  '/images/xmasny1.png',
    mobileImage: '/images/xmasny1.png',
    ctaText: '',
    ctaLink: '#'
  },
  {
    id: '2',
    title: '',
    description: '',
    desktopImage: '/images/SPITIVDWB.png',
    mobileImage: '/images/SPITIVMWB.png',
    ctaText: '',
    ctaLink: '#'
  },
  {
    id: '3',
    title: '',
    description: '',
    desktopImage: '/images/xmasny2.png',
    mobileImage: '/images/xmasny2.png',
    ctaText: '',
    ctaLink: '#'
  }
];

export const secondSetOfferBanners: OfferBanner[] = [
  {
    id: '4',
    title: '',
    description: '',
    desktopImage: '/images/weekend1.png',
    mobileImage: '/images/weekend1.png',
    ctaText: '',
    ctaLink: '#'
  },
  {
    id: '5',
    title: '',
    description: '',
    desktopImage: '/images/RJ1.jpg',
    mobileImage: '/images/RJ1.jpg',
    ctaText: '',
    ctaLink: '#'
  },
  {
    id: '6',
    title: '',
    description: '',
    desktopImage: '/images/kerala_WB.png',
    mobileImage: '/images/kerala_WB.png',
    ctaText: '',
    ctaLink: '#'
  }
];

const OfferBannerCarousel: React.FC<OfferBannerCarouselProps> = ({ slides = defaultOfferBanners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  const nextSlide = useCallback(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 1500);
      return () => clearInterval(interval);
    }
  }, [nextSlide, isHovered]);

    // Get current image based on device type
  const getCurrentImage = (banner: OfferBanner) => {
    return isMobile ? banner.mobileImage : banner.desktopImage;
  };

  return (
    <section className="w-full bg-gray-50 ">
      <div className="container mx-auto ">
        <div 
          className="relative overflow-hidden rounded-lg shadow-lg bg-white"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Container */}
          <div 
            className={cn(
              "relative w-full transition-all duration-500 ease-in-out",
              // isMobile ? "aspect-[16/8.1]" : "aspect-[16/4]"
               isMobile ? "aspect-[5/2]" : "aspect-[25/6]"
            )}
          >
            {slides.map((banner, index) => (
              <div
                key={banner.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  index === currentSlide ? "opacity-100" : "opacity-0"
                )}
              >
                {/* Background Image */}
                <div 
                  // className="absolute inset-0 bg-contain bg-center bg-no-repeat bg-gray-100"
                  // style={{ backgroundImage: `url(${banner.image})` }}
                  //  className="absolute inset-0 bg-no-repeat bg-center"
                  // style={{ 
                  //   backgroundImage: `url(${banner.image})`,
                  //   backgroundSize: 'cover'
                   className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${getCurrentImage(banner)})` }}
                />
                  
               
                
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" /> */}
                
                {/* Content */}
                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-2xl text-white">
                      <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                        {banner.title}
                      </h2>
                      <p className="text-sm md:text-lg mb-4 md:mb-6 opacity-90">
                        {banner.description}
                      </p>
                      {banner.ctaText && banner.ctaLink && (
                        <Button 
                          className="bg-wanderon-primary hover:bg-wanderon-primary/90 text-white px-6 py-2 md:px-8 md:py-3"
                          asChild
                        >
                          <a href={banner.ctaLink}>
                            {banner.ctaText}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white h-10 w-10 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white h-10 w-10 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300",
                  index === currentSlide 
                    ? "bg-white scale-125" 
                    : "bg-white/50 hover:bg-white/75"
                )}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBannerCarousel;