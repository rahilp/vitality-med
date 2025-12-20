import Link from 'next/link';

interface RelatedArticle {
  title: string;
  href: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <div className="border-t border-gray-200 pt-8 mt-12">
      <p className="text-gray-600 text-sm mb-4">
        <strong>Related Articles:</strong>
      </p>
      <ul className="space-y-2">
        {articles.map((article) => (
          <li key={article.href}>
            <Link 
              href={article.href} 
              className="text-teal-primary hover:text-teal-dark underline"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

