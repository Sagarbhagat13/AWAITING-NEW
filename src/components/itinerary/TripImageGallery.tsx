
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TripImageGalleryProps {
  images: string[];
  title: string;
  places?: string[];
}

const TripImageGallery = ({ images, title, places }: TripImageGalleryProps) => {
  // Pre-load images for smoother transitions
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // Get first 4 images for the grid
  const gridImages = images.slice(0, 4);
  
  return (
    <section className="relative bg-gray-100 overflow-hidden w-full">
      <div className="w-full px-4 py-6 md:px-6">
        <div className="container mx-auto">
          {/* Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {gridImages.map((image, index) => (
              <div key={index} className="relative aspect-[3/4] overflow-hidden rounded-lg group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          
          {/* Show remaining images count if more than 4 */}
          {images.length > 4 && (
            <div className="text-center mt-4">
              <button className="text-tripvidya-primary hover:text-tripvidya-primary/80 font-medium transition-colors">
                + {images.length - 4} more photos
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TripImageGallery;
