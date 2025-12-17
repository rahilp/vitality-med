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
    url: 'https://www.vitality-med.com/treatments',
    type: 'website',
    title: 'Concierge Doctor Services in Knoxville TN | Primary Care Treatments',
    description: 'Comprehensive concierge medicine services and primary care treatments in Knoxville, TN. Same-day appointments available with your concierge doctor.',
    images: [
      {
        url: 'https://www.vitality-med.com/Dr_Valji_Vitality_Concierge_Medicine_Knoxville_TN.png',
        width: 1200,
        height: 630,
        alt: 'Concierge Doctor Services in Knoxville, TN',
      },
    ],
  },
  other: {
    'og:logo': 'https://www.vitality-med.com/logo.svg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concierge Doctor Services in Knoxville TN | Primary Care Treatments',
    description: 'Comprehensive concierge medicine services and primary care treatments in Knoxville, TN. Same-day appointments available.',
    images: ['https://www.vitality-med.com/Dr_Valji_Vitality_Concierge_Medicine_Knoxville_TN.png'],
  },
};

export default function TreatmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

