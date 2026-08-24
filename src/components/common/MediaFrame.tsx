import React from 'react';
import './MediaFrame.css';

interface MediaFrameProps {
  children: React.ReactNode;
  ratio?: 'landscape' | 'portrait' | 'square' | 'cinematic';
  className?: string;
}

export default function MediaFrame({ 
  children, 
  ratio = 'landscape', 
  className = '' 
}: MediaFrameProps) {
  return (
    <div className={`media-frame ratio-${ratio} ${className}`.trim()}>
      {children}
    </div>
  );
}
