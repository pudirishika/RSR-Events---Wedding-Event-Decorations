import React, { useState } from 'react';
import { ZoomIn, Sparkles, Filter, Info, PlusCircle } from 'lucide-react';
import { 
  GALLERY_ITEMS, 
  GALLERY_CATEGORIES, 
  GalleryItem, 
  GalleryCategory 
} from '../data/config';
import { LightboxModal } from './LightboxModal';

interface GallerySectionProps {
  onSelectDecorForEnquiry: (decorTitle: string) => void;
  activeCategoryOverride?: string;
  onOpenOwnerGuide?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onSelectDecorForEnquiry,
  activeCategoryOverride,
  onOpenOwnerGuide,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>(
    (activeCategoryOverride as GalleryCategory) || 'All'
  );
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Filter items according to active category
  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const activeItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => 
        prev !== null ? (prev + 1) % filteredItems.length : 0
      );
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => 
        prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
      );
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-800 mb-2">
            Real Portfolio
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
            Our Decorations Gallery
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mb-5 rounded-full" />
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-balance">
            Explore our real decoration setups crafted for weddings, grand receptions, traditional pujas, and milestone family functions. Click any photo to view in full size.
          </p>
        </div>

        {/* Category Tabs / Filter Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-amber-900 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative bg-stone-100 rounded-xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-4/3 overflow-hidden bg-stone-200">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/50 transition-colors duration-200" />
                
                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="p-3 bg-amber-400 text-amber-950 rounded-full shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>

                {/* Quiet Category Tag */}
                <span className="absolute top-2.5 left-2.5 text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 bg-stone-900/80 text-amber-200 rounded backdrop-blur-xs">
                  {item.category}
                </span>
              </div>

              {/* Title & Location Footer */}
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-base font-bold text-stone-900 group-hover:text-amber-900 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span>{item.locationType}</span>
                  <span className="text-amber-800 font-semibold group-hover:underline">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state safeguard */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-stone-50 rounded-2xl border border-stone-200">
            <p className="text-base text-stone-600 mb-2">No photos found in this category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-xs uppercase font-semibold text-amber-800 underline"
            >
              View All Photos
            </button>
          </div>
        )}

        {/* Clear Notice for Business Owner on Replacing / Adding Photos */}
        <div className="mt-12 p-5 bg-amber-50/80 rounded-xl border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-950">
              <span className="font-semibold block sm:inline">Adding your real photos later: </span>
              All gallery pictures are neatly organized in <code className="bg-amber-100/90 px-1.5 py-0.5 rounded text-amber-900 font-mono text-[11px]">src/data/config.ts</code>. You can paste your own photo URLs or file paths anytime without changing the layout.
            </div>
          </div>
          {onOpenOwnerGuide && (
            <button
              type="button"
              onClick={onOpenOwnerGuide}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-900 bg-white border border-amber-300 hover:bg-amber-100 rounded-md transition-colors shrink-0"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Owner Quick Guide</span>
            </button>
          )}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeItem}
        onClose={() => setActiveLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        onBookDecor={(title) => {
          onSelectDecorForEnquiry(title);
        }}
      />
    </section>
  );
};
