"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle, Sparkles } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "How long does waterproofing last?",
    answer: "Standard polymer-acrylic treatments typically last 5 to 7 years, whereas premium polyurethanes (PU) and crystalline pressure injections are engineered to easily last 10 to 15+ years. Our premium services come backed by a legally binding written warranty certificate (5, 10, or 15 years) ensuring lifetime protection.",
  },
  {
    question: "What is terrace waterproofing cost?",
    answer: "Waterproofing costs depend on the existing surface damage and choice of materials. Standard polymer-acrylic coatings range between ₹40 to ₹60 per sq. ft., whereas heavy-duty multi-layer elastomeric PU membrane treatments (with glass-fiber mesh) range from ₹80 to ₹125 per sq. ft. We provide completely transparent, itemized free quotes with no hidden charges.",
  },
  {
    question: "Can leakage be permanently stopped?",
    answer: "Yes, absolutely! Leakages can be permanently cured through correct engineering diagnostics. By locating the root source with thermal cameras, pressure-injecting deep crystalline active grouting into structure honeycombs, and coating with high-flexibility elastomeric membranes, we stop active ingress forever.",
  },
  {
    question: "Which waterproofing chemicals are used?",
    answer: "We use only certified, high-performance chemicals from industry leaders like Dr. Fixit, Sika, Fosroc, Laticrete, and Asian Paints SmartCare. This includes advanced elastomeric liquid polyurethanes, crystal pore-blockers, expansive PU joint sealants, and non-toxic food-grade epoxies for water tanks.",
  },
  {
    question: "How long does the process take?",
    answer: "A standard terrace, roof, or wet-area waterproofing project takes between 3 to 5 working days. This timeframe covers high-pressure concrete washing, V-groove crack filling and curing, multi-layer coating intervals, and a rigorous 48-hour physical water ponding validation to verify complete waterproofing before handover.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-brand-lightBg dark:bg-brand-navy">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy dark:text-white leading-tight">
            Frequently Asked <br />
            <span className="bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent">Information & Answers</span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
            Explore our clear, engineered explanations regarding waterproofing costs, chemical brands, timelines, and guarantees.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-[24px] border border-slate-200 dark:border-brand-navyLight overflow-hidden transition-all duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left font-outfit text-base sm:text-lg font-extrabold text-brand-navy dark:text-white hover:text-brand-orange dark:hover:text-brand-orange transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <span>{item.question}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-brand-navyLight flex items-center justify-center text-slate-500 dark:text-slate-400 flex-shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Body */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[350px] border-t border-slate-200 dark:border-brand-navyLight" : "max-h-0"
                  }`}
                >
                  <div className="py-5 px-6 sm:px-8 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
