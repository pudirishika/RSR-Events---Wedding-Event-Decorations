import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

interface NavbarProps {
  onOpenOwnerGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOwnerGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsappDefaultMessage
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-900/10 transition-shadow duration-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single text element wordmark in display face */}
          <a 
            href="#" 
            className="flex items-baseline gap-2 group text-decoration-none"
            aria-label="RSR Events Home"
          >
            <span className="font-cinzel text-2xl sm:text-3xl font-bold tracking-tight text-amber-950 group-hover:text-amber-800 transition-colors">
              RSR Events
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
            <a href="#home" className="hover:text-amber-800 transition-colors py-1">
              Home
            </a>
            <a href="#services" className="hover:text-amber-800 transition-colors py-1">
              Services
            </a>
            <a href="#gallery" className="hover:text-amber-800 transition-colors py-1">
              Gallery
            </a>
            <a href="#videos" className="hover:text-amber-800 transition-colors py-1">
              Videos
            </a>
            <a href="#about" className="hover:text-amber-800 transition-colors py-1">
              About Us
            </a>
            <a href="#contact" className="hover:text-amber-800 transition-colors py-1">
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-amber-950 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors whitespace-nowrap"
              title="Call RSR Events"
            >
              <Phone className="w-3.5 h-3.5 text-amber-800" />
              <span>Call: {BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="p-2 text-amber-950 hover:bg-amber-50 rounded-lg border border-amber-200 sm:hidden"
              aria-label="Call RSR Events"
            >
              <Phone className="w-4 h-4 text-amber-800" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-stone-700 hover:text-amber-950 hover:bg-stone-100 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-800"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-amber-900/10 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-2 text-base font-medium text-stone-800">
            <a 
              href="#home" 
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-amber-50 hover:text-amber-950 transition-colors"
            >
              Home
            </a>
            <a 
              href="#services" 
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-amber-50 hover:text-amber-950 transition-colors"
            >
              Our Services
            </a>
            <a 
              href="#gallery" 
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-amber-50 hover:text-amber-950 transition-colors"
            >
              Decorations Gallery
            </a>
            <a 
              href="#videos" 
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-amber-50 hover:text-amber-950 transition-colors"
            >
              Work in Videos
            </a>
            <a 
              href="#why-choose-us" 
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-amber-50 hover:text-amber-950 transition-colors"
            >
              Why Choose Us
            </a>
            <a 
              href="#about" 
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-amber-50 hover:text-amber-950 transition-colors"
            >
              About RSR Events
            </a>
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-amber-50 hover:text-amber-950 transition-colors"
            >
              Contact Us
            </a>
          </nav>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-amber-950 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-800" />
              <span>Call: {BUSINESS_CONFIG.phoneDisplay}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            {onOpenOwnerGuide && (
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  onOpenOwnerGuide();
                }}
                className="w-full text-center text-xs text-stone-500 hover:text-amber-800 pt-2"
              >
                Owner Guide: How to replace photos & numbers
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
