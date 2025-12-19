import { generateLocalBusinessSchema, businessSchema } from '@/lib/schema';

interface StructuredDataProps {
  schema?: ReturnType<typeof generateLocalBusinessSchema>;
}

/**
 * Reusable component for adding JSON-LD structured data
 * Follows Google's recommended approach for Schema.org markup
 */
export function StructuredData({ schema }: StructuredDataProps) {
  const schemaData = schema || generateLocalBusinessSchema(businessSchema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2) }}
    />
  );
}




