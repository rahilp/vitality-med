import { Benefits } from '../components/Benefits';
import { CTA } from '../components/CTA';
import { Clock, Heart, Shield } from 'lucide-react';
import { colors } from '../design-tokens';

export function BenefitsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-teal-primary)] to-[var(--color-teal-dark)] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Healthcare That <span className="text-[var(--color-gold-primary)]">Works For You</span>
          </h1>
          <p className="text-xl text-gray-200">
            Experience the freedom of direct primary care—where you come first, 
            not insurance companies.
          </p>
        </div>
      </section>
      
      <Benefits />
      
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl mb-12 text-[var(--color-teal-primary)] text-center">
            The Vitality Difference
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-teal-primary)] to-[var(--color-teal-dark)] flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-[var(--color-gold-primary)]" />
              </div>
              <h3 className="text-xl mb-4 text-[var(--color-teal-primary)]">More Time With Your Doctor</h3>
              <div className="space-y-4 text-left bg-gray-50 p-6 rounded-lg">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Traditional Practice</div>
                  <div className="text-2xl text-[var(--color-teal-primary)]">15 minutes</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Vitality Concierge</div>
                  <div className="text-2xl text-[var(--color-gold-primary)]">30-60 minutes</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-teal-primary)] to-[var(--color-teal-dark)] flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-[var(--color-gold-primary)]" />
              </div>
              <h3 className="text-xl mb-4 text-[var(--color-teal-primary)]">Smaller Patient Panels</h3>
              <div className="space-y-4 text-left bg-gray-50 p-6 rounded-lg">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Traditional Practice</div>
                  <div className="text-2xl text-[var(--color-teal-primary)]">2,500+ patients</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Vitality Concierge</div>
                  <div className="text-2xl text-[var(--color-gold-primary)]">~600 patients</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-teal-primary)] to-[var(--color-teal-dark)] flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-[var(--color-gold-primary)]" />
              </div>
              <h3 className="text-xl mb-4 text-[var(--color-teal-primary)]">Appointment Wait Time</h3>
              <div className="space-y-4 text-left bg-gray-50 p-6 rounded-lg">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Traditional Practice</div>
                  <div className="text-2xl text-[var(--color-teal-primary)]">3+ weeks</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Vitality Concierge</div>
                  <div className="text-2xl text-[var(--color-gold-primary)]">Same day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
    </>
  );
}