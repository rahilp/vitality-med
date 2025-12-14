'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './ui/Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/benefits', label: 'Benefits' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-teal-dark shadow-lg py-3' 
          : 'bg-teal-dark py-4 lg:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={isScrolled ? "/logo_mark.svg" : "/logo.svg"}
              alt="Vitality Concierge Medicine"
              width={isScrolled ? 48 : 160}
              height={isScrolled ? 48 : 56}
              className={`w-auto transition-all duration-300 ${
                isScrolled ? 'h-10 sm:h-9' : 'h-12 sm:h-14 lg:h-12'
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href
                    ? 'text-gold-primary'
                    : 'text-gray-300 hover:text-gold-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">Sign In</Button>
            </Link>
            <Link href="/get-started">
              <Button variant="secondary">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gold-primary"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    pathname === link.href
                      ? 'bg-gold-primary text-teal-primary'
                      : 'text-gray-300 hover:bg-white/10 hover:text-gold-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-2">
                <Link href="/login" className="block">
                  <Button variant="outline" fullWidth className="border-gray-600 text-gray-300 hover:bg-white/10">Sign In</Button>
                </Link>
                <Link href="/get-started" className="block">
                  <Button variant="secondary" fullWidth>Get Started</Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

