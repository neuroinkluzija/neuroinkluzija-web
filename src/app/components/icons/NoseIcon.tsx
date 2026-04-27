import React from 'react';
import noseImage from 'figma:asset/c3ed331291eaef9237cbee52b1ef3f373ad8fd47.png';

interface NoseIconProps {
  className?: string;
}

export function NoseIcon({ className = "h-6 w-6" }: NoseIconProps) {
  return (
    <img 
      src={noseImage}
      alt="Nose icon"
      className={className}
      style={{ 
        filter: 'brightness(0) saturate(100%)', // Makes it black to match other icons
        objectFit: 'contain'
      }}
    />
  );
}