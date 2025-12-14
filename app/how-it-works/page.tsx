import { HowItWorks } from '@/components/sections/HowItWorks';
import { CTA } from '@/components/sections/CTA';
import { Section } from '@/components/ui/Section';

export default function HowItWorksPage() {
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
            Simple Steps to <span className="text-gold-primary">Better Healthcare</span>
          </h1>
          <p className="text-xl text-gray-200">
            No complex paperwork, no insurance verification, no long waits. 
            Just straightforward access to quality healthcare.
          </p>
        </div>
      </Section>
      
      <HowItWorks />
      
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-8 text-teal-primary text-center">
            What Happens After You Join?
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl mb-4 text-teal-primary">Welcome Call</h3>
              <p className="text-gray-700">
                Within 24 hours of signing up, our team will reach out to welcome you and schedule your initial comprehensive health assessment. This is your opportunity to meet your doctor and establish your care plan.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl mb-4 text-teal-primary">Comprehensive Health Assessment</h3>
              <p className="text-gray-700">
                Your first visit is dedicated to understanding you—your medical history, current concerns, wellness goals, and lifestyle. Unlike rushed traditional appointments, we take the time to truly know you.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl mb-4 text-teal-primary">Personalized Care Plan</h3>
              <p className="text-gray-700">
                Together, we'll create a healthcare plan tailored to your needs—whether that's managing chronic conditions, preventive care, or simply having peace of mind knowing your doctor is just a call away.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl mb-4 text-teal-primary">Ongoing Support</h3>
              <p className="text-gray-700">
                From that point forward, you have unlimited access to your care team. Need a same-day appointment? No problem. Have a question at 10 PM? We're here. That's the Vitality difference.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      <CTA />
    </>
  );
}

