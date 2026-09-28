import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { VideoItem } from '../data/config';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (video) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      {/* Background click */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 transition-colors focus:outline-hidden"
        aria-label="Close video player"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Modal Dialog Content */}
      <div
        className="relative z-10 max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video Player */}
        <div className="relative aspect-16/9 bg-black flex items-center justify-center">
          {video.embedUrl ? (
            <iframe
              src={video.embedUrl}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={video.videoUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Video Information */}
        <div className="p-5 sm:p-6 bg-stone-900 text-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-medium">
                {video.event}
              </span>
              <span className="text-stone-500">·</span>
              <span className="text-xs text-stone-400">Duration: {video.duration}</span>
            </div>
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
              {video.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl leading-relaxed">
              {video.description}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors whitespace-nowrap shrink-0 self-end sm:self-center"
          >
            Close Video
          </button>
        </div>
      </div>
    </div>
  );
};
