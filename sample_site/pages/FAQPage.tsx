import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { MessageCircle } from 'lucide-react';
import { colors } from '../design-tokens';

export function FAQPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-teal-primary)] to-[var(--color-teal-dark)] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Questions? <span className="text-[var(--color-gold-primary)]">We Have Answers</span>
          </h1>
          <p className="text-xl text-gray-200">
            Learn everything you need to know about Vitality Concierge Medicine 
            and how direct primary care works.
          </p>
        </div>
      </section>
      
      <FAQ />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-16 h-16 text-[var(--color-gold-primary)] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl mb-4 text-[var(--color-teal-primary)]">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help you understand if Vitality is right for you. 
            No pressure, just honest answers.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a 
              href="tel:555-123-4567"
              className="bg-[var(--color-teal-primary)] text-white px-8 py-4 rounded-lg hover:bg-[var(--color-teal-dark)] transition-colors inline-block"
            >
              Call Us: (555) 123-4567
            </a>
            <a 
              href="mailto:hello@vitalityconcierge.com"
              className="bg-[var(--color-gold-primary)] text-[var(--color-teal-primary)] px-8 py-4 rounded-lg hover:bg-[var(--color-gold-dark)] transition-colors inline-block"
            >
              Email Us
            </a>
          </div>
          
          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl mb-4 text-[var(--color-teal-primary)]">Schedule a Free Consultation</h3>
            <p className="text-gray-700 mb-6">
              Not sure if concierge medicine is right for you? Schedule a free 15-minute 
              consultation with one of our physicians to discuss your healthcare needs and see 
              if Vitality is a good fit.
            </p>
            <button className="bg-[var(--color-teal-primary)] text-white px-8 py-3 rounded-lg hover:bg-[var(--color-teal-dark)] transition-colors">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>
      
      <CTA />
    </>
  );
}