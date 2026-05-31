"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Menu, X, ShieldCheck, Phone } from "lucide-react";
import { whatsappLink, phone1Display, phone2Display, phone1, phone2 } from "@/config/whatsapp";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Before & After", href: "#before-after" },
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Projects", href: "#projects" },
  { label: "Videos", href: "#video-showcase" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faq" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.replace("#", ""));
      const currentScroll = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-panel shadow-glass py-3"
          : "bg-transparent py-4 border-b border-transparent"
      }`}
    >
      {/* Top contact bar */}
      <div className={`border-b border-brand-orange/20 transition-all duration-300 ${isScrolled ? "hidden" : "block"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-1.5 flex items-center justify-end gap-6 text-xs font-semibold text-slate-300">
          <a href={`tel:${phone1}`} className="flex items-center gap-1.5 hover:text-brand-orange transition-colors">
            <Phone className="w-3 h-3" />
            {phone1Display}
          </a>
          <span className="text-slate-600">|</span>
          <a href={`tel:${phone2}`} className="flex items-center gap-1.5 hover:text-brand-orange transition-colors">
            <Phone className="w-3 h-3" />
            {phone2Display}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-orange to-red-500 flex items-center justify-center text-white shadow-md transform group-hover:scale-105 transition-transform duration-300">
            <ShieldCheck className="w-5 h-5 animate-pulse-slow" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-xl font-extrabold tracking-tight text-brand-navy dark:text-white leading-none">
              THAKUR
            </span>
            <span className="font-sans text-xs font-bold text-brand-orange tracking-widest leading-none mt-0.5">
              WATERPROOFING
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-xs xl:text-sm font-semibold uppercase tracking-wider transition-colors duration-300 hover:text-brand-orange ${
                activeSection === link.href.replace("#", "")
                  ? "text-brand-orange font-bold"
                  : "text-slate-700 dark:text-slate-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Phone quick dial */}
          <a
            href={`tel:${phone1}`}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-orange hover:text-brand-orange transition-all duration-300"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors duration-300"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* WhatsApp CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-white bg-brand-orange hover:bg-brand-orangeHover shadow-orange hover:shadow-orange-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Free Inspection
          </a>
        </div>

        {/* Mobile Nav Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a href={`tel:${phone1}`} className="w-9 h-9 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 dark:text-slate-200"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[64px] z-40 bg-white/95 dark:bg-brand-navyDark/95 backdrop-blur-md transition-all duration-500 lg:hidden flex flex-col items-center justify-center gap-6 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-lg font-bold uppercase tracking-widest transition-colors duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-brand-orange"
                  : "text-brand-navy dark:text-slate-200"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile contact buttons */}
        <div className="flex flex-col items-center gap-3 w-full px-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-8 py-3.5 rounded-full text-sm font-extrabold uppercase tracking-widest text-white bg-brand-orange shadow-orange text-center"
          >
            💬 Chat on WhatsApp
          </a>
          <a
            href={`tel:${phone1}`}
            className="w-full px-8 py-3.5 rounded-full text-sm font-bold border border-slate-300 dark:border-slate-700 text-brand-navy dark:text-white text-center flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" /> {phone1Display}
          </a>
          <a
            href={`tel:${phone2}`}
            className="w-full px-8 py-3.5 rounded-full text-sm font-bold border border-slate-300 dark:border-slate-700 text-brand-navy dark:text-white text-center flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" /> {phone2Display}
          </a>
        </div>
      </div>
    </header>
  );
}
