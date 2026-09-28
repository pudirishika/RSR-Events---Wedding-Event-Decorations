import React, { useState } from 'react';
import { X, Copy, Check, FileCode, Image, Phone, Video, Info } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

interface OwnerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerGuideModal: React.FC<OwnerGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const samplePhotoCode = `// In src/data/config.ts under GALLERY_ITEMS:
{
  id: "gal-custom-1",
  title: "New Reception Floral Stage",
  category: "Stage Decorations",
  imageUrl: "/my-photos/stage_01.jpg", // Or image URL
  description: "Grand orchid arch with luxury royal couple sofa.",
  locationType: "Grand Banquet Hall"
},`;

  const sampleVideoCode = `// In src/data/config.ts under VIDEO_ITEMS:
{
  id: "vid-custom-1",
  title: "Live Sangeet Stage & Lights",
  event: "Stage & Lighting Setup",
  duration: "0:45",
  thumbnailUrl: "/my-photos/video_thumb.jpg",
  videoUrl: "https://your-domain.com/video.mp4", // or YouTube embed URL
  description: "Walkthrough of our dynamic light and sound setup."
},`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 backdrop-blur-xs p-4 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Owner Setup Guide"
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div
        className="relative z-10 max-w-3xl w-full bg-white rounded-2xl border border-stone-200 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-100 text-amber-900 rounded-lg">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg font-bold text-stone-900">
                RSR Events — Owner Editing Guide
              </h3>
              <p className="text-xs text-stone-500">
                How to update phone numbers, add photos, and link videos
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-stone-700">
          
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200/80 text-xs text-amber-950 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
            <div>
              <strong>Single File Architecture: </strong>
              All business details, phone numbers, services, photo gallery items, and videos are defined in one clean file:
              <br />
              <code className="font-mono bg-white px-2 py-0.5 rounded border border-amber-300 text-amber-900 mt-1 inline-block font-semibold">
                src/data/config.ts
              </code>
            </div>
          </div>

          {/* Step 1: Phone Numbers */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-cinzel font-bold text-base text-stone-900">
              <Phone className="w-4 h-4 text-amber-800" />
              <h4>1. How to Replace Contact & WhatsApp Numbers</h4>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Open <code className="font-mono text-stone-800">src/data/config.ts</code> and update the <code className="font-mono text-stone-800">BUSINESS_CONFIG</code> object:
            </p>
            <div className="relative bg-stone-900 text-stone-100 rounded-lg p-4 font-mono text-xs overflow-x-auto">
              <pre>{`export const BUSINESS_CONFIG = {
  name: "RSR Events",
  // Change placeholder to your actual mobile number:
  phoneDisplay: "+91 98765 43210", 
  phoneRaw: "+919876543210", // Used for the "Call Now" link
  whatsappNumber: "919876543210", // Numbers only with 91 prefix
  whatsappDisplay: "+91 98765 43210",
  ...
};`}</pre>
            </div>
          </div>

          {/* Step 2: Photos */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-cinzel font-bold text-base text-stone-900">
              <Image className="w-4 h-4 text-amber-800" />
              <h4>2. How to Add Many Decoration Photos</h4>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              You can place your photos in the <code className="font-mono text-stone-800">public/</code> or <code className="font-mono text-stone-800">src/assets/images/</code> folder, then add items to the <code className="font-mono text-stone-800">GALLERY_ITEMS</code> array in <code className="font-mono text-stone-800">src/data/config.ts</code>:
            </p>
            <div className="relative bg-stone-900 text-stone-100 rounded-lg p-4 font-mono text-xs overflow-x-auto">
              <pre>{samplePhotoCode}</pre>
              <button
                type="button"
                onClick={() => handleCopy(samplePhotoCode, 'photo')}
                className="absolute top-2.5 right-2.5 px-2 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded text-[11px] flex items-center gap-1"
              >
                {copiedSection === 'photo' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedSection === 'photo' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className="text-[11px] text-stone-500">
              Available categories: <strong>Wedding Decorations, Stage Decorations, Lighting, Flower Decorations, Tents, Other Functions</strong>.
            </p>
          </div>

          {/* Step 3: Videos */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-cinzel font-bold text-base text-stone-900">
              <Video className="w-4 h-4 text-amber-800" />
              <h4>3. How to Add Walkthrough Videos</h4>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Add items to the <code className="font-mono text-stone-800">VIDEO_ITEMS</code> array with either direct video file links or YouTube / Vimeo embeds:
            </p>
            <div className="relative bg-stone-900 text-stone-100 rounded-lg p-4 font-mono text-xs overflow-x-auto">
              <pre>{sampleVideoCode}</pre>
              <button
                type="button"
                onClick={() => handleCopy(sampleVideoCode, 'video')}
                className="absolute top-2.5 right-2.5 px-2 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded text-[11px] flex items-center gap-1"
              >
                {copiedSection === 'video' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedSection === 'video' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-stone-200 bg-stone-50 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-stone-800 bg-stone-200 hover:bg-stone-300 rounded-lg transition-colors"
          >
            Got It, Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
