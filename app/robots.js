export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/draft/*'],
    },
    sitemap: 'https://www.avocatsollies.fr/sitemap.xml',
  };
}
