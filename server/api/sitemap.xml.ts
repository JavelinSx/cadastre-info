// server/api/sitemap.xml.ts
export default defineEventHandler(async (event) => {
  const hostname = 'https://pleskad.ru'
  const currentDate = new Date().toISOString()
  
  const routes = [
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/services', changefreq: 'monthly', priority: '0.9' },
    { url: '/about', changefreq: 'monthly', priority: '0.8' },
    { url: '/contacts', changefreq: 'monthly', priority: '0.8' },
    { url: '/request', changefreq: 'monthly', priority: '0.7' },
    
    // Услуги межевания
    { url: '/services/land-survey', changefreq: 'monthly', priority: '0.9' },
    { url: '/services/land-survey/surveying', changefreq: 'monthly', priority: '0.8' },
    { url: '/services/land-survey/boundary-clarification', changefreq: 'monthly', priority: '0.8' },
    { url: '/services/land-survey/division', changefreq: 'monthly', priority: '0.8' },
    { url: '/services/land-survey/unification', changefreq: 'monthly', priority: '0.8' },
    { url: '/services/land-survey/redistribution', changefreq: 'monthly', priority: '0.8' },
    { url: '/services/land-survey/formation', changefreq: 'monthly', priority: '0.8' },
    
    // Технические планы
    { url: '/services/technical-plans', changefreq: 'monthly', priority: '0.9' },
    { url: '/services/technical-plans/house', changefreq: 'monthly', priority: '0.8' },
    { url: '/services/technical-plans/building', changefreq: 'monthly', priority: '0.8' },
    { url: '/services/technical-plans/room', changefreq: 'monthly', priority: '0.8' },
    { url: '/services/technical-plans/construction', changefreq: 'monthly', priority: '0.8' },
    { url: '/services/technical-plans/construction-in-progress', changefreq: 'monthly', priority: '0.8' },
    { url: '/services/technical-plans/part-building', changefreq: 'monthly', priority: '0.8' },
    
    // Дополнительные услуги
    { url: '/services/cadastral-register', changefreq: 'monthly', priority: '0.8' },
    { url: '/services/error-correction', changefreq: 'monthly', priority: '0.7' },
    { url: '/services/cadastral-extracts', changefreq: 'monthly', priority: '0.7' },
    { url: '/services/consultations', changefreq: 'monthly', priority: '0.7' },
    { url: '/services/cadastral-removal', changefreq: 'monthly', priority: '0.7' },
    { url: '/services/property-rights', changefreq: 'monthly', priority: '0.8' }
  ]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${routes.map(route => `  <url>
    <loc>${hostname}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  setHeader(event, 'content-type', 'application/xml; charset=UTF-8')
  setHeader(event, 'cache-control', 'public, max-age=86400') // кэш на 24 часа
  
  return sitemap
})