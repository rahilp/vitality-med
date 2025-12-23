import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Phone, MapPin, Mail, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import { treatments } from '@/lib/treatments';

export function Footer() {
  return (
    <footer className="bg-teal-dark text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 mb-8">
          {/* Column 1: Logo, Description, Contact */}
          <div>
            <Image
              src="/logo_mark.svg"
              alt="Vitality Concierge Medicine"
              width={104}
              height={47}
              className="h-6 w-auto mb-4"
            />
            <p className="text-gray-400 max-w-md mb-6">
              Transforming healthcare through personalized, accessible, and affordable concierge medicine. 
              Your health, our mission.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <a href="tel:865-333-6554" className="flex items-start gap-3 text-gray-400 hover:text-gold-primary transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>(865) 444-6227</span>
              </a>
              <a href="mailto:hello@vitality-med.com" className="flex items-start gap-3 text-gray-400 hover:text-gold-primary transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>hello@vitality-med.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>10321 Kingston Pike<br />Knoxville, TN 37922</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="hover:text-gold-primary transition-colors">How It Works</Link></li>
              <li><Link href="/benefits" className="hover:text-gold-primary transition-colors">Benefits</Link></li>
              <li><Link href="/pricing" className="hover:text-gold-primary transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-gold-primary transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-gold-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-gold-primary transition-colors">Contact</Link></li>
              <li><Link href="/login" className="hover:text-gold-primary transition-colors">Sign In</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-gold-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-gold-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/hipaa-compliance" className="hover:text-gold-primary transition-colors">HIPAA Compliance</Link></li>
              <li><Link href="/membership-agreement" className="hover:text-gold-primary transition-colors">Membership Agreement</Link></li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-white mb-4">Follow Us</h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-primary transition-colors inline-flex items-center gap-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-primary transition-colors inline-flex items-center gap-2"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-primary transition-colors inline-flex items-center gap-2"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-primary transition-colors inline-flex items-center gap-2"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Treatments Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h3 className="text-white mb-6 text-center">Our Services & Treatments</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-3 sm:gap-y-1 text-xs sm:text-xs">
            {treatments.map((treatment) => (
              <Link
                key={treatment.id}
                href={`/treatments/${treatment.id}`}
                className="text-gray-400 hover:text-gold-primary transition-colors py-2 sm:py-0 block"
              >
                {treatment.name}
              </Link>
            ))}
            <Link
              href="/treatments"
              className="text-gold-primary hover:text-gold-light transition-colors font-semibold py-2 sm:py-0 block"
            >
              View All Treatments →
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mb-8">
          <h3 className="text-white mb-4 text-center">Part of the Valencia Family</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.valenciaweightloss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold-primary transition-colors inline-flex items-center gap-1.5"
            >
              Valencia Weight Loss
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.valencia-med.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold-primary transition-colors inline-flex items-center gap-1.5"
            >
              Valencia Medspa
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Vitality Concierge Medicine by Valencia. All rights reserved.</p>
          <p className="mt-2">
            Vitality is a direct primary care practice and is not health insurance. 
            We are not a substitute for health insurance or major medical coverage.
          </p>
        </div>
      </div>
    </footer>
  );
}

