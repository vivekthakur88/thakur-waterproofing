"use client";

import React from "react";
import { Shield, Award, ClipboardCheck, ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/whatsapp";

export default function About() {
  const warranties = [
    {
      period: "5 Years",
      title: "Standard Protection",
      coverage: "Crack filling, bathroom joints, and minor wall seepage treatments.",
      chemicalType: "Acrylic polymer modified coatings & professional sealants."
    },
    {
      period: "10 Years",
      title: "Premium Protection",
      coverage: "Rooftops, terraces, water tanks, and deep parapet masonry seals.",
      chemicalType: "Polyurethane (PU) liquid membrane & crystalline pressure injection."
    },
    {
      period: "15 Years",
      title: "Ultra Protection",
      coverage: "Complete building structural sealing, heavy-duty app bituminous torch membrane.",
      chemicalType: "Advanced multi-tier hybrid polyurethane coatings & imported geo-textiles."
    }
  ];

  return (
    <section id="warranty" className="py-24 bg-brand-navyDark relative overflow-hidden">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#172a45_1px,transparent_1px),linear-gradient(to_bottom,#172a45_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Copy & Shield */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5 animate-pulse" />
              <span>Written Peace of Mind Guarantee</span>
            </div>
            
            <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Long-Lasting <br />
              <span className="bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent">Waterproofing Protection</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-semibold">
              Every leakage treatment is engineered for structural durability. We don&apos;t use temporary quick-fixes; we apply premium, multi-tiered structural barriers backed by a comprehensive, legally-binding written warranty card.
            </p>

            {/* Checklist items */}
            <div className="space-y-3 pt-2 text-slate-300 font-semibold text-sm">
              <div className="flex items-center gap-3">
                <ClipboardCheck className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span>Legally binding written warranty certificates</span>
              </div>
              <div className="flex items-center gap-3">
                <ClipboardCheck className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span>Free yearly moisture visual checkups</span>
              </div>
              <div className="flex items-center gap-3">
                <ClipboardCheck className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span>Covers both labor & premium raw chemicals</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-extrabold uppercase tracking-wider text-white bg-brand-orange hover:bg-brand-orangeHover shadow-orange hover:shadow-orange-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
              >
                <MessageCircle className="w-4.5 h-4.5 fill-white stroke-none" />
                Claim Your Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Premium Warranty Shield Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-6">
            {warranties.map((w, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-[28px] border border-brand-navyLight bg-brand-navy/40 relative overflow-hidden flex flex-col sm:flex-row gap-5 items-start sm:items-center hover:border-brand-orange/30 group transition-all duration-500"
              >
                {/* Visual glow background inside cards */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-brand-orange/5 rounded-full blur-2xl group-hover:bg-brand-orange/10 transition-colors duration-500" />
                
                {/* Shield Badge */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex flex-col items-center justify-center text-brand-orange font-outfit shadow-sm group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                  <Award className="w-6 h-6 mb-0.5" />
                  <span className="text-[10px] font-black leading-none">{w.period}</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-outfit text-lg font-extrabold text-white group-hover:text-brand-orange transition-colors">
                      {w.title}
                    </h3>
                    <span className="text-[9px] font-black text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-full border border-brand-orange/20 uppercase tracking-widest leading-none">
                      Warranty
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-semibold leading-relaxed">
                    {w.coverage}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium italic">
                    Chemical formulation: {w.chemicalType}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
