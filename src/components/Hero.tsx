"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Calendar, PhoneCall, Zap, Award, Sparkles } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  const handleScrollToAppointment = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById("appointment");
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-brand-dark"
    >
      {/* Background Graphic Overlay / Luxury Dental Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920')`,
          }}
        />
        {/* Soft clinical blue gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent dark:from-brand-dark/95 dark:via-brand-dark/80 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent dark:from-brand-dark dark:via-transparent dark:to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left copy column */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-lightBlue/70 dark:bg-brand-blue/10 border border-brand-blue/20 dark:border-brand-blue/30 text-brand-blue text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Thane&apos;s Premier Dental Clinic</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-dark dark:text-white leading-[1.1] mb-6"
          >
            Advanced Dental Care <br />
            <span className="bg-gradient-to-r from-brand-blue to-cyan-500 bg-clip-text text-transparent">
              For Confident Smiles
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl mb-8 leading-relaxed font-sans"
          >
            Experience modern dentistry with personalized care, painless treatments, and cutting-edge digital technology at Thane&apos;s most premium clinic environment.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
          >
            <a
              href="#appointment"
              onClick={handleScrollToAppointment}
              className="px-8 py-4 rounded-full text-center text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-brand-dark to-slate-800 dark:from-sky-500 dark:to-brand-blue dark:text-brand-dark hover:shadow-lg dark:hover:from-white dark:hover:to-sky-300 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </a>

            <a
              href="https://wa.link/7oj64s"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-center text-sm font-semibold tracking-wide text-slate-800 dark:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-green-500" />
              WhatsApp Now
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-lg border-t border-slate-200 dark:border-slate-800/80 pt-8"
          >
            {[
              { text: "Advanced Technology", icon: Zap },
              { text: "Same Day Treatments", icon: ShieldCheck },
              { text: "Personalized Care", icon: Sparkles },
              { text: "Trusted Dental Clinic", icon: Award },
            ].map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {badge.text}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
