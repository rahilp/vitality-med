import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FileText, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership Agreement | Vitality Concierge Medicine',
  description: 'Membership Agreement for Vitality Concierge Medicine. Review the terms and conditions of your membership.',
  openGraph: {
    url: 'https://www.vitality-med.com/membership-agreement',
    type: 'website',
    title: 'Membership Agreement | Vitality Concierge Medicine',
    description: 'Membership Agreement for Vitality Concierge Medicine. Review the terms and conditions of your membership.',
    images: [
      {
        url: 'https://www.vitality-med.com/Dr_Valji_Vitality_Concierge_Medicine_Knoxville_TN.png',
        width: 1200,
        height: 630,
        alt: 'Membership Agreement - Vitality Concierge Medicine',
      },
    ],
  },
  other: {
    'og:logo': 'https://www.vitality-med.com/logo.svg',
  },
};

export default function MembershipAgreementPage() {
  return (
    <>
      <Section 
        background="gradient" 
        spacing="lg"
        className="text-white"
        hero
      >
        <div className="max-w-4xl mx-auto text-center">
          <FileText className="w-20 h-20 text-gold-primary mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Membership <span className="text-gold-primary">Agreement</span>
          </h1>
          <p className="text-xl text-gray-200">
            Terms and conditions of your Vitality Concierge Medicine membership.
          </p>
        </div>
      </Section>
      <Breadcrumbs items={[{ label: 'Membership Agreement', href: '/membership-agreement' }]} />

      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Membership Terms</h2>
              <p>
                This Membership Agreement (&quot;Agreement&quot;) governs your membership with Vitality Concierge Medicine (&quot;Vitality,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By enrolling as a member, you agree to be bound by this Agreement, our Terms of Service, and our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">1. Membership Services</h2>
              <p className="mb-4">Your membership includes the following services:</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-primary flex-shrink-0 mt-0.5" />
                    <span>Unlimited office visits with your primary care physician</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-primary flex-shrink-0 mt-0.5" />
                    <span>24/7 access to your physician via phone, text, or video chat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-primary flex-shrink-0 mt-0.5" />
                    <span>Same-day and next-day appointments (when available)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-primary flex-shrink-0 mt-0.5" />
                    <span>Annual wellness exams and preventive care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-primary flex-shrink-0 mt-0.5" />
                    <span>Chronic disease management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-primary flex-shrink-0 mt-0.5" />
                    <span>Basic office procedures (as defined by your physician)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-primary flex-shrink-0 mt-0.5" />
                    <span>Care coordination and referrals to specialists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-primary flex-shrink-0 mt-0.5" />
                    <span>Extended appointment times (30-60 minutes)</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">2. Services Not Included</h2>
              <p className="mb-4">The following services are NOT included in your membership and require separate payment:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Specialist consultations and visits</li>
                <li>Hospital care and emergency room visits</li>
                <li>Surgeries and surgical procedures</li>
                <li>Advanced imaging (MRI, CT scans, ultrasounds beyond basic office use)</li>
                <li>Prescription medications</li>
                <li>Laboratory work (we accept insurance when available)</li>
                <li>Medical equipment and supplies</li>
                <li>Services provided outside our practice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">3. Membership Fees</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Payment:</strong> Monthly fees are charged in advance on your enrollment anniversary date</li>
                <li><strong>Amount:</strong> Fees are as stated at the time of enrollment and are subject to change with 30 days&apos; notice</li>
                <li><strong>Methods:</strong> We accept credit cards, debit cards, and ACH payments</li>
                <li><strong>Non-Refundable:</strong> Membership fees are non-refundable except as required by law</li>
                <li><strong>Late Fees:</strong> Late payments may result in a late fee and suspension of services</li>
                <li><strong>Family Plans:</strong> Family membership includes spouse and dependent children under age 26</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">4. Term and Termination</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Term</h3>
              <p>This Agreement continues on a month-to-month basis until terminated by either party.</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Termination by Member</h3>
              <p>
                You may cancel your membership at any time by providing 30 days&apos; written notice. Services will continue until the end of the current billing period. No refunds will be provided for partial months.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Termination by Vitality</h3>
              <p>
                We may terminate your membership for violation of this Agreement, failure to pay fees, abusive behavior, or other just cause. In such cases, services will end immediately, and no refund will be provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">5. Not Health Insurance</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="font-semibold text-gray-900">Important Notice:</p>
                <p>
                  Vitality Concierge Medicine is NOT health insurance. We are a direct primary care practice. Your membership fee covers primary care services only and does not provide health insurance coverage.
                </p>
              </div>
              <p>
                We strongly recommend maintaining catastrophic or major medical insurance for emergencies, hospitalizations, specialist care, and other services not covered by your membership. We can help coordinate care with your insurance company for services outside our practice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">6. Medical Care</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All medical care is provided by licensed physicians within their scope of practice</li>
                <li>We maintain professional liability insurance</li>
                <li>Medical decisions are made in collaboration between you and your physician</li>
                <li>We cannot guarantee specific outcomes or results</li>
                <li>For medical emergencies, call 911 immediately</li>
                <li>You are responsible for following treatment recommendations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">7. Member Responsibilities</h2>
              <p>As a member, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete health information</li>
                <li>Inform us of changes in contact information</li>
                <li>Notify us of hospitalizations or emergency care</li>
                <li>Follow treatment plans and medication instructions</li>
                <li>Pay membership fees on time</li>
                <li>Treat staff and providers with respect</li>
                <li>Keep scheduled appointments or cancel with appropriate notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">8. Privacy and Confidentiality</h2>
              <p>
                Your health information is protected under HIPAA. Please review our Privacy Policy and Notice of Privacy Practices for details on how we protect and use your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">9. Limitation of Liability</h2>
              <p>
                Our liability for any claims arising from this Agreement is limited to the total fees paid by you in the 12 months preceding the claim. We are not liable for services provided by external providers, including specialists, hospitals, or emergency services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">10. Entire Agreement</h2>
              <p>
                This Agreement, together with our Terms of Service and Privacy Policy, constitutes the entire agreement between you and Vitality Concierge Medicine regarding your membership.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">11. Questions</h2>
              <p>If you have questions about this Membership Agreement, please contact us:</p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="mb-2"><strong>Vitality Concierge Medicine</strong></p>
                <p className="mb-2">Phone: (865) 444-6227</p>
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

