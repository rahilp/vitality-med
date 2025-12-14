import { ArrowRight, Phone, Mail } from 'lucide-react';
import { colors } from '../design-tokens';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-teal-primary)] to-[var(--color-teal-dark)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596773544141-798fc586f31e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGhlYWx0aHklMjBsaWZlc3R5bGV8ZW58MXx8fHwxNjM1MzY5NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl mb-6">
          Ready to Take Control of Your Health?
        </h2>
        <p className="text-xl mb-10 text-gray-200">
          Join hundreds of patients who've discovered a better way to access healthcare. 
          No insurance headaches, no long waits—just quality care when you need it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-[var(--color-gold-primary)] text-[var(--color-teal-primary)] px-8 py-4 rounded-lg hover:bg-[var(--color-gold-dark)] transition-colors flex items-center justify-center gap-2 group">
            Join Vitality Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="mb-6 text-gray-300">Have questions? We're here to help.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:555-123-4567" className="flex items-center gap-3 hover:text-[var(--color-gold-primary)] transition-colors">
              <Phone className="w-5 h-5" />
              <span>(555) 123-4567</span>
            </a>
            <a href="mailto:hello@vitalityconcierge.com" className="flex items-center gap-3 hover:text-[var(--color-gold-primary)] transition-colors">
              <Mail className="w-5 h-5" />
              <span>hello@vitalityconcierge.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}