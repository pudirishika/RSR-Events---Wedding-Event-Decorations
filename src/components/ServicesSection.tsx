import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/config';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
  onFilterGalleryByCategory?: (category: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEnquiry,
  onFilterGalleryByCategory,
}) => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-800 mb-2">
            What We Provide
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mb-5 rounded-full" />
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-balance">
            From majestic wedding mandaps and sparkling fairy lights to comfortable tents, chairs, sound, and floral art — RSR Events delivers complete event setups right at your doorstep.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service: ServiceItem, index: number) => {
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-xl border border-stone-200/90 p-7 shadow-xs hover:shadow-md hover:border-amber-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon & Category */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span 
                      className="text-3xl p-3 bg-amber-50 rounded-xl border border-amber-100 inline-block select-none"
                      role="img"
                      aria-label={service.title}
                    >
                      {service.icon}
                    </span>
                    <span className="text-xs font-medium text-stone-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-cinzel text-xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-stone-600 leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Suitable For Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-stone-500">
                    {service.suitableFor.map((tag, tagIndex) => (
                      <React.Fragment key={tag}>
                        <span className="text-stone-600 font-medium">{tag}</span>
                        {tagIndex < service.suitableFor.length - 1 && (
                          <span className="text-stone-300 font-bold">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectServiceForEnquiry(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:text-amber-700 tracking-wider uppercase transition-colors"
                  >
                    <span>Book For Your Event</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {service.category !== 'Event Setup' && onFilterGalleryByCategory && (
                    <button
                      type="button"
                      onClick={() => onFilterGalleryByCategory(service.category)}
                      className="text-xs text-stone-400 hover:text-stone-700 transition-colors"
                    >
                      View Photos
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner within Services */}
        <div className="mt-14 p-6 sm:p-8 bg-amber-950 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-amber-900">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-amber-200">
              Need A Customized Package for Your Event?
            </h3>
            <p className="text-sm text-stone-300">
              Combine stage decoration, tents, chairs, lighting, and sound system into one hassle-free package.
            </p>
          </div>
          <a
            href="#enquiry"
            className="px-6 py-3 text-xs uppercase tracking-wider font-semibold bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            Get Custom Estimate
          </a>
        </div>

      </div>
    </section>
  );
};
