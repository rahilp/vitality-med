import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { MessageCircle } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

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
      
      <FAQ />
      
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <MessageCircle className="w-16 h-16 text-gold-primary mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl mb-4 text-teal-primary">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help you understand if Vitality is right for you. 
            No pressure, just honest answers.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="tel:555-123-4567" className="block">
              <Button variant="primary" size="lg" fullWidth>
                Call Us: (555) 123-4567
              </Button>
            </a>
            <a href="mailto:hello@vitalityconcierge.com" className="block">
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

