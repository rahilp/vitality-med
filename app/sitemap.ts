import { MetadataRoute } from 'next';
import { getAllTreatmentIds } from '@/lib/treatments';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.vitality-med.com';
  
  // Get all treatment IDs for dynamic routes
  const treatmentIds = getAllTreatmentIds();
  
  // Static pages
  const staticPages = [
    '',
    '/how-it-works',
    '/benefits',
    '/treatments',
    '/pricing',
    '/blog',
    '/faq',
    '/contact',
    '/get-started',
    '/hipaa-compliance',
    '/privacy-policy',
    '/terms-of-service',
    '/membership-agreement',
  ];
  
  // Blog posts
  const blogPosts = [
    '/blog/direct-primary-care-dpc-knoxville-tn',
    '/blog/knoxville-residents-benefit-from-concierge-medicine',
    '/blog/concierge-doctors-in-knoxville-tn',
  ];
  
  // Generate sitemap entries for static pages
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : path === '/treatments' ? 0.9 : 0.8,
  }));
  
  // Generate sitemap entries for treatment pages
  const treatmentEntries: MetadataRoute.Sitemap = treatmentIds.map((id) => ({
    url: `${baseUrl}/treatments/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  
  // Generate sitemap entries for blog posts
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
  
  return [...staticEntries, ...treatmentEntries, ...blogEntries];
}

