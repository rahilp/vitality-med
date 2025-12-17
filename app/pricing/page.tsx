import { Pricing } from '@/components/sections/Pricing';
import { CTA } from '@/components/sections/CTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Calculator } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

// Force static generation for this page
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Concierge Medicine Cost in Knoxville TN | Direct Primary Care Pricing',
  description: 'Affordable concierge medicine pricing in Knoxville, TN. Transparent direct primary care costs with individual and family plans available. No deductibles, no copays, no surprise bills.',
  keywords: 'concierge medicine cost Knoxville, direct primary care pricing Knoxville TN, affordable concierge doctor Knoxville, concierge medicine price Knoxville Tennessee, direct primary care cost Knoxville, concierge doctor pricing Knoxville, how much does concierge medicine cost Knoxville',
  openGraph: {
    title: 'Concierge Medicine Cost in Knoxville TN | Direct Primary Care Pricing',
    description: 'Affordable concierge medicine pricing in Knoxville, TN. Transparent direct primary care costs with individual and family plans available.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concierge Medicine Cost in Knoxville TN | Direct Primary Care Pricing',
    description: 'Affordable concierge medicine pricing in Knoxville, TN. Transparent direct primary care costs with flexible plans available.',
  },
};

export default function PricingPage() {
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
            Transparent, <span className="text-gold-primary">Affordable Pricing</span>
          </h1>
          <p className="text-xl text-gray-200">
            No hidden fees, no surprise bills, no insurance hassles. 
            Just simple, straightforward healthcare you can afford.
          </p>
        </div>
      </Section>
      <Breadcrumbs items={[{ label: 'Pricing', href: '/pricing' }]} />
      
      <Pricing />
      
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="w-16 h-16 text-gold-primary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl mb-4 text-teal-primary">
              Compare the Real Costs
            </h2>
            <p className="text-xl text-gray-600">
              Let&apos;s look at what healthcare actually costs with traditional insurance vs. Vitality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl mb-6 text-gray-800 text-center">Traditional Insurance</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Monthly Premium</span>
                  <span className="text-gray-900">$450</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Annual Deductible</span>
                  <span className="text-gray-900">$6,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Copays (avg 4/year)</span>
                  <span className="text-gray-900">$120</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Out-of-pocket max</span>
                  <span className="text-gray-900">$8,000</span>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-gray-300">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Annual Cost</span>
                  <span className="text-3xl text-red-600">$5,400+</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">*Before deductibles and other costs</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-primary to-teal-dark p-8 rounded-lg shadow-lg text-white">
              <h3 className="text-2xl mb-6 text-center">Vitality Concierge</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Monthly Membership</span>
                  <span>$99</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Annual Deductible</span>
                  <span className="text-gold-primary">$0</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Copays</span>
                  <span className="text-gold-primary">$0</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Hidden Fees</span>
                  <span className="text-gold-primary">$0</span>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-white/30">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Annual Cost</span>
                  <span className="text-3xl text-gold-primary">$1,188</span>
                </div>
                <p className="text-sm text-gray-300 mt-2">*All-inclusive for primary care</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl mb-4 text-teal-primary">What&apos;s Included vs. What&apos;s Not</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg mb-3 text-gold-primary">✓ Included in Your Membership</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• All primary care visits</li>
                  <li>• 24/7 doctor access</li>
                  <li>• Virtual consultations</li>
                  <li>• Chronic disease management</li>
                  <li>• Annual wellness exams</li>
                  <li>• Care coordination</li>
                  <li>• Basic procedures</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg mb-3 text-gray-600">○ Not Included (Separate Cost)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Specialist visits</li>
                  <li>• Hospital care</li>
                  <li>• Emergency room visits</li>
                  <li>• Advanced imaging (MRI, CT)</li>
                  <li>• Surgeries</li>
                  <li>• Prescriptions</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  *We accept insurance for labs and can coordinate care for these services
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <CTA />
    </>
  );
}

