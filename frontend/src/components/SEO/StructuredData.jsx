import { useTranslation } from 'next-i18next';

export const getHomePageStructuredData = (t) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": t('seo.siteName'),
  "description": t('seo.siteDescription'),
  "url": "https://medianeg.org",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://medianeg.org/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "mainEntity": {
    "@type": "Organization",
    "name": t('seo.siteName'),
    "description": t('home.tagline'),
    "foundingDate": "2024",
    "mission": t('features.missionDescription'),
    "serviceArea": {
      "@type": "Place",
      "name": "International"
    }
  }
});

export const getPresentationPageStructuredData = (t) => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": t('presentation.title'),
  "description": t('presentationPage.subtitle'),
  "mainEntity": {
    "@type": "Organization",
    "name": t('seo.siteName'),
    "description": t('presentationPage.missionDescription'),
    "knowsAbout": [
      "International Mediation",
      "Conflict Resolution",
      "Peace Negotiation",
      "Diplomatic Relations"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de médiation",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Médiation Internationale",
            "description": t('features.roleDescription')
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Formation en médiation",
            "description": t('actionPlanPage.mediatorTrainingDesc')
          }
        }
      ]
    }
  }
});

export const getActionPlanPageStructuredData = (t) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": t('actionPlan.title'),
  "description": t('actionPlanPage.subtitle'),
  "mainEntity": {
    "@type": "ItemList",
    "name": "Plan d'action MEDIANEG",
    "description": t('actionPlanPage.currentYearDescription'),
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": t('actionPlanPage.strategicObjectives'),
        "description": t('actionPlanPage.strategicObjectivesDesc')
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t('actionPlanPage.mediatorTraining'),
        "description": t('actionPlanPage.mediatorTrainingDesc')
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": t('actionPlanPage.operationalPlanning'),
        "description": t('actionPlanPage.operationalPlanningDesc')
      }
    ]
  }
});

export const getContactPageStructuredData = (t) => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": t('contact.title'),
  "description": t('contactPage.availability'),
  "mainEntity": {
    "@type": "Organization",
    "name": t('seo.siteName'),
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+33-1-XX-XX-XX-XX",
        "contactType": "customer service",
        "areaServed": "FR",
        "availableLanguage": ["French", "English"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+33-1-XX-XX-XX-XX",
        "contactType": "emergency",
        "areaServed": "International",
        "availableLanguage": ["French", "English"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressCountry": "FR"
    }
  }
});

export const getBreadcrumbStructuredData = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const getFAQStructuredData = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
