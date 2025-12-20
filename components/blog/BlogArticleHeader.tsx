import { Calendar, Clock } from 'lucide-react';
import { Section } from '@/components/ui/Section';

interface BlogArticleHeaderProps {
  title: string;
  date: string;
  readTime: string;
}

export function BlogArticleHeader({ title, date, readTime }: BlogArticleHeaderProps) {
  return (
    <Section 
      background="gradient" 
      spacing="lg"
      className="text-white"
      hero
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-6 text-gray-200 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={date}>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

