"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "Is treatment painless?",
    answer: "Yes, absolutely! We prioritize patient comfort above all else. We utilize specialized computerized micro-needle injections that deliver local anesthesia painlessly, laser-assisted surgical cutters, and advanced sedation options to make your treatments entirely comfortable and anxiety-free.",
  },
  {
    question: "Do you offer same-day treatment?",
    answer: "Yes, we do. For treatments like single-sitting root canals, crown cementations, and emergency extractions, we carry out diagnostics and treatment in the exact same visit to respect your time.",
  },
  {
    question: "Are aligners available?",
    answer: "Yes! We are certified providers of premium, invisible clear aligners. We take a complete 3D intraoral digital scan of your mouth and map out your progressive alignment journey on screen before custom-printing your thermoplastic alignment trays.",
  },
  {
    question: "Do you accept emergency appointments?",
    answer: "Yes, we always reserve emergency priority slots everyday. If you are experiencing acute thumping pain, dental fractures, a knocked-out tooth, or a damaged bridge/cap, call us directly at 9970418588 to secure a same-day priority appointment.",
  },
  {
    question: "What are the payment options?",
    answer: "We offer multiple payment modes for your convenience: Cash, UPI, Debit Cards, Credit Cards, and corporate dental insurance options. For major restorative treatments like Implants and Aligners, we also provide 0% interest monthly EMI options.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-brand-dark">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-blue">
            Common Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark dark:text-white">
            Frequently Asked <br />
            <span className="bg-gradient-to-r from-brand-blue to-cyan-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Have questions about dental procedures, costs, or appointments? Explore our answers below.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left font-serif text-base sm:text-lg font-bold text-brand-dark dark:text-white hover:text-brand-blue dark:hover:text-sky-400 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span>{item.question}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-500 dark:text-slate-400 flex-shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Body */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-slate-100 dark:border-slate-800/80" : "max-h-0"
                  }`}
                >
                  <div className="py-5 px-6 sm:px-8 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
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
