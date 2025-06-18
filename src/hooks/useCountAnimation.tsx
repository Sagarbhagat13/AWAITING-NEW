
import { useState, useEffect } from 'react';

interface UseCountAnimationProps {
  endValue: number;
  duration?: number;
  startDelay?: number;
}

export const useCountAnimation = ({ 
  endValue, 
  duration = 2000, 
  startDelay = 100 
}: UseCountAnimationProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Only animate once
    if (hasAnimated) return;
    
    const startTime = Date.now() + startDelay;
    let animationFrame: number;
    
    const animate = () => {
      const now = Date.now();
      if (now < startTime) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }
      
      const elapsedTime = now - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOutQuad(progress);
      
      // For numeric values, calculate based on progress
      const currentCount = Math.floor(easedProgress * endValue);
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
        setHasAnimated(true);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [endValue, duration, startDelay, hasAnimated]);
  
  return count;
};

// Easing function for smoother animation
const easeOutQuad = (x: number): number => {
  return 1 - (1 - x) * (1 - x);
};
