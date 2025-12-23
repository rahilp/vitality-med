import { Hero } from '@/components/sections/Hero';
import { HowItWorksPreview } from '@/components/sections/HowItWorksPreview';
import { BenefitsPreview } from '@/components/sections/BenefitsPreview';
import { TreatmentsPreview } from '@/components/sections/TreatmentsPreview';
import { PricingPreview } from '@/components/sections/PricingPreview';
import { PhysicianSpotlight } from '@/components/sections/PhysicianSpotlight';
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
    url: 'https://www.vitality-med.com',
    type: 'website',
    title: 'Concierge Doctor in Knoxville | Concierge Medicine & Direct Primary Care',
    description: 'Find the best concierge doctor in Knoxville, TN. Experience personalized concierge medicine and direct primary care without insurance hassles.',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.vitality-med.com/Dr_Valji_Vitality_Concierge_Medicine_Knoxville_TN.png',
        width: 1200,
        height: 630,
        alt: 'Vitality Concierge Medicine - Concierge Doctor in Knoxville, TN',
      },
    ],
  },
  other: {
    'og:logo': 'https://www.vitality-med.com/logo.svg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concierge Doctor in Knoxville | Concierge Medicine & Direct Primary Care',
    description: 'Find the best concierge doctor in Knoxville, TN. Experience personalized concierge medicine and direct primary care without insurance hassles.',
    images: ['https://www.vitality-med.com/Dr_Valji_Vitality_Concierge_Medicine_Knoxville_TN.png'],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorksPreview />
      <BenefitsPreview />
      <PhysicianSpotlight />
      <TreatmentsPreview />
      <PricingPreview />
      <FAQ variant="homepage" />
      <CTA />
    </>
  );
}

