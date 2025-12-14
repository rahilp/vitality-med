import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Generates BreadcrumbList JSON-LD schema markup
 * Reference: https://schema.org/BreadcrumbList
 * Google Guidelines: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 */
function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  const baseUrl = 'https://www.vitalityconcierge.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${baseUrl}${item.href}`,
    })),
  };
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Always include Home as the first item
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    ...items,
  ];

  const schema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
      />
      <nav aria-label="Breadcrumb" className="bg-teal-dark border-b border-teal-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              
              return (
                <li key={item.href} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="w-4 h-4 text-gray-300 mx-2" aria-hidden="true" />
                  )}
                  {isLast ? (
                    <span className="text-white font-medium" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-gold-primary transition-colors flex items-center gap-1"
                    >
                      {index === 0 && <Home className="w-4 h-4" />}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}

