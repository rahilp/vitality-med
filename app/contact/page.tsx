import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Vitality Concierge Medicine',
  description: 'Get in touch with Vitality Concierge Medicine. We&apos;re here to answer your questions and help you get started on your journey to better healthcare.',
};

export default function ContactPage() {
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
            Get in <span className="text-gold-primary">Touch</span>
          </h1>
          <p className="text-xl text-gray-200">
            Have questions? We&apos;re here to help you understand if Vitality is right for you.
          </p>
        </div>
      </Section>

      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl sm:text-4xl mb-6 text-teal-primary">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8">
                Reach out to us through any of the following methods. We&apos;re available to answer your questions and schedule a consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-primary flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:555-123-4567" className="text-gray-600 hover:text-teal-primary transition-colors">
                      (555) 123-4567
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 8am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-primary flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:hello@vitalityconcierge.com" className="text-gray-600 hover:text-teal-primary transition-colors">
                      hello@vitalityconcierge.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-primary flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">
                      [Your Office Address]
                      <br />
                      [City, State ZIP]
                    </p>
                    <p className="text-sm text-gray-500 mt-1">By appointment only</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-primary flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">24/7 virtual access available for members</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl sm:text-4xl mb-6 text-teal-primary">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
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
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Information</option>
                    <option value="existing-member">Existing Member Inquiry</option>
                    <option value="appointment">Schedule Appointment</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* Additional CTA Section */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <MessageCircle className="w-16 h-16 text-teal-primary mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl mb-4 text-teal-primary">
            Prefer to Talk?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Schedule a free 15-minute consultation to discuss your healthcare needs and learn if Vitality is right for you.
          </p>
          <Button variant="primary" size="lg" asChild>
            <a href="/get-started">Schedule Free Consultation</a>
          </Button>
        </div>
      </Section>
    </>
  );
}

