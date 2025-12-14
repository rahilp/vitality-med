import { Check, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export function PricingPreview() {
  return (
    <Section background="white" spacing="lg">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl mb-4 text-teal-primary">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          No deductibles. No copays. No surprise bills. Just quality healthcare at a price you can afford.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
        {/* Individual Plan Preview */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2 text-teal-primary">Individual</h3>
            <div className="mb-2">
              <span className="text-4xl text-teal-primary">$149</span>
              <span className="text-gray-600 ml-2">per month</span>
            </div>
            <p className="text-sm text-gray-600">Perfect for individuals seeking direct access to quality healthcare</p>
          </div>
          <ul className="space-y-2 mb-6">
            {['Unlimited office visits', 'Virtual care 24/7', 'Same-day appointments', 'Direct doctor access'].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-teal-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Family Plan Preview */}
        <div className="bg-gradient-to-br from-teal-primary to-teal-dark rounded-xl p-6 shadow-2xl text-white relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="bg-gold-primary text-teal-primary px-4 py-1 rounded-full flex items-center gap-1 text-sm">
              <Star className="w-3 h-3 fill-current" />
              <span>Most Popular</span>
            </div>
          </div>
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Family</h3>
            <div className="mb-2">
              <span className="text-4xl text-gold-primary">$499</span>
              <span className="text-gray-300 ml-2">per month</span>
            </div>
            <p className="text-sm text-gray-300">Comprehensive care for your entire household</p>
          </div>
          <ul className="space-y-2 mb-6">
            {['Everything in Individual', 'Up to 4 family members', 'Pediatric care included', 'Priority scheduling'].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center">
        <Link href="/pricing">
          <Button 
            variant="primary" 
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
          >
            View Full Pricing Details
          </Button>
        </Link>
        <p className="text-sm text-gray-500 mt-4">
          All plans include acceptance of insurance for laboratory work and diagnostic tests.
        </p>
      </div>
    </Section>
  );
}

