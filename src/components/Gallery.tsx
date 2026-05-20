"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface GalleryItem {
  id: number;
  url: string;
  category: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 0,
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    category: "Clinic Interiors",
    title: "Luxury Reception & Lounge",
  },
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=800",
    category: "Modern Equipment",
    title: "Class-B Sterilization Lab",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    category: "Smiling Patients",
    title: "Digital Aesthetic Design",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    category: "Doctors Working",
    title: "Micro-Surgical Implant Suite",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    category: "Treatments",
    title: "Intraoral 3D Scanning",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800",
    category: "Clinic Interiors",
    title: "Patient Consult Operatory",
  },
];

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => {
    setActiveIdx(idx);
  };

  const closeLightbox = () => {
    setActiveIdx(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx(activeIdx === 0 ? galleryItems.length - 1 : activeIdx - 1);
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx(activeIdx === galleryItems.length - 1 ? 0 : activeIdx + 1);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-slate-50 dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-blue">
            Visual Tour
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark dark:text-white">
            Inside Our Premium <br />
            <span className="bg-gradient-to-r from-brand-blue to-cyan-500 bg-clip-text text-transparent">
              Clinical Space
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Take a look around our state-of-the-art clinic. Designed to guarantee maximum comfort and extreme hygiene.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="relative rounded-[32px] overflow-hidden group aspect-video sm:aspect-square bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-md cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.title}
                className="object-cover w-full h-full transform scale-100 group-hover:scale-105 transition-transform duration-700"
              />
              {/* Blur gradient dark overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10" />

              {/* Float category tag */}
              <div className="absolute top-6 left-6 z-10 py-1.5 px-3 rounded-full bg-white/95 dark:bg-brand-dark/95 border border-slate-100 dark:border-slate-800 text-[10px] font-bold tracking-widest text-brand-blue uppercase shadow-sm">
                {item.category}
              </div>

              {/* Overlay reveal details */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex justify-between items-end">
                <div>
                  <h4 className="font-serif text-lg font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-slate-300">Click to view full screen</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white shadow-md">
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
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center animate-fade-in-up"
          onClick={closeLightbox}
        >
          {/* Close Trigger */}
          <button
            onClick={closeLightbox}
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors duration-300"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Nav Controls */}
          <button
            onClick={showPrev}
            className="absolute left-6 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors duration-300"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={showNext}
            className="absolute right-6 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors duration-300"
            aria-label="Next Image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Active Image Box */}
          <div
            className="max-w-[90vw] max-h-[80vh] flex flex-col items-center gap-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[activeIdx].url}
              alt={galleryItems[activeIdx].title}
              className="object-contain max-w-full max-h-[75vh] rounded-2xl border border-slate-800 shadow-2xl"
            />
            <div className="text-center text-white">
              <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest">
                {galleryItems[activeIdx].category}
              </span>
              <h3 className="font-serif text-lg font-bold">
                {galleryItems[activeIdx].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
