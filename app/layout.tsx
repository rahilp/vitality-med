import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vitalityconcierge.com'), // Update with your actual domain
  title: {
    default: 'Vitality Concierge Medicine',
    template: '%s | Vitality Concierge Medicine',
  },
  description: 'Healthcare Without The Insurance Hassle - Direct primary care with personalized, accessible, and affordable concierge medicine.',
  keywords: ['concierge medicine', 'direct primary care', 'healthcare without insurance', 'affordable healthcare', 'personalized medicine'],
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Vitality',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Vitality Concierge Medicine',
    title: 'Vitality Concierge Medicine',
    description: 'Healthcare Without The Insurance Hassle - Direct primary care with personalized, accessible, and affordable concierge medicine.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitality Concierge Medicine',
    description: 'Healthcare Without The Insurance Hassle - Direct primary care with personalized, accessible, and affordable concierge medicine.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white">
        <StructuredData />
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

