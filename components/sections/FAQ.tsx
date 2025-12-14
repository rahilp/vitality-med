'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section } from '../ui/Section';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How is this different from traditional health insurance?',
      answer: 'Vitality is not insurance—it\'s direct primary care. You pay a simple monthly fee for unlimited access to your doctor without the hassle of insurance claims, deductibles, or copays. We focus on the doctor-patient relationship, not paperwork.',
    },
    {
      question: 'What services are included in my monthly membership?',
      answer: 'Your membership includes unlimited office visits, 24/7 virtual care, same-day appointments, direct communication with your doctor via phone/text, annual wellness exams, chronic disease management, and basic care coordination. We handle all your primary care needs.',
    },
    {
      question: 'Do I still need health insurance?',
      answer: 'Vitality covers your primary care needs, but we recommend having catastrophic or major medical insurance for emergencies, hospitalizations, and specialist care. Many members pair our service with a high-deductible health plan for comprehensive coverage at a lower cost.',
    },
    {
      question: 'What about lab work and diagnostic tests?',
      answer: 'We accept insurance for laboratory work and diagnostic testing. If you don\'t have insurance, we work with labs that offer cash-pay pricing, which is often surprisingly affordable.',
    },
    {
      question: 'Can I see a specialist if needed?',
      answer: 'Absolutely. Your Vitality doctor can refer you to specialists when necessary. While specialist visits aren\'t covered by your membership, we\'ll help coordinate your care and ensure smooth communication between providers.',
    },
    {
      question: 'How quickly can I get an appointment?',
      answer: 'Most patients can get same-day or next-day appointments. Unlike traditional practices that are overbooked, we limit our membership to ensure you get the time and attention you deserve.',
    },
    {
      question: 'What if I need care after hours?',
      answer: 'You have 24/7 access to your care team via phone, text, or video chat. Health concerns don\'t follow a 9-to-5 schedule, and neither do we.',
    },
    {
      question: 'Can I cancel my membership anytime?',
      answer: 'Yes, there are no long-term contracts. You can cancel your membership at any time with 30 days\' notice. We believe in earning your trust every single month.',
    },
  ];

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
          {faqs.map((faq, index) => (
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
      </div>
    </Section>
  );
}

