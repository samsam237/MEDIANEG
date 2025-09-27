import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image = '/og-image.jpg',
  url,
  type = 'website',
  structuredData = null 
}) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  
  // URL complète avec locale
  const fullUrl = url || `https://medianeg.org${router.asPath}`;
  const siteName = t('seo.siteName');
  const defaultDescription = t('seo.siteDescription');
  const defaultKeywords = t('seo.keywords');
  
  // Fallback sur les traductions par défaut
  const seoTitle = title || t('seo.pages.home.title');
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  
  // Image Open Graph avec URL complète
  const ogImage = image.startsWith('http') ? image : `https://medianeg.org${image}`;

  return (
    <Head>
      {/* Meta tags de base */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={router.locale} />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={router.locale === 'fr' ? 'fr_FR' : 'en_US'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@MEDIANEGIntl" />
      <meta name="twitter:creator" content="@MEDIANEGIntl" />
      
      {/* Balises supplémentaires pour le SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#f97316" />
      
      {/* Favicon et icônes */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Préchargement des ressources critiques */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//res.cloudinary.com" />
      
      {/* Données structurées */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Données structurées par défaut pour l'organisation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": siteName,
            "description": defaultDescription,
            "url": "https://medianeg.org",
            "logo": "https://medianeg.org/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+41-58-201-0612",
              "contactType": "customer service",
              "availableLanguage": ["French", "English"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Grand-Rue 1A",
              "addressLocality": "Neuchâtel",
              "postalCode": "2000",
              "addressCountry": "CH"
            },
            "sameAs": [
              "https://twitter.com/MEDIANEGIntl",
              "https://linkedin.com/company/medianeg-international"
            ]
          })
        }}
      />
    </Head>
  );
};

export default SEOHead;
