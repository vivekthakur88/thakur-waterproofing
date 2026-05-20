"use client";

import React from "react";
import { Star, CheckCircle } from "lucide-react";

interface Testimonial {
  name: string;
  image: string;
  treatment: string;
  rating: number;
  review: string;
}

const testimonialsList: Testimonial[] = [
  {
    name: "Vivek Salunkhe",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    treatment: "Dental Implants",
    rating: 5,
    review: "Excellent experience at Dentazone. Dr. Vivek is highly experienced and explained the entire implant process patiently. The surgery was completely painless and healing was smooth. Highly recommended!",
  },
  {
    name: "Priya Nair",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    treatment: "Smile Makeover (Veneers)",
    rating: 5,
    review: "Got my smile makeover done with premium porcelain veneers here. The digital 3D design matched my face shape perfectly. The results are breathtaking and look 100% natural! Incredible hospitality.",
  },
  {
    name: "Amit Patil",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    treatment: "Single-Sitting RCT",
    rating: 5,
    review: "My single-sitting Root Canal was completed within 45 minutes. Absolutely painless, digital rotary motors were used. The clinic sterilization is global grade. The best modern dental clinic in Thane!",
  },
  {
    name: "Sneha Iyer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    treatment: "Clear Aligners",
    rating: 5,
    review: "Highly recommend Dr. Rohan for aligners. The 3D intraoral scan was incredibly fast, and the invisible aligner trays are comfortable to wear. I've seen major smile alignment in just 4 months!",
  },
  {
    name: "Rahul Joshi",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    treatment: "Wisdom Tooth Extraction",
    rating: 5,
    review: "Had an impacted wisdom tooth extraction. Dr. Vivek was extremely fast and atraumatic. The swelling was minimal and I was back to work in 24 hours. Phenomenal post-operative support.",
  },
];

export default function Testimonials() {
  // Duplicate list to create a seamless infinite marquee effect
  const doubleList = [...testimonialsList, ...testimonialsList];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-blue">
            Patient Success Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark dark:text-white">
            Loved By Over <br />
            <span className="bg-gradient-to-r from-brand-blue to-cyan-500 bg-clip-text text-transparent">
              5000+ Smiling Patients
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Read how we have transformed smiles and dental confidence with clinical precision.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="flex w-max gap-8 animate-infinite-scroll hover:[animation-play-state:paused] px-4">
        {doubleList.map((test, idx) => (
          <div
            key={idx}
            className="glass-card flex flex-col justify-between p-8 rounded-3xl w-[320px] sm:w-[400px] shrink-0 border border-slate-100 dark:border-slate-800"
          >
            {/* Stars & verified */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400">
                <CheckCircle className="w-3.5 h-3.5 fill-current text-white dark:text-slate-950" />
                <span>Verified Patient</span>
              </div>
            </div>

            {/* Review text */}
            <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed font-sans mb-8">
              &ldquo;{test.review}&rdquo;
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800/80 pt-5">
              <img
                src={test.image}
                alt={test.name}
                className="w-12 h-12 rounded-full object-cover border border-slate-200 dark:border-slate-800"
              />
              <div>
                <h4 className="text-sm font-bold text-brand-dark dark:text-white">
                  {test.name}
                </h4>
                <span className="text-[10px] font-bold uppercase text-brand-blue tracking-wide">
                  {test.treatment}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
