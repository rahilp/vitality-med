import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Concierge Medicine in Knoxville TN | Sign Up Direct Primary Care',
  description: 'Join our concierge medicine practice in Knoxville, TN today. Sign up for direct primary care membership - fill out the form and we\'ll contact you within 24 hours to start your personalized healthcare journey.',
  keywords: 'join concierge medicine Knoxville, sign up direct primary care Knoxville TN, become member concierge doctor Knoxville, register concierge medicine Knoxville Tennessee, start concierge medicine membership Knoxville, apply direct primary care Knoxville',
  openGraph: {
    title: 'Join Concierge Medicine in Knoxville TN | Sign Up Direct Primary Care',
    description: 'Join our concierge medicine practice in Knoxville, TN today. Sign up for direct primary care membership and start your personalized healthcare journey.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Concierge Medicine in Knoxville TN | Sign Up Direct Primary Care',
    description: 'Join our concierge medicine practice in Knoxville, TN today. Sign up for direct primary care membership.',
    images: ['https://www.vitality-med.com/Dr_Valji_Vitality_Concierge_Medicine_Knoxville_TN.png'],
  },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

