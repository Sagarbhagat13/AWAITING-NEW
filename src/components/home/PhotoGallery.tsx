import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

// Photo data with unsplash images
export const galleryPhotos = [
  {
    id: 1,
    url: '/images/PHOTO-2025-06-25-11-50-12.jpg',
    alt: 'Mountain view with fog',
    location: 'Himalayas, India'
  },
  {
    id: 2,
    url: '/images/PHOTO-2025-06-25-11-54-46.jpg',
    alt: 'Beach sunset',
    location: 'Goa, India'
  },
  {
    id: 3,
    url: '/images/PHOTO-2025-06-25-11-50-26.jpg',
    alt: 'Desert camel ride',
    location: 'Rajasthan, India'
  },
  {
    id: 4,
    url: '/images/PHOTO-2025-06-25-11-50-40.jpg',
    alt: 'Houseboat on water',
    location: 'Kerala, India'
  },
  {
    id: 5,
    url: '/images/PHOTO-2025-06-25-11-55-21.jpg',
    alt: 'Temple architecture',
    location: 'Tamil Nadu, India'
  },
  {
    id: 6,
    url: '/images/PHOTO-2025-06-25-11-53-06.jpg',
    alt: 'Tea plantations',
    location: 'Munnar, India'
  },
  {
    id: 7,
    url: '/images/PHOTO-2025-06-25-11-54-09.jpg',
    alt: 'Snow mountains',
    location: 'Ladakh, India'
  },
  {
    id: 8,
    url: '/images/PHOTO-2025-06-25-11-52-21.jpg',
    alt: 'City view',
    location: 'Mumbai, India'
  },
  {
    id: 9,
    url: '/images/PHOTO-2025-06-25-11-52-21.jpg',
    alt: 'City view',
    location: 'Mumbai, India'
  }
];

const PhotoGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  
  // Number of photos to show at once
  const visibleCount = isMobile ? 1 : 5;
  
  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => 
      prevIndex + 1 >= galleryPhotos.length ? 0 : prevIndex + 1
    );
  }, []);
  
  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => 
      prevIndex - 1 < 0 ? galleryPhotos.length - 1 : prevIndex - 1
    );
  }, []);
  
  // Create an array of visible photos based on the active index for desktop
  const getVisiblePhotos = useCallback(() => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (activeIndex + i) % galleryPhotos.length;
      result.push(galleryPhotos[index]);
    }
    return result;
  }, [activeIndex, visibleCount]);
  
  // Auto slide on mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isMobile, nextSlide]);
  
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Travel Moments</h2>
        
        <div className="flex justify-center items-center gap-4 mb-6">
          <a 
            href="https://www.instagram.com/awaiting_adventures.in/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-wanderon-primary hover:text-wanderon-dark transition-colors"
          >
            <Instagram size={18} />
            <span className="font-medium">@awaiting_adventures.in</span>
          </a>
          {!isMobile && (
            <div className="hidden md:flex items-center gap-2">
              <button 
                onClick={prevSlide}
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-wanderon-primary hover:text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-wanderon-primary hover:text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
        
        {isMobile ? (
          // Mobile layout with carousel
          <Carousel className="w-full">
            <CarouselContent>
              {galleryPhotos.map((photo) => (
                <CarouselItem key={photo.id}>
                  <div className="relative rounded-lg overflow-hidden h-60">
                    <img 
                      src={photo.url} 
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
                      <p className="text-sm font-medium">{photo.location}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 border-none bg-black/30 text-white hover:bg-black/50" />
            <CarouselNext className="right-2 border-none bg-black/30 text-white hover:bg-black/50" />
          </Carousel>
        ) : (
          // Desktop layout with the existing grid
          <div className="hidden md:grid grid-cols-5 gap-4">
            {getVisiblePhotos().map((photo, index) => (
              <div 
                key={photo.id}
                className={cn(
                  "relative overflow-hidden rounded-lg transition-all duration-300",
                  index === 2 ? "col-span-1 row-span-2 h-auto" : "h-64",
                  index === 0 ? "col-span-2" : "",
                  index === 1 ? "col-span-2" : ""
                )}
              >
                <img 
                  src={photo.url} 
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <p className="text-sm font-medium">{photo.location}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
