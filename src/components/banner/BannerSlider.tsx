
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BannerSliderProps {
  images: string[];
}

const BannerSlider = ({ images }: BannerSliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set());
  
  // Preload first image immediately for better LCP
  useEffect(() => {
    if (images.length > 0) {
      const firstImage = new Image();
      firstImage.src = images[0];
      firstImage.fetchPriority = "high";
      firstImage.onload = () => {
        setPreloadedImages(prev => new Set(prev).add(0));
      };
    }
  }, [images]);

  // Preload next images progressively
  useEffect(() => {
    const preloadNext = () => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      if (!preloadedImages.has(nextIndex)) {
        const img = new Image();
        img.src = images[nextIndex];
        img.onload = () => {
          setPreloadedImages(prev => new Set(prev).add(nextIndex));
        };
      }
    };

    const timer = setTimeout(preloadNext, 1000);
    return () => clearTimeout(timer);
  }, [currentImageIndex, images, preloadedImages]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <>
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            'absolute inset-0 transition-opacity duration-1500 ease-in-out',
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: index === currentImageIndex ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 10s ease-out, opacity 1.5s ease-in-out',
            willChange: index === currentImageIndex ? 'transform' : 'auto',
          }}
          role="img"
          aria-label={`Banner image ${index + 1}`}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              index === currentImageIndex ? "bg-white w-8" : "bg-white/50 w-2.5 hover:bg-white/70"
            )}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default BannerSlider;
