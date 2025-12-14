import { Section } from '@/components/ui/Section';
import { Shield, Lock, FileCheck, Eye } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HIPAA Compliance | Vitality Concierge Medicine',
  description: 'Learn about Vitality Concierge Medicine&apos;s commitment to HIPAA compliance and protecting your health information privacy.',
};

export default function HIPAAPage() {
  return (
    <>
      <Section 
        background="gradient" 
        spacing="lg"
        className="text-white"
        hero
      >
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-20 h-20 text-gold-primary mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            HIPAA <span className="text-gold-primary">Compliance</span>
          </h1>
          <p className="text-xl text-gray-200">
            Your privacy and the security of your health information are our top priorities.
          </p>
        </div>
      </Section>

      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-xl text-gray-700">
              Vitality Concierge Medicine is fully committed to compliance with the Health Insurance Portability and Accountability Act (HIPAA) and maintains the highest standards for protecting your protected health information (PHI).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <Lock className="w-12 h-12 text-teal-primary mb-4" />
              <h3 className="text-2xl font-semibold text-teal-primary mb-4">Secure Storage</h3>
              <p className="text-gray-700">
                All electronic health records are stored on encrypted, HIPAA-compliant servers with regular security audits and backups.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Eye className="w-12 h-12 text-teal-primary mb-4" />
              <h3 className="text-2xl font-semibold text-teal-primary mb-4">Access Controls</h3>
              <p className="text-gray-700">
                Only authorized personnel have access to your health information, and all access is logged and monitored.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <FileCheck className="w-12 h-12 text-teal-primary mb-4" />
              <h3 className="text-2xl font-semibold text-teal-primary mb-4">Training & Compliance</h3>
              <p className="text-gray-700">
                All staff members receive regular HIPAA training and certification to ensure ongoing compliance with privacy regulations.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Shield className="w-12 h-12 text-teal-primary mb-4" />
              <h3 className="text-2xl font-semibold text-teal-primary mb-4">Business Associates</h3>
              <p className="text-gray-700">
                All third-party vendors and business associates are required to sign HIPAA-compliant agreements before accessing any PHI.
              </p>
            </div>
          </div>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">What is HIPAA?</h2>
              <p>
                The Health Insurance Portability and Accountability Act (HIPAA) is a federal law that sets standards for protecting sensitive patient health information. HIPAA requires healthcare providers to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Maintain the confidentiality of protected health information (PHI)</li>
                <li>Implement appropriate administrative, physical, and technical safeguards</li>
                <li>Provide patients with rights regarding their health information</li>
                <li>Notify patients of any breaches of unsecured PHI</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Our Commitment</h2>
              <p>
                At Vitality Concierge Medicine, we take HIPAA compliance seriously. Our comprehensive compliance program includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Privacy Officer:</strong> Designated staff member responsible for HIPAA compliance</li>
                <li><strong>Notice of Privacy Practices:</strong> Provided to all patients upon enrollment</li>
                <li><strong>Employee Training:</strong> Regular training on HIPAA requirements and best practices</li>
                <li><strong>Risk Assessments:</strong> Regular evaluations of our security measures</li>
                <li><strong>Incident Response:</strong> Procedures for handling potential breaches</li>
                <li><strong>Patient Rights:</strong> Processes for patients to exercise their HIPAA rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Your Rights Under HIPAA</h2>
              <p>As a patient, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Access:</strong> Request and receive copies of your medical records</li>
                <li><strong>Amendment:</strong> Request corrections to your health information</li>
                <li><strong>Disclosure Accounting:</strong> Receive a list of disclosures of your PHI</li>
                <li><strong>Restrictions:</strong> Request limits on how we use or share your information</li>
                <li><strong>Confidential Communications:</strong> Request alternate methods of communication</li>
                <li><strong>Complaints:</strong> File a complaint if you believe your rights have been violated</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Security Measures</h2>
              <p>We employ multiple layers of security to protect your information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure, password-protected systems with multi-factor authentication</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Secure disposal of physical and electronic records</li>
                <li>Controlled physical access to our facilities</li>
                <li>Regular updates to security software and systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Breach Notification</h2>
              <p>
                In the unlikely event of a breach of unsecured PHI, we will notify affected individuals within 60 days as required by law. We will also notify the Department of Health and Human Services and, if applicable, local media as required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-teal-primary mb-4">Questions or Concerns</h2>
              <p>
                If you have questions about our HIPAA compliance practices or wish to exercise your rights under HIPAA, please contact our Privacy Officer:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="mb-2"><strong>Privacy Officer</strong></p>
                <p className="mb-2">Vitality Concierge Medicine</p>
                <p className="mb-2">Phone: (555) 123-4567</p>
                <p className="mb-2">Email: privacy@vitalityconcierge.com</p>
                <p>Address: [Your Office Address]</p>
              </div>
              <p className="mt-4">
                You also have the right to file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights if you believe your privacy rights have been violated.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}

