"use client";

import React from "react";
import { MessageCircle, Camera, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { whatsappLink } from "@/config/whatsapp";

export default function Appointment() {
  const steps = [
    {
      title: "1. Snap Leakage Photos",
      desc: "Take quick photos or videos of your terrace cracks, damp walls, or ceiling seepage.",
      icon: Camera
    },
    {
      title: "2. Send on WhatsApp",
      desc: "Click any button on this website to instantly chat with our head waterproofing engineers.",
      icon: MessageCircle
    },
    {
      title: "3. Get Free Estimate",
      desc: "Receive an immediate visual diagnostic analysis and a transparent, itemized repair quote.",
      icon: CheckCircle2
    }
  ];

  return (
    <section id="appointment" className="py-24 bg-brand-lightBg dark:bg-brand-navyDark relative overflow-hidden border-t border-slate-200 dark:border-brand-navyLight">
      {/* Visual background blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="glass-panel p-8 sm:p-16 rounded-[48px] border border-slate-200 dark:border-brand-navyLight shadow-glass relative overflow-hidden text-center max-w-5xl mx-auto">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-orange/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mx-auto">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Instant WhatsApp Diagnosis</span>
            </div>

            {/* Headline */}
            <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-brand-navy dark:text-white leading-tight">
              Send Your Leakage <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent">Photos On WhatsApp</span>
            </h2>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-semibold max-w-2xl mx-auto">
              Got cracks, dampness, or structural drips? Avoid expensive masonry breakdowns. Send us high-resolution photos of your leakage issues and let our chemical experts evaluate them instantly.
            </p>

            {/* Simple Visual Step Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
              {steps.map((s, idx) => {
                const IconComponent = s.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-brand-navy/60 border border-slate-200/50 dark:border-brand-navyLight hover:border-brand-orange/20 transition-all duration-300 flex flex-col gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-brand-navy dark:text-white mb-1">
                        {s.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Large WhatsApp Conversion Button */}
            <div className="pt-6">
              <a
                href={`${whatsappLink}&text=Hi!%20I%20have%20attached%20photos%20of%20the%20active%20leakage%20at%20my%20property.%20Please%20examine%20them%20and%20provide%20a%20Free%20Waterproofing%20Inspection.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-sm font-extrabold uppercase tracking-widest text-white bg-brand-orange hover:bg-brand-orangeHover shadow-orange hover:shadow-orange-lg hover:scale-[1.03] active:scale-95 transition-all duration-300 relative group"
              >
                {/* Ping wave */}
                <span className="absolute inset-0 rounded-full bg-brand-orange/20 animate-ping z-0 pointer-events-none" />
                
                <MessageCircle className="w-5.5 h-5.5 fill-white stroke-none relative z-10" />
                <span className="relative z-10">Get Free Inspection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </a>
            </div>

            {/* Sub-text */}
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
              🛡️ No obligation check &bull; 100% Free visual diagnostic report &bull; Response within 15 mins
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
