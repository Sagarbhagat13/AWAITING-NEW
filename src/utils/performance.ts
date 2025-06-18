
export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
  memoryUsage?: number;
  bundleSize?: number;
  cacheHitRate?: number;
}

interface ComponentMetrics {
  renderCount: number;
  averageRenderTime: number;
  lastRenderTime: number;
}

class PerformanceMonitor {
  private metrics: Map<string, number> = new Map();
  private componentMetrics: Map<string, ComponentMetrics> = new Map();
  private observers: PerformanceObserver[] = [];
  private startTime: number = performance.now();

  constructor() {
    this.initializeObservers();
    this.trackInitialMetrics();
  }

  private initializeObservers() {
    if (!('PerformanceObserver' in window)) {
      console.warn('PerformanceObserver not supported');
      return;
    }

    // Navigation timing
    try {
      const navObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            this.metrics.set('loadTime', navEntry.loadEventEnd - navEntry.loadEventStart);
            this.metrics.set('domContentLoaded', navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart);
            this.metrics.set('timeToInteractive', navEntry.domInteractive - navEntry.fetchStart);
          }
        }
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);
    } catch (e) {
      console.warn('Navigation timing observation failed:', e);
    }

    // Largest Contentful Paint
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.set('largestContentfulPaint', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (e) {
      console.warn('LCP observation failed:', e);
    }

    // First Input Delay
    try {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.metrics.set('firstInputDelay', (entry as any).processingStart - entry.startTime);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (e) {
      console.warn('FID observation failed:', e);
    }

    // Cumulative Layout Shift
    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        this.metrics.set('cumulativeLayoutShift', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (e) {
      console.warn('CLS observation failed:', e);
    }

    // Resource timing
    try {
      const resourceObserver = new PerformanceObserver((list) => {
        let totalSize = 0;
        let cacheHits = 0;
        let totalRequests = 0;

        for (const entry of list.getEntries()) {
          const resourceEntry = entry as PerformanceResourceTiming;
          totalSize += resourceEntry.transferSize || 0;
          totalRequests++;
          
          // Check if resource was served from cache
          if (resourceEntry.transferSize === 0 && resourceEntry.decodedBodySize > 0) {
            cacheHits++;
          }
        }

        this.metrics.set('bundleSize', totalSize);
        this.metrics.set('cacheHitRate', totalRequests > 0 ? (cacheHits / totalRequests) * 100 : 0);
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    } catch (e) {
      console.warn('Resource timing observation failed:', e);
    }
  }

  private trackInitialMetrics() {
    // Track initial page load time
    if (document.readyState === 'complete') {
      this.metrics.set('initialLoadTime', performance.now() - this.startTime);
    } else {
      window.addEventListener('load', () => {
        this.metrics.set('initialLoadTime', performance.now() - this.startTime);
      });
    }
  }

  public measureRender<T>(componentName: string, renderFn: () => T): T {
    const startTime = performance.now();
    const result = renderFn();
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    // Update component metrics
    const current = this.componentMetrics.get(componentName) || {
      renderCount: 0,
      averageRenderTime: 0,
      lastRenderTime: 0
    };

    const newRenderCount = current.renderCount + 1;
    const newAverageTime = (current.averageRenderTime * current.renderCount + renderTime) / newRenderCount;

    this.componentMetrics.set(componentName, {
      renderCount: newRenderCount,
      averageRenderTime: newAverageTime,
      lastRenderTime: renderTime
    });

    this.metrics.set(`render_${componentName}`, renderTime);
    return result;
  }

  public measureAsync<T>(operationName: string, asyncFn: () => Promise<T>): Promise<T> {
    const startTime = performance.now();
    
    return asyncFn()
      .then(result => {
        const endTime = performance.now();
        this.metrics.set(`async_${operationName}`, endTime - startTime);
        return result;
      })
      .catch(error => {
        const endTime = performance.now();
        this.metrics.set(`async_${operationName}_failed`, endTime - startTime);
        throw error;
      });
  }

  public getMetrics(): PerformanceMetrics {
    return {
      loadTime: this.metrics.get('loadTime') || this.metrics.get('initialLoadTime') || 0,
      renderTime: this.getAverageRenderTime(),
      interactionTime: this.metrics.get('firstInputDelay') || 0,
      memoryUsage: this.getMemoryUsage(),
      bundleSize: this.metrics.get('bundleSize'),
      cacheHitRate: this.metrics.get('cacheHitRate')
    };
  }

  public getComponentMetrics(): Map<string, ComponentMetrics> {
    return new Map(this.componentMetrics);
  }

  private getAverageRenderTime(): number {
    const renderMetrics = Array.from(this.componentMetrics.values());
    if (renderMetrics.length === 0) return 0;
    
    const totalTime = renderMetrics.reduce((sum, metric) => sum + metric.averageRenderTime, 0);
    return totalTime / renderMetrics.length;
  }

  private getMemoryUsage(): number | undefined {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return memory.usedJSHeapSize / 1024 / 1024; // MB
    }
    return undefined;
  }

  public getWebVitals() {
    return {
      LCP: this.metrics.get('largestContentfulPaint'),
      FID: this.metrics.get('firstInputDelay'),
      CLS: this.metrics.get('cumulativeLayoutShift'),
      TTFB: this.metrics.get('timeToFirstByte'),
      TTI: this.metrics.get('timeToInteractive')
    };
  }

  public reportMetrics(): void {
    const metrics = this.getMetrics();
    const webVitals = this.getWebVitals();
    
    if (process.env.NODE_ENV === 'development') {
      console.group('🚀 Performance Metrics');
      console.log('📊 Core Metrics:');
      console.log(`   Load Time: ${metrics.loadTime.toFixed(2)}ms`);
      console.log(`   Average Render Time: ${metrics.renderTime.toFixed(2)}ms`);
      console.log(`   First Input Delay: ${metrics.interactionTime.toFixed(2)}ms`);
      
      if (metrics.memoryUsage) {
        console.log(`   Memory Usage: ${metrics.memoryUsage.toFixed(2)}MB`);
      }
      
      if (metrics.bundleSize) {
        console.log(`   Bundle Size: ${(metrics.bundleSize / 1024).toFixed(2)}KB`);
      }
      
      if (metrics.cacheHitRate !== undefined) {
        console.log(`   Cache Hit Rate: ${metrics.cacheHitRate.toFixed(1)}%`);
      }

      console.log('🎯 Web Vitals:');
      if (webVitals.LCP) console.log(`   LCP: ${webVitals.LCP.toFixed(2)}ms`);
      if (webVitals.FID) console.log(`   FID: ${webVitals.FID.toFixed(2)}ms`);
      if (webVitals.CLS) console.log(`   CLS: ${webVitals.CLS.toFixed(4)}`);

      console.log('🔧 Component Performance:');
      this.componentMetrics.forEach((metric, name) => {
        console.log(`   ${name}: ${metric.averageRenderTime.toFixed(2)}ms avg (${metric.renderCount} renders)`);
      });
      
      console.groupEnd();
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      // Analytics integration would go here
      this.sendToAnalytics(metrics, webVitals);
    }
  }

  private sendToAnalytics(metrics: PerformanceMetrics, webVitals: any) {
    // Implementation for sending metrics to analytics service
    // This could be Google Analytics, DataDog, etc.
    console.log('Sending metrics to analytics:', { metrics, webVitals });
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.metrics.clear();
    this.componentMetrics.clear();
  }
}

export const performanceMonitor = new PerformanceMonitor();

// React hook for component performance measurement
export const usePerformanceTracking = (componentName: string) => {
  const trackRender = <T>(renderFn: () => T): T => {
    return performanceMonitor.measureRender(componentName, renderFn);
  };

  const trackAsync = <T>(operationName: string, asyncFn: () => Promise<T>): Promise<T> => {
    return performanceMonitor.measureAsync(`${componentName}_${operationName}`, asyncFn);
  };

  return { trackRender, trackAsync };
};

// Performance reporting hook
export const usePerformanceReporting = () => {
  const reportMetrics = () => performanceMonitor.reportMetrics();
  const getMetrics = () => performanceMonitor.getMetrics();
  const getComponentMetrics = () => performanceMonitor.getComponentMetrics();
  const getWebVitals = () => performanceMonitor.getWebVitals();

  return { reportMetrics, getMetrics, getComponentMetrics, getWebVitals };
};
