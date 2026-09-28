import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsappDefaultMessage
  )}`;

  return (
    <>
      {/* Floating Action Cluster - Bottom Right */}
      <aside 
        aria-label="Quick contact actions"
        className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none"
      >
        {/* Scroll To Top button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="pointer-events-auto p-2.5 bg-stone-900/90 text-stone-200 hover:text-white hover:bg-stone-800 rounded-full shadow-lg border border-stone-700/60 backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 focus:outline-hidden"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* WhatsApp Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with RSR Events on WhatsApp"
          className="pointer-events-auto group relative flex items-center justify-center p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-hidden focus:ring-3 focus:ring-emerald-400"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
          
          {/* Subtle Tooltip on Desktop hover */}
          <span className="hidden md:group-hover:block absolute right-14 whitespace-nowrap bg-stone-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-md">
            WhatsApp Us
          </span>
        </a>
      </aside>

      {/* Mobile Bottom Quick Action Bar (Discreet, 48px height, well within 15% mobile viewport cap) */}
      <nav 
        aria-label="Mobile quick contact bar"
        className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2 flex items-center justify-between gap-2 shadow-lg"
      >
        <a
          href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-amber-50 hover:bg-amber-100 text-amber-950 font-semibold text-xs rounded-lg border border-amber-300 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-amber-800" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-lg shadow-xs transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </nav>
    </>
  );
};
