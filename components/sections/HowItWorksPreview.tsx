import { ArrowRight, UserPlus, Calendar, Stethoscope, Heart } from 'lucide-react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

interface Step {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function HowItWorksPreview() {
  const steps: Step[] = [
    {
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Choose your monthly plan and create your account. No complicated forms or insurance verification needed.',
    },
    {
      icon: Calendar,
      title: 'Schedule Your Visit',
      description: 'Book appointments at your convenience. Same-day and virtual visits available.',
    },
    {
      icon: Stethoscope,
      title: 'See Your Doctor',
      description: 'Get personalized care from your dedicated physician. In-person or telehealth options.',
    },
    {
      icon: Heart,
      title: 'Stay Healthy',
      description: 'Ongoing support, preventive care, and wellness guidance. Your health, our priority.',
    },
  ];

  return (
    <Section background="white" spacing="lg">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl mb-4 text-teal-primary">How It Works</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Getting quality healthcare shouldn&apos;t be complicated. Here&apos;s how simple it is to join Vitality.
        </p>
        <Link href="/how-it-works">
          <Button 
            variant="outline" 
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
          >
            Learn More About Our Process
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-primary to-teal-dark flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-gold-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-teal-primary">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

