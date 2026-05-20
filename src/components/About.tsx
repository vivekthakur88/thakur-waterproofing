"use client";

import React from "react";
import { Shield, Sparkles, Star, Users } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Modern Equipment",
      description: "State-of-the-art 3D intraoral scanners and digital x-rays for ultra-precise diagnostics.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Sterilized Environment",
      description: "Class-B autoclave sterilization conforming to rigorous international safety standards.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Experienced Specialists",
      description: "Led by highly skilled implantologists, orthodontists, and cosmetic dental surgeons.",
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Personalized Treatment Plans",
      description: "Tailored procedures designed specifically for your lifestyle and aesthetic goals.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-blue">
                Discover Dentazone
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark dark:text-white leading-[1.15]">
                Redefining the Dental <br />
                <span className="bg-gradient-to-r from-brand-blue to-cyan-500 bg-clip-text text-transparent">
                  Clinic Experience
                </span>
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Dentazone combines advanced digital technology, expert dental care, and a patient-first approach to create healthy, confident smiles in a comfortable and modern luxury environment. We view oral healthcare as an art and a science, delivering flawless, painless treatments tailored to each unique profile.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 hover:border-brand-blue/30 dark:hover:border-brand-blue/20 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-lightBlue/60 dark:bg-brand-blue/10 border border-brand-blue/10 flex items-center justify-center text-brand-blue">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark dark:text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Visual Layout */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Visual background frame */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-tr from-brand-blue to-cyan-400 opacity-20 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-brand-gold opacity-10 rounded-full blur-3xl z-0" />
            
            <div className="relative z-10 rounded-[32px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl aspect-square sm:aspect-[4/5] lg:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                alt="Modern Dentazone Clinic Environment"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Overlay trust badge inside image */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel py-4 px-6 rounded-2xl shadow-glass flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h5 className="text-xs font-bold text-brand-dark dark:text-white">
                    ISO 9001:2015 Certified
                  </h5>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    Highest global standard of dental sterilization
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
