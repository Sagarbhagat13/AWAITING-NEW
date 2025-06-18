
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fallback?: string;
  onLoad?: () => void;
  onError?: () => void;
  sizes?: string;
  quality?: number;
  preload?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = React.memo(({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fallback = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
  onLoad,
  onError,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 80,
  preload = false
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(priority || preload ? src : '');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority || preload);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate optimized image URL with WebP support and proper sizing
  const generateOptimizedSrc = (originalSrc: string, targetWidth?: number): string => {
    if (!originalSrc || !originalSrc.includes('unsplash.com')) return originalSrc;

    const params = new URLSearchParams();
    params.set('auto', 'format');
    params.set('fit', 'crop');
    params.set('q', quality.toString());
    
    if (targetWidth) {
      params.set('w', targetWidth.toString());
      // Set height based on aspect ratio if provided
      if (height && width) {
        const aspectRatio = height / width;
        params.set('h', Math.round(targetWidth * aspectRatio).toString());
      }
    }

    // Add WebP format for better compression
    const supportsWebP = (() => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      } catch {
        return false;
      }
    })();

    if (supportsWebP) {
      params.set('fm', 'webp');
    }

    return `${originalSrc.split('?')[0]}?${params.toString()}`;
  };

  // Preload critical images
  useEffect(() => {
    if (priority || preload) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = generateOptimizedSrc(src, width);
      link.fetchPriority = 'high';
      document.head.appendChild(link);
      
      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, [src, priority, preload, width]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || preload || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setCurrentSrc(src);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: '50px' // Reduced margin for better performance
      }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [src, priority, preload]);

  // Generate responsive srcSet for better image delivery
  const generateSrcSet = (originalSrc: string): string => {
    if (!originalSrc.includes('unsplash.com')) return '';
    
    const widths = [400, 800, 1200, 1600];
    return widths
      .map(w => `${generateOptimizedSrc(originalSrc, w)} ${w}w`)
      .join(', ');
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setCurrentSrc(fallback);
    onError?.();
  };

  // Generate low-quality placeholder for better perceived performance
  const generatePlaceholder = (originalSrc: string): string => {
    if (!originalSrc.includes('unsplash.com')) return '';
    return `${originalSrc.split('?')[0]}?auto=format&fit=crop&w=20&q=20&blur=10`;
  };

  const placeholderSrc = generatePlaceholder(src);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Ultra-low quality placeholder for instant loading */}
      {placeholderSrc && !isLoaded && (
        <img
          src={placeholderSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110 transition-opacity duration-300"
          style={{ filter: 'blur(10px)' }}
          aria-hidden="true"
        />
      )}
      
      {/* Loading skeleton */}
      {!isLoaded && !placeholderSrc && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      <img
        ref={imgRef}
        src={currentSrc ? generateOptimizedSrc(currentSrc, width) : undefined}
        srcSet={currentSrc ? generateSrcSet(currentSrc) : undefined}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={cn(
          'transition-opacity duration-500 w-full h-full object-cover',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority || preload ? 'eager' : 'lazy'}
        decoding={priority || preload ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
