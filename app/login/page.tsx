'use client';

import { Button } from '@/components/ui/Button';
import { Lock, Mail, ArrowRight, Eye, EyeOff, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import type { Metadata } from 'next';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Column - Image with Overlay */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3889806/pexels-photo-3889806.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600&fit=crop"
            alt="Healthcare professional with patient"
            fill
            className="object-cover"
            priority
          />
          {/* Dark green overlay */}
          <div className="absolute inset-0 bg-teal-dark opacity-70"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-end p-12 text-white">
          <div className="max-w-md">
            {/* Logo above text */}
            <div className="mb-6">
              <Image
                src="/logo_mark.svg"
                alt="Vitality Concierge Medicine"
                width={56}
                height={56}
                className="h-14 w-auto"
              />
            </div>
            <h2 className="text-4xl sm:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Experience healthcare that prioritizes you
            </h2>
            <p className="text-lg mb-6 text-gray-100">
              24/7 Access. Zero Wait Times. Comprehensive care designed around your life.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-5 h-5 text-gold-primary" />
              <span>HIPAA Compliant & Secure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-full lg:w-1/2 bg-gray-50 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logo_full_4c.svg"
              alt="Vitality Concierge Medicine"
              width={120}
              height={42}
              className="h-10 w-auto"
            />
          </div>

          {/* Welcome Message */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl mb-3 font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-teal-primary)' }}>
              Welcome back
            </h1>
            <p className="text-gray-600">
              Please access your patient portal below.
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address or Username
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
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors bg-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-teal-primary focus:ring-teal-primary"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <Link 
                href="/forgot-password" 
                className="text-sm text-teal-primary hover:text-teal-dark transition-colors font-medium"
              >
                Forgot password?
              </Link>
            </div>

            <Button 
              variant="primary" 
              size="lg" 
              fullWidth 
              type="submit" 
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Sign In
            </Button>
          </form>

          {/* New to Vitality Section */}
          <div className="mt-8">
            <p className="text-center text-gray-600 mb-4">New to Vitality?</p>
            <Link href="/get-started">
              <Button variant="outline" size="lg" fullWidth className="border-gray-300">
                Apply for Membership
              </Button>
            </Link>
          </div>

          {/* Footer Links */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center gap-6">
            <Link 
              href="/privacy-policy" 
              className="text-xs text-gray-500 hover:text-teal-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-of-service" 
              className="text-xs text-gray-500 hover:text-teal-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

