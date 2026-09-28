import React from 'react';
import { MapPin, Phone, MessageSquare, Compass, CheckCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

interface WeComeToYouProps {
  onDiscussLocation?: () => void;
}

export const WeComeToYou: React.FC<WeComeToYouProps> = ({ onDiscussLocation }) => {
  const whatsappLocationUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hello RSR Events, I would like to discuss my function location and decoration requirements."
  )}`;

  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-br from-amber-950 via-stone-900 to-amber-950 text-white overflow-hidden border-y border-amber-900/60">
      {/* Subtle background decorative shapes */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Floating location icon */}
        <div className="inline-flex items-center justify-center p-3.5 bg-amber-500/20 text-amber-300 rounded-full border border-amber-400/30 mb-6 backdrop-blur-xs">
          <MapPin className="w-6 h-6 animate-pulse" />
        </div>

        {/* Highlight Headline */}
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
          Doorstep Event Service Guarantee
        </p>
        
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
          “{BUSINESS_CONFIG.locationPromise}”
        </h2>

        {/* Mandatory sentence from prompt */}
        <p className="font-sans-clean text-lg sm:text-xl text-stone-200 max-w-3xl mx-auto mb-8 leading-relaxed text-balance">
          “No matter where your function is, RSR Events can come to your location and provide the decoration and event setup.”
        </p>

        {/* Venues & Locations we cater to */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 max-w-3xl mx-auto text-xs sm:text-sm text-stone-300">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            <CheckCircle className="w-4 h-4 text-amber-400" />
            <span>Marriage & Banquet Halls</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            <CheckCircle className="w-4 h-4 text-amber-400" />
            <span>Private Homes & Courtyards</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            <CheckCircle className="w-4 h-4 text-amber-400" />
            <span>Open Grounds & Lawns</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            <CheckCircle className="w-4 h-4 text-amber-400" />
            <span>Temples & Community Centers</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            <CheckCircle className="w-4 h-4 text-amber-400" />
            <span>Resorts & Farmhouses</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappLocationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs uppercase tracking-wider font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuss Your Function Location</span>
          </a>

          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call Us: {BUSINESS_CONFIG.phoneDisplay}</span>
          </a>
        </div>

        <p className="text-xs text-stone-400 mt-6">
          Feel free to call or WhatsApp us with your pin code or venue address to check our setup team schedule.
        </p>

      </div>
    </section>
  );
};
