"use client";

import React, { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { whatsappLink, phone1, phone2, phone1Display, phone2Display } from "@/config/whatsapp";

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

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col items-end gap-3 pointer-events-auto">
        {/* Call buttons */}
        <a
          href={`tel:${phone1}`}
          className="flex items-center gap-2 bg-brand-navy/90 border border-slate-700 text-white text-xs font-bold py-2.5 px-4 rounded-full shadow-lg hover:bg-brand-navyLight hover:border-brand-orange transition-all duration-300 backdrop-blur-md"
        >
          <Phone className="w-3.5 h-3.5 text-brand-orange" />
          {phone1Display}
        </a>
        <a
          href={`tel:${phone2}`}
          className="flex items-center gap-2 bg-brand-navy/90 border border-slate-700 text-white text-xs font-bold py-2.5 px-4 rounded-full shadow-lg hover:bg-brand-navyLight hover:border-brand-orange transition-all duration-300 backdrop-blur-md"
        >
          <Phone className="w-3.5 h-3.5 text-brand-orange" />
          {phone2Display}
        </a>

        {/* WhatsApp float button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0_8px_30px_rgb(37,211,102,0.4)] flex items-center justify-center transform active:scale-95 hover:scale-110 transition-all duration-300 relative group"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping z-0" />
          <MessageCircle className="w-8 h-8 relative z-10 fill-white stroke-none" />
          <span className="absolute right-20 bg-brand-navy text-white text-xs font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none border border-slate-700">
            💬 Chat with Expert
          </span>
        </a>
      </div>

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 dark:bg-brand-navy/95 border-t border-slate-200 dark:border-brand-navyLight shadow-[0_-8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md px-3 py-2 animate-fade-in-up">
        <div className="flex gap-2">
          {/* Call Now - Primary number */}
          <a
            href={`tel:${phone1}`}
            className="flex-1 flex items-center justify-center gap-1.5 bg-brand-navyLight border border-slate-300 dark:border-brand-navyLight dark:bg-brand-navyDark py-3 px-2 rounded-xl text-brand-navy dark:text-white font-extrabold text-[10px] uppercase tracking-wider transition-all duration-300 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
            <span className="truncate">{phone1Display}</span>
          </a>

          {/* WhatsApp CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.5] flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeHover py-3 px-3 rounded-xl text-white font-extrabold text-xs uppercase tracking-wider shadow-orange transition-all duration-300 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-none flex-shrink-0" />
            WhatsApp
          </a>

          {/* Call Now - Secondary number */}
          <a
            href={`tel:${phone2}`}
            className="flex-1 flex items-center justify-center gap-1.5 bg-brand-navyLight border border-slate-300 dark:border-brand-navyLight dark:bg-brand-navyDark py-3 px-2 rounded-xl text-brand-navy dark:text-white font-extrabold text-[10px] uppercase tracking-wider transition-all duration-300 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
            <span className="truncate">{phone2Display}</span>
          </a>
        </div>
      </div>
    </>
  );
}
