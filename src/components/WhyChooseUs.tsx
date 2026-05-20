"use client";

import React from "react";
import {
  Smile,
  Cpu,
  Award,
  DollarSign,
  Heart,
  ShieldAlert,
  Coffee,
  Sparkles,
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Smile,
      title: "Painless Procedures",
      description: "Advanced local anesthesia and micro-needle technology for a comfortable, stress-free treatment.",
    },
    {
      icon: Cpu,
      title: "Advanced Digital Dentistry",
      description: "State-of-the-art 3D intraoral scanners, digital X-rays, and AI mapping for unmatched accuracy.",
    },
    {
      icon: Award,
      title: "Expert Dental Care",
      description: "Led by internationally trained specialists with cumulative clinical experience of over 10+ years.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Honest quotes, upfront prices, and flexible corporate and zero-cost EMI payment plans.",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Every treatment starts with a custom diagnostic plan tailored to your facial aesthetics.",
    },
    {
      icon: Sparkles,
      title: "Modern Technology",
      description: "Equipped with cold-blue whitening lasers, high-torque rotary RCT motors, and digital shade adjusters.",
    },
    {
      icon: ShieldAlert,
      title: "Emergency Support",
      description: "Same-day priority bookings for emergency situations like thumping pain, dental fractures, or lost caps.",
    },
    {
      icon: Coffee,
      title: "Comfortable Experience",
      description: "LOMA-inspired modern interiors, complimentary gourmet beverages, and noise-canceling headphones.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-blue">
            Our Patient Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark dark:text-white">
            Why Patients Choose <br />
            <span className="bg-gradient-to-r from-brand-blue to-cyan-500 bg-clip-text text-transparent">
              Dentazone Thane
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            We are committed to rendering an unparalleled dental care experience centered around absolute safety, high aesthetics, and painless execution.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col items-start gap-5 hover:border-brand-blue/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-lightBlue/60 dark:bg-brand-blue/10 border border-brand-blue/10 flex items-center justify-center text-brand-blue shadow-sm">
                  <Icon className="w-5.5 h-5.5" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-bold text-brand-dark dark:text-white">
                    {point.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
