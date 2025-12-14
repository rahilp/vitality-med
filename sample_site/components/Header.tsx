import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from 'figma:asset/8cfcfb5ab75f1030b64b7768f363665c8a1a6d61.png';
import { colors } from '../design-tokens';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/benefits', label: 'Benefits' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/faq', label: 'FAQ' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-3' 
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Vitality Concierge Medicine" className="h-12 sm:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors ${
                  location.pathname === link.to
                    ? 'text-[var(--color-teal-primary)]'
                    : 'text-gray-700 hover:text-[var(--color-teal-primary)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-[var(--color-teal-primary)] px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
              Sign In
            </button>
            <button className="bg-[var(--color-teal-primary)] text-white px-6 py-2 rounded-lg hover:bg-[var(--color-teal-dark)] transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--color-teal-primary)]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    location.pathname === link.to
                      ? 'bg-[var(--color-teal-primary)] text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-2">
                <button className="text-[var(--color-teal-primary)] px-4 py-2 border border-[var(--color-teal-primary)] rounded-lg transition-colors">
                  Sign In
                </button>
                <button className="bg-[var(--color-teal-primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-teal-dark)] transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}