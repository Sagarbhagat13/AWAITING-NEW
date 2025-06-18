
class EnhancedPerformanceService {
  private criticalImages: Set<string> = new Set();
  private preloadedResources: Set<string> = new Set();
  private performanceObserver?: PerformanceObserver;

  constructor() {
    this.initializeOptimizations();
  }

  private initializeOptimizations() {
    // Preload critical resources immediately
    this.preloadCriticalResources();
    
    // Setup performance monitoring
    this.setupAdvancedMonitoring();
    
    // Optimize font loading
    this.optimizeFontLoading();
    
    // Setup intersection observer for smart preloading
    this.setupSmartPreloading();
  }

  private preloadCriticalResources() {
    const criticalImages = [
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=2000&q=90&fm=webp',
      'https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=2000&q=90&fm=webp'
    ];

    // Use high priority preloading for hero images
    criticalImages.forEach(src => {
      if (!this.preloadedResources.has(src)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        link.fetchPriority = 'high';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
        this.preloadedResources.add(src);
      }
    });

    // Preload critical JavaScript modules
    const criticalModules = ['/src/components/Banner.tsx', '/src/components/home/PopularTripsSection.tsx'];
    criticalModules.forEach(module => {
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = module;
      document.head.appendChild(link);
    });
  }

  private optimizeFontLoading() {
    // Add font-display: swap for better FCP
    const fontCSS = `
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyeAZ9hjp-Ek-_EeA.woff2') format('woff2');
      }
    `;
    
    const style = document.createElement('style');
    style.textContent = fontCSS;
    document.head.appendChild(style);
  }

  private setupAdvancedMonitoring() {
    if ('PerformanceObserver' in window) {
      // Monitor LCP with detailed logging
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        
        if (process.env.NODE_ENV === 'development') {
          console.log(`🎯 LCP: ${lastEntry.startTime.toFixed(2)}ms`, {
            element: lastEntry.element,
            url: lastEntry.url,
            size: lastEntry.size
          });
        }
      });

      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP monitoring not supported');
      }

      // Monitor resource loading times
      const resourceObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach(entry => {
          const resource = entry as PerformanceResourceTiming;
          if (resource.duration > 1000) {
            console.warn(`🐌 Slow resource: ${resource.name} - ${resource.duration.toFixed(2)}ms`);
          }
        });
      });

      try {
        resourceObserver.observe({ entryTypes: ['resource'] });
      } catch (e) {
        console.warn('Resource monitoring not supported');
      }
    }
  }

  private setupSmartPreloading() {
    if ('IntersectionObserver' in window) {
      const preloadObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const preloadSrc = element.dataset.preload;
            if (preloadSrc && !this.preloadedResources.has(preloadSrc)) {
              this.preloadImage(preloadSrc);
              preloadObserver.unobserve(element);
            }
          }
        });
      }, {
        rootMargin: '100px 0px',
        threshold: 0.01
      });

      // Observe elements that should trigger preloading
      setTimeout(() => {
        document.querySelectorAll('[data-preload]').forEach(el => {
          preloadObserver.observe(el);
        });
      }, 1000);
    }
  }

  private preloadImage(src: string): Promise<void> {
    return new Promise((resolve) => {
      if (this.preloadedResources.has(src)) {
        resolve();
        return;
      }

      const img = new Image();
      img.onload = () => {
        this.preloadedResources.add(src);
        resolve();
      };
      img.onerror = () => resolve();
      img.src = src;
    });
  }

  public markCriticalImage(src: string) {
    this.criticalImages.add(src);
  }

  public preloadNextImages(images: string[], currentIndex: number) {
    const nextImages = images.slice(currentIndex + 1, currentIndex + 3);
    nextImages.forEach(src => this.preloadImage(src));
  }

  public measureCriticalPath(name: string) {
    performance.mark(`${name}-start`);
    return () => {
      performance.mark(`${name}-end`);
      try {
        performance.measure(name, `${name}-start`, `${name}-end`);
        const measure = performance.getEntriesByName(name)[0];
        if (process.env.NODE_ENV === 'development') {
          console.log(`⚡ ${name}: ${measure.duration.toFixed(2)}ms`);
        }
      } catch (e) {
        console.warn(`Failed to measure ${name}`);
      }
    };
  }
}

export const enhancedPerformanceService = new EnhancedPerformanceService();
