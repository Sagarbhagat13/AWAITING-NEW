
import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface VirtualizedTripCarouselProps {
  title: string;
  description?: string;
  className?: string;
  itemsPerView?: number;
  children: React.ReactNode[];
  onPreloadNext?: (index: number) => void;
}

const VirtualizedTripCarousel: React.FC<VirtualizedTripCarouselProps> = React.memo(({
  title,
  description,
  className,
  itemsPerView = 4,
  children,
  onPreloadNext,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const isMobile = useIsMobile();
  
  // Memoize effective items per view based on screen size
  const effectiveItemsPerView = useMemo(() => {
    if (isMobile) return 1.5;
    return itemsPerView;
  }, [isMobile, itemsPerView]);

  // Calculate visible items with buffer for smooth scrolling
  const bufferSize = 2;
  const visibleItems = useMemo(() => {
    const startIndex = Math.max(0, visibleStartIndex - bufferSize);
    const endIndex = Math.min(children.length, visibleStartIndex + effectiveItemsPerView + bufferSize);
    
    return children.slice(startIndex, endIndex).map((child, index) => ({
      component: child,
      originalIndex: startIndex + index,
      key: startIndex + index
    }));
  }, [children, visibleStartIndex, effectiveItemsPerView, bufferSize]);

  const checkScrollButtons = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      // Calculate current visible start index
      const cardWidth = clientWidth / effectiveItemsPerView;
      const newVisibleStartIndex = Math.floor(scrollLeft / cardWidth);
      
      if (newVisibleStartIndex !== visibleStartIndex) {
        setVisibleStartIndex(newVisibleStartIndex);
        
        // Trigger preloading for upcoming items
        if (onPreloadNext) {
          onPreloadNext(newVisibleStartIndex + effectiveItemsPerView);
        }
      }
    }
  }, [effectiveItemsPerView, visibleStartIndex, onPreloadNext]);
  
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      // Use passive listeners for better performance
      carousel.addEventListener('scroll', checkScrollButtons, { passive: true });
      checkScrollButtons();
      
      // Use ResizeObserver for better performance than window resize events
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
      
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        carouselRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
      
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
      {/* Header with optimized layout */}
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
              "rounded-full border-gray-300 h-8 w-8 md:h-10 md:w-10 transition-opacity",
              !canScrollLeft && "opacity-50 cursor-not-allowed"
            )}
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "rounded-full border-gray-300 h-8 w-8 md:h-10 md:w-10 transition-opacity",
              !canScrollRight && "opacity-50 cursor-not-allowed"
            )}
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>
      
      {/* Virtualized Carousel Container */}
      <div 
        ref={carouselRef}
        className="carousel pl-4 md:pl-0 pr-4 md:pr-0 -mx-2 scrollbar-none"
        style={{ 
          scrollBehavior: 'smooth',
          willChange: 'scroll-position'
        }}
      >
        {visibleItems.map(({ component, originalIndex, key }) => (
          <div 
            key={key}
            className={cn(
              "carousel-item px-2", 
              getItemWidth()
            )}
            data-index={originalIndex}
          >
            {component}
          </div>
        ))}
      </div>
    </div>
  );
});

VirtualizedTripCarousel.displayName = 'VirtualizedTripCarousel';

export default VirtualizedTripCarousel;
