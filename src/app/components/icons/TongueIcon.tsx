import React from 'react';
import tongueImage from 'figma:asset/67c25a3c185cf58497b87cc8ef54c4f7ee635e12.png';

interface TongueIconProps {
  className?: string;
}

export function TongueIcon({ className = "h-6 w-6" }: TongueIconProps) {
  return (
    <img 
      src={tongueImage}
      alt="Tongue icon"
      className={className}
      style={{ 
        filter: 'brightness(0) saturate(100%)', // Makes it black to match other icons
        objectFit: 'contain'
      }}
    />
  );
}