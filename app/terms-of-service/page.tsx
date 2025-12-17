import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Vitality Concierge Medicine',
  description: 'Terms of Service for Vitality Concierge Medicine. Read our terms and conditions for using our services.',
  openGraph: {
    url: 'https://www.vitality-med.com/terms-of-service',
    type: 'website',
    title: 'Terms of Service | Vitality Concierge Medicine',
    description: 'Terms of Service for Vitality Concierge Medicine. Read our terms and conditions for using our services.',
    images: [
      {
        url: 'https://www.vitality-med.com/Dr_Valji_Vitality_Concierge_Medicine_Knoxville_TN.png',
        width: 1200,
        height: 630,
        alt: 'Terms of Service - Vitality Concierge Medicine',
      },
    ],
  },
  other: {
    'og:logo': 'https://www.vitality-med.com/logo.svg',
  },
};

export default function TermsOfServicePage() {
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
            Terms of <span className="text-gold-primary">Service</span>
          </h1>
          <p className="text-xl text-gray-200">
            Last updated: January 2025
          </p>
        </div>
      </Section>
      <Breadcrumbs items={[{ label: 'Terms of Service', href: '/terms-of-service' }]} />

      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Agreement to Terms</h2>
              <p>
                By accessing or using the services of Vitality Concierge Medicine (&quot;Vitality,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Description of Services</h2>
              <p>
                Vitality Concierge Medicine is a direct primary care practice that provides primary healthcare services through a membership-based model. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Unlimited office visits</li>
                <li>24/7 virtual access to your physician</li>
                <li>Same-day and next-day appointments</li>
                <li>Chronic disease management</li>
                <li>Preventive care and wellness exams</li>
                <li>Care coordination</li>
              </ul>
              <p className="mt-4">
                <strong>Important:</strong> Vitality is not health insurance. We are a direct primary care practice and do not provide health insurance coverage. We recommend maintaining catastrophic or major medical insurance for emergencies, hospitalizations, and specialist care.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Membership</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Eligibility</h3>
              <p>Membership is available to individuals and families who agree to these terms and complete the enrollment process.</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Fees and Payment</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Membership fees are charged monthly in advance</li>
                <li>Fees are non-refundable except as required by law</li>
                <li>We accept payment via credit card, debit card, or ACH</li>
                <li>Fee amounts may be adjusted with 30 days&apos; notice</li>
                <li>Late payments may result in suspension of services</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Cancellation</h3>
              <p>You may cancel your membership at any time with 30 days&apos; written notice. Services will continue until the end of the current billing period.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Medical Services</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Scope of Practice</h3>
              <p>
                Our physicians provide primary care services within their scope of practice and licensure. Services beyond primary care (specialists, hospital care, emergency services, surgeries, advanced imaging) are not included in your membership and will be provided by external providers at separate costs.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Emergency Situations</h3>
              <p>
                For medical emergencies, call 911 or go to the nearest emergency room immediately. Do not rely on our services for emergency care.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Prescriptions and Labs</h3>
              <p>
                Prescription medications and laboratory work are not included in your membership fee. We accept insurance for labs when available. Prescriptions must be filled at pharmacies and paid for separately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Limitations of Liability</h2>
              <p>
                While we strive to provide excellent medical care, we cannot guarantee specific outcomes. You acknowledge that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Medical care involves inherent risks</li>
                <li>We are not liable for outcomes beyond our control</li>
                <li>We are not responsible for services provided by external providers</li>
                <li>Our liability is limited to the amount of fees paid in the 12 months preceding any claim</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Code of Conduct</h2>
              <p>Members and visitors must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Treat staff and providers with respect</li>
                <li>Provide accurate health information</li>
                <li>Follow treatment recommendations</li>
                <li>Notify us of changes in contact information</li>
                <li>Not engage in abusive, threatening, or inappropriate behavior</li>
              </ul>
              <p className="mt-4">
                Violation of this code may result in termination of membership without refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, and software, is the property of Vitality Concierge Medicine and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Modifications to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Material changes will be communicated to members via email or written notice. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of [Your State], without regard to conflict of law principles. Any disputes will be resolved in the courts of [Your County], [Your State].
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Contact Information</h2>
              <p>If you have questions about these Terms of Service, please contact us:</p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="mb-2"><strong>Vitality Concierge Medicine</strong></p>
                <p className="mb-2">Phone: (865) 333-6554</p>
                <p className="mb-2">Email: hello@vitality-med.com</p>
                <p>Address: 10321 Kingston Pike, Knoxville, TN 37922</p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}

