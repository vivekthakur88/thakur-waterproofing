"use client";

import React from "react";
import { Phone, Mail, MapPin, ShieldCheck, MessageCircle } from "lucide-react";
import { whatsappLink, contactPhone, contactEmail, businessAddress } from "@/config/whatsapp";

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

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
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
                WATERPROOFING
              </span>
              <span className="font-outfit text-[10px] font-bold text-brand-orange tracking-widest leading-none mt-1">
                EXPERTS INDIA
              </span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold">
            Certified chemical engineering and high-performance membrane solutions for residential, commercial, and apartment blocks. Curing leakage permanently with written multi-year guarantees.
          </p>
          <div className="flex gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-orange hover:text-white transition-colors duration-300 shadow-sm"
              aria-label="WhatsApp Hotline"
            >
              <MessageCircle className="w-5 h-5 fill-current stroke-none" />
            </a>
          </div>
        </div>

        {/* Column 2: Service Areas */}
        <div className="lg:col-span-2 space-y-6">
          <h4 className="text-white font-outfit text-xs font-black uppercase tracking-widest text-brand-orange border-b border-brand-navyLight pb-2">
            Service Areas
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm font-semibold">
            {[
              { label: "Thane & Ghodbunder", href: "#coverage" },
              { label: "Mumbai & suburbs", href: "#coverage" },
              { label: "Navi Mumbai", href: "#coverage" },
              { label: "Pune Metro Hub", href: "#coverage" },
              { label: "Bangalore", href: "#coverage" },
              { label: "Delhi NCR Metro", href: "#coverage" },
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-brand-orange transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact details */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="text-white font-outfit text-xs font-black uppercase tracking-widest text-brand-orange border-b border-brand-navyLight pb-2">
            Get in Touch
          </h4>
          <div className="space-y-4 text-xs sm:text-sm font-semibold">
            <a href={`tel:${contactPhone.replace(/\s+/g, "")}`} className="flex items-center gap-3 hover:text-brand-orange">
              <Phone className="w-4.5 h-4.5 text-brand-orange" />
              <span>{contactPhone}</span>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-orange">
              <MessageCircle className="w-4.5 h-4.5 text-green-500 fill-green-500/10" />
              <span>Priority WhatsApp Chat</span>
            </a>
            <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 hover:text-brand-orange">
              <Mail className="w-4.5 h-4.5 text-brand-orange" />
              <span>{contactEmail}</span>
            </a>
          </div>
        </div>

        {/* Column 4: Location Info & Embed Map */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="text-white font-outfit text-xs font-black uppercase tracking-widest text-brand-orange border-b border-brand-navyLight pb-2">
            Head Office
          </h4>
          <div className="space-y-4 text-xs font-semibold leading-relaxed">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0" />
              <span>
                {businessAddress.street}, {businessAddress.city}, {businessAddress.state} {businessAddress.postalCode}
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-800 h-28 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.147285141014!2d72.9814421!3d19.2312028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb9f12d596cb%3A0xc3fde93a11681f21!2sDentazone!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Waterproofing head office location map"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800 bg-black/40 py-6 text-center text-xs text-slate-500 font-semibold uppercase tracking-wider">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Waterproofing Experts India. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#how-we-work" onClick={(e) => handleLinkClick(e, "#how-we-work")} className="hover:text-brand-orange">Quality Process</a>
            <a href="#warranty" onClick={(e) => handleLinkClick(e, "#warranty")} className="hover:text-brand-orange">Warranty Sheet</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
