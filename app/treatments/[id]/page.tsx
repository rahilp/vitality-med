import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/sections/CTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Stethoscope, CheckCircle, Clock, Heart } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getTreatmentById, getAllTreatmentIds } from '@/lib/treatments';
import { getTreatmentDetails } from '@/lib/treatments-data';

export async function generateStaticParams() {
  return getAllTreatmentIds().map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const treatment = getTreatmentById(id);
  
  if (!treatment) {
    return {
      title: 'Treatment Not Found',
    };
  }

  return {
    title: `${treatment.name} in Knoxville TN | Concierge Medicine Treatment`,
    description: `${treatment.description} Get personalized ${treatment.name.toLowerCase()} care from your concierge doctor in Knoxville, TN. Same-day appointments, comprehensive treatment, and 24/7 access included in your direct primary care membership.`,
    keywords: [
      `${treatment.name} Knoxville`,
      `${treatment.name} Knoxville TN`,
      `concierge doctor ${treatment.name.toLowerCase()} Knoxville`,
      `direct primary care ${treatment.name.toLowerCase()} Knoxville Tennessee`,
      `${treatment.category} treatment Knoxville`,
      `concierge medicine ${treatment.name.toLowerCase()} Knoxville`,
    ],
    openGraph: {
      url: `https://www.vitality-med.com/treatments/${id}`,
      type: 'website',
      title: `${treatment.name} in Knoxville TN | Concierge Medicine Treatment`,
      description: `Get personalized ${treatment.name.toLowerCase()} care from your concierge doctor in Knoxville, TN. Same-day appointments and comprehensive treatment.`,
      images: [
        {
          url: 'https://www.vitality-med.com/Dr_Valji_Vitality_Concierge_Medicine_Knoxville_TN.png',
          width: 1200,
          height: 630,
          alt: `${treatment.name} in Knoxville, TN`,
        },
      ],
    },
    other: {
      'og:logo': 'https://www.vitality-med.com/logo.svg',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${treatment.name} in Knoxville TN | Concierge Medicine Treatment`,
      description: `Get personalized ${treatment.name.toLowerCase()} care from your concierge doctor in Knoxville, TN.`,
      images: ['https://www.vitality-med.com/Dr_Valji_Vitality_Concierge_Medicine_Knoxville_TN.png'],
    },
  };
}

export default async function TreatmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const treatment = getTreatmentById(id);

  if (!treatment) {
    notFound();
  }

  const treatmentDetails = getTreatmentDetails(
    treatment.id,
    treatment.name,
    treatment.category,
    treatment.description
  );

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
            {treatment.name} in <span className="text-gold-primary">Knoxville, TN</span>
          </h1>
          <p className="text-xl text-gray-200">
            {treatment.description}
          </p>
        </div>
      </Section>
      <Breadcrumbs 
        items={[
          { label: 'Treatments', href: '/treatments' },
          { label: treatment.name, href: `/treatments/${treatment.id}` }
        ]} 
      />

      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl mb-6 text-teal-primary">What is {treatment.name}?</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {treatmentDetails.summary}
            </p>

            <h2 className="text-3xl sm:text-4xl mb-6 text-teal-primary">How Vitality Concierge Medicine Can Help with {treatment.name}</h2>
            <p className="text-gray-700 text-lg mb-6">
              At Vitality Concierge Medicine in Knoxville, TN, we provide personalized, comprehensive care for {treatment.name.toLowerCase()}. Our concierge medicine model ensures you receive the time, attention, and expertise you deserve.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {treatmentDetails.howWeHelp?.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-teal-primary flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-teal-primary to-teal-dark rounded-2xl p-8 text-white mt-12">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Same-Day Appointments</h3>
                  <p className="text-gray-200">Get the care you need when you need it</p>
                </div>
                <div className="text-center">
                  <Heart className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
                  <p className="text-gray-200">Treatment plans tailored to your unique needs</p>
                </div>
                <div className="text-center">
                  <Stethoscope className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">24/7 Access</h3>
                  <p className="text-gray-200">Your doctor is just a call or text away</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl mb-4 text-teal-primary">Ready to Get Started?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join Vitality Concierge Medicine today and experience personalized {treatment.name.toLowerCase()} care in Knoxville, TN. 
            No insurance required—just quality healthcare focused on you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <Button variant="primary" size="lg">
                Join Vitality Today
              </Button>
            </Link>
            <Link href="/treatments">
              <Button variant="outline" size="lg">
                View All Treatments
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
