// Configuration SEO pour MEDIANEG International

export const defaultSEO = {
  title: 'MEDIANEG International - Médiation Commerciale et Négociation',
  description: 'MEDIANEG International facilite les échanges commerciaux entre l\'Afrique et le monde. Expert en médiation, négociation et intelligence économique.',
  keywords: [
    'médiation commerciale',
    'négociation internationale',
    'commerce Afrique',
    'intelligence économique',
    'partenariat commercial',
    'médiation conflits',
    'négociation contrats',
    'développement durable',
    'commerce équitable',
    'export Afrique'
  ],
  author: 'MEDIANEG International',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    siteName: 'MEDIANEG International',
    title: 'MEDIANEG International - Médiation Commerciale et Négociation',
    description: 'Expert en médiation et négociation commerciale internationale entre l\'Afrique et le monde.',
    locale: 'fr_FR',
    url: 'https://medianeg.org',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MEDIANEG International - Médiation Commerciale'
      }
    ]
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@MEDIANEG_INT',
    creator: '@MEDIANEG_INT'
  }
};

export const pagesSEO = {
  home: {
    title: 'Accueil - MEDIANEG International',
    description: 'Découvrez MEDIANEG International, votre partenaire de confiance en médiation commerciale et négociation internationale entre l\'Afrique et le monde.',
    keywords: [
      'médiation commerciale',
      'négociation internationale',
      'commerce Afrique',
      'partenariat commercial',
      'médiation conflits'
    ]
  },
  presentation: {
    title: 'À propos - MEDIANEG International',
    description: 'En savoir plus sur MEDIANEG International, notre mission, nos valeurs et notre expertise en médiation commerciale internationale.',
    keywords: [
      'à propos MEDIANEG',
      'mission médiation',
      'valeurs entreprise',
      'expertise commerciale',
      'équipe médiation'
    ]
  },
  services: {
    title: 'Nos Services - MEDIANEG International',
    description: 'Découvrez nos services de médiation commerciale, négociation internationale, sourcing et intelligence économique.',
    keywords: [
      'services médiation',
      'négociation contrats',
      'sourcing international',
      'intelligence économique',
      'accompagnement commercial'
    ]
  },
  contact: {
    title: 'Contact - MEDIANEG International',
    description: 'Contactez MEDIANEG International pour vos projets de médiation et négociation commerciale. Consultation gratuite.',
    keywords: [
      'contact MEDIANEG',
      'consultation gratuite',
      'devis médiation',
      'accompagnement projet',
      'support commercial'
    ]
  }
};

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MEDIANEG International',
    url: 'https://medianeg.org',
    logo: 'https://medianeg.org/logo.png',
    description: 'Organisation spécialisée dans la médiation commerciale et la négociation internationale entre l\'Afrique et le monde.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Avenue de la Paix',
      addressLocality: 'Paris',
      postalCode: '75000',
      addressCountry: 'FR'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-1-23-45-67-89',
      contactType: 'customer service',
      email: 'contact@medianeg.org'
    },
    sameAs: [
      'https://linkedin.com/company/medianeg-international',
      'https://twitter.com/MEDIANEG_INT'
    ]
  },
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Médiation Commerciale Internationale',
    description: 'Services de médiation et négociation commerciale entre l\'Afrique et le monde',
    provider: {
      '@type': 'Organization',
      name: 'MEDIANEG International'
    },
    areaServed: 'Africa, Europe, Asia, Americas',
    serviceType: 'Commercial Mediation'
  }
};

export const generatePageSEO = (page, locale = 'fr') => {
  const pageConfig = pagesSEO[page] || pagesSEO.home;
  
  return {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords.join(', '),
    openGraph: {
      ...defaultSEO.openGraph,
      title: pageConfig.title,
      description: pageConfig.description,
      locale: locale === 'fr' ? 'fr_FR' : 'en_US'
    },
    twitter: {
      ...defaultSEO.twitter,
      title: pageConfig.title,
      description: pageConfig.description
    }
  };
};
