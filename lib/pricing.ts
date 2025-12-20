/**
 * Centralized Pricing Configuration
 * 
 * This file contains all pricing information for Vitality Concierge Medicine.
 * Update prices here to automatically update across the entire site.
 * 
 * All prices are in USD and represent monthly membership fees unless otherwise noted.
 */

export interface PricingConfig {
  individual: {
    monthly: number;
    formatted: string;
    formattedWithPeriod: string;
  };
  family: {
    monthly: number;
    formatted: string;
    formattedWithPeriod: string;
  };
  range: {
    min: number;
    max: number;
    formatted: string;
  };
  annual: {
    individual: number;
    family: number;
    individualFormatted: string;
    familyFormatted: string;
  };
}

/**
 * Main pricing configuration
 * Update these values to change pricing across the entire site
 */
export const pricingConfig: PricingConfig = {
  individual: {
    monthly: 149,
    formatted: '$149',
    formattedWithPeriod: '$149/month',
  },
  family: {
    monthly: 499,
    formatted: '$499',
    formattedWithPeriod: '$499/month',
  },
  range: {
    min: 100,
    max: 300,
    formatted: '$100-$300',
  },
  annual: {
    individual: 149 * 12, // $1,788
    family: 499 * 12, // $5,988
    individualFormatted: '$1,788',
    familyFormatted: '$5,988',
  },
};

/**
 * Helper function to format a price as currency
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Helper function to format price with period (e.g., "$149/month")
 */
export function formatPriceWithPeriod(amount: number, period: string = 'month'): string {
  return `${formatPrice(amount)}/${period}`;
}

/**
 * Helper function to calculate annual cost from monthly
 */
export function calculateAnnual(monthly: number): number {
  return monthly * 12;
}

/**
 * Get individual plan price
 */
export function getIndividualPrice(): typeof pricingConfig.individual {
  return pricingConfig.individual;
}

/**
 * Get family plan price
 */
export function getFamilyPrice(): typeof pricingConfig.family {
  return pricingConfig.family;
}

/**
 * Get price range for blog content
 */
export function getPriceRange(): typeof pricingConfig.range {
  return pricingConfig.range;
}

/**
 * Get annual pricing information
 */
export function getAnnualPricing(): typeof pricingConfig.annual {
  return pricingConfig.annual;
}

