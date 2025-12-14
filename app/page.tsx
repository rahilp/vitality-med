import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Benefits } from '@/components/sections/Benefits';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

// Force static generation for this page
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Vitality Concierge Medicine | Healthcare Without The Insurance Hassle',
  description: 'Access to your personal doctor, anytime you need. No insurance required. Just a simple monthly subscription for complete peace of mind. Direct primary care with personalized, accessible, and affordable concierge medicine.',
  keywords: 'concierge medicine, direct primary care, healthcare without insurance, affordable healthcare, personalized medicine, Valencia',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <FAQ variant="homepage" />
      <CTA />
    </>
  );
}

