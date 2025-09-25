'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PerformanceOptimizer from './PerformanceOptimizer';

const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      // Configuration AOS pour MEDIANEG
      duration: 800, // Durée des animations (ms)
      easing: 'ease-out-cubic', // Type d'easing
      once: true, // Animation une seule fois
      mirror: false, // Pas de re-animation au scroll inverse
      offset: 100, // Décalage avant déclenchement (px)
      delay: 0, // Délai avant animation (ms)
      anchorPlacement: 'top-bottom', // Point d'ancrage
      
      // Désactiver sur mobile pour les performances
      disable: function() {
        return window.innerWidth < 768;
      },
      
      // Classes personnalisées
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      
      // Configuration responsive
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
    });

    // Nettoyage
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <>
      <PerformanceOptimizer />
      {children}
    </>
  );
};

export default AOSProvider;
