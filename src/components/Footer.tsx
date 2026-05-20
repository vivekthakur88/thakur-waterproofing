"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react";

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
    <footer id="footer" className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        
        {/* Column 1: Branding & Intro */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-cyan-400 flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              Dentazone
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed font-sans">
            Experiencing dental care as a premium luxury service. Dentazone Thane West incorporates digital 3D operatory platforms and board-certified experts to transform smiles painlessly.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/dentazone_advanceddentalcare/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-blue hover:text-slate-950 transition-colors duration-300 shadow-sm"
              aria-label="Instagram Link"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick links */}
        <div className="lg:col-span-2 space-y-6">
          <h4 className="text-white font-serif text-sm font-bold uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-3.5 text-sm">
            {[
              { label: "Home", href: "#home" },
              { label: "About Us", href: "#about" },
              { label: "Our Services", href: "#services" },
              { label: "Why Choose Us", href: "#why-us" },
              { label: "Our Doctors", href: "#doctors" },
              { label: "Gallery", href: "#gallery" },
              { label: "FAQs", href: "#faq" },
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-brand-blue transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Hours & Contact Cards */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="text-white font-serif text-sm font-bold uppercase tracking-wider">
            Working Hours
          </h4>
          <div className="space-y-4 text-sm font-sans">
            <div className="flex gap-3">
              <Clock className="w-5 h-5 text-brand-blue flex-shrink-0" />
              <div>
                <p className="font-bold text-white text-xs uppercase tracking-wide">
                  Monday to Saturday
                </p>
                <p className="text-slate-400 text-xs">
                  10:00 AM – 2:30 PM <br />
                  5:30 PM – 9:30 PM
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div>
                <p className="font-bold text-white text-xs uppercase tracking-wide">Sunday</p>
                <p className="text-red-400 text-xs">Closed</p>
              </div>
            </div>
          </div>

          <h4 className="text-white font-serif text-sm font-bold uppercase tracking-wider pt-2">
            Get in Touch
          </h4>
          <div className="space-y-3.5 text-sm font-sans">
            <a href="tel:9970418588" className="flex items-center gap-3 hover:text-brand-blue">
              <Phone className="w-4.5 h-4.5 text-brand-blue" />
              <span>9970418588</span>
            </a>
            <a href="mailto:vith84852@gmail.com" className="flex items-center gap-3 hover:text-brand-blue">
              <Mail className="w-4.5 h-4.5 text-brand-blue" />
              <span>vith84852@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Column 4: Google Maps Embed */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="text-white font-serif text-sm font-bold uppercase tracking-wider">
            Our Location
          </h4>
          <div className="space-y-4">
            <a
              href="https://www.google.com/maps/place/Dentazone/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 hover:text-brand-blue text-xs leading-relaxed"
            >
              <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0" />
              <span>
                Shop No. 6, Advanced Multispeciality Dental Care, Wadhwa Elite, 19, Kolshet Rd, Thane West, Maharashtra 400607
              </span>
            </a>

            <div className="rounded-2xl overflow-hidden border border-slate-800 h-36 relative">
              {/* Premium Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.147285141014!2d72.9814421!3d19.2312028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb9f12d596cb%3A0xc3fde93a11681f21!2sDentazone!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dentazone Google Maps Location"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800 bg-slate-950/40 py-6 text-center text-xs text-slate-500 font-sans">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Dentazone Advanced Multispeciality Dental Care. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-brand-blue">Privacy Policy</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-brand-blue">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
