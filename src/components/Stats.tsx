"use client";

import React, { useEffect, useState, useRef } from "react";
import { Award, Users, Star, ThumbsUp } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
}

function StatCard({ icon, value, suffix, decimals = 0, label }: StatItemProps) {
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
      className="glass-card flex flex-col items-center justify-center p-8 rounded-3xl text-center group"
    >
      <div className="w-14 h-14 rounded-2xl bg-brand-lightBlue/50 dark:bg-brand-blue/10 border border-brand-blue/10 dark:border-brand-blue/20 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-dark dark:text-white mb-2">
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 bg-slate-50 dark:bg-brand-dark border-t border-b border-slate-100 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            icon={<Award className="w-6 h-6" />}
            value={10}
            suffix="+"
            label="Years Experience"
          />
          <StatCard
            icon={<Users className="w-6 h-6" />}
            value={5000}
            suffix="+"
            label="Smiles Transformed"
          />
          <StatCard
            icon={<Star className="w-6 h-6" />}
            value={4.9}
            suffix=""
            decimals={1}
            label="Google Rating"
          />
          <StatCard
            icon={<ThumbsUp className="w-6 h-6" />}
            value={100}
            suffix="%"
            label="Patient Satisfaction"
          />
        </div>
      </div>
    </section>
  );
}
