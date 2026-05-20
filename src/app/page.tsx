"use client";

import React from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Appointment from "@/components/Appointment";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      {/* Sonner Toast alerts positioned top-right for accessibility */}
      <Toaster position="top-right" richColors closeButton duration={4000} />

      {/* Floating CTA shortcuts (WhatsApp & Phone calls) */}
      <FloatingActions />

      {/* Sticky Luxury Navbar */}
      <Navbar />

      {/* Main clinical content grid */}
      <main className="relative overflow-x-hidden min-h-screen">
        {/* Fullscreen Hero */}
        <Hero />

        {/* Dynamic Count-Up Stats */}
        <Stats />

        {/* Clinical Mission & Pillars */}
        <About />

        {/* 10 Specialties & Detail Modal */}
        <Services />

        {/* 8 Patient Philosophy Matrix */}
        <WhyChooseUs />

        {/* Specialist Doctor Profiles */}
        <Doctors />

        {/* Infinite Reviews Marquee */}
        <Testimonials />

        {/* Masonry Picture Gallery & Lightbox */}
        <Gallery />

        {/* Fully Working FormSubmit.co Booking Form */}
        <Appointment />

        {/* Collapsible Accordion FAQs */}
        <FAQ />
      </main>

      {/* 4-Column Luxury Footer & Google Map */}
      <Footer />
    </>
  );
}
