"use client";

import React from "react";
import { Star, CheckCircle, Sparkles } from "lucide-react";

interface Testimonial {
  name: string;
  image: string;
  property: string;
  rating: number;
  review: string;
}

const testimonialsList: Testimonial[] = [
  {
    name: "Rajesh Sharma",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    property: "Homeowner, Thane West",
    rating: 5,
    review: "Our terrace had active drips destroying the bedroom ceiling every monsoon. Waterproofing Experts filled the deep cracks with PU sealant and applied a 5-layer elastomeric membrane. Outstanding work, completely leak-free now!",
  },
  {
    name: "Meera Kulkarni",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    property: "Apartment Owner, Pune",
    rating: 5,
    review: "Highly professional team. They diagnosed our wall seepage issue using a thermal imaging camera. The chemical injection grouting blocked the rising dampness within 48 hours without breaking tiles. The paint is dry and looks perfect!",
  },
  {
    name: "Vikram Malhotra",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    property: "Society Chairman, Mumbai",
    rating: 5,
    review: "We contracted them to treat our society water tanks and terrace (15,000 sq ft). Their chemical engineers did ponding testing for 48 hours to prove efficiency. The written 10-Year warranty certificate gave the entire society complete peace of mind.",
  },
  {
    name: "Ananya Deshmukh",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    property: "Penthouse Owner, Bangalore",
    rating: 5,
    review: "I had massive bathroom slab leakage causing dampness downstairs. They sealed the sub-tile structure with non-destructive epoxy grouting. Excellent results, absolutely zero leakage, highly recommend their clean, fast-execution process!",
  },
  {
    name: "Sandeep Mehta",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    property: "Warehouse Manager, Navi Mumbai",
    rating: 5,
    review: "Our commercial warehouse had major roof metal sheet joint leaks. The team treated it with APP torch-on membrane and reflective cool coats. Not only has the leakage completely stopped, but the indoor warehouse temperature has also dropped by 5°C!",
  },
  {
    name: "Dr. Aditya Sen",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150",
    property: "Bungalow Owner, Delhi NCR",
    rating: 5,
    review: "Terrific waterproofing service. They treated our basement walls against heavy rising moisture with active crystalline sealers. The damp smell has gone completely, and the moisture level is officially under 4%. Pure engineered excellence.",
  }
];

export default function Testimonials() {
  // Duplicate list to create a seamless infinite marquee effect
  const doubleList = [...testimonialsList, ...testimonialsList];

  return (
    <section id="reviews" className="py-24 bg-white dark:bg-brand-navyDark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Testimonials</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy dark:text-white leading-tight">
            Trusted By Thousands of <br />
            <span className="bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent">Happy Property Owners</span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
            Read real, verified reviews from homeowners, society managers, and commercial engineers who experienced permanent leakage cures.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="flex w-max gap-6 animate-infinite-scroll hover:[animation-play-state:paused] px-4 select-none">
        {doubleList.map((test, idx) => (
          <div
            key={idx}
            className="glass-card flex flex-col justify-between p-8 rounded-[28px] w-[320px] sm:w-[380px] shrink-0 border border-slate-200 dark:border-brand-navyLight"
          >
            {/* Stars & verified */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex gap-1 text-brand-orange">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-green-500 uppercase tracking-wider">
                <CheckCircle className="w-3.5 h-3.5 fill-green-500/10 text-green-500" />
                <span>Verified Client</span>
              </div>
            </div>

            {/* Review text */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed font-semibold mb-6">
              &ldquo;{test.review}&rdquo;
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4 border-t border-slate-200 dark:border-brand-navyLight pt-5 mt-auto">
              <img
                src={test.image}
                alt={test.name}
                className="w-11 h-11 rounded-full object-cover border border-slate-200 dark:border-slate-800"
                loading="lazy"
              />
              <div>
                <h4 className="text-sm font-extrabold text-brand-navy dark:text-white">
                  {test.name}
                </h4>
                <span className="text-[10px] font-black uppercase text-brand-orange tracking-widest block mt-0.5">
                  {test.property}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
