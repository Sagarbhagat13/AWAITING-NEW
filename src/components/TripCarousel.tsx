
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface TripCarouselProps {
  title: string;
  description?: string;
  className?: string;
  itemsPerView?: number;
  children: React.ReactNode;
}

const TripCarousel = ({
  title,
  description,
  className,
  itemsPerView = 4,
  children,
}: TripCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isMobile = useIsMobile();
  
  const checkScrollButtons = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);
  
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollButtons, { passive: true });
      checkScrollButtons();
      
      const resizeObserver = new ResizeObserver(checkScrollButtons);
      resizeObserver.observe(carousel);
      
      return () => {
        carousel.removeEventListener('scroll', checkScrollButtons);
        resizeObserver.disconnect();
      };
    }
  }, [checkScrollButtons]);
  
  const scroll = useCallback((direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  }, [checkScrollButtons]);
  
  const getItemWidth = useCallback(() => {
    if (isMobile) return 'w-[85%] sm:w-[70%] md:w-1/4';
    
    switch (itemsPerView) {
      case 1: return 'md:w-full';
      case 2: return 'md:w-1/2';
      case 3: return 'md:w-1/3';
      case 5: return 'md:w-1/5';
      case 6: return 'md:w-1/6';
      default: return 'md:w-1/4';
    }
  }, [isMobile, itemsPerView]);
  
  return (
    <div className={cn("w-full", className)}>
      {/* Simplified Header */}
      <div className="flex justify-between items-center mb-6 px-4 md:px-0">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-wanderon-dark">{title}</h2>
          {description && (
            <p className="text-sm md:text-base text-gray-600 mt-1">{description}</p>
          )}
        </div>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "rounded-full border-gray-300 h-8 w-8 md:h-10 md:w-10",
              !canScrollLeft && "opacity-50 cursor-not-allowed"
            )}
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "rounded-full border-gray-300 h-8 w-8 md:h-10 md:w-10",
              !canScrollRight && "opacity-50 cursor-not-allowed"
            )}
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>
      
      <div 
        ref={carouselRef}
        className="carousel pl-4 md:pl-0 pr-4 md:pr-0 -mx-2 scrollbar-none"
      >
        {Array.isArray(children) ? 
          children.map((child, index) => (
            <div 
              key={index} 
              className={cn(
                "carousel-item px-2", 
                getItemWidth()
              )}
            >
              {child}
            </div>
          )) : 
          <div className={cn(
            "carousel-item px-2", 
            getItemWidth()
          )}>
            {children}
          </div>
        }
      </div>
    </div>
  );
};

export default React.memo(TripCarousel);
