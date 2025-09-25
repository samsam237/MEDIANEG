'use client';

import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Optimisation des animations pour les performances
    const optimizeAnimations = () => {
      // Désactiver les animations sur les appareils avec peu de puissance
      const isLowEndDevice = navigator.hardwareConcurrency < 4 || 
                            navigator.deviceMemory < 4 ||
                            window.innerWidth < 768;

      if (isLowEndDevice) {
        // Réduire la durée des animations
        document.documentElement.style.setProperty('--animation-duration', '0.3s');
        
        // Désactiver les animations complexes
        document.documentElement.classList.add('reduce-motion');
        
        // Désactiver AOS sur mobile
        if (typeof window !== 'undefined' && window.AOS) {
          window.AOS.refresh({
            duration: 300,
            easing: 'ease-out',
            once: true,
            disable: true
          });
        }
      }

      // Optimisation pour les préférences utilisateur
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        document.documentElement.classList.add('reduce-motion');
        
        // Désactiver toutes les animations
        const style = document.createElement('style');
        style.textContent = `
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Optimisation du scroll
    const optimizeScroll = () => {
      let ticking = false;
      
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Code d'optimisation du scroll ici
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    // Optimisation des images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      }
    };

    // Initialisation des optimisations
    optimizeAnimations();
    const cleanupScroll = optimizeScroll();
    optimizeImages();

    // Nettoyage
    return () => {
      cleanupScroll();
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
