import type { Metadata } from 'next';
import Script from 'next/script';
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
  metadataBase: new URL('https://www.vitalityconcierge.com'), // Update with your actual domain
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MT56ND84');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-screen bg-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MT56ND84"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <StructuredData />
        <Header />
        <main className="pt-16 sm:pt-24 lg:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

