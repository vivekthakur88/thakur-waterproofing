"use client";

import React, { useState } from "react";
import { Play, X, ShieldCheck, CheckCircle2 } from "lucide-react";

interface TestVideo {
  id: string;
  title: string;
  testType: string;
  desc: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
}

const testingVideos: TestVideo[] = [
  {
    id: "ponding",
    title: "48-Hour Terrace Ponding Test",
    testType: "Ponding Test",
    desc: "We block rainwater drains and submerge the entire terrace under 4 inches of water for 48 hours to confirm absolute sealing.",
    thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054e0df7aa47f8e77a0086d49b9d7e3&profile_id=165&oauth2_token_id=57447761",
    duration: "48 Hours"
  },
  {
    id: "flood",
    title: "Bathroom Sub-Tile Flood Validation",
    testType: "Flood Test",
    desc: "The bathroom floor is flooded before decorative tiles are laid, checking the sub-base PU barrier against heavy downward pressure leaks.",
    thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/external/517602124.sd.mp4?s=d0f04c643bf7e21249ad22e11d044e05eb436329&profile_id=165&oauth2_token_id=57447761",
    duration: "24 Hours"
  },
  {
    id: "thermal",
    title: "FLIR Thermal Moisture Imaging Scan",
    testType: "Moisture Scanning",
    desc: "Post-curing, we scan all treated joints with state-of-the-art FLIR thermal cameras to ensure zero hidden cold-spots or deep dampness.",
    thumbnail: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/external/517602124.sd.mp4?s=d0f04c643bf7e21249ad22e11d044e05eb436329&profile_id=165&oauth2_token_id=57447761",
    duration: "Immediate"
  }
];

export default function WaterTesting() {
  const [activeVideo, setActiveVideo] = useState<TestVideo | null>(null);

  return (
    <section id="water-testing" className="py-24 bg-white dark:bg-brand-navyDark relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Uncompromising Quality Assurance</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy dark:text-white leading-tight">
            Real Water Testing <br />
            <span className="bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent">After Completion</span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            We don&apos;t just coat and leave. Every single project is subjected to rigorous, physical testing to prove 100% moisture blocking.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testingVideos.map((video) => (
            <div
              key={video.id}
              className="glass-card rounded-[32px] overflow-hidden flex flex-col justify-between border border-slate-200 dark:border-brand-navyLight group"
            >
              {/* Card Media Header */}
              <div
                onClick={() => setActiveVideo(video)}
                className="relative aspect-video bg-slate-200 dark:bg-brand-navyLight overflow-hidden cursor-pointer"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 select-none"
                />
                
                {/* Darken overlay on hover */}
                <div className="absolute inset-0 bg-brand-navyDark/45 group-hover:bg-brand-navyDark/30 transition-colors" />

                {/* Big play button centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-orange transform group-hover:scale-110 active:scale-95 transition-all duration-300 relative">
                    <span className="absolute inset-0 rounded-full bg-brand-orange/30 animate-ping" />
                    <Play className="w-5 h-5 fill-white stroke-none translate-x-0.5" />
                  </div>
                </div>

                {/* Timing Badge */}
                <div className="absolute bottom-4 right-4 bg-black/75 px-3 py-1 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider">
                  Test Time: {video.duration}
                </div>
              </div>

              {/* Card Info Body */}
              <div className="p-7 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase text-brand-orange tracking-widest bg-brand-orange/5 px-3 py-1 rounded-full border border-brand-orange/20">
                    {video.testType}
                  </span>
                  <span className="text-xs font-bold text-green-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 fill-green-500/10" /> Verified Pass
                  </span>
                </div>
                
                <h3 className="font-outfit text-lg font-extrabold text-brand-navy dark:text-white leading-tight">
                  {video.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                  {video.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Lightbox Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-brand-navyDark/90 backdrop-blur-sm flex items-center justify-center px-4">
          <div
            className="absolute inset-0"
            onClick={() => setActiveVideo(null)}
          />
          
          <div className="relative z-10 w-full max-w-3xl bg-black rounded-3xl overflow-hidden border border-brand-navyLight shadow-2xl animate-fade-in-up">
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Video Player Box */}
            <div className="relative aspect-video">
              <video
                autoPlay
                controls
                className="w-full h-full object-contain"
                src={activeVideo.videoUrl}
              />
            </div>
            
            {/* Overlay descriptive bottom bar */}
            <div className="p-6 bg-brand-navy border-t border-brand-navyLight text-white">
              <span className="text-[10px] font-black uppercase text-brand-orange tracking-widest block mb-1">
                Active Construction Verification: {activeVideo.testType}
              </span>
              <h3 className="font-outfit text-lg font-extrabold leading-tight">
                {activeVideo.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
