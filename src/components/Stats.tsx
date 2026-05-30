"use client";

import React, { useEffect, useState, useRef } from "react";
import { Zap, DollarSign, Clock, Award } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
  description: string;
}

function TrustCard({ icon, value, suffix, decimals = 0, label, description }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = value / steps;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            start += increment;
            if (currentStep >= steps) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, stepTime);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className="glass-card flex flex-col items-center justify-center p-8 rounded-3xl text-center group border border-slate-200 dark:border-brand-navyLight"
    >
      <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 dark:bg-brand-orange/5 border border-brand-orange/20 flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div className="font-outfit text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-navy dark:text-white mb-2">
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        {suffix}
      </div>
      <div className="text-sm sm:text-base font-extrabold tracking-wide uppercase text-brand-orange mb-2">
        {label}
      </div>
      <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
        {description}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="trust-bar" className="relative py-20 bg-brand-lightBg dark:bg-brand-navyDark border-t border-b border-slate-200 dark:border-brand-navyLight">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <TrustCard
            icon={<Award className="w-7 h-7" />}
            value={15}
            suffix="+"
            label="Waterproofing Experts"
            description="Certified chemical engineers and skilled workers with 15+ years experience."
          />
          <TrustCard
            icon={<Zap className="w-7 h-7" />}
            value={24}
            suffix=" Hr"
            label="Fast Service"
            description="Same day inspection response and prompt turnkey project execution."
          />
          <TrustCard
            icon={<DollarSign className="w-7 h-7" />}
            value={100}
            suffix="%"
            label="Affordable Pricing"
            description="Premium leakage stop solutions fit for standard budgets with zero hidden costs."
          />
          <TrustCard
            icon={<Clock className="w-7 h-7" />}
            value={15}
            suffix=" Yrs"
            label="Long Lasting Results"
            description="Ponding-tested durability backed by comprehensive written guarantees."
          />
        </div>
      </div>
    </section>
  );
}
