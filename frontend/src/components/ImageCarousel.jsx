'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageCarousel = ({ 
  images, 
  interval = 5000, 
  height = 'h-64',
  overlay = true,
  overlayOpacity = 0.3,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative ${height} overflow-hidden ${className}`}>
      {/* Images du carousel */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            
            {/* Overlay */}
            {overlay && (
              <div 
                className="absolute inset-0 bg-black"
                style={{ opacity: overlayOpacity }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Contenu par-dessus l'image */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {images[currentIndex]?.title || 'Secteur Agricole'}
          </h3>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {images[currentIndex]?.description || 'Nous accompagnons les acteurs du secteur agricole'}
          </p>
        </div>
      </div>

      {/* Indicateurs de navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Boutons de navigation */}
      <button
        onClick={() => goToSlide(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Image précédente"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => goToSlide(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Image suivante"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ImageCarousel;
