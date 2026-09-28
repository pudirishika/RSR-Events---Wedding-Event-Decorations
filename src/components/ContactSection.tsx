import React from 'react';
import { Phone, MessageSquare, Clock, MapPin, Mail, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

interface ContactSectionProps {
  onOpenOwnerGuide?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenOwnerGuide }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsappDefaultMessage
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-800 mb-2">
            Get in Touch
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mb-5 rounded-full" />
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-balance">
            Ready to plan your stage, lighting, tent, or full function setup? Call or WhatsApp us directly.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Phone Card */}
          <div className="bg-stone-50 rounded-2xl border border-stone-200 p-8 text-center flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all">
            <div>
              <div className="w-14 h-14 bg-amber-100 text-amber-900 rounded-full flex items-center justify-center mx-auto mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-stone-900 mb-2">
                Phone Call
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                Direct consultation for dates, venue advice, and pricing
              </p>
              <div className="font-mono text-xl font-bold text-amber-950 mb-6 tracking-wide">
                {BUSINESS_CONFIG.phoneDisplay}
              </div>
            </div>

            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-amber-950 bg-amber-200 hover:bg-amber-300 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-emerald-50/50 rounded-2xl border border-emerald-200 p-8 text-center flex flex-col justify-between hover:border-emerald-400 hover:shadow-md transition-all">
            <div>
              <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-5">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-stone-900 mb-2">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                Send your venue photos, stage references, or get instant quotation
              </p>
              <div className="font-mono text-xl font-bold text-emerald-950 mb-6 tracking-wide">
                {BUSINESS_CONFIG.whatsappDisplay}
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Service Area & Timings Card */}
          <div className="bg-stone-50 rounded-2xl border border-stone-200 p-8 text-center flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all md:col-span-2 lg:col-span-1">
            <div>
              <div className="w-14 h-14 bg-amber-100 text-amber-900 rounded-full flex items-center justify-center mx-auto mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-stone-900 mb-2">
                Our Service Area
              </h3>
              <p className="text-xs text-stone-500 mb-3">
                Any Venue · Any Distance
              </p>
              <p className="text-xs text-stone-700 leading-relaxed mb-6 font-medium">
                {BUSINESS_CONFIG.serviceCoverage}
              </p>
            </div>

            <div className="pt-2 border-t border-stone-200 text-xs text-stone-500 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-amber-800" />
              <span>Available 7 Days a Week for Enquiries</span>
            </div>
          </div>

        </div>

        {/* Placeholders note for owner */}
        <div className="mt-12 text-center text-xs text-stone-500 max-w-xl mx-auto">
          <span>Note for Business Owner: Phone and WhatsApp numbers currently use placeholders (<code className="font-mono text-stone-700">+91 XXXXX XXXXX</code>) which you can quickly replace in <code className="font-mono text-amber-800">src/data/config.ts</code>.</span>
          {onOpenOwnerGuide && (
            <button
              onClick={onOpenOwnerGuide}
              className="ml-2 text-amber-800 font-semibold underline hover:text-amber-950 inline-block"
            >
              Learn how to update
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
