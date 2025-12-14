# Schema.org Structured Data Setup

This site uses Schema.org LocalBusiness structured data to help search engines understand your business information.

## Quick Setup

**All schema information is stored in one place for easy updates:**

📁 **File to Edit:** `/lib/schema.ts`

Simply update the `businessSchema` object with your actual business information:

```typescript
export const businessSchema: BusinessSchema = {
  name: 'Vitality Concierge Medicine by Valencia',
  description: 'Your business description...',
  url: 'https://www.vitalityconcierge.com', // ← Update with your domain
  telephone: '+15551234567', // ← Update with your phone
  email: 'hello@vitalityconcierge.com', // ← Update with your email
  address: {
    streetAddress: '123 Main Street', // ← Update with your address
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: '12345',
    addressCountry: 'US',
  },
  // ... more fields
};
```

## Where Schema is Included

✅ **Root Layout (`app/layout.tsx`)** - Schema is included on ALL pages automatically

This is the recommended approach for LocalBusiness schema because:
- Your business information is the same across all pages
- Search engines prefer one authoritative source
- Easier to maintain (update once, applies everywhere)

## Schema Placement Best Practices

**For LocalBusiness schema:**
- ✅ **One place is best** - Include in root layout (current setup)
- ✅ All pages automatically get the schema
- ✅ Google recommends this approach for organization/business schema

**Alternative (if needed later):**
- Individual pages can override/add additional schema types
- For example, a "Contact" page could add ContactPage schema
- But LocalBusiness should remain in the root layout

## Fields You Should Update

1. **Required Fields:**
   - `name` - Your business name
   - `url` - Your website URL (update after deployment)
   - `address` - Complete address information

2. **Recommended Fields:**
   - `telephone` - Business phone number
   - `email` - Business email
   - `logo` - Logo URL (update after deployment)
   - `openingHours` - Business hours (if applicable)

3. **Optional Fields:**
   - `priceRange` - Price range indicator ($-$$$)
   - `paymentAccepted` - Accepted payment methods
   - `areaServed` - Geographic area you serve

## Validation

After updating your schema information:

1. **Test locally:** Build your site (`npm run build`) and check the HTML source
2. **Validate with Google:** Use [Google's Rich Results Test](https://search.google.com/test/rich-results)
3. **Validate with Schema.org:** Use [Schema.org Validator](https://validator.schema.org/)

## Reference Links

- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- [Google Organization Guidelines](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

