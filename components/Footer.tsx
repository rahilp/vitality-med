import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-teal-dark text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/logo.svg"
              alt="Vitality Concierge Medicine"
              width={160}
              height={47}
              className="h-8 lg:h-8 w-auto mb-4"
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
              <li><a href="#" className="hover:text-gold-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gold-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold-primary transition-colors">HIPAA Compliance</a></li>
              <li><a href="#" className="hover:text-gold-primary transition-colors">Membership Agreement</a></li>
            </ul>
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

