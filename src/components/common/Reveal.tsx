import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import './Reveal.css';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) return; // Already revealed via reduced-motion

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [isVisible]);

  return (
    <div 
      ref={ref} 
      className={`reveal-wrapper ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
