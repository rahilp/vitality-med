import { Pricing } from '../components/Pricing';
import { CTA } from '../components/CTA';
import { Calculator } from 'lucide-react';
import { colors } from '../design-tokens';

export function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-teal-primary)] to-[var(--color-teal-dark)] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Transparent, <span className="text-[var(--color-gold-primary)]">Affordable Pricing</span>
          </h1>
          <p className="text-xl text-gray-200">
            No hidden fees, no surprise bills, no insurance hassles. 
            Just simple, straightforward healthcare you can afford.
          </p>
        </div>
      </section>
      
      <Pricing />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calculator className="w-16 h-16 text-[var(--color-gold-primary)] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl mb-4 text-[var(--color-teal-primary)]">
              Compare the Real Costs
            </h2>
            <p className="text-xl text-gray-600">
              Let's look at what healthcare actually costs with traditional insurance vs. Vitality
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
            
            <div className="bg-gradient-to-br from-[var(--color-teal-primary)] to-[var(--color-teal-dark)] p-8 rounded-lg shadow-lg text-white">
              <h3 className="text-2xl mb-6 text-center">Vitality Concierge</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Monthly Membership</span>
                  <span>$99</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Annual Deductible</span>
                  <span className="text-[var(--color-gold-primary)]">$0</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Copays</span>
                  <span className="text-[var(--color-gold-primary)]">$0</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Hidden Fees</span>
                  <span className="text-[var(--color-gold-primary)]">$0</span>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-white/30">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Annual Cost</span>
                  <span className="text-3xl text-[var(--color-gold-primary)]">$1,188</span>
                </div>
                <p className="text-sm text-gray-300 mt-2">*All-inclusive for primary care</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl mb-4 text-[var(--color-teal-primary)]">What's Included vs. What's Not</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg mb-3 text-[var(--color-gold-primary)]">✓ Included in Your Membership</h4>
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
      </section>
      
      <CTA />
    </>
  );
}