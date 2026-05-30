"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { whatsappLink } from "@/config/whatsapp";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-brand-navyDark"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Cinematic loops showing water droplets / architectural durability */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35"
          poster="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1920"
        >
          <source
            src="https://player.vimeo.com/external/517602124.sd.mp4?s=d0f04c643bf7e21249ad22e11d044e05eb436329&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        
        {/* Soft, professional dark navy gradients for high legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navyDark/95 via-brand-navy/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark via-transparent to-brand-navyDark/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left conversion column */}
        <motion.div
          className="lg:col-span-8 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Trust Accent Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-black uppercase tracking-wider mb-6"
          >
            <ShieldCheck className="w-4 h-4 animate-pulse" />
            <span>🇮🇳 India&apos;s Certified Waterproofing Experts</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-outfit text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            Stop Leakage Before It <br />
            <span className="bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent">
              Damages Your Home
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed font-medium"
          >
            Professional Waterproofing Solutions For Terraces, Roofs, Bathrooms & Walls.
          </motion.p>

          {/* Trust Highlights */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-x-6 gap-y-3 mb-10 text-slate-300 text-sm font-semibold"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-brand-orange" />
              <span>10+ Years Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-brand-orange" />
              <span>100% Leak Proofing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-brand-orange" />
              <span>Certified Engineers</span>
            </div>
          </motion.div>

          {/* Twin CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-center text-sm font-bold uppercase tracking-wider text-white bg-brand-orange hover:bg-brand-orangeHover shadow-orange hover:shadow-orange-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="w-5 h-5 fill-white stroke-none" />
              Contact For Your Deal
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-center text-sm font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-brand-navyLight border border-slate-700 hover:border-slate-500 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Free Inspection
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
