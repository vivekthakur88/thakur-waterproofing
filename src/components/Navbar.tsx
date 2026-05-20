"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Menu, X, Sparkles } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Doctors", href: "#doctors" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQs", href: "#faq" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar background on scroll
      setIsScrolled(window.scrollY > 20);

      // Track active section for navigation styling
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
      const offset = 80; // Height of sticky navbar
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
          ? "glass-panel shadow-glass py-4"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-cyan-400 flex items-center justify-center text-white shadow-md transform group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 animate-pulse-slow" />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight bg-gradient-to-r from-brand-dark via-slate-700 to-brand-blue dark:from-white dark:to-sky-400 bg-clip-text text-transparent">
            Dentazone
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-brand-blue ${
                activeSection === link.href.replace("#", "")
                  ? "text-brand-blue font-semibold"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors duration-300"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* Appointment Button */}
          <a
            href="#appointment"
            onClick={(e) => handleLinkClick(e, "#appointment")}
            className="px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-brand-dark to-slate-800 hover:from-brand-blue hover:to-cyan-500 shadow-md hover:shadow-lg dark:from-sky-500 dark:to-brand-blue dark:text-brand-dark dark:hover:from-white dark:hover:to-sky-300 transition-all duration-300 hover:-translate-y-0.5"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Nav Button */}
        <div className="flex items-center gap-3 lg:hidden">
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
        className={`fixed inset-0 top-[72px] z-40 bg-white/95 dark:bg-brand-dark/95 backdrop-blur-md transition-all duration-500 lg:hidden flex flex-col items-center justify-center gap-8 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-xl font-medium tracking-wide transition-colors duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-brand-blue font-bold"
                  : "text-slate-800 dark:text-slate-200"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#appointment"
          onClick={(e) => handleLinkClick(e, "#appointment")}
          className="px-8 py-3.5 rounded-full text-base font-semibold tracking-wide text-white bg-gradient-to-r from-brand-dark to-slate-800 dark:from-sky-500 dark:to-brand-blue dark:text-brand-dark shadow-md"
        >
          Book Appointment
        </a>
      </div>
    </header>
  );
}
