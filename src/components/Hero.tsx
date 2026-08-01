"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, MessageCircle, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { whatsappLink, phone1, phone2, phone1Display, phone2Display } from "@/config/whatsapp";
import { videos, images } from "@/config/media";

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

  const imageVariants = {
    hidden: { scale: 1.08, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.0, ease: "easeOut", delay: 0.2 },
    },
  } as const;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden bg-brand-navyDark"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src={videos.hero} type="video/mp4" />
        </video>
        {/* Gradient overlays for high legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navyDark/98 via-brand-navy/90 to-brand-navyDark/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark via-transparent to-brand-navyDark/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Hero Image: shown ABOVE content on mobile ── */}
          <motion.div
            className="order-1 lg:order-2 relative"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] lg:aspect-auto lg:h-[600px]">
              {/* Professional waterproofing service image */}
              <img
                src="/vivek_p.jpeg"
                alt="VIVEK THAKUR"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 flex items-end justify-center pb-4 pointer-events-none z-20">
                <span className="text-white text-lg font-bold bg-black/40 px-2 py-1 rounded">VIVEK THAKUR</span>
              </div>
              {/* Overlay gradient for blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-navyDark/20" />

              {/* Trust Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-center">
                  <span className="block text-2xl font-extrabold text-white">500+</span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Projects Done</span>
                </div>
                <div className="flex-1 bg-brand-orange/90 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 text-center">
                  <span className="block text-2xl font-extrabold text-white">10 Yr</span>
                  <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider">Guarantee</span>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-center">
                  <span className="block text-2xl font-extrabold text-white">100%</span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Leak Proof</span>
                </div>
              </div>
            </div>

            {/* Decorative glow behind image */}
            <div className="absolute -inset-4 bg-brand-orange/10 rounded-[3rem] blur-3xl -z-10" />
          </motion.div>

          {/* ── Content Column ── */}
          <motion.div
            className="order-2 lg:order-1 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Trust Accent Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-black uppercase tracking-wider mb-5"
            >
              <ShieldCheck className="w-4 h-4 animate-pulse" />
              <span>Trusted Waterproofing Experts — India</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-outfit text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-5"
            >
              Stop Roof Leakage{" "}
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent">
                Before It Damages
              </span>{" "}
              <br className="hidden sm:inline" />
              Your Home
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 max-w-xl mb-6 leading-relaxed font-medium"
            >
              Trusted Waterproofing Experts for Terrace, Roof, Wall, Bathroom and Water Tank Protection.
            </motion.p>

            {/* Trust Highlights */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-x-5 gap-y-2.5 mb-8 text-slate-300 text-sm font-semibold"
            >
              {[
                "Free Site Inspection",
                "Expert Waterproofing Team",
                "Quality Materials",
                "Fast Service",
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6"
            >
              {/* Primary: Get Free Inspection */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-free-inspection"
                className="px-7 py-4 rounded-full text-center text-sm font-bold uppercase tracking-wider text-white bg-brand-orange hover:bg-brand-orangeHover shadow-orange hover:shadow-orange-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <ShieldCheck className="w-4 h-4" />
                Get Free Inspection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary: Chat on WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp"
                className="px-7 py-4 rounded-full text-center text-sm font-bold uppercase tracking-wider text-white bg-green-600 hover:bg-green-500 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Call Now links */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <a
                href={`tel:${phone1}`}
                id="hero-call-1"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-600 hover:border-brand-orange text-slate-300 hover:text-brand-orange text-sm font-bold transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                {phone1Display}
              </a>
              <a
                href={`tel:${phone2}`}
                id="hero-call-2"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-600 hover:border-brand-orange text-slate-300 hover:text-brand-orange text-sm font-bold transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                {phone2Display}
              </a>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="mt-8 text-xs text-slate-500 dark:text-slate-600 font-semibold uppercase tracking-widest border-t border-slate-800 pt-6 w-full"
            >
              Professional Waterproofing Solutions for Homes, Buildings &amp; Commercial Properties
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
