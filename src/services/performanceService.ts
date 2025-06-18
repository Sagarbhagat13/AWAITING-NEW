
class PerformanceService {
  private isInitialized = false;
  
  constructor() {
    this.initializePerformanceOptimizations();
  }

  private initializePerformanceOptimizations() {
    if (this.isInitialized) return;
    
    // Optimize critical resource loading
    this.preloadCriticalResources();
    
    // Optimize font loading
    this.optimizeFontLoading();
    
    // Set up performance monitoring
    this.setupPerformanceMonitoring();
    
    this.isInitialized = true;
  }

  private preloadCriticalResources() {
    // Preload critical images for better LCP
    const criticalImages = [
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=2000&q=80&fm=webp',
      'https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=2000&q=80&fm=webp'
    ];

    // Use requestIdleCallback for non-critical preloading
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        criticalImages.forEach(src => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = src;
          link.fetchPriority = 'high';
          document.head.appendChild(link);
        });
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        criticalImages.forEach(src => {
          const img = new Image();
          img.src = src;
          img.fetchPriority = 'high';
        });
      }, 100);
    }
  }

  private optimizeFontLoading() {
    // Add font-display: swap to improve FCP
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'style';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontLink.onload = function() {
      const linkElement = this as HTMLLinkElement;
      linkElement.onload = null;
      linkElement.rel = 'stylesheet';
    };
    document.head.appendChild(fontLink);
  }

  private setupPerformanceMonitoring() {
    // Monitor and log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      // Log Core Web Vitals
      this.logCoreWebVitals();
      
      // Monitor resource loading times
      this.monitorResourceTiming();
    }
  }

  private logCoreWebVitals() {
    // Enhanced logging for development
    const logMetric = (name: string, value: number, target: number) => {
      const status = value <= target ? '✅' : '❌';
      const color = value <= target ? 'color: green' : 'color: red';
      console.log(`%c${status} ${name}: ${value.toFixed(2)}ms (target: ${target}ms)`, color);
    };

    // Observe FCP
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          logMetric('First Contentful Paint', entry.startTime, 1800);
        }
      }
    });

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.warn('FCP monitoring not supported');
    }

    // Observe LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      logMetric('Largest Contentful Paint', lastEntry.startTime, 2500);
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP monitoring not supported');
    }
  }

  private monitorResourceTiming() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const resource = entry as PerformanceResourceTiming;
          
          // Log slow resources
          if (resource.duration > 1000) {
            console.warn(`🐌 Slow resource: ${resource.name} took ${resource.duration.toFixed(2)}ms`);
          }
          
          // Log critical resources
          if (resource.name.includes('main.tsx') || resource.name.includes('App.tsx')) {
            console.log(`📦 Critical resource: ${resource.name} loaded in ${resource.duration.toFixed(2)}ms`);
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['resource'] });
      } catch (e) {
        console.warn('Resource timing monitoring not supported');
      }
    }
  }

  // Public method to mark performance events
  public markPerformanceEvent(eventName: string) {
    if ('performance' in window && 'mark' in performance) {
      performance.mark(eventName);
    }
  }

  // Public method to measure performance between marks
  public measurePerformance(measureName: string, startMark: string, endMark: string) {
    if ('performance' in window && 'measure' in performance) {
      try {
        performance.measure(measureName, startMark, endMark);
        const measure = performance.getEntriesByName(measureName)[0];
        if (process.env.NODE_ENV === 'development') {
          console.log(`⏱️ ${measureName}: ${measure.duration.toFixed(2)}ms`);
        }
        return measure.duration;
      } catch (e) {
        console.warn(`Failed to measure performance for ${measureName}`);
        return 0;
      }
    }
    return 0;
  }

  // Optimize image loading based on viewport
  public optimizeImageLoading() {
    // Implement intersection observer for better lazy loading
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      return imageObserver;
    }
  }
}

export const performanceService = new PerformanceService();
