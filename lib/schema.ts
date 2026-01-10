/**
 * Schema.org Structured Data Configuration
 * 
 * Update this file to modify your business schema markup.
 * This data will be included on all pages via JSON-LD.
 * 
 * Reference: https://schema.org/LocalBusiness
 * Google Guidelines: https://developers.google.com/search/docs/appearance/structured-data/organization
 */

export interface BusinessSchema {
  name: string;
  description: string;
  url: string;
  logo?: string;
  image?: string;
  telephone?: string;
  email?: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  priceRange?: string;
  openingHours?: string[];
  paymentAccepted?: string;
  currenciesAccepted?: string;
  areaServed?: string | string[];
}

export const businessSchema: BusinessSchema = {
  name: 'Vitality Concierge Medicine by Valencia',
  description: 'Healthcare Without The Insurance Hassle - Direct primary care with personalized, accessible, and affordable concierge medicine.',
  url: 'https://www.vitality-med.com', // Update with your actual domain
  logo: 'https://www.vitality-med.com/logo.svg', // Update with your actual logo URL
  image: 'https://www.vitality-med.com/logo.svg', // Update with your actual image URL
  telephone: '+18653336554', // Update with your actual phone number
  email: 'hello@vitality-med.com', // Update with your actual email
  address: {
    streetAddress: '10321 Kingston Pike', // Update with your actual address
    addressLocality: 'Knoxville',
    addressRegion: 'TN',
    postalCode: '37922',
    addressCountry: 'US',
  },
  priceRange: '$$', // Price range indicator ($-$$$)
  openingHours: [
    'Mo-Fr 08:00-17:00', // Monday-Friday 8am-5pm
    // Add more hours as needed
  ],
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  currenciesAccepted: 'USD',
  areaServed: 'United States', // Or specific area like 'California' or ['California', 'Nevada']
};

/**
 * Generates LocalBusiness JSON-LD schema markup
 * Reference: https://schema.org/LocalBusiness
 */
export function generateLocalBusinessSchema(schema: BusinessSchema = businessSchema) {
  const schemaData: any = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: schema.name,
    description: schema.description,
    url: schema.url,
  };

  if (schema.logo) schemaData.logo = schema.logo;
  if (schema.image) schemaData.image = schema.image;
  if (schema.telephone) schemaData.telephone = schema.telephone;
  if (schema.email) schemaData.email = schema.email;

  schemaData.address = {
    '@type': 'PostalAddress',
    addressLocality: schema.address.addressLocality,
    addressRegion: schema.address.addressRegion,
    postalCode: schema.address.postalCode,
    addressCountry: schema.address.addressCountry,
  };

  if (schema.address.streetAddress) {
    schemaData.address.streetAddress = schema.address.streetAddress;
  }

  if (schema.priceRange) schemaData.priceRange = schema.priceRange;

  if (schema.openingHours && schema.openingHours.length > 0) {
    schemaData.openingHoursSpecification = schema.openingHours.map(hours => {
      const parts = hours.split(' ');
      const dayRange = parts[0]; // e.g., "Mo-Fr"
      const timeRange = parts[1] || ''; // e.g., "08:00-17:00"
      const [opens, closes] = timeRange.split('-');

      // Handle day ranges like "Mo-Fr"
      if (dayRange.includes('-')) {
        const [startDay, endDay] = dayRange.split('-');
        return {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [startDay, endDay],
          opens: opens,
          closes: closes,
        };
      }

      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dayRange,
        opens: opens,
        closes: closes,
      };
    });
  }

  if (schema.paymentAccepted) schemaData.paymentAccepted = schema.paymentAccepted;
  if (schema.currenciesAccepted) schemaData.currenciesAccepted = schema.currenciesAccepted;

  if (schema.areaServed) {
    if (typeof schema.areaServed === 'string') {
      schemaData.areaServed = {
        '@type': 'Country',
        name: schema.areaServed,
      };
    } else {
      schemaData.areaServed = schema.areaServed.map(area => ({
        '@type': 'Country',
        name: area,
      }));
    }
  }

  return schemaData;
}

