import { Check, Star } from 'lucide-react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { getIndividualPrice, getFamilyPrice } from '@/lib/pricing';

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

export function Pricing() {
  const individualPrice = getIndividualPrice();
  const familyPrice = getFamilyPrice();

  const plans: Plan[] = [
    {
      name: 'Individual',
      price: individualPrice.formatted,
      period: 'per month',
      description: 'Perfect for individuals seeking direct access to quality healthcare',
      features: [
        'Unlimited office visits',
        'Virtual care 24/7',
        'Same-day appointments',
        'Direct doctor access via phone/text',
        'Annual wellness exam',
        'Chronic disease management',
        'Basic lab work coordination',
        'Health and wellness coaching',
      ],
      popular: false,
    },
    {
      name: 'Family',
      price: familyPrice.formatted,
      period: 'per month',
      description: 'Comprehensive care for your entire household',
      features: [
        'Everything in Individual plan',
        'Coverage for up to 4 family members',
        'Pediatric care included',
        'Family health planning',
        'Priority scheduling',
        'Extended hours access',
        'Specialist referrals',
        'Discounted additional members',
      ],
      popular: true,
    },
  ];

  return (
    <Section background="white" spacing="lg">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl mb-4 text-teal-primary">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          No deductibles. No copays. No surprise bills. Just quality healthcare at a price you can afford.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`relative rounded-2xl p-8 ${
              plan.popular 
                ? 'bg-gradient-to-br from-teal-primary to-teal-dark text-white shadow-2xl transform scale-105' 
                : 'bg-white border-2 border-gray-200 shadow-lg'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gold-primary text-teal-primary px-6 py-2 rounded-full flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Most Popular</span>
                </div>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className={`text-2xl mb-2 ${plan.popular ? 'text-white' : 'text-teal-primary'}`}>
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className={`text-5xl ${plan.popular ? 'text-gold-primary' : 'text-teal-primary'}`}>
                  {plan.price}
                </span>
                <span className={`text-lg ml-2 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={plan.popular ? 'text-gray-300' : 'text-gray-600'}>
                {plan.description}
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className={`w-6 h-6 flex-shrink-0 ${
                    plan.popular ? 'text-gold-primary' : 'text-teal-primary'
                  }`} />
                  <span className={plan.popular ? 'text-white' : 'text-gray-700'}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link href="/get-started" className="block">
              <Button 
                variant={plan.popular ? 'secondary' : 'primary'}
                fullWidth
                size="lg"
              >
                Get Started
              </Button>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          All plans include acceptance of insurance for laboratory work and diagnostic tests.
        </p>
        <p className="text-sm text-gray-500">
          * Office visits are not billed to insurance. Monthly membership covers all consultations.
        </p>
      </div>
    </Section>
  );
}

