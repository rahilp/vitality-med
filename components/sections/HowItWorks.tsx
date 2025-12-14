import { UserPlus, Calendar, Stethoscope, Heart } from 'lucide-react';
import { Section } from '../ui/Section';

interface Step {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function HowItWorks() {
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
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl mb-4 text-teal-primary">How It Works</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Getting quality healthcare shouldn't be complicated. Here's how simple it is to join Vitality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-primary to-teal-dark flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-gold-primary" />
                </div>
                <h3 className="text-xl mb-3 text-teal-primary">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

