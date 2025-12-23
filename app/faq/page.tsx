import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { MessageCircle } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

// Force static generation for this page
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Concierge Medicine FAQ Knoxville TN | Direct Primary Care Questions',
  description: 'Get answers to common questions about concierge medicine in Knoxville, TN. Learn everything about direct primary care, membership costs, services included, and how it differs from traditional insurance-based healthcare.',
  keywords: 'concierge medicine questions Knoxville, direct primary care FAQ Knoxville TN, concierge doctor answers Knoxville, concierge medicine FAQ Knoxville Tennessee, questions about direct primary care Knoxville, concierge medicine information Knoxville',
  openGraph: {
    url: 'https://www.vitality-med.com/faq',
    type: 'website',
    title: 'Concierge Medicine FAQ Knoxville TN | Direct Primary Care Questions',
    description: 'Get answers to common questions about concierge medicine in Knoxville, TN. Learn everything about direct primary care and membership.',
    images: [
      {
        url: 'https://www.vitality-med.com/Dr_Valji_Vitality_Concierge_Medicine_Knoxville_TN.png',
        width: 1200,
        height: 630,
        alt: 'Concierge Medicine FAQ in Knoxville, TN',
      },
    ],
  },
  other: {
    'og:logo': 'https://www.vitality-med.com/logo.svg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concierge Medicine FAQ Knoxville TN | Direct Primary Care Questions',
    description: 'Get answers to common questions about concierge medicine in Knoxville, TN. Learn everything about direct primary care.',
    images: ['https://www.vitality-med.com/Dr_Valji_Vitality_Concierge_Medicine_Knoxville_TN.png'],
  },
};

export default function FAQPage() {
  return (
    <>
      <Section 
        background="gradient" 
        spacing="lg"
        className="text-white"
        hero
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Questions? <span className="text-gold-primary">We Have Answers</span>
          </h1>
          <p className="text-xl text-gray-200">
            Learn everything you need to know about Vitality Concierge Medicine 
            and how direct primary care works.
          </p>
        </div>
      </Section>
      <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />
      
      <FAQ />
      
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <MessageCircle className="w-16 h-16 text-gold-primary mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl mb-4 text-teal-primary">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We&apos;re here to help you understand if Vitality is right for you. 
            No pressure, just honest answers.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="tel:865-333-6554" className="block">
              <Button variant="primary" size="lg" fullWidth>
                Call Us: (865) 444-6227
              </Button>
            </a>
            <a href="mailto:hello@vitality-med.com" className="block">
              <Button variant="secondary" size="lg" fullWidth>
                Email Us
              </Button>
            </a>
          </div>
          
          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl mb-4 text-teal-primary">Schedule a Free Consultation</h3>
            <p className="text-gray-700 mb-6">
              Not sure if concierge medicine is right for you? Schedule a free 15-minute 
              consultation with one of our physicians to discuss your healthcare needs and see 
              if Vitality is a good fit.
            </p>
            <Button variant="primary" size="lg">Schedule Free Consultation</Button>
          </div>
        </div>
      </Section>
      
      <CTA />
    </>
  );
}

