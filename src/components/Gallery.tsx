"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Eye, Sparkles, MessageCircle } from "lucide-react";
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
    url: "/images/pic1.jpeg",
    thumbnail: "/images/pic1.jpeg",
    isVideo: false,
    category: "terrace",
    categoryLabel: "Terrace Waterproofing",
    title: "Active Terrace Leakage & Concrete Degradation",
    location: "Mumbai, Maharashtra"
  },
  {
    id: 1,
    url: "/images/pic2.jpeg",
    thumbnail: "/images/pic2.jpeg",
    isVideo: false,
    category: "terrace",
    categoryLabel: "Terrace Waterproofing",
    title: "Seamless 100% Waterproof Elastomeric Coating",
    location: "Mumbai, Maharashtra"
  },
  {
    id: 2,
    url: "/images/pic5.jpeg",
    thumbnail: "/images/pic5.jpeg",
    isVideo: false,
    category: "roof",
    categoryLabel: "Professional Service",
    title: "Expert Waterproofing Professional at Work",
    location: "Mumbai, Maharashtra"
  },
  {
    id: 3,
    url: "/images/pic6.jpeg",
    thumbnail: "/images/pic6.jpeg",
    isVideo: false,
    category: "residential",
    categoryLabel: "Residential Project",
    title: "Premium Waterproofing Treatment — Completed",
    location: "Mumbai, Maharashtra"
  },
  {
    id: 4,
    url: "/images/pic3.jpeg",
    thumbnail: "/images/pic3.jpeg",
    isVideo: false,
    category: "bathroom",
    categoryLabel: "Bathroom Waterproofing",
    title: "High-End Tile & Floor Leakage Protection",
    location: "Mumbai, Maharashtra"
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(item => {
    if (filter === "all") return true;
    if (filter === "residential") return item.category === "residential" || item.category === "bathroom" || item.category === "terrace";
    if (filter === "commercial") return item.category === "commercial" || item.category === "roof";
    return item.category === filter;
  });

  const openLightbox = (id: number) => {
    const idx = filteredItems.findIndex(item => item.id === id);
    if (idx !== -1) setActiveIdx(idx);
  };

  const closeLightbox = () => setActiveIdx(null);

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
            <span>Our Work</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy dark:text-white leading-tight">
            Project Gallery <br />
            <span className="bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent">Real Results</span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
            Browse high-resolution photos of our waterproofing projects — real work, real results.
          </p>
        </div>

        {/* Category Filter Tabs */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          {filteredItems.map((item, gridIdx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className={`relative rounded-[28px] overflow-hidden group bg-brand-navyLight border border-slate-200 dark:border-brand-navyLight shadow-md cursor-pointer ${
                gridIdx === 0 ? "xl:col-span-2 xl:row-span-1 aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="object-cover w-full h-full transform scale-100 group-hover:scale-105 transition-transform duration-700 select-none"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/90 via-brand-navyDark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* Category tag */}
              <div className="absolute top-5 left-5 z-10 py-1.5 px-3.5 rounded-full bg-white/95 dark:bg-brand-navyDark/95 border border-slate-200 dark:border-brand-navyLight text-[9px] font-black uppercase tracking-widest text-brand-orange shadow-md">
                {item.categoryLabel}
              </div>

              {/* Bottom reveal */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex justify-between items-end">
                <div className="max-w-[80%]">
                  <span className="text-[10px] text-brand-orange font-bold uppercase tracking-wider block mb-1">
                    📍 {item.location}
                  </span>
                  <h4 className="font-outfit text-sm sm:text-base font-extrabold text-white leading-tight">
                    {item.title}
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-brand-navyDark/96 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-brand-navy border border-brand-navyLight flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-navyLight transition-colors duration-300"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={showPrev}
            className="absolute left-4 w-12 h-12 rounded-full bg-brand-navy border border-brand-navyLight flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-navyLight transition-colors duration-300"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={showNext}
            className="absolute right-4 w-12 h-12 rounded-full bg-brand-navy border border-brand-navyLight flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-navyLight transition-colors duration-300"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Active Image */}
          <div
            className="max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-5 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[activeIdx].url}
              alt={filteredItems[activeIdx].title}
              className="object-contain max-w-full max-h-[65vh] rounded-2xl border border-brand-navyLight shadow-2xl"
            />

            <div className="text-center text-white space-y-2">
              <span className="text-[10px] font-black uppercase text-brand-orange tracking-widest block">
                📍 {filteredItems[activeIdx].location} &bull; {filteredItems[activeIdx].categoryLabel}
              </span>
              <h3 className="font-outfit text-base sm:text-xl font-extrabold max-w-[600px] leading-tight">
                {filteredItems[activeIdx].title}
              </h3>
              <div className="pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orangeHover text-xs font-bold uppercase tracking-wider text-white shadow-orange"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                  Ask About This Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
