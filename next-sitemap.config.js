/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://travelpowerplugs.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: [
    '/api/*',
    '/server-sitemap.xml',
    '/_next/*',
    '/_vercel/*',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/_vercel/'],
      },
    ],
    additionalSitemaps: [
      'https://travelpowerplugs.com/sitemap-countries.xml',
      'https://travelpowerplugs.com/sitemap-tools.xml',
      'https://travelpowerplugs.com/sitemap-plugs.xml',
    ],
  },
  transform: async (config, path) => {
    // Homepage - highest priority
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    
    // Country pages - high priority
    if (path.includes('electric-plug-type') || path.includes('electric-plug-types')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }
    
    // Plug type pages - high priority
    if (path.includes('/plug-type/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }
    
    // Tools - medium-high priority
    if (path.includes('/tools/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      };
    }
    
    // Continent pages - medium priority
    if (path.includes('/continent/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      };
    }
    
    // Comparison pages - medium priority
    if (path.includes('/compare/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      };
    }
    
    // Guide pages - medium priority
    if (path.includes('/guides/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      };
    }
    
    // Default for other pages
    return {
      loc: path,
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: new Date().toISOString(),
    };
  },
};