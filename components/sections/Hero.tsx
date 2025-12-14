import { ArrowRight, DollarSign, Clock, Shield } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { StatCard } from '../ui/StatCard';
import Image from 'next/image';

export function Hero() {
  return (
    <Section 
      background="gradient" 
      spacing="xl"
      className="relative text-white overflow-hidden"
      fullWidth
      hero
    >
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc2NTU2NjAzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Doctor patient consultation"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
        />
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
          Your Personal Concierge Doctor without the <span className="text-gold-primary">Insurance Hassle</span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 text-gray-200">
          Experience personalized concierge medicine and direct primary care without the insurance hassle. 
          Access to your personal concierge doctor, anytime you need. No insurance required—just a simple monthly subscription 
          for complete peace of mind. Affordable, transparent healthcare focused on you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/get-started">
            <Button 
              variant="secondary" 
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
            </Button>
          </Link>
          <Link href="/how-it-works">
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <StatCard
            value="$99"
            label="Per Month"
            icon={<DollarSign className="w-6 h-6 text-gold-primary" />}
          />
          <StatCard
            value="24/7"
            label="Doctor Access"
            icon={<Clock className="w-6 h-6 text-gold-primary" />}
          />
          <StatCard
            value="0"
            label="Insurance Needed"
            icon={<Shield className="w-6 h-6 text-gold-primary" />}
          />
        </div>
      </div>
    </Section>
  );
}

