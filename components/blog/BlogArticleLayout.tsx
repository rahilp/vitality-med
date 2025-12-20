import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTA } from '@/components/sections/CTA';
import { BlogArticleHeader } from './BlogArticleHeader';
import { BlogArticleSchema } from './BlogArticleSchema';
import { BlogArticleImage } from './BlogArticleImage';
import { RelatedArticles } from './RelatedArticles';
import type { BreadcrumbItem } from '@/components/Breadcrumbs';

interface RelatedArticle {
  title: string;
  href: string;
}

interface BlogArticleLayoutProps {
  // Header props
  title: string;
  date: string;
  readTime: string;
  
  // Schema props
  description: string;
  image: string;
  url: string;
  
  // Breadcrumbs
  breadcrumbs: BreadcrumbItem[];
  
  // Content
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
  
  // Related articles
  relatedArticles?: RelatedArticle[];
}

export function BlogArticleLayout({
  title,
  date,
  readTime,
  description,
  image,
  url,
  breadcrumbs,
  imageSrc,
  imageAlt,
  children,
  relatedArticles = [],
}: BlogArticleLayoutProps) {
  return (
    <>
      <BlogArticleSchema
        headline={title}
        description={description}
        image={image}
        datePublished={date.includes('T') ? date : `${date}T00:00:00.000Z`}
        dateModified={date.includes('T') ? date : `${date}T00:00:00.000Z`}
        url={url}
      />
      <BlogArticleHeader title={title} date={date} readTime={readTime} />
      <Breadcrumbs items={breadcrumbs} />
      
      <Section background="white" spacing="lg">
        <article className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <BlogArticleImage src={imageSrc} alt={imageAlt} />
          {children}
          {relatedArticles.length > 0 && (
            <RelatedArticles articles={relatedArticles} />
          )}
        </article>
      </Section>
      
      <CTA />
    </>
  );
}

