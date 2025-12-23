'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Heart, DollarSign, HelpCircle, Stethoscope, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './ui/Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/how-it-works', label: 'How It Works', icon: Info },
    { href: '/benefits', label: 'Benefits', icon: Heart },
    { href: '/treatments', label: 'Treatments', icon: Stethoscope },
    { href: '/pricing', label: 'Pricing', icon: DollarSign },
    { href: '/blog', label: 'Blog', icon: BookOpen },
    { href: '/faq', label: 'FAQ', icon: HelpCircle },
  ];

  return (
    <>
      {/* Valencia Medspa Banner */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-teal-dark transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-2.5 sm:py-3">
            <p className="text-[11px] sm:text-xs text-white text-center">
              Looking for aesthetic services?{' '}
              <a
                href="https://www.valencia-med.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-primary hover:text-gold-light font-semibold transition-colors duration-300 underline decoration-gold-primary hover:decoration-gold-light underline-offset-2"
              >
                Visit Valencia Medspa
              </a>
            </p>
          </div>
        </div>
      </div>

      <header 
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'top-0 bg-teal-dark shadow-lg py-2.5 md:py-3' 
            : 'top-[36px] sm:top-[40px] bg-teal-dark py-4 md:py-5 lg:py-6'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src={isScrolled ? "/logo_mark.svg" : "/logo.svg"}
              alt="Vitality Concierge Medicine"
              width={isScrolled ? 28 : 100}
              height={isScrolled ? 28 : 35}
              className={`w-auto transition-all duration-300 ease-in-out ${
                isScrolled ? 'h-7 md:h-8' : 'h-8 md:h-10 lg:h-9'
              } group-hover:scale-105 ${
                isMounted ? 'animate-logo-entrance' : 'opacity-0 scale-95'
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full px-2 py-1.5 border border-white/10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-base font-medium rounded-full transition-all duration-300 ease-in-out ${
                    isActive
                      ? 'text-gold-primary bg-white/10'
                      : 'text-gray-200 hover:text-gold-primary hover:bg-white/5'
                  }`}
                >
                  <span className="relative">
                    {link.label}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gold-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/login"
              className="text-sm text-gray-200 hover:text-gold-primary transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/5"
            >
              Sign In
            </Link>
            <Link href="/get-started">
              <Button 
                variant="secondary"
                className="transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-gold-primary/30"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gold-primary hover:bg-white/10 rounded-lg transition-all duration-300 ease-in-out hover:scale-110 active:scale-95"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 transition-all duration-300 ease-in-out rotate-0" />
            ) : (
              <Menu className="w-6 h-6 transition-all duration-300 ease-in-out" />
            )}
          </button>
        </div>

        {/* Full Screen Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-0 left-0 right-0 bottom-0 bg-teal-dark z-[60] lg:hidden animate-in fade-in duration-300">
            <div className="h-full flex flex-col pt-0">
              {/* Menu Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-700/50 animate-in slide-in-from-top duration-300">
                <Image
                  src="/logo_mark.svg"
                  alt="Vitality Concierge Medicine"
                  width={32}
                  height={32}
                  className="h-8 w-auto animate-in fade-in zoom-in duration-500 delay-100"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gold-primary hover:bg-white/10 rounded-lg transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 hover:rotate-90"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Content */}
              <nav className="flex-1 overflow-y-auto px-4 sm:px-6 py-8">
                <div className="flex flex-col gap-2 max-w-md mx-auto">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 ease-in-out animate-in slide-in-from-left fade-in ${
                          isActive
                            ? 'bg-gradient-to-r from-gold-primary to-gold-dark text-teal-dark shadow-lg shadow-gold-primary/30 scale-105'
                            : 'text-gray-300 hover:bg-white/10 hover:text-gold-primary hover:scale-105 active:scale-95'
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <Icon 
                          className={`w-6 h-6 transition-all duration-300 ease-in-out ${
                            isActive 
                              ? 'text-teal-dark scale-110' 
                              : 'text-gray-400 group-hover:text-gold-primary group-hover:scale-110 group-hover:rotate-6'
                          }`} 
                        />
                        <span className={`text-lg font-medium transition-all duration-300 ${isActive ? 'text-teal-dark' : 'group-hover:translate-x-1'}`}>
                          {link.label}
                        </span>
                      </Link>
                    );
                  })}
                  
                  <div className="flex flex-col gap-3 mt-8 pt-8 border-t border-gray-700/50 animate-in slide-in-from-bottom fade-in duration-500 delay-300">
                    <Link href="/get-started" className="block" onClick={() => setMobileMenuOpen(false)}>
                      <Button 
                        variant="secondary" 
                        fullWidth
                        size="lg"
                        className="shadow-lg shadow-gold-primary/25 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-gold-primary/50 active:scale-95"
                      >
                        Get Started
                      </Button>
                    </Link>
                    <Link href="/login" className="block" onClick={() => setMobileMenuOpen(false)}>
                      <Button 
                        variant="outline" 
                        fullWidth 
                        size="lg"
                        className="border-gray-600 text-gray-300 hover:bg-white/10 hover:border-gold-primary hover:text-gold-primary transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
                      >
                        Sign In
                      </Button>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}

