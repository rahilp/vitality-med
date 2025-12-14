import { Section } from '@/components/ui/Section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vitality Concierge Medicine',
  description: 'Privacy Policy for Vitality Concierge Medicine. Learn how we protect and use your personal health information.',
};

export default function PrivacyPolicyPage() {
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
            Privacy <span className="text-gold-primary">Policy</span>
          </h1>
          <p className="text-xl text-gray-200">
            Last updated: January 2025
          </p>
        </div>
      </Section>

      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Introduction</h2>
              <p>
                Vitality Concierge Medicine (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and personal health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Health Information Privacy (HIPAA)</h2>
              <p>
                As a healthcare provider, we are required by law to maintain the privacy of your protected health information (PHI) under the Health Insurance Portability and Accountability Act (HIPAA). We are committed to maintaining the confidentiality of your health information and will only use and disclose it as permitted by law and as described in our Notice of Privacy Practices, which you will receive when you become a member.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Personal Information</h3>
              <p>We may collect personal information that you provide to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, date of birth, and contact information</li>
                <li>Health insurance information (if applicable)</li>
                <li>Medical history and health information</li>
                <li>Payment and billing information</li>
                <li>Emergency contact information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide medical care and treatment</li>
                <li>Process payments and manage your account</li>
                <li>Communicate with you about appointments and services</li>
                <li>Coordinate care with other healthcare providers</li>
                <li>Comply with legal obligations</li>
                <li>Improve our services and website experience</li>
                <li>Send you important updates and information (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Information Sharing and Disclosure</h2>
              <p>
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your explicit written consent</li>
                <li>For treatment, payment, and healthcare operations</li>
                <li>When required by law or court order</li>
                <li>To prevent serious harm to health or safety</li>
                <li>With business associates who have signed agreements to protect your information</li>
                <li>For public health reporting as required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Your Rights</h2>
              <p>Under HIPAA, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and obtain a copy of your health information</li>
                <li>Request corrections to your health information</li>
                <li>Request restrictions on how we use or disclose your information</li>
                <li>Request confidential communications</li>
                <li>Receive an accounting of disclosures</li>
                <li>File a complaint if you believe your privacy rights have been violated</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, access controls, and regular security assessments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="mb-2"><strong>Vitality Concierge Medicine</strong></p>
                <p className="mb-2">Phone: (555) 123-4567</p>
                <p className="mb-2">Email: privacy@vitalityconcierge.com</p>
                <p>Address: [Your Office Address]</p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}

