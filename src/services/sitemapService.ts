
import { popularTrips } from '@/data/popularTrips';
import { weekendTrips } from '@/data/weekendTrips';
import { internationalTours } from '@/data/internationalTours';
import { honeymoonPackages } from '@/data/honeymoonPackages';
import { ladakhBikingTrips, ladakhSUVTrips } from '@/data/ladakhTrips';
import { offBeatTrips } from '@/data/offBeatTrips';
import { familyTours } from '@/data/familyTours';
import { longWeekendTrips } from '@/data/longWeekendTrips';
import { statePackages } from '@/data/statePackages';
import { blogPosts } from '@/data/blogData';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export class SitemapService {
  private baseUrl = 'https://awaitingadventures.com';

  generateSitemap(): string {
    const urls: SitemapUrl[] = [];
    const currentDate = new Date().toISOString().split('T')[0];

    // Static pages with high priority
    const staticPages = [
      { path: '/', priority: 1.0, changefreq: 'daily' as const },
      { path: '/about', priority: 0.8, changefreq: 'monthly' as const },
      { path: '/contact', priority: 0.8, changefreq: 'monthly' as const },
      { path: '/blog', priority: 0.9, changefreq: 'weekly' as const },
      { path: '/backpacking', priority: 0.8, changefreq: 'weekly' as const },
      { path: '/customized', priority: 0.8, changefreq: 'weekly' as const },
      { path: '/long-weekend-trips', priority: 0.8, changefreq: 'weekly' as const },
      { path: '/family-tours', priority: 0.8, changefreq: 'weekly' as const },
      { path: '/honeymoon-packages', priority: 0.8, changefreq: 'weekly' as const },
    ];

    staticPages.forEach(page => {
      urls.push({
        loc: `${this.baseUrl}${page.path}`,
        lastmod: currentDate,
        changefreq: page.changefreq,
        priority: page.priority
      });
    });

    // State and destination pages
    const statePages = [
      '/india/ladakh',
      '/india/himachal-pradesh',
      '/india/uttarakhand',
      '/india/rajasthan',
      '/india/goa',
      '/india/kerala',
      '/india/tamil-nadu',
      '/india/andaman',
      '/india/all-states',
      '/world/thailand',
      '/world/singapore',
      '/world/bali',
      '/world/maldives',
      '/world/dubai',
      '/world/europe',
      '/world/all-countries'
    ];

    statePages.forEach(path => {
      urls.push({
        loc: `${this.baseUrl}${path}`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.7
      });
    });

    // Individual trip pages
    const allTrips = [
      ...popularTrips,
      ...weekendTrips,
      ...internationalTours,
      ...honeymoonPackages,
      ...ladakhBikingTrips,
      ...ladakhSUVTrips,
      ...offBeatTrips,
      ...familyTours,
      ...longWeekendTrips,
      ...statePackages
    ];

    allTrips.forEach(trip => {
      urls.push({
        loc: `${this.baseUrl}/trip/${trip.id}`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8
      });
    });

    // Blog posts
    blogPosts.forEach(post => {
      urls.push({
        loc: `${this.baseUrl}/blog/${post.slug}`,
        lastmod: post.publishedAt || currentDate,
        changefreq: 'monthly',
        priority: 0.6
      });
    });

    return this.generateXmlSitemap(urls);
  }

  private generateXmlSitemap(urls: SitemapUrl[]): string {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const urlsetClose = '</urlset>';

    const urlElements = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

    return `${xmlHeader}\n${urlsetOpen}${urlElements}\n${urlsetClose}`;
  }

  generateImageSitemap(): string {
    const allTrips = [
      ...popularTrips,
      ...weekendTrips,
      ...internationalTours,
      ...honeymoonPackages,
      ...ladakhBikingTrips,
      ...ladakhSUVTrips,
      ...offBeatTrips,
      ...familyTours,
      ...longWeekendTrips
    ];

    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">';
    const urlsetClose = '</urlset>';

    const urlElements = allTrips.map(trip => `
  <url>
    <loc>${this.baseUrl}/trip/${trip.id}</loc>
    <image:image>
      <image:loc>${trip.image}</image:loc>
      <image:title>${trip.title}</image:title>
      <image:caption>${trip.title} - ${trip.location}</image:caption>
    </image:image>
  </url>`).join('');

    return `${xmlHeader}\n${urlsetOpen}${urlElements}\n${urlsetClose}`;
  }
}

export const sitemapService = new SitemapService();
