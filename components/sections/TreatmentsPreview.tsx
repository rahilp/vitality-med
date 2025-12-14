import { Stethoscope, Heart, Shield, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { treatments } from '@/lib/treatments';

export function TreatmentsPreview() {
  // Select 6 key treatments to showcase on homepage
  const featuredTreatmentIds = [
    'annual-wellness-exam',
    'diabetes-management',
    'hypertension-management',
    'weight-management',
    'anxiety-depression',
    'preventive-health-screenings',
  ];

  const featuredTreatments = featuredTreatmentIds
    .map(id => treatments.find(t => t.id === id))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  return (
    <Section background="white" spacing="lg">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl mb-4 text-teal-primary">Our Services & Treatments</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Comprehensive primary care services covering everything from preventive care to chronic disease management. 
          All included in your membership.
        </p>
        <Link href="/treatments">
          <Button 
            variant="primary" 
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
          >
            View All Treatments
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {featuredTreatments.map((treatment) => (
          <Link
            key={treatment.id}
            href={`/treatments/${treatment.id}`}
            className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-teal-primary hover:shadow-lg transition-all duration-300 block"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-teal-primary">
                {treatment.name}
              </h3>
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded whitespace-nowrap ml-2">
                {treatment.category}
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {treatment.description}
            </p>
            <div className="flex items-center text-teal-primary text-sm font-medium">
              Learn more
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </Link>
        ))}
      </div>

      {/* Additional Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
        <div className="bg-gradient-to-br from-teal-primary to-teal-dark rounded-lg p-6 text-white">
          <Calendar className="w-10 h-10 text-gold-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">Same-Day Appointments</h3>
          <p className="text-gray-200 text-sm">
            Get the care you need when you need it, often the same day.
          </p>
        </div>
        <div className="bg-gradient-to-br from-teal-primary to-teal-dark rounded-lg p-6 text-white">
          <Shield className="w-10 h-10 text-gold-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">Insurance for Labs</h3>
          <p className="text-gray-200 text-sm">
            We accept insurance for laboratory work and diagnostic testing.
          </p>
        </div>
        <div className="bg-gradient-to-br from-teal-primary to-teal-dark rounded-lg p-6 text-white">
          <Stethoscope className="w-10 h-10 text-gold-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">Comprehensive Care</h3>
          <p className="text-gray-200 text-sm">
            From preventive care to chronic disease management, we cover it all.
          </p>
        </div>
      </div>
    </Section>
  );
}

