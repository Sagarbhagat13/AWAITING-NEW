
import { useEffect, useState, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import ReviewCard from './reviews/ReviewCard';
import ReviewsLoadingState from './reviews/ReviewsLoadingState';
import ReviewNavButtons from './reviews/ReviewNavButtons';
import ReviewDotIndicators from './reviews/ReviewDotIndicators';
import ReviewHeader from './reviews/ReviewHeader';
import { googleReviews } from './reviews/reviewsData';

const GoogleReviewsSlider = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [api, setApi] = useState<any>(null);
  
  useEffect(() => {
    // Simulate loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);
  
  // Update carousel when currentReviewIndex changes
  useEffect(() => {
    if (api) {
      api.scrollTo(currentReviewIndex);
    }
  }, [api, currentReviewIndex]);
  
  // Handle when the active slide changes
  const handleSelect = useCallback((index: number) => {
    setCurrentReviewIndex(index);
  }, []);

  // Manual navigation
  const handlePrevious = () => {
    if (currentReviewIndex > 0) {
      setCurrentReviewIndex(currentReviewIndex - 1);
    } else if (api) {
      // Jump to the last slide if at the beginning
      const lastIndex = googleReviews.length - 1;
      setCurrentReviewIndex(lastIndex);
    }
  };

  const handleNext = () => {
    if (currentReviewIndex < googleReviews.length - 1) {
      setCurrentReviewIndex(currentReviewIndex + 1);
    } else if (api) {
      // Jump to the first slide if at the end
      setCurrentReviewIndex(0);
    }
  };
  
  return (
    <section className="py-4 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-3">
          <ReviewHeader />
        </div>
        
        {isLoading ? (
          <ReviewsLoadingState />
        ) : (
          <div className="relative">
            <Carousel 
              className="w-full" 
              opts={{
                align: "start",
                startIndex: currentReviewIndex,
                dragFree: true,
                loop: true
              }}
              setApi={setApi}
              onSelectChange={handleSelect}
            >
              <CarouselContent className="px-4">
                {googleReviews.map((review, index) => (
                  <CarouselItem key={index} className="basis-[87%] md:basis-1/2 lg:basis-1/3">
                    <ReviewCard 
                      review={review} 
                      isActive={index === currentReviewIndex} 
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <ReviewNavButtons 
                onPrevious={handlePrevious}
                onNext={handleNext}
                canGoPrevious={true}
                canGoNext={true}
              />
            </Carousel>
            
            <ReviewDotIndicators 
              total={googleReviews.length}
              currentIndex={currentReviewIndex}
              onClick={setCurrentReviewIndex}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GoogleReviewsSlider;
