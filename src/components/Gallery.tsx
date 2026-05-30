"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Eye, Play, Sparkles, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/whatsapp";

interface GalleryItem {
  id: number;
  url: string;
  thumbnail: string;
  isVideo: boolean;
  category: "residential" | "commercial" | "terrace" | "roof" | "bathroom";
  categoryLabel: string;
  title: string;
  location: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 0,
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600",
    isVideo: false,
    category: "terrace",
    categoryLabel: "Terrace Waterproofing",
    title: "10,000 Sq.Ft. Luxury Society Terrace Coating",
    location: "Hiranandani Meadows, Thane"
  },
  {
    id: 1,
    url: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054e0df7aa47f8e77a0086d49b9d7e3&profile_id=165&oauth2_token_id=57447761",
    thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600",
    isVideo: true,
    category: "roof",
    categoryLabel: "Roof Waterproofing",
    title: "Commercial Roof Torch-On Bituminous Coating",
    location: "MIDC Industrial Area, Pune"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
    thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    isVideo: false,
    category: "bathroom",
    categoryLabel: "Bathroom Leakage",
    title: "Luxury Apartment Sub-Tile Epoxy Grouting",
    location: "Lodha Amara, Kolshet Road"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200",
    thumbnail: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    isVideo: false,
    category: "commercial",
    categoryLabel: "Commercial Site",
    title: "Premium Factory Structural Seal & Heatproof Coat",
    location: "Wagle Estate, Thane"
  },
  {
    id: 4,
    url: "https://player.vimeo.com/external/517602124.sd.mp4?s=d0f04c643bf7e21249ad22e11d044e05eb436329&profile_id=165&oauth2_token_id=57447761",
    thumbnail: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600",
    isVideo: true,
    category: "residential",
    categoryLabel: "Residential Block",
    title: "Multi-Storey Apartment Exterior Polyurethane Seal",
    location: "Pokhran Road, Thane West"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
    thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
    isVideo: false,
    category: "terrace",
    categoryLabel: "Terrace Waterproofing",
    title: "Penthouses Elastomeric PU Liquid Membrane",
    location: "Koregaon Park, Pune"
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Filter items based on active tab category
  const filteredItems = galleryItems.filter(item => {
    if (filter === "all") return true;
    if (filter === "residential") return item.category === "residential" || item.category === "bathroom" || item.category === "terrace";
    if (filter === "commercial") return item.category === "commercial" || item.category === "roof";
    return item.category === filter;
  });

  const openLightbox = (id: number) => {
    // Find index of clicked item within filtered array to ensure sliding navigation respects active filters
    const idx = filteredItems.findIndex(item => item.id === id);
    if (idx !== -1) setActiveIdx(idx);
  };

  const closeLightbox = () => {
    setActiveIdx(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx(activeIdx === 0 ? filteredItems.length - 1 : activeIdx - 1);
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx(activeIdx === filteredItems.length - 1 ? 0 : activeIdx + 1);
    }
  };

  const filterTabs = [
    { value: "all", label: "All Projects" },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "terrace", label: "Terrace" },
    { value: "roof", label: "Roof" },
    { value: "bathroom", label: "Bathroom" }
  ];

  return (
    <section id="projects" className="py-24 bg-brand-lightBg dark:bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Stories</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy dark:text-white leading-tight">
            Completed Project <br />
            <span className="bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent">Structural Portfolios</span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
            Browse our masonry construction logs featuring high-resolution photos and actual inspection videos of permanent leakage cures.
          </p>
        </div>

        {/* Categories Filtering Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 border ${
                filter === tab.value
                  ? "bg-brand-orange text-white border-brand-orange shadow-orange scale-[1.02]"
                  : "bg-white dark:bg-brand-navyLight text-slate-600 dark:text-slate-300 border-slate-200 dark:border-brand-navyLight hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="relative rounded-[32px] overflow-hidden group aspect-video sm:aspect-[4/3] bg-brand-navyLight border border-slate-200 dark:border-brand-navyLight shadow-md cursor-pointer"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="object-cover w-full h-full transform scale-100 group-hover:scale-105 transition-transform duration-700 select-none"
                loading="lazy"
              />
              
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/90 via-brand-navyDark/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-7 z-10" />

              {/* Tag for category */}
              <div className="absolute top-6 left-6 z-10 py-1.5 px-3.5 rounded-full bg-white/95 dark:bg-brand-navyDark/95 border border-slate-200 dark:border-brand-navyLight text-[9px] font-black uppercase tracking-widest text-brand-orange shadow-md">
                {item.categoryLabel}
              </div>

              {/* Video Indicator Icon */}
              {item.isVideo && (
                <div className="absolute top-6 right-6 z-10 w-9 h-9 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg animate-pulse">
                  <Play className="w-4 h-4 fill-white stroke-none" />
                </div>
              )}

              {/* Bottom detail reveal */}
              <div className="absolute bottom-0 left-0 right-0 p-7 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex justify-between items-end">
                <div className="max-w-[80%]">
                  <span className="text-[10px] text-brand-orange font-bold uppercase tracking-wider block mb-1">
                    {item.location}
                  </span>
                  <h4 className="font-outfit text-sm sm:text-base font-extrabold text-white leading-tight">
                    {item.title}
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center shadow-md">
                  {item.isVideo ? <Play className="w-4 h-4 fill-white stroke-none" /> : <Eye className="w-4.5 h-4.5" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-brand-navyDark/95 backdrop-blur-md flex items-center justify-center animate-fade-in-up"
          onClick={closeLightbox}
        >
          {/* Close Trigger */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-brand-navy border border-brand-navyLight flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-navyLight transition-colors duration-300"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={showPrev}
            className="absolute left-4 w-12 h-12 rounded-full bg-brand-navy border border-brand-navyLight flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-navyLight transition-colors duration-300"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={showNext}
            className="absolute right-4 w-12 h-12 rounded-full bg-brand-navy border border-brand-navyLight flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-navyLight transition-colors duration-300"
            aria-label="Next Image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Active Media Container */}
          <div
            className="max-w-[90vw] max-h-[80vh] flex flex-col items-center gap-5 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {filteredItems[activeIdx].isVideo ? (
              <div className="relative aspect-video w-full max-w-[800px] rounded-2xl overflow-hidden border border-brand-navyLight shadow-2xl bg-black">
                <video
                  autoPlay
                  controls
                  className="w-full h-full object-contain"
                  src={filteredItems[activeIdx].url}
                />
              </div>
            ) : (
              <img
                src={filteredItems[activeIdx].url}
                alt={filteredItems[activeIdx].title}
                className="object-contain max-w-full max-h-[65vh] rounded-2xl border border-brand-navyLight shadow-2xl"
              />
            )}
            
            {/* Meta tags inside lightbox */}
            <div className="text-center text-white space-y-2">
              <span className="text-[10px] font-black uppercase text-brand-orange tracking-widest block">
                📍 {filteredItems[activeIdx].location} &bull; {filteredItems[activeIdx].categoryLabel}
              </span>
              <h3 className="font-outfit text-base sm:text-xl font-extrabold max-w-[600px] leading-tight">
                {filteredItems[activeIdx].title}
              </h3>
              
              {/* Quick WhatsApp Inquiry inside Lightbox */}
              <div className="pt-2">
                <a
                  href={`${whatsappLink}&text=Hi!%20I'm%20inquiring%20about%20your%20project%20in%20${encodeURIComponent(filteredItems[activeIdx].location)}%20(${encodeURIComponent(filteredItems[activeIdx].title)}).%20I'd%20like%20to%20get%20a%20similar%20inspection.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orangeHover text-xs font-bold uppercase tracking-wider text-white shadow-orange"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                  Ask details about this project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
