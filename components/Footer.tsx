import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-teal-dark text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/logo_mark.svg"
              alt="Vitality Concierge Medicine"
              width={104}
              height={47}
              className="h-6 w-auto mb-4"
            />
            <p className="text-gray-400 max-w-md">
              Transforming healthcare through personalized, accessible, and affordable concierge medicine. 
              Your health, our mission.
            </p>
          </div>

          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="hover:text-gold-primary transition-colors">How It Works</Link></li>
              <li><Link href="/benefits" className="hover:text-gold-primary transition-colors">Benefits</Link></li>
              <li><Link href="/pricing" className="hover:text-gold-primary transition-colors">Pricing</Link></li>
              <li><Link href="/faq" className="hover:text-gold-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-gold-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-gold-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-gold-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/hipaa-compliance" className="hover:text-gold-primary transition-colors">HIPAA Compliance</Link></li>
              <li><Link href="/membership-agreement" className="hover:text-gold-primary transition-colors">Membership Agreement</Link></li>
            </ul>
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
          <p>&copy; 2025 Vitality Concierge Medicine by Valencia. All rights reserved.</p>
          <p className="mt-2">
            Vitality is a direct primary care practice and is not health insurance. 
            We are not a substitute for health insurance or major medical coverage.
          </p>
        </div>
      </div>
    </footer>
  );
}

