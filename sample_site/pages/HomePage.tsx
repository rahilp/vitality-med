import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { Benefits } from '../components/Benefits';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
