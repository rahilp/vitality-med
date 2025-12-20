import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTA } from '@/components/sections/CTA';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

// Force static generation for this page
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Healthcare Blog | Concierge Medicine & Direct Primary Care Articles 2026',
  description: 'Read expert articles about concierge medicine, direct primary care, and healthcare in Knoxville, TN. Learn about the benefits of DPC, finding concierge doctors, and how residents benefit from personalized healthcare.',
  keywords: 'concierge medicine blog, direct primary care articles, healthcare blog Knoxville, concierge doctor articles, DPC blog, healthcare articles Knoxville TN',
  openGraph: {
    url: 'https://www.vitality-med.com/blog',
    type: 'website',
    title: 'Healthcare Blog | Concierge Medicine & Direct Primary Care Articles 2026',
    description: 'Read expert articles about concierge medicine, direct primary care, and healthcare in Knoxville, TN.',
    images: [
      {
        url: 'https://www.vitality-med.com/Dr_Valji_Vitality_Concierge_Medicine_Knoxville_TN.png',
        width: 1200,
        height: 630,
        alt: 'Vitality Concierge Medicine Blog',
      },
    ],
  },
  other: {
    'og:logo': 'https://www.vitality-med.com/logo.svg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Blog | Concierge Medicine & Direct Primary Care Articles 2026',
    description: 'Read expert articles about concierge medicine, direct primary care, and healthcare in Knoxville, TN.',
    images: ['https://www.vitality-med.com/Dr_Valji_Vitality_Concierge_Medicine_Knoxville_TN.png'],
  },
};

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  keywords: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'direct-primary-care-dpc-knoxville-tn',
    title: 'Direct Primary Care (DPC) Knoxville, TN: Your Complete Guide 2026',
    description: 'Discover how Direct Primary Care (DPC) in Knoxville, TN is revolutionizing healthcare. Learn about affordable, personalized medical care without insurance hassles, same-day appointments, and 24/7 access to your doctor.',
    date: '2025-01-15',
    readTime: '8 min read',
    image: '/Dr_Valji_Vitality_Concierge_Medicine_Knoxville_TN.png',
    keywords: 'Direct Primary Care DPC Knoxville TN',
  },
  {
    slug: 'knoxville-residents-benefit-from-concierge-medicine',
    title: 'How Knoxville Residents Benefit from Concierge Medicine in 2026',
    description: 'Explore the numerous benefits Knoxville residents enjoy with concierge medicine. From same-day appointments to personalized care plans, discover why more people are choosing this healthcare model.',
    date: '2025-01-10',
    readTime: '7 min read',
    image: '/Dr_Valji_Vitality_Concierge_Medicine_Knoxville_TN.png',
    keywords: 'Knoxville Residents Benefit from Concierge Medicine',
  },
  {
    slug: 'concierge-doctors-in-knoxville-tn',
    title: 'Finding the Best Concierge Doctors in Knoxville, TN: 2026 Guide',
    description: 'Your comprehensive guide to finding the best concierge doctors in Knoxville, TN. Learn what to look for, questions to ask, and how to choose the right concierge physician for your healthcare needs.',
    date: '2025-01-05',
    readTime: '9 min read',
    image: '/Dr_Valji_Vitality_Concierge_Medicine_Knoxville_TN.png',
    keywords: 'Concierge Doctors in Knoxville TN',
  },
];

export default function BlogPage() {
  return (
    <>
      <Section 
        background="gradient" 
        spacing="lg"
        className="text-white"
        hero
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Healthcare <span className="text-gold-primary">Insights</span>
          </h1>
          <p className="text-xl text-gray-200">
            Expert articles about concierge medicine, direct primary care, and personalized healthcare in Knoxville, TN.
          </p>
        </div>
      </Section>
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
      
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-semibold text-teal-primary mb-3 group-hover:text-teal-dark transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center text-gold-primary font-medium group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Section>
      
      <CTA />
    </>
  );
}

