import React from 'react';
import { Award, Clock, Heart, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';
import heroBgImg from '../assets/images/hero_wedding_decor_1790613261550.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-xl">
              <img
                src={heroBgImg}
                alt="RSR Events Decorators At Work"
                className="w-full h-[420px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1">
                  Crafting Celebrations
                </p>
                <p className="font-cinzel text-xl font-bold">
                  {BUSINESS_CONFIG.name}
                </p>
                <p className="text-xs text-stone-300 mt-1">
                  Dedicated decor crew with complete in-house inventory
                </p>
              </div>
            </div>

            {/* Corner Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-amber-900 text-white p-5 rounded-2xl shadow-xl border border-amber-800 flex-col items-center justify-center text-center">
              <span className="font-cinzel text-2xl font-bold text-amber-300">100%</span>
              <span className="text-[11px] uppercase tracking-wider text-amber-100 font-medium">Doorstep Service</span>
            </div>
          </div>

          {/* Right Column: Story & Principles */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-800 mb-2">
              Our Story & Commitment
            </p>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">
              About RSR Events
            </h2>
            <div className="w-16 h-1 bg-amber-600 mb-6 rounded-full" />

            <div className="space-y-4 text-base text-stone-600 leading-relaxed">
              <p>
                At <strong className="text-stone-900 font-semibold">RSR Events</strong>, we believe that every celebration marks an irreplaceable chapter in a family's life. We specialize in providing end-to-end decoration and event setup services for <span className="text-stone-900 font-medium">marriages, weddings, receptions, birthdays, engagements, baby showers, and family functions</span>.
              </p>
              
              <p>
                Our philosophy is simple: we remove the stress of organizing by managing every aesthetic and logistical aspect of your event. From authentic fresh flower mandaps and royal couple stage backdrops to luxury shamiana tents, comfortable chairs, plush walkway carpets, sparkling ambient fairy lighting, and high-clarity sound systems — everything is handled under one trusted roof.
              </p>

              <p>
                No matter where you choose to host your celebration — at an upscale banquet hall, your family home, an open outdoor lawn, or a village ground — our dedicated team packs all necessary equipment, travels directly to your venue, and sets up every detail on time with utmost care.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-stone-900">Direct Vendor Pricing</h4>
                  <p className="text-xs text-stone-500 mt-0.5">We own our tents, chairs, lighting, and sound gear, avoiding middleman markups.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-stone-900">Personalized Themes</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Every setup is planned to honor your family traditions and individual taste.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-stone-900">Punctual Setup Team</h4>
                  <p className="text-xs text-stone-500 mt-0.5">We arrive well ahead of your muhurtham or party time so everything is ready.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-stone-900">Transparent & Honest</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Clear quotations with no hidden surprises on your special day.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
