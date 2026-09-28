import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare, MapPin, ZoomIn } from 'lucide-react';
import { GalleryItem, BUSINESS_CONFIG } from '../data/config';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onBookDecor: (title: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
  onBookDecor,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  const whatsappInquiryUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello RSR Events, I am interested in this decoration setup: "${item.title}" (${item.category}). Can you share price & availability?`
  )}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/90 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Background click to dismiss */}
      <div 
        className="absolute inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 transition-colors focus:outline-hidden"
        aria-label="Close photo preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 z-50 p-2.5 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 transition-colors focus:outline-hidden"
        aria-label="Previous decoration image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 z-50 p-2.5 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 transition-colors focus:outline-hidden"
        aria-label="Next decoration image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Card */}
      <div 
        className="relative z-10 max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Photo Frame */}
        <div className="relative bg-stone-950 flex items-center justify-center overflow-hidden min-h-[300px] max-h-[62vh]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full max-h-[62vh] object-contain select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-amber-300 text-xs px-2.5 py-1 rounded-md font-medium border border-stone-700/60">
            {item.category}
          </div>
        </div>

        {/* Caption & Actions Footer */}
        <div className="p-5 sm:p-6 bg-stone-900 text-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl">
              {item.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400/90 pt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Suitable for: {item.locationType}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0 pt-2 sm:pt-0">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                onBookDecor(item.title);
              }}
              className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-amber-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap"
            >
              Book This Setup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
