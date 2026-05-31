"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Sparkles, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/whatsapp";

interface ProjectItem {
  id: string;
  title: string;
  problem: string;
  solution: string;
  beforeImg: string;
  afterImg: string;
  details: string;
}

const projects: ProjectItem[] = [
  {
    id: "terrace",
    title: "Terrace Leakage",
    problem: "Rainwater ponding and structural micro-cracks causing ceiling dampness.",
    solution: "Multi-layer elastomeric PU membrane coating with glass-fiber reinforcement.",
    beforeImg: "/images/pic1.jpeg",
    afterImg: "/images/pic2.jpeg",
    details: "100% water ponding test passed. Underwent 10-year warranty certification."
  },
  {
    id: "roof",
    title: "Roof Cracks",
    problem: "Thermal expansion causing deep structural concrete cracks & active drips.",
    solution: "V-groove cutting, polyurethane sealant filling, and heavy duty topcoat.",
    beforeImg: "/images/pic1.jpeg",
    afterImg: "/images/pic5.jpeg",
    details: "Reinforced joints withstand severe thermal stress and structural shifting."
  },
  {
    id: "wall",
    title: "Wall Seepage",
    problem: "Groundwater capillary action and paint peeling with white efflorescence.",
    solution: "High-strength epoxy injection with polymer-modified structural plaster seal.",
    beforeImg: "/images/pic2.jpeg",
    afterImg: "/images/pic6.jpeg",
    details: "Dampness levels reduced from 95% to < 5% within 48 hours of treatment."
  },
  {
    id: "bathroom",
    title: "Bathroom Leakage",
    problem: "Weak tile grout and pipe joint leaks destroying lower floor ceilings.",
    solution: "Non-destructive epoxy grout treatment & sub-tile waterproofing barrier.",
    beforeImg: "/images/pic1.jpeg",
    afterImg: "/images/pic2.jpeg",
    details: "Stopped leakage permanently without breaking single designer marble tile."
  },
  {
    id: "watertank",
    title: "Water Tank Leakage",
    problem: "Concrete tank cracks leaking water & encouraging algae/bacteria growth.",
    solution: "Food-grade non-toxic epoxy crystalline coating and joint sealing.",
    beforeImg: "/images/pic2.jpeg",
    afterImg: "/images/pic5.jpeg",
    details: "Approved drinking-water safe crystal coatings with lifetime organic protection."
  }
];

export default function BeforeAfter() {
  const [activeProject, setActiveProject] = useState<ProjectItem>(projects[0]);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="before-after" className="py-24 bg-white dark:bg-brand-navyDark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Before & After Showcase</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy dark:text-white leading-tight mb-4">
            Visual Proof of Our <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent">Permanent Solutions</span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
            Drag the visual slider to see the premium quality transition from active leakage to lifetime protected structures.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => {
                setActiveProject(project);
                setSliderPosition(50); // reset slider
              }}
              className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeProject.id === project.id
                  ? "bg-brand-orange text-white shadow-orange scale-[1.02]"
                  : "bg-slate-100 hover:bg-slate-200 dark:bg-brand-navyLight dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-brand-navyLight"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Main Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Interactive Drag Slider - 7 cols */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-brand-navyLight select-none">
              
              {/* BEFORE Image (Base Layer) */}
              <img
                src={activeProject.beforeImg}
                alt={`${activeProject.title} Before`}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute left-6 top-6 z-20 bg-black/70 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest border border-white/10">
                Active Leakage (Before)
              </div>

              {/* AFTER Image (Overlay Layer clipped based on slider) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden z-10 pointer-events-none"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img
                  src={activeProject.afterImg}
                  alt={`${activeProject.title} After`}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="absolute right-6 top-6 z-20 bg-brand-orange backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest shadow-md">
                  Lifetime Sealed (After)
                </div>
              </div>

              {/* The Drag Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white z-20 pointer-events-none shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Visual Arrow Widget */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center border-4 border-white shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/><path d="M3 12h18"/></svg>
                </div>
              </div>

              {/* The Invisible Interactive Range Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 pointer-events-auto"
                aria-label="Before and after comparison slider"
              />
            </div>
            
            {/* Guide hint */}
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-4 animate-pulse flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              Slide left / right to compare work
            </span>
          </div>

          {/* Details Column - 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-brand-navy dark:text-white">
                  {activeProject.title} Case
                </h3>

                <div className="space-y-4">
                  <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5">
                    <span className="text-[10px] font-black uppercase text-red-500 tracking-wider block mb-1">
                      Problem Identified:
                    </span>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {projectProblem(activeProject.id)}
                    </p>
                  </div>

                  <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-5">
                    <span className="text-[10px] font-black uppercase text-green-600 tracking-wider block mb-1">
                      Premium Solution Applied:
                    </span>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {projectSolution(activeProject.id)}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-200 dark:border-brand-navyLight pt-6">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">
                    Quality Testing Details
                  </span>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold italic">
                    &ldquo;{activeProject.details}&rdquo;
                  </p>
                </div>

                {/* Instant WhatsApp Inquiry for this specific leakage */}
                <div className="pt-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-white bg-brand-orange hover:bg-brand-orangeHover shadow-orange hover:shadow-orange-lg hover:scale-[1.02] active:scale-95 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                    Fix My {activeProject.title} Now
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

// Inline content helper mappings to prevent compile issues and keep code tidy
function projectProblem(id: string): string {
  switch (id) {
    case "terrace": return "Rainwater ponding and structural micro-cracks causing ceiling dampness.";
    case "wall": return "Groundwater capillary action and paint peeling with white efflorescence.";
    case "roof": return "Thermal expansion causing deep structural concrete cracks & active drips.";
    case "bathroom": return "Weak tile grout and pipe joint leaks destroying lower floor ceilings.";
    case "watertank": return "Concrete tank cracks leaking water & encouraging algae/bacteria growth.";
    default: return "";
  }
}

function projectSolution(id: string): string {
  switch (id) {
    case "terrace": return "Multi-layer elastomeric PU membrane coating with glass-fiber reinforcement.";
    case "wall": return "High-strength epoxy injection with polymer-modified structural plaster seal.";
    case "roof": return "V-groove cutting, polyurethane sealant filling, and heavy duty topcoat.";
    case "bathroom": return "Non-destructive epoxy grout treatment & sub-tile waterproofing barrier.";
    case "watertank": return "Food-grade non-toxic epoxy crystalline coating and joint sealing.";
    default: return "";
  }
}
