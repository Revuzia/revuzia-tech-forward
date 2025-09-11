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

export const useBackgroundParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const yPos = scrolled * speed;
      element.style.backgroundPosition = `center ${yPos}px`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
};