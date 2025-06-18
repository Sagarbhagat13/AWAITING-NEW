
import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  searchTime: number;
  bundleSize?: number;
}

export const usePerformanceMonitor = (componentName: string) => {
  const startTime = useRef<number>(Date.now());
  const renderStartTime = useRef<number>(Date.now());

  useEffect(() => {
    // Measure initial load time
    const loadTime = Date.now() - startTime.current;
    
    // Log performance metrics
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${componentName} - Load Time: ${loadTime}ms`);
    }

    // Measure render time
    const renderTime = Date.now() - renderStartTime.current;
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${componentName} - Render Time: ${renderTime}ms`);
    }

    return () => {
      // Cleanup if needed
    };
  }, [componentName]);

  const measureSearchTime = (searchFn: () => Promise<any>) => {
    return async () => {
      const searchStart = Date.now();
      const result = await searchFn();
      const searchTime = Date.now() - searchStart;
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] Search Time: ${searchTime}ms`);
      }
      
      return result;
    };
  };

  const measureOperationTime = (operationName: string, operation: () => any) => {
    const start = Date.now();
    const result = operation();
    const time = Date.now() - start;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${operationName}: ${time}ms`);
    }
    
    return result;
  };

  return {
    measureSearchTime,
    measureOperationTime
  };
};
