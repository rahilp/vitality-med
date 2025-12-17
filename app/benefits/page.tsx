import { Benefits } from '@/components/sections/Benefits';
import { CTA } from '@/components/sections/CTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Clock, Heart, Shield } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import type { Metadata } from 'next';

// Force static generation for this page
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Benefits of Concierge Medicine in Knoxville TN | Direct Primary Care Advantages',
  description: 'Discover the benefits of concierge medicine in Knoxville, TN. Learn why direct primary care offers better access, longer appointments, and personalized care compared to traditional insurance-based healthcare.',
  keywords: 'benefits of concierge medicine Knoxville, concierge medicine advantages Knoxville TN, direct primary care benefits Knoxville, concierge doctor benefits Knoxville Tennessee, why concierge medicine Knoxville, advantages of direct primary care Knoxville',
  openGraph: {
    title: 'Benefits of Concierge Medicine in Knoxville TN | Direct Primary Care Advantages',
    description: 'Discover the benefits of concierge medicine in Knoxville, TN. Learn why direct primary care offers better access, longer appointments, and personalized care.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benefits of Concierge Medicine in Knoxville TN',
    description: 'Discover the benefits of concierge medicine in Knoxville, TN. Learn why direct primary care offers better access and personalized care.',
  },
};

export default function BenefitsPage() {
  return (
    <>
      <Section 
        background="gradient" 
        spacing="lg"
        className="text-white"
        hero
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Healthcare That <span className="text-gold-primary">Works For You</span>
          </h1>
          <p className="text-xl text-gray-200">
            Experience the freedom of direct primary care—where you come first, 
            not insurance companies.
          </p>
        </div>
      </Section>
      <Breadcrumbs items={[{ label: 'Benefits', href: '/benefits' }]} />
      
      <Benefits />
      
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-12 text-teal-primary text-center">
            The Vitality Difference
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-primary to-teal-dark flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-gold-primary" />
              </div>
              <h3 className="text-xl mb-4 text-teal-primary">More Time With Your Doctor</h3>
              <div className="space-y-4 text-left bg-gray-50 p-6 rounded-lg">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Traditional Practice</div>
                  <div className="text-2xl text-teal-primary">15 minutes</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Vitality Concierge</div>
                  <div className="text-2xl text-gold-primary">30-60 minutes</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-primary to-teal-dark flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-gold-primary" />
              </div>
              <h3 className="text-xl mb-4 text-teal-primary">Smaller Patient Panels</h3>
              <div className="space-y-4 text-left bg-gray-50 p-6 rounded-lg">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Traditional Practice</div>
                  <div className="text-2xl text-teal-primary">2,500+ patients</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Vitality Concierge</div>
                  <div className="text-2xl text-gold-primary">~600 patients</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-primary to-teal-dark flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-gold-primary" />
              </div>
              <h3 className="text-xl mb-4 text-teal-primary">Appointment Wait Time</h3>
              <div className="space-y-4 text-left bg-gray-50 p-6 rounded-lg">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Traditional Practice</div>
                  <div className="text-2xl text-teal-primary">3+ weeks</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Vitality Concierge</div>
                  <div className="text-2xl text-gold-primary">Same day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <CTA />
    </>
  );
}

