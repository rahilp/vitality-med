import { Clock, DollarSign, Users, HeartPulse, Phone, CheckCircle } from 'lucide-react';
import { Section } from '../ui/Section';
import Image from 'next/image';

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function Benefits() {
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
      icon: HeartPulse,
      title: 'Holistic Care',
      description: 'We focus on prevention and wellness, not just treating symptoms. Your complete health matters.',
    },
    {
      icon: Phone,
      title: '24/7 Access',
      description: 'Call, text, or video chat with your care team anytime. Health concerns don&apos;t wait for business hours.',
    },
    {
      icon: CheckCircle,
      title: 'Insurance for Labs',
      description: 'We accept insurance for laboratory work and tests, keeping your costs even lower.',
    },
  ];

  return (
    <Section background="gray" spacing="lg">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl mb-4 text-teal-primary">Why Choose Vitality?</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Traditional healthcare is broken. We&apos;re building something better—accessible, affordable, and focused on you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-gold-primary"
            >
              <div className="w-14 h-14 rounded-lg bg-teal-primary flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-gold-primary" />
              </div>
              <h3 className="text-xl mb-3 text-teal-primary">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-16 bg-teal-primary rounded-2xl p-8 sm:p-12 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl mb-4">Perfect for Those Who:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-gold-primary flex-shrink-0 mt-0.5" />
                <span>Can&apos;t afford expensive health insurance premiums</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-gold-primary flex-shrink-0 mt-0.5" />
                <span>Are self-employed or between jobs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-gold-primary flex-shrink-0 mt-0.5" />
                <span>Want direct access without insurance gatekeepers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-gold-primary flex-shrink-0 mt-0.5" />
                <span>Value preventive care and wellness</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-gold-primary flex-shrink-0 mt-0.5" />
                <span>Are tired of the traditional healthcare system</span>
              </li>
            </ul>
          </div>
          <div className="relative h-64 md:h-96">
            <Image 
              src="https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwaGVhbHRoY2FyZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjU2NzM3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Healthcare professional" 
              fill
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

