"use client";

import React from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import VideoShowcase from "@/components/VideoShowcase";
import WaterTesting from "@/components/WaterTesting";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CoverageArea from "@/components/CoverageArea";
import FAQ from "@/components/FAQ";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      {/* Sonner Toast alerts for interactive elements */}
      <Toaster position="top-right" richColors closeButton duration={4000} />

      {/* Floating CTA shortcuts (WhatsApp & Phone calls) */}
      <FloatingActions />

      {/* Sticky Waterproofing Navbar */}
      <Navbar />

      {/* Main landing content container */}
      <main className="relative overflow-x-hidden min-h-screen">
        {/* SECTION 1 — HERO */}
        <Hero />

        {/* SECTION 2 — TRUST BAR */}
        <Stats />

        {/* SECTION 3 — BEFORE & AFTER SHOWCASE */}
        <BeforeAfter />

        {/* SECTION 4 — SERVICES */}
        <Services />

        {/* SECTION 5 — HOW WE WORK */}
        <WhyChooseUs />

        {/* SECTION 6 — PROJECT GALLERY */}
        <Gallery />

        {/* SECTION 7 — SITE DEMONSTRATIONS & VIDEO SHOWCASE */}
        <VideoShowcase />

        {/* SECTION 8 — WATER TESTING PROOF */}
        <WaterTesting />

        {/* SECTION 8 — CUSTOMER REVIEWS */}
        <Testimonials />

        {/* SECTION 9 — WARRANTY SECTION */}
        <About />

        {/* SECTION 10 — COVERAGE AREA */}
        <CoverageArea />

        {/* SECTION 11 — FAQ */}
        <FAQ />

        {/* SECTION 12 — FINAL CTA */}
        <Appointment />
      </main>

      {/* SECTION 13 — FOOTER */}
      <Footer />
    </>
  );
}
