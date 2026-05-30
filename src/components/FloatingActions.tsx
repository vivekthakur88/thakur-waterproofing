"use client";

import React, { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { whatsappLink, contactPhone } from "@/config/whatsapp";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  // Render a sticky double-CTA bar for mobile, and a premium floating widget for desktop
  return (
    <>
      {/* Desktop Floating WhatsApp Button - Visible on lg screens */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:block pointer-events-auto">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0_8px_30px_rgb(37,211,102,0.4)] flex items-center justify-center transform active:scale-95 hover:scale-110 transition-all duration-300 relative group"
          aria-label="Waterproofing Priority WhatsApp"
        >
          {/* Pulsating green wave */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping z-0" />
          
          <MessageCircle className="w-8 h-8 relative z-10 fill-white stroke-none" />
          
          <span className="absolute right-20 bg-brand-navy text-white text-xs font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none border border-slate-700">
            💬 Chat with Expert
          </span>
        </a>
      </div>

      {/* Sticky Mobile CTA Bar - Bottom Fixed - Visible only on mobile */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 dark:bg-brand-navy/95 border-t border-slate-200 dark:border-brand-navyLight shadow-[0_-8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md px-4 py-3 animate-fade-in-up">
        <div className="flex gap-3">
          {/* Left CTA: Call Now */}
          <a
            href={`tel:${contactPhone.replace(/\s+/g, "")}`}
            className="flex-1 flex items-center justify-center gap-2 bg-brand-navyLight border border-slate-300 dark:border-brand-navyLight dark:bg-brand-navyDark py-3 px-4 rounded-xl text-brand-navy dark:text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 active:scale-95"
          >
            <Phone className="w-4 h-4 text-brand-orange animate-pulse" />
            Call Now
          </a>

          {/* Right CTA: Free Inspection on WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeHover py-3 px-4 rounded-xl text-white font-extrabold text-xs uppercase tracking-wider shadow-orange transition-all duration-300 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-none" />
            Free Inspection
          </a>
        </div>
      </div>
    </>
  );
}
