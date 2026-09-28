import React from 'react';
import { Phone, MessageSquare, Heart, Settings, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG, SERVICES } from '../data/config';

interface FooterProps {
  onOpenOwnerGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOwnerGuide }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsappDefaultMessage
  )}`;

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <span className="font-cinzel text-2xl font-bold text-white tracking-wide block">
              {BUSINESS_CONFIG.name}
            </span>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Professional decoration and event setup services for marriages, wedding stages, lighting, sound systems, tents, and family celebrations.
            </p>
            <p className="text-xs text-amber-300 italic">
              “{BUSINESS_CONFIG.subTagline}”
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#home" className="hover:text-amber-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">Decoration Gallery</a>
              </li>
              <li>
                <a href="#videos" className="hover:text-amber-300 transition-colors">Work in Videos</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-amber-300 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">About RSR Events</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="font-cinzel text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.id} className="flex items-center gap-1.5">
                  <span className="text-amber-400 font-serif">·</span>
                  <span>{s.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Connect With Us
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-stone-300">
              <a 
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="flex items-center gap-3 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Call: {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {BUSINESS_CONFIG.whatsappDisplay}</span>
              </a>

              <div className="flex items-start gap-3 text-stone-400 pt-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  We come to your function anywhere. Travel and logistics managed completely by our crew.
                </span>
              </div>
            </div>

            {onOpenOwnerGuide && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenOwnerGuide}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-400 hover:text-amber-300 border border-stone-800 hover:border-amber-400/50 rounded-md transition-colors"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Owner Media & Phone Guide</span>
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 text-stone-400">
            <span>Specialized Wedding, Stage, Light & Sound Decor Services</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
