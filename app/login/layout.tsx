import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In | Vitality Concierge Medicine',
  description: 'Sign in to your Vitality Concierge Medicine account to access your patient portal, schedule appointments, and manage your healthcare.',
  openGraph: {
    url: 'https://www.vitality-med.com/login',
    type: 'website',
    title: 'Sign In | Vitality Concierge Medicine',
    description: 'Sign in to your Vitality Concierge Medicine account to access your patient portal, schedule appointments, and manage your healthcare.',
    images: [
      {
        url: 'https://www.vitality-med.com/Dr_Valji_Vitality_Concierge_Medicine_Knoxville_TN.png',
        width: 1200,
        height: 630,
        alt: 'Sign In to Vitality Concierge Medicine',
      },
    ],
  },
  other: {
    'og:logo': 'https://www.vitality-med.com/logo.svg',
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}

