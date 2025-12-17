import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Concierge Doctor Services in Knoxville TN | Primary Care Treatments',
  description: 'Comprehensive concierge medicine services and primary care treatments in Knoxville, TN. From preventive care to chronic disease management, find the treatment you need. Same-day appointments available with your concierge doctor.',
  keywords: [
    'concierge doctor services Knoxville',
    'primary care services Knoxville TN',
    'medical treatments Knoxville',
    'direct primary care services Knoxville',
    'concierge medicine treatments Knoxville Tennessee',
    'preventive care Knoxville',
    'chronic disease management Knoxville',
    'annual wellness exam Knoxville',
    'diabetes management Knoxville',
    'hypertension treatment Knoxville',
    'women\'s health Knoxville',
    'men\'s health Knoxville',
    'acute care Knoxville',
    'virtual visits Knoxville',
    'telemedicine Knoxville',
    'same-day appointments Knoxville',
  ],
  openGraph: {
    title: 'Concierge Doctor Services in Knoxville TN | Primary Care Treatments',
    description: 'Comprehensive concierge medicine services and primary care treatments in Knoxville, TN. Same-day appointments available with your concierge doctor.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concierge Doctor Services in Knoxville TN | Primary Care Treatments',
    description: 'Comprehensive concierge medicine services and primary care treatments in Knoxville, TN. Same-day appointments available.',
  },
};

export default function TreatmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

