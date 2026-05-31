"use client";

import React from "react";
import { Phone, ShieldCheck, MessageCircle } from "lucide-react";
import { whatsappLink, phone1, phone2, phone1Display, phone2Display, companyName } from "@/config/whatsapp";

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className="bg-brand-navyDark text-slate-400 border-t border-brand-navyLight">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

        {/* Column 1: Branding & Intro */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-orange to-red-500 flex items-center justify-center text-white shadow-md">
              <ShieldCheck className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-outfit text-base font-extrabold tracking-tight text-white leading-none">
                THAKUR
              </span>
              <span className="font-outfit text-[10px] font-bold text-brand-orange tracking-widest leading-none mt-1">
                WATERPROOFING
              </span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold">
            Professional Waterproofing Solutions for Homes, Buildings &amp; Commercial Properties. Permanent leakage cures with multi-year written guarantees.
          </p>

          {/* WhatsApp social icon */}
          <div className="flex gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors duration-300 shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current stroke-none" />
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="text-white font-outfit text-xs font-black uppercase tracking-widest text-brand-orange border-b border-brand-navyLight pb-2">
            Our Services
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm font-semibold">
            {[
              "Terrace Waterproofing",
              "Roof Waterproofing",
              "Bathroom Waterproofing",
              "Wall Seepage Treatment",
              "Water Tank Waterproofing",
              "Crack Filling",
              "Heatproof Coating",
            ].map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "#services")}
                  className="hover:text-brand-orange transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-brand-orange rounded-full flex-shrink-0" />
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact details */}
        <div className="lg:col-span-5 space-y-6">
          <h4 className="text-white font-outfit text-xs font-black uppercase tracking-widest text-brand-orange border-b border-brand-navyLight pb-2">
            Contact Us
          </h4>
          <div className="space-y-4 text-xs sm:text-sm font-semibold">
            {/* Phone 1 */}
            <a
              href={`tel:${phone1}`}
              className="flex items-center gap-3 hover:text-brand-orange transition-colors group"
            >
              <div className="w-9 h-9 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                <Phone className="w-4 h-4 text-brand-orange group-hover:text-white" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider">Primary Phone</span>
                <span>{phone1Display}</span>
              </div>
            </a>

            {/* Phone 2 */}
            <a
              href={`tel:${phone2}`}
              className="flex items-center gap-3 hover:text-brand-orange transition-colors group"
            >
              <div className="w-9 h-9 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                <Phone className="w-4 h-4 text-brand-orange group-hover:text-white" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider">Secondary Phone</span>
                <span>{phone2Display}</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-green-400 transition-colors group"
            >
              <div className="w-9 h-9 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-[#25D366] transition-colors duration-300">
                <MessageCircle className="w-4 h-4 text-green-400 fill-current stroke-none group-hover:text-white" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider">WhatsApp</span>
                <span>Chat with Expert Now</span>
              </div>
            </a>

            {/* Large CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-extrabold uppercase tracking-wider shadow-orange transition-all duration-300 hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              Get Free Inspection
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800 bg-black/40 py-6 text-center text-xs text-slate-500 font-semibold uppercase tracking-wider">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#how-we-work" onClick={(e) => handleLinkClick(e, "#how-we-work")} className="hover:text-brand-orange">Our Process</a>
            <a href="#warranty" onClick={(e) => handleLinkClick(e, "#warranty")} className="hover:text-brand-orange">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
