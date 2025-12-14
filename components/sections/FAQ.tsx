'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  variant?: 'homepage' | 'full';
}

export function FAQ({ variant = 'full' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Homepage FAQs - subset of most important questions
  const faqHomepageItems: FAQItem[] = [
    {
      "question": "What is a concierge doctor?",
      "answer": "A concierge doctor is a primary care physician who provides personalized care through a membership-based model. Concierge medicine allows for longer appointments, easier access to your doctor, and a stronger focus on prevention instead of rushed visits."
    },
    {
      "question": "What is concierge medicine and how does it work?",
      "answer": "Concierge medicine is a form of primary care where patients pay a monthly membership fee for direct access to their doctor. This model reduces patient volume, improves availability, and prioritizes proactive, relationship-based care."
    },
    {
      "question": "Is Vitality Concierge Medicine located in Knoxville, TN?",
      "answer": "Yes. Vitality Concierge Medicine is a concierge primary care practice located in Knoxville, TN, serving local patients who want a more personal and accessible healthcare experience."
    },
    {
      "question": "How much does concierge medicine cost?",
      "answer": "Vitality Concierge Medicine memberships are $199 per month. This transparent pricing covers most primary care needs and helps patients better predict their healthcare costs."
    },
    {
      "question": "Do I still need health insurance with concierge medicine?",
      "answer": "Concierge medicine covers your primary care, but it does not replace health insurance. Most patients keep major medical insurance for emergencies, hospital care, and specialist services."
    },
    {
      "question": "How quickly can I get an appointment?",
      "answer": "Most members can schedule same-day or next-day appointments. By limiting the number of patients, concierge medicine ensures timely access and unrushed care."
    }
  ];

  // Full FAQ page - all questions
  const faqs: FAQItem[] = [
    {
      "question": "What is Vitality Concierge Medicine?",
      "answer": "Vitality Concierge Medicine is a direct primary care practice in Knoxville, TN that provides primary healthcare services through a membership-based model. Our services include but are not limited to: unlimited office visits, 24/7 virtual access to your physician, same-day and next-day appointments, chronic disease management, preventive care and wellness exams, and care coordination."
    },
    {
      "question": "What is a concierge doctor?",
      "answer": "A concierge doctor is a primary care physician who provides personalized, comprehensive care through a membership-based model. Concierge doctors typically limit the number of patients they see, which allows for longer visits, easier scheduling, and more direct communication. Many concierge medicine practices operate outside traditional insurance billing, so the focus stays on patient care rather than paperwork."
    },
    {
      "question": "How do I find a concierge doctor near me?",
      "answer": "You can find a concierge doctor near you by searching for \"concierge doctor\" or \"concierge medicine\" along with your city, or by searching for \"direct primary care (DPC)\" in your area. If you are looking for a concierge doctor in Knoxville, TN, Vitality Concierge Medicine offers membership-based primary care with direct access to your physician."
    },
    {
      "question": "How do I join Vitality Concierge Medicine?",
      "answer": "You can join Vitality Concierge Medicine by calling us at (865) 333-6554 or emailing us at hello@vitality-med.com. We will walk you through the process, confirm availability for new members in Knoxville, and answer any questions you have."
    },
    {
      "question": "What is the cost of a Vitality Concierge Medicine membership?",
      "answer": "The cost of a Vitality Concierge Medicine membership is $199 per month. This fee includes unlimited office visits, 24/7 virtual access to your physician, same-day and next-day appointments, chronic disease management, preventive care and wellness exams, and care coordination. This transparent monthly pricing helps many patients better predict their primary care costs."
    },
    {
      "question": "What is the difference between Vitality Concierge Medicine and traditional health insurance?",
      "answer": "Vitality is not insurance. It is concierge medicine delivered through a direct primary care model. You pay a simple monthly fee for primary care access without the typical insurance hassles like claims, deductibles, or copays for office visits. We focus on the doctor-patient relationship, not paperwork."
    },
    {
      "question": "What services are included in my monthly membership?",
      "answer": "Your membership includes unlimited office visits, 24/7 virtual care, same-day and next-day appointments, direct communication with your doctor via phone/text, annual wellness exams, chronic disease management, and basic care coordination. We handle your primary care needs for members in Knoxville, TN."
    },
    {
      "question": "Do I still need health insurance?",
      "answer": "Your Vitality membership is designed to cover your primary care needs, but we recommend having major medical insurance for emergencies, hospitalizations, imaging, and specialist care. Many Knoxville members pair concierge medicine or direct primary care with a high-deductible health plan for broader coverage."
    },
    {
      "question": "What about lab work and diagnostic tests?",
      "answer": "We can coordinate laboratory work and diagnostic testing. Many labs can bill insurance when applicable, and cash-pay options may be available for those without coverage. We will help you understand your options and coordinate next steps for members in Knoxville, TN."
    },
    {
      "question": "Can I see a specialist if needed?",
      "answer": "Yes. Your Vitality doctor can refer you to specialists when necessary. Specialist visits are typically not included in a concierge medicine membership, but we will help coordinate your care and ensure smooth communication between providers."
    },
    {
      "question": "How quickly can I get an appointment?",
      "answer": "Most patients can get same-day or next-day appointments. Unlike traditional practices that are often overbooked, we limit our membership so Knoxville patients get the time and attention they deserve."
    },
    {
      "question": "What if I need care after hours?",
      "answer": "Members have 24/7 access to the care team via phone, text, or video visits. Health concerns do not follow a 9-to-5 schedule, and concierge medicine is designed to make it easier to reach your doctor when you need help."
    },
    {
      "question": "Can I cancel my membership anytime?",
      "answer": "Yes. There are no long-term contracts. You can cancel your membership at any time with 30 days' notice. We believe in earning your trust every month."
    }
  ];

  // Select which FAQs to display based on variant
  const displayFaqs = variant === 'homepage' ? faqHomepageItems : faqs;

  // Generate FAQ schema markup according to Google's FAQ structured data guidelines
  // https://developers.google.com/search/docs/appearance/structured-data/faqpage
  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: displayFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    // Create and inject the script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = 'faq-structured-data';
    
    // Remove existing script if it exists (for hot reload)
    const existingScript = document.getElementById('faq-structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById('faq-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [displayFaqs]); // Update when FAQs change

  return (
    <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-4 text-teal-primary">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our concierge medicine model.
            </p>
          </div>

          <div className="space-y-4">
            {displayFaqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg text-teal-primary pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-gold-primary flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {variant === 'homepage' && (
            <div className="mt-12 text-center">
              <Link href="/faq">
                <Button 
                  variant="outline" 
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  View All FAQs
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Section>
  );
}

