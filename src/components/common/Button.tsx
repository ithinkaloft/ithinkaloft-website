import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'large';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'default', 
  className = '', 
  children, 
  ...rest 
}: ButtonProps) {
  return (
    <button 
      className={`btn btn-${variant} btn-${size} ${className}`.trim()} 
      {...rest}
    >
      {children}
    </button>
  );
}

// Convenient export for links styled as buttons
interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'large';
  children: React.ReactNode;
}

export function ButtonLink({ 
  variant = 'primary', 
  size = 'default', 
  className = '', 
  children, 
  ...rest 
}: ButtonLinkProps) {
  return (
    <a 
      className={`btn btn-${variant} btn-${size} ${className}`.trim()} 
      {...rest}
    >
      {children}
    </a>
  );
}
