
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { enhancedPerformanceService } from '@/services/enhancedPerformanceService';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = React.memo(({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  onLoad,
  onError,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  placeholder = 'blur'
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [placeholderLoaded, setPlaceholderLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const measureEnd = useRef<(() => void) | null>(null);

  // Generate optimized URLs
  const generateOptimizedUrl = useCallback((url: string, targetQuality: number, targetWidth?: number): string => {
    if (!url.includes('unsplash.com')) return url;

    const params = new URLSearchParams();
    params.set('auto', 'format');
    params.set('fit', 'crop');
    params.set('q', targetQuality.toString());
    params.set('fm', 'webp');
    
    if (targetWidth) {
      params.set('w', targetWidth.toString());
      if (height && width) {
        const aspectRatio = height / width;
        params.set('h', Math.round(targetWidth * aspectRatio).toString());
      }
    }

    return `${url.split('?')[0]}?${params.toString()}`;
  }, [width, height]);

  const placeholderSrc = generateOptimizedUrl(src, 20, 40);
  const optimizedSrc = generateOptimizedUrl(src, quality, width);

  // Generate responsive srcSet
  const generateSrcSet = useCallback((url: string): string => {
    if (!url.includes('unsplash.com')) return '';
    
    const widths = [400, 800, 1200, 1600, 2000];
    return widths
      .map(w => `${generateOptimizedUrl(url, quality, w)} ${w}w`)
      .join(', ');
  }, [generateOptimizedUrl, quality]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  // Load placeholder first for blur effect
  useEffect(() => {
    if (placeholder === 'blur' && (priority || isInView)) {
      const img = new Image();
      img.onload = () => setPlaceholderLoaded(true);
      img.src = placeholderSrc;
    }
  }, [placeholderSrc, priority, isInView, placeholder]);

  // Load main image after placeholder
  useEffect(() => {
    if (!isInView) return;

    measureEnd.current = enhancedPerformanceService.measureCriticalPath(`image-load-${alt}`);
    
    if (priority) {
      enhancedPerformanceService.markCriticalImage(optimizedSrc);
    }

    setCurrentSrc(optimizedSrc);
  }, [isInView, optimizedSrc, priority, alt]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    measureEnd.current?.();
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    onError?.();
  }, [onError]);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Placeholder/Blur effect */}
      {placeholder === 'blur' && placeholderLoaded && !isLoaded && (
        <img
          src={placeholderSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-md scale-110 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
      
      {/* Loading state */}
      {!isLoaded && placeholder === 'empty' && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Main image */}
      <img
        ref={imgRef}
        src={currentSrc}
        srcSet={currentSrc ? generateSrcSet(src) : undefined}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </div>
  );
});

ProgressiveImage.displayName = 'ProgressiveImage';

export default ProgressiveImage;
