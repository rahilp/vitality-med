import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import Image from 'next/image';

export function CTA() {
  return (
    <Section 
      background="gradient" 
      spacing="lg"
      className="relative text-white overflow-hidden"
      fullWidth
    >
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1596773544141-798fc586f31e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGhlYWx0aHklMjBsaWZlc3R5bGV8ZW58MXx8fHwxNjM1MzY5NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Wellness and healthy lifestyle"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl mb-6">
          Ready to Take Control of Your Health?
        </h2>
        <p className="text-xl mb-10 text-gray-200">
          Join hundreds of patients who've discovered a better way to access healthcare. 
          No insurance headaches, no long waits—just quality care when you need it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/get-started">
            <Button 
              variant="secondary" 
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Join Vitality Today
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Schedule a Tour
          </Button>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="mb-6 text-gray-300">Have questions? We're here to help.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:555-123-4567" className="flex items-center gap-3 hover:text-gold-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span>(555) 123-4567</span>
            </a>
            <a href="mailto:hello@vitalityconcierge.com" className="flex items-center gap-3 hover:text-gold-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span>hello@vitalityconcierge.com</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

