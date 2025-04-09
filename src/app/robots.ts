import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
    },
    sitemap: 'https://www.khaodoes.dev/sitemap.xml',
		host: "https://www.khaodoes.dev"
  }
}