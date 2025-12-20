import Script from 'next/script';

interface BlogArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  url: string;
}

/**
 * BlogArticleSchema component that implements Google's Article structured data guidelines
 * Reference: https://developers.google.com/search/docs/appearance/structured-data/article
 * 
 * Uses BlogPosting type for blog articles as recommended by Google
 * Follows all required fields and best practices from Google's documentation
 */
export function BlogArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  url,
}: BlogArticleSchemaProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting', // Use BlogPosting for blog articles as recommended by Google
    headline,
    description,
    image: [image], // Image must be an array per Google guidelines
    datePublished,
    dateModified,
    author: [
      {
        '@type': 'Organization',
        name: 'Vitality Concierge Medicine',
        url: 'https://www.vitality-med.com',
      },
    ], // Author must be an array per Google guidelines
    publisher: {
      '@type': 'Organization',
      name: 'Vitality Concierge Medicine',
      url: 'https://www.vitality-med.com', // Publisher URL required per Google guidelines
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.vitality-med.com/logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}

