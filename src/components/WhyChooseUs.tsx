"use client";

import React from "react";
import { Search, ShieldAlert, Sparkles, Activity, FileCheck, CheckCircle2 } from "lucide-react";

interface Step {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: Search,
    title: "Inspection",
    desc: "Our senior chemical engineers visit your property with advanced moisture meters and thermal imaging cameras to inspect structural damage."
  },
  {
    number: "02",
    icon: ShieldAlert,
    title: "Problem Detection",
    desc: "We scan core masonry to find the precise source of water ingress, structural cracks, and capillary dampness rise."
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Waterproofing Treatment",
    desc: "We apply heavy duty multi-coat polymer barriers, injection grouting, or PU membranes tailored strictly to the identified leakage issue."
  },
  {
    number: "04",
    icon: Activity,
    title: "Quality Testing",
    desc: "We perform full 48-hour water ponding tests, flood testing, and infrared moisture re-scans to guarantee zero leaks."
  },
  {
    number: "05",
    icon: FileCheck,
    title: "Final Protection",
    desc: "We certify the completed work with a written, multi-year warranty card (5 to 15 years) ensuring permanent peace of mind."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="how-we-work" className="py-24 bg-white dark:bg-brand-navyDark relative overflow-hidden">
      {/* Decorative subtle gradient background blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Our Engineered Process</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy dark:text-white leading-tight">
            How We Permanently <br />
            <span className="bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent">Stop Your Leakage</span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
            We follow a strictly engineered, multi-step quality assurance framework to identify, treat, and certify every project.
          </p>
        </div>

        {/* Process Timeline Layout */}
        <div className="relative">
          
          {/* Timeline Center Connecting Line - Desktop Only */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-orange/30 via-brand-orange to-brand-orange/30 -translate-y-1/2 hidden xl:block -z-10" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 xl:gap-6">
            {steps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.number}
                  className="glass-card p-8 rounded-[32px] flex flex-col justify-between hover:border-brand-orange/30 transition-all duration-500 relative group border border-slate-200 dark:border-brand-navyLight hover:-translate-y-2"
                >
                  {/* Step Number Top Accents */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-outfit text-4xl font-black text-slate-200 dark:text-slate-800 tracking-tight group-hover:text-brand-orange/20 transition-colors duration-500">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange shadow-sm group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                      <StepIcon className="w-5.5 h-5.5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-outfit text-lg sm:text-xl font-extrabold text-brand-navy dark:text-white group-hover:text-brand-orange transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                      {step.desc}
                    </p>
                  </div>
                  
                  {/* Interactive connector dots for extra depth */}
                  <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-brand-orange border-4 border-white dark:border-brand-navyDark shadow-md scale-0 group-hover:scale-100 transition-transform duration-300 hidden xl:block -translate-y-1/2 z-20 pointer-events-none" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
