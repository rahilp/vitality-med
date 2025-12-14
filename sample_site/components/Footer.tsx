import logo from 'figma:asset/8cfcfb5ab75f1030b64b7768f363665c8a1a6d61.png';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0f3339] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="Vitality Concierge Medicine" className="h-20 w-auto mb-4" />
            <p className="text-gray-400 max-w-md">
              Transforming healthcare through personalized, accessible, and affordable concierge medicine. 
              Your health, our mission.
            </p>
          </div>

          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="hover:text-[#d4af7a] transition-colors">How It Works</Link></li>
              <li><Link to="/benefits" className="hover:text-[#d4af7a] transition-colors">Benefits</Link></li>
              <li><Link to="/pricing" className="hover:text-[#d4af7a] transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="hover:text-[#d4af7a] transition-colors">FAQ</Link></li>
              <li><a href="#" className="hover:text-[#d4af7a] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#d4af7a] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#d4af7a] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#d4af7a] transition-colors">HIPAA Compliance</a></li>
              <li><a href="#" className="hover:text-[#d4af7a] transition-colors">Membership Agreement</a></li>
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