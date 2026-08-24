import React from 'react';
import './Container.css';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export default function Container({ children, className = '', style, as: Component = 'div', ...rest }: ContainerProps) {
  return (
    <Component className={`container ${className}`.trim()} style={style} {...rest}>
      {children}
    </Component>
  );
}
