"use client";

import React, { useEffect, useState } from "react";
import { MessageSquare, Phone } from "lucide-react";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-6 bottom-6 z-40 pointer-events-none flex justify-between items-center">
      {/* Floating Call Button - Mobile Only - Bottom Left */}
      <div className="pointer-events-auto block lg:hidden">
        <a
          href="tel:9970418588"
          className="w-14 h-14 rounded-full bg-brand-blue hover:bg-sky-500 text-white shadow-lg flex items-center justify-center transform active:scale-90 hover:scale-105 transition-all duration-300 relative group"
          aria-label="Direct Phone Consultation"
        >
          {/* Subtle pulse background */}
          <span className="absolute inset-0 rounded-full bg-brand-blue/30 animate-ping z-0" />
          <Phone className="w-6 h-6 relative z-10" />
          <span className="absolute left-16 bg-brand-dark text-white text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Call Dentist Now
          </span>
        </a>
      </div>

      {/* Spacer to push WhatsApp to the right on all viewports */}
      <div className="flex-grow pointer-events-none" />

      {/* Floating WhatsApp Button - Bottom Right */}
      <div className="pointer-events-auto">
        <a
          href="https://wa.link/7oj64s"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg flex items-center justify-center transform active:scale-90 hover:scale-105 transition-all duration-300 relative group"
          aria-label="WhatsApp Priority Support"
        >
          {/* Pulsating green ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping z-0" />
          {/* Custom WhatsApp clean SVG or Lucide message icon */}
          <MessageSquare className="w-6 h-6 relative z-10 fill-current" />
          
          <span className="absolute right-16 bg-brand-dark text-white text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            WhatsApp Support
          </span>
        </a>
      </div>
    </div>
  );
}
