import Image from 'next/image';
import { Section } from '@/components/ui/Section';

export function PhysicianSpotlight() {
  return (
    <Section background="gray" spacing="lg">
      <div className="rounded-3xl bg-white shadow-sm border border-gray-200 overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="relative w-full h-full min-h-[340px] lg:min-h-[520px]">
            <Image
              src="/dr_valji_of_vitality_med.webp"
              alt="Dr. Shaan Valji"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="px-6 sm:px-10 py-8 sm:py-12">
            <span className="inline-flex items-center pr-3 py-1 rounded-full bg-teal-primary/10 text-teal-primary text-xs font-semibold tracking-wide uppercase">
              Medical Director at Vitality Concierge Medicine
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-teal-primary mt-4 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Meet Dr. Shaan Valji
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Dr. Valji brings evidence-based rigor and a safety-first mindset to Vitality Concierge Medicine, overseeing the medical direction of our care model and ensuring every membership plan and clinical protocol meets the highest standards of quality and efficacy. He focuses on whole-person, proactive primary care, working with members to build personalized care plans that support prevention, chronic conditions, and long-term wellness.
            </p>
            
            <blockquote className="border-l-4 border-teal-primary pl-6 py-4 bg-teal-primary/5 rounded-r-lg my-6">
              <p className="text-gray-700 text-base italic leading-relaxed mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                &ldquo;What I love most about medicine is walking alongside patients over time—not just treating an illness, but understanding their story, goals, and daily life. When we care for the whole person, small changes can add up to a healthier, more meaningful life.&rdquo;
              </p>
              <cite className="text-sm text-gray-600 not-italic font-medium" style={{ fontFamily: 'var(--font-heading)' }}>— Dr. Shaan Valji</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </Section>
  );
}

