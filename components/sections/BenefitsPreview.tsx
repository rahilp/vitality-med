import { Clock, DollarSign, Users, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function BenefitsPreview() {
  // Top 4 most important benefits for homepage
  const benefits: Benefit[] = [
    {
      icon: DollarSign,
      title: 'Affordable & Transparent',
      description: 'No hidden fees, no surprise bills. Just one simple monthly payment for unlimited access to your doctor.',
    },
    {
      icon: Clock,
      title: 'Same-Day Appointments',
      description: 'Stop waiting weeks to see a doctor. Get appointments when you need them, often same-day.',
    },
    {
      icon: Users,
      title: 'Personal Relationship',
      description: 'Your doctor actually knows you. Build a lasting relationship with a physician who understands your health history.',
    },
    {
      icon: Phone,
      title: '24/7 Access',
      description: 'Call, text, or video chat with your care team anytime. Health concerns don&apos;t wait for business hours.',
    },
  ];

  return (
    <Section background="gray" spacing="lg">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl mb-4 text-teal-primary">Why Choose Vitality?</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Traditional healthcare is broken. We&apos;re building something better—accessible, affordable, and focused on you.
        </p>
        <Link href="/benefits">
          <Button 
            variant="primary" 
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
          >
            Explore All Benefits
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-gold-primary"
            >
              <div className="w-12 h-12 rounded-lg bg-teal-primary flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-gold-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-teal-primary">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

