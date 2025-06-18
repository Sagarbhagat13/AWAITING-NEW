
import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
  entries: PerformanceEntry[];
}

export const useWebVitals = (reportWebVitals?: (metric: WebVitalsMetric) => void) => {
  useEffect(() => {
    if (!reportWebVitals) return;

    const loadWebVitals = async () => {
      if ('PerformanceObserver' in window) {
        try {
          const vitals = {
            LCP: 0,
            FID: 0,
            CLS: 0,
            FCP: 0,
            TTFB: 0,
          };

          // First Contentful Paint - Critical for perceived performance
          const fcpObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.name === 'first-contentful-paint') {
                vitals.FCP = entry.startTime;
                reportWebVitals({
                  name: 'FCP',
                  value: entry.startTime,
                  id: 'fcp',
                  delta: entry.startTime - vitals.FCP,
                  entries: [entry],
                });
                
                // Log performance in development
                if (process.env.NODE_ENV === 'development') {
                  console.log(`🎨 First Contentful Paint: ${entry.startTime.toFixed(2)}ms`);
                }
              }
            }
          });

          // Largest Contentful Paint - Critical for LCP optimization
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as any;
            vitals.LCP = lastEntry.startTime;
            reportWebVitals({
              name: 'LCP',
              value: lastEntry.startTime,
              id: 'lcp',
              delta: lastEntry.startTime - vitals.LCP,
              entries: [lastEntry],
            });
            
            if (process.env.NODE_ENV === 'development') {
              console.log(`🖼️ Largest Contentful Paint: ${lastEntry.startTime.toFixed(2)}ms`);
              console.log('LCP Element:', lastEntry.element);
            }
          });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              const delay = (entry as any).processingStart - entry.startTime;
              vitals.FID = delay;
              reportWebVitals({
                name: 'FID',
                value: delay,
                id: 'fid',
                delta: delay - vitals.FID,
                entries: [entry],
              });
              
              if (process.env.NODE_ENV === 'development') {
                console.log(`⚡ First Input Delay: ${delay.toFixed(2)}ms`);
              }
            }
          });

          // Cumulative Layout Shift
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
                vitals.CLS = clsValue;
                reportWebVitals({
                  name: 'CLS',
                  value: clsValue,
                  id: 'cls',
                  delta: (entry as any).value,
                  entries: [entry],
                });
              }
            }
          });

          // Register observers with error handling
          try {
            fcpObserver.observe({ entryTypes: ['paint'] });
          } catch (e) {
            console.warn('FCP observer not supported');
          }

          try {
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
          } catch (e) {
            console.warn('LCP observer not supported');
          }

          try {
            fidObserver.observe({ entryTypes: ['first-input'] });
          } catch (e) {
            console.warn('FID observer not supported');
          }

          try {
            clsObserver.observe({ entryTypes: ['layout-shift'] });
          } catch (e) {
            console.warn('CLS observer not supported');
          }

          // Time to First Byte - Critical for server response optimization
          if ('navigation' in performance) {
            const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            if (navTiming) {
              const ttfb = navTiming.responseStart - navTiming.requestStart;
              vitals.TTFB = ttfb;
              reportWebVitals({
                name: 'TTFB',
                value: ttfb,
                id: 'ttfb',
                delta: ttfb - vitals.TTFB,
                entries: [navTiming],
              });
              
              if (process.env.NODE_ENV === 'development') {
                console.log(`🚀 Time to First Byte: ${ttfb.toFixed(2)}ms`);
              }
            }
          }

          // Enhanced performance monitoring for critical resources
          const resourceObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              const resource = entry as PerformanceResourceTiming;
              if (resource.name.includes('main.tsx') || resource.name.includes('index.css')) {
                if (process.env.NODE_ENV === 'development') {
                  console.log(`📦 Critical Resource (${resource.name}): ${resource.duration.toFixed(2)}ms`);
                }
              }
            }
          });

          try {
            resourceObserver.observe({ entryTypes: ['resource'] });
          } catch (e) {
            console.warn('Resource observer not supported');
          }

        } catch (error) {
          console.warn('Web Vitals measurement failed:', error);
        }
      }
    };

    loadWebVitals();
  }, [reportWebVitals]);

  // Add performance marks for development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      performance.mark('useWebVitals-start');
      return () => {
        performance.mark('useWebVitals-end');
        try {
          performance.measure('useWebVitals-duration', 'useWebVitals-start', 'useWebVitals-end');
        } catch (e) {
          // Ignore measurement errors
        }
      };
    }
  }, []);
};

export default useWebVitals;
