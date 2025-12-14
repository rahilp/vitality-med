import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Treatments & Services | Vitality Concierge Medicine',
  description: 'Comprehensive list of medical treatments and services offered at Vitality Concierge Medicine. From preventive care to chronic disease management, find the treatment you need. Same-day appointments available.',
  keywords: [
    'primary care treatments',
    'concierge medicine services',
    'preventive care',
    'chronic disease management',
    'annual wellness exam',
    'diabetes management',
    'hypertension treatment',
    'women\'s health',
    'men\'s health',
    'acute care',
    'virtual visits',
    'telemedicine',
    'same-day appointments',
  ],
  openGraph: {
    title: 'Medical Treatments & Services | Vitality Concierge Medicine',
    description: 'Comprehensive list of medical treatments and services offered at Vitality Concierge Medicine.',
  },
};

export default function TreatmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

