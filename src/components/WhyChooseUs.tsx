import React from 'react';
import { CheckCircle2, ShieldCheck, HeartHandshake, Sparkles, MapPin, Truck, Sliders } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/config';

export const WhyChooseUs: React.FC = () => {
  // Map icons to the 7 points
  const icons = [
    <Sparkles className="w-5 h-5 text-amber-700" />,
    <ShieldCheck className="w-5 h-5 text-amber-700" />,
    <CheckCircle2 className="w-5 h-5 text-amber-700" />,
    <HeartHandshake className="w-5 h-5 text-amber-700" />,
    <ShieldCheck className="w-5 h-5 text-amber-700" />,
    <Truck className="w-5 h-5 text-amber-700" />,
    <Sliders className="w-5 h-5 text-amber-700" />,
  ];

  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-800 mb-2">
            The RSR Events Difference
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
            Why Choose RSR Events
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mb-5 rounded-full" />
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-balance">
            We understand that your function is a once-in-a-lifetime moment. Here is why families and event organizers rely on us for seamless, breathtaking celebrations.
          </p>
        </div>

        {/* 7 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_POINTS.map((point, index) => (
            <div
              key={point.title}
              className={`bg-white rounded-xl border border-stone-200 p-6 sm:p-7 shadow-xs hover:border-amber-300 transition-colors ${
                index === 6 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-100 shrink-0">
                  {icons[index % icons.length]}
                </div>
                <span className="text-xs font-mono text-stone-400">
                  0{index + 1}
                </span>
              </div>

              <h3 className="font-cinzel text-lg font-bold text-stone-900 mb-2.5">
                {point.title}
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
