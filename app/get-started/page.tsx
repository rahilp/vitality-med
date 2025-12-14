import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Check, User, Phone, Mail, Calendar, Heart } from 'lucide-react';
import type { Metadata } from 'next';

// Force static generation for this page
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Get Started | Vitality Concierge Medicine',
  description: 'Join Vitality Concierge Medicine today. Fill out the form and we will get in touch with you within 24 hours to schedule your welcome call and start your journey to better healthcare.',
};

export default function GetStartedPage() {
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
            Start Your Journey to <span className="text-gold-primary">Better Health</span>
          </h1>
          <p className="text-xl text-gray-200">
            Join Vitality Concierge Medicine today and experience healthcare the way it should be.
          </p>
        </div>
      </Section>
      <Breadcrumbs items={[{ label: 'Get Started', href: '/get-started' }]} />

      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Form */}
            <div>
              <h2 className="text-3xl sm:text-4xl mb-6 text-teal-primary">Get Started</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get in touch with you within 24 hours to schedule your welcome call.
              </p>

              <form className="space-y-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-2">
                    Select a Plan *
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                  >
                    <option value="">Choose a plan...</option>
                    <option value="individual">Individual - $99/month</option>
                    <option value="family">Family - $249/month</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors resize-none"
                  />
                </div>

                <Button variant="secondary" size="lg" fullWidth type="submit">
                  Submit Application
                </Button>

                <p className="text-sm text-gray-500">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service. 
                  We&apos;ll never share your information with third parties.
                </p>
              </form>
            </div>

            {/* Right Column - Benefits */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl mb-6 text-teal-primary">What Happens Next?</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-teal-primary flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Welcome Call</h4>
                    <p className="text-gray-600 text-sm">
                      Within 24 hours, our team will reach out to schedule your welcome call and answer any questions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-teal-primary flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Initial Assessment</h4>
                    <p className="text-gray-600 text-sm">
                      Schedule your comprehensive health assessment with your dedicated physician.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-teal-primary flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Personalized Care Plan</h4>
                    <p className="text-gray-600 text-sm">
                      Work with your doctor to create a healthcare plan tailored to your unique needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Questions? We&apos;re Here to Help</h4>
                <div className="space-y-3">
                  <a 
                    href="tel:865-333-6554" 
                    className="flex items-center gap-3 text-gray-700 hover:text-teal-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(865) 333-6554</span>
                  </a>
                  <a 
                    href="mailto:hello@vitality-med.com" 
                    className="flex items-center gap-3 text-gray-700 hover:text-teal-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>hello@vitality-med.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-12 text-center text-teal-primary">
            Why Choose Vitality?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-primary to-teal-dark flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-gold-primary" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">No Insurance Required</h3>
              <p className="text-gray-600">
                Simple monthly membership. No deductibles, no copays, no surprise bills.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-primary to-teal-dark flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-gold-primary" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">Same-Day Appointments</h3>
              <p className="text-gray-600">
                Get the care you need when you need it, not weeks from now.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-primary to-teal-dark flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-gold-primary" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">24/7 Access</h3>
              <p className="text-gray-600">
                Call, text, or video chat with your care team anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

