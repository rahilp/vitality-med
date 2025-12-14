import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
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
        />
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
          Healthcare Without The <span className="text-gold-primary">Insurance Hassle</span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 text-gray-200">
          Access to your personal doctor, anytime you need. No insurance required. 
          Just a simple monthly subscription for complete peace of mind.
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
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Learn More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl text-gold-primary mb-2">$99</div>
            <div className="text-gray-300">Per Month</div>
          </div>
          <div>
            <div className="text-4xl text-gold-primary mb-2">24/7</div>
            <div className="text-gray-300">Doctor Access</div>
          </div>
          <div>
            <div className="text-4xl text-gold-primary mb-2">0</div>
            <div className="text-gray-300">Insurance Needed</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

