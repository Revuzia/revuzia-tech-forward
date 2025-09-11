import { useEffect, useRef } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
};

export const useParallaxMultiple = () => {
  const slowRef = useRef<HTMLDivElement>(null);
  const mediumRef = useRef<HTMLDivElement>(null);
  const fastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      if (slowRef.current) {
        slowRef.current.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
      
      if (mediumRef.current) {
        mediumRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
      
      if (fastRef.current) {
        fastRef.current.style.transform = `translateY(${scrolled * 0.6}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { slowRef, mediumRef, fastRef };
};