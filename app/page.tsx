import { Hero } from '@/components/sections/Hero';
import { HowItWorksPreview } from '@/components/sections/HowItWorksPreview';
import { BenefitsPreview } from '@/components/sections/BenefitsPreview';
import { TreatmentsPreview } from '@/components/sections/TreatmentsPreview';
import { PricingPreview } from '@/components/sections/PricingPreview';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

// Force static generation for this page
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Concierge Doctor in Knoxville | Concierge Medicine & Direct Primary Care Knoxville TN',
  description: 'Find the best concierge doctor in Knoxville, TN. Experience personalized concierge medicine and direct primary care without insurance hassles. Same-day appointments, 24/7 access, and affordable monthly membership.',
  keywords: 'Concierge Doctor in Knoxville, Concierge Medicine in Knoxville, Direct Primary Care in Knoxville, concierge doctor Knoxville TN, direct primary care Knoxville Tennessee, concierge medicine Knoxville, primary care doctor Knoxville, personal doctor Knoxville',
  openGraph: {
    title: 'Concierge Doctor in Knoxville | Concierge Medicine & Direct Primary Care',
    description: 'Find the best concierge doctor in Knoxville, TN. Experience personalized concierge medicine and direct primary care without insurance hassles.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concierge Doctor in Knoxville | Concierge Medicine & Direct Primary Care',
    description: 'Find the best concierge doctor in Knoxville, TN. Experience personalized concierge medicine and direct primary care without insurance hassles.',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorksPreview />
      <BenefitsPreview />
      <TreatmentsPreview />
      <PricingPreview />
      <FAQ variant="homepage" />
      <CTA />
    </>
  );
}

