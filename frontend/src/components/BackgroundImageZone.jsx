'use client';

import Image from 'next/image';
import { useState } from 'react';

const BackgroundImageZone = ({ 
  imageSrc, 
  imageAlt, 
  overlay = true, 
  overlayOpacity = 0.4,
  children,
  className = '',
  imagePosition = 'center',
  height = 'h-96'
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`relative ${height} overflow-hidden ${className}`}>
      {/* Image d'arrière-plan */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectPosition: imagePosition }}
          onLoad={() => setImageLoaded(true)}
          priority={false}
        />
        
        {/* Overlay sombre optionnel */}
        {overlay && (
          <div 
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
        )}
      </div>
      
      {/* Contenu par-dessus l'image */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImageZone;
