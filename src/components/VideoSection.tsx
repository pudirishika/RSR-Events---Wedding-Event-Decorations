import React, { useState } from 'react';
import { Play, Video, Film, Info } from 'lucide-react';
import { VIDEO_ITEMS, VideoItem } from '../data/config';
import { VideoModal } from './VideoModal';

export const VideoSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section id="videos" className="py-20 sm:py-28 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
            <Film className="w-4 h-4 text-amber-400" />
            <span>Live Experience</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Work in Videos
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-5 rounded-full" />
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed text-balance">
            Watch real video clips of our wedding stages, festive lighting canopies, shamiana tent setups, and live celebrations.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIDEO_ITEMS.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative bg-stone-950 rounded-2xl overflow-hidden border border-stone-800 hover:border-amber-500/60 shadow-lg hover:shadow-amber-500/10 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-16/9 overflow-hidden bg-stone-900">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-stone-950/60 transition-colors" />

                {/* Big Centered Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-amber-300 transition-all duration-200">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <span className="absolute bottom-3 right-3 text-xs font-mono font-medium text-white bg-black/80 px-2 py-0.5 rounded-md backdrop-blur-xs">
                  {video.duration}
                </span>

                {/* Event Category Tag */}
                <span className="absolute top-3 left-3 text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 bg-amber-950/80 text-amber-200 rounded border border-amber-800/40">
                  {video.event}
                </span>
              </div>

              {/* Video Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-stone-400 mt-2 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                  <span className="text-stone-400">Click to Play Video</span>
                  <span className="text-amber-400 font-semibold group-hover:underline inline-flex items-center gap-1">
                    <span>Watch Now</span>
                    <Play className="w-3 h-3 fill-current" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Owner Info Note */}
        <div className="mt-12 p-4 bg-stone-950/80 rounded-xl border border-stone-800 flex items-start gap-3 max-w-2xl mx-auto text-xs text-stone-400">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong className="text-stone-300">Adding your decoration videos: </strong>
            You can link direct video MP4s or YouTube / Vimeo walkthrough videos in <code className="text-amber-300 font-mono">src/data/config.ts</code> under <code className="text-amber-300 font-mono">VIDEO_ITEMS</code>.
          </span>
        </div>

      </div>

      {/* Video Modal Player */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
};
