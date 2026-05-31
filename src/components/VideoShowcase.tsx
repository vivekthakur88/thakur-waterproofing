"use client";

import React, { useRef, useEffect } from "react";
import { MessageCircle, Play, Video } from "lucide-react";
import { whatsappLink } from "@/config/whatsapp";
import { videos } from "@/config/media";

interface VideoCard {
  src: string;
  badge: string;
  title: string;
  desc: string;
}

const videoCards: VideoCard[] = [
  {
    src: videos.showcase1,
    badge: "Terrace Waterproofing",
    title: "Multi-layer PU Membrane Application",
    desc: "Watch our experts apply premium elastomeric coating on a terrace site."
  },
  {
    src: videos.showcase2,
    badge: "Roof Treatment",
    title: "Roof Crack Filling & Sealing",
    desc: "V-groove cutting, polyurethane injection and top-coat demonstration."
  },
  {
    src: videos.showcase3,
    badge: "Water Tank",
    title: "Food-Grade Epoxy Tank Coating",
    desc: "Non-toxic epoxy crystalline coating applied inside a water tank."
  },
  {
    src: videos.showcase4,
    badge: "Wall Seepage",
    title: "Wall Seepage Injection Treatment",
    desc: "High-pressure epoxy injection to permanently stop wall dampness."
  }
];

function AutoplayVideoCard({ card }: { card: VideoCard }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="group relative rounded-[28px] overflow-hidden bg-brand-navyLight border border-brand-navyLight shadow-xl hover:shadow-2xl hover:border-brand-orange/30 transition-all duration-500">
      {/* Video */}
      <div className="relative aspect-video overflow-hidden">
        <video
          ref={videoRef}
          src={card.src}
          loop
          muted
          playsInline
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/80 via-transparent to-transparent" />

        {/* Badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-brand-orange text-white text-[10px] font-black uppercase tracking-wider shadow-md">
          {card.badge}
        </div>

        {/* Play icon (fades on hover because video plays) */}
        <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <Play className="w-6 h-6 text-white fill-white" />
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="p-5 space-y-2">
        <h3 className="font-outfit text-base font-extrabold text-white group-hover:text-brand-orange transition-colors duration-300">
          {card.title}
        </h3>
        <p className="text-xs text-slate-400 font-medium leading-relaxed">
          {card.desc}
        </p>
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section id="video-showcase" className="py-24 bg-brand-navyDark relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Video className="w-3.5 h-3.5" />
            <span>Site Demonstrations</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Real Waterproofing <br />
            <span className="bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-base text-slate-400 font-medium">
            Watch our certified team executing real waterproofing jobs — no stock footage, only actual project videos.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoCards.map((card, idx) => (
            <AutoplayVideoCard key={idx} card={card} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-slate-400 text-sm font-medium mb-6">
            Send your leakage photos on WhatsApp and get expert advice within minutes.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-extrabold uppercase tracking-wider text-white bg-brand-orange hover:bg-brand-orangeHover shadow-orange hover:shadow-orange-lg hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 fill-white stroke-none" />
            Send Photos on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
