import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

// Force static generation for this page
export const dynamic = 'force-static';

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

export default function LoginPage() {
  return (
    <>
      <Section 
        background="gradient" 
        spacing="lg"
        className="text-white"
        hero
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <Lock className="w-8 h-8 text-gold-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Welcome Back
          </h1>
          <p className="text-xl text-gray-200">
            Sign in to access your patient portal and manage your healthcare.
          </p>
        </div>
      </Section>

      <Section background="white" spacing="lg">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 sm:p-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link 
                    href="/forgot-password" 
                    className="text-sm text-teal-primary hover:text-teal-dark transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-teal-primary focus:ring-teal-primary"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me for 30 days
                </label>
              </div>

              <Button variant="secondary" size="lg" fullWidth type="submit" icon={<ArrowRight className="w-5 h-5" />}>
                Sign In
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">New to Vitality?</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link href="/get-started">
                  <Button variant="outline" size="lg" fullWidth>
                    Create an Account
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                By signing in, you agree to our{' '}
                <Link href="/terms" className="text-teal-primary hover:text-teal-dark underline">
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-teal-primary hover:text-teal-dark underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Need help?{' '}
              <Link href="/contact" className="text-teal-primary hover:text-teal-dark font-medium">
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

