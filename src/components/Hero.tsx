import React from 'react';
import { ArrowRight, Phone, Sparkles, MapPin, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG, HERO_BG_IMAGE } from '../data/config';

interface HeroProps {
  onExploreGallery?: () => void;
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreGallery, onContactClick }) => {
  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background Image with Fallback and Elegant Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG_IMAGE}
          alt="RSR Events Grand Wedding Decoration Setup"
          className="w-full h-full object-cover object-center filter brightness-95 scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured multi-stop gradient scrim ensuring strict WCAG contrast on text */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/75 to-stone-950/55" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-amber-950/30 to-stone-950/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        
        {/* Unboxed Quiet Metadata / Trust Marker */}
        <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium tracking-widest uppercase text-amber-300 mb-6 px-3 py-1 border-b border-amber-400/40">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Complete Event & Wedding Services</span>
        </div>

        {/* Business Name */}
        <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-md text-balance">
          {BUSINESS_CONFIG.name}
        </h1>

        {/* Main Tagline */}
        <p className="font-cinzel text-xl sm:text-2xl md:text-3xl text-amber-100/95 font-medium max-w-3xl mx-auto mb-6 leading-relaxed tracking-wide text-balance">
          {BUSINESS_CONFIG.tagline}
        </p>

        {/* Short Line from User Request */}
        <p className="font-sans-clean text-base sm:text-lg text-stone-200/90 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          “{BUSINESS_CONFIG.subTagline}”
        </p>

        {/* Two Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-md mx-auto">
          <a
            href="#gallery"
            onClick={(e) => {
              if (onExploreGallery) {
                e.preventDefault();
                onExploreGallery();
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 hover:from-amber-200 hover:to-amber-400 rounded-lg shadow-lg hover:shadow-amber-500/20 transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            <span>View Our Decorations</span>
            <ArrowRight className="w-4 h-4 text-stone-900" />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              if (onContactClick) {
                e.preventDefault();
                onContactClick();
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 backdrop-blur-xs rounded-lg transition-all duration-150 whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-amber-300" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Feature Highlights Grid Strip */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
          <div className="flex items-start gap-3 text-stone-300">
            <span className="text-xl">🌸</span>
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-300/90 font-medium">Weddings & Stages</p>
              <p className="text-xs text-stone-300">Custom Floral Mandaps</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-stone-300">
            <span className="text-xl">⛺</span>
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-300/90 font-medium">Tents & Seating</p>
              <p className="text-xs text-stone-300">Shamiana & Banquet Chairs</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-stone-300">
            <span className="text-xl">💡</span>
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-300/90 font-medium">Lighting & Sound</p>
              <p className="text-xs text-stone-300">Fairy Lights & Clear Audio</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-stone-300">
            <span className="text-xl">📍</span>
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-300/90 font-medium">Doorstep Service</p>
              <p className="text-xs text-stone-300">We Come To Your Venue</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
