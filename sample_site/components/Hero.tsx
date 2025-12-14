import { ArrowRight } from 'lucide-react';
import { colors } from '../design-tokens';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[var(--color-teal-primary)] to-[var(--color-teal-dark)] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc2NTU2NjAzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Healthcare Without The <span className="text-[var(--color-gold-primary)]">Insurance Hassle</span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-gray-200">
            Access to your personal doctor, anytime you need. No insurance required. 
            Just a simple monthly subscription for complete peace of mind.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[var(--color-gold-primary)] text-[var(--color-teal-primary)] px-8 py-4 rounded-lg hover:bg-[var(--color-gold-dark)] transition-colors flex items-center gap-2 group">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl text-[var(--color-gold-primary)] mb-2">$99</div>
              <div className="text-gray-300">Per Month</div>
            </div>
            <div>
              <div className="text-4xl text-[var(--color-gold-primary)] mb-2">24/7</div>
              <div className="text-gray-300">Doctor Access</div>
            </div>
            <div>
              <div className="text-4xl text-[var(--color-gold-primary)] mb-2">0</div>
              <div className="text-gray-300">Insurance Needed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}