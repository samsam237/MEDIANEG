export default function handler(req, res) {
  const locales = ['fr', 'en'];
  const pages = [
    { url: '', priority: 1.0, changefreq: 'weekly' },
    { url: '/presentation', priority: 0.8, changefreq: 'monthly' },
    { url: '/action-plan', priority: 0.8, changefreq: 'monthly' },
    { url: '/contact', priority: 0.9, changefreq: 'monthly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${locales.map(locale => 
  pages.map(page => {
    const url = locale === 'fr' ? page.url : `/${locale}${page.url}`;
    const fullUrl = `https://medianeg.org${url}`;
    const lastmod = new Date().toISOString();
    
    return `  <url>
    <loc>${fullUrl}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://medianeg.org/en${page.url}"/>
    <xhtml:link rel="alternate" hreflang="fr" href="https://medianeg.org${page.url}"/>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }).join('\n')
).join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
  res.status(200).send(sitemap);
}