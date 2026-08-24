import React from 'react';
import './Section.css';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  spacing?: 'compact' | 'normal' | 'large';
}

export default function Section({ 
  children, 
  className = '', 
  spacing = 'normal', 
  ...rest 
}: SectionProps) {
  return (
    <section className={`site-section section-${spacing} ${className}`.trim()} {...rest}>
      {children}
    </section>
  );
}
