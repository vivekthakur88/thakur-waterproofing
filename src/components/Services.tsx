"use client";

import React, { useState } from "react";
import {
  Layers,
  Shield,
  Sparkles,
  Crown,
  Grid,
  Activity,
  Heart,
  Smile,
  Scissors,
  Zap,
  X,
  Calendar,
} from "lucide-react";

interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  shortDesc: string;
  longDesc: string;
  duration: string;
  benefits: string[];
}

const servicesList: Service[] = [
  {
    id: "implants",
    icon: Layers,
    title: "Dental Implants",
    shortDesc: "Permanent, premium titanium teeth replacements that match organic root structure.",
    longDesc: "Dental implants represent the pinnacle of modern restorative dentistry. A medical-grade titanium screw is surgically embedded into the jawbone to act as an organic tooth root, supporting a flawless, customized ceramic crown that blends seamlessly with your natural teeth.",
    duration: "2 - 3 Sessions (spread over healing time)",
    benefits: ["Restores full chewing power", "Prevents bone loss in the jaw", "Matches look and feel of natural teeth", "Designed to last a lifetime"],
  },
  {
    id: "rct",
    icon: Shield,
    title: "Root Canal Treatment",
    shortDesc: "Painless single-sitting micro-endodontics to salvage severely infected teeth.",
    longDesc: "Our state-of-the-art endodontics uses advanced rotary systems and digital mapping to clean, sanitize, and seal infected tooth pulp in a single sitting. The entire procedure is completed painlessly under local anesthesia, salvaging your natural tooth from extraction.",
    duration: "1 Session (45 - 60 minutes)",
    benefits: ["Saves your natural tooth", "Eliminates acute, thumping toothaches", "Virtually painless micro-surgical approach", "Prevents spread of deep jaw infections"],
  },
  {
    id: "whitening",
    icon: Sparkles,
    title: "Teeth Whitening",
    shortDesc: "Advanced laser whitening system for a smile up to 8 shades brighter.",
    longDesc: "Brighten your smile in under an hour with our clinically certified laser whitening system. We apply a protective barrier to your gums, followed by a medical-grade peroxide gel activated by a cold-blue light to break down deep organic stains safely.",
    duration: "1 Session (45 minutes)",
    benefits: ["Instantly brightens up to 8 shades", "Safe for enamel & sensitive teeth", "Long-lasting premium results", "Perfect before key events or weddings"],
  },
  {
    id: "makeover",
    icon: Crown,
    title: "Smile Makeover",
    shortDesc: "Bespoke digital smile design using luxury veneers and cosmetic alignment.",
    longDesc: "A complete custom reconstruction combining composite bonding, laser gum contouring, and luxury porcelain crowns. We utilize 3D facial scans to draft a digital blueprint of your ideal smile shape, size, and shade before implementing the physical alterations.",
    duration: "2 - 3 Sessions",
    benefits: ["Corrects symmetry, chips, and spaces", "Matches individual facial proportions", "Boosts social confidence instantly", "Uses premium stain-resistant porcelain"],
  },
  {
    id: "aligners",
    icon: Grid,
    title: "Clear Aligners",
    shortDesc: "Invisible custom-molded digital aligners for comfortable teeth straightening.",
    longDesc: "Straighten your teeth without wires or metal brackets. Our clear aligners are custom-printed thermoplastic trays constructed from precise 3D intraoral scans. They are virtually invisible, comfortable, and removable for eating, brushing, and flossing.",
    duration: "6 - 18 Months (independent progress trays)",
    benefits: ["100% invisible and comfortable", "Removable for meals and oral hygiene", "Fewer clinic visits required", "Predictable digital result tracking"],
  },
  {
    id: "braces",
    icon: Activity,
    title: "Dental Braces",
    shortDesc: "Precision self-ligating ceramic and metallic brackets for structural correction.",
    longDesc: "Correct severe malocclusions, overbites, and misalignments using our modern low-friction orthodontic systems. We offer ultra-thin ceramic brackets that blend with tooth colors, and traditional stainless-steel brackets for durable corrections.",
    duration: "12 - 24 Months",
    benefits: ["Treats highly complex structural issues", "Improves long-term chewing and bite", "Creates permanent skeletal symmetry", "Cost-effective tooth straightening option"],
  },
  {
    id: "kids",
    icon: Heart,
    title: "Kids Dentistry",
    shortDesc: "Gentle, anxiety-free pediatric dental checkups, sealants, and cavity care.",
    longDesc: "Our pediatric specialists focus on building positive, warm relationships with young patients. We provide preventive fluoride applications, cavity-sealing pit/fissure sealants, and custom mouthguards in an environment designed to eliminate clinical anxiety.",
    duration: "1 Session (30 minutes)",
    benefits: ["Gentle, warm, and playful environment", "Prevents childhood tooth decay early", "Builds lifelong positive hygiene habits", "Monitors developing jaw structure"],
  },
  {
    id: "veneers",
    icon: Smile,
    title: "Dental Veneers",
    shortDesc: "Ultra-thin custom porcelain shells that mask chips, gaps, and severe stains.",
    longDesc: "A veneer is a micro-thin shell of high-end clinical porcelain bonded to the front of a tooth. It covers gaps, severe internal chemical staining, chips, and small misalignments, offering a flawless, bright appearance with minimal enamel reduction.",
    duration: "2 Sessions",
    benefits: ["Ultra-natural light reflection", "Extremely stain-resistant material", "Minimally invasive enamel prepping", "Perfects tooth color, shape, and length"],
  },
  {
    id: "extraction",
    icon: Scissors,
    title: "Tooth Extraction",
    shortDesc: "Atraumatic extraction of impacted wisdom teeth and non-restorable roots.",
    longDesc: "Our oral surgeons utilize specialized atraumatic techniques to extract severely impacted wisdom teeth or broken roots. The procedure is performed under deep local anesthesia with specialized micro-instruments, minimizing trauma to the surrounding bone and gums.",
    duration: "1 Session (30 - 45 minutes)",
    benefits: ["Relieves acute wisdom tooth pressure", "Prevents crowding of adjacent teeth", "Micro-precision minimizes post-op swelling", "Quick healing and recovery protocol"],
  },
  {
    id: "gum",
    icon: Zap,
    title: "Gum Treatment",
    shortDesc: "Advanced laser scaling, root planing, and micro-therapy for bleeding gums.",
    longDesc: "Combat bleeding gums and bad breath with our deep scaling and laser-assisted periodontal treatments. We remove hardened tartar and bacteria deposits from deep beneath the gum line, stimulating healthy gum re-attachment and reversing early gingivitis.",
    duration: "1 - 2 Sessions",
    benefits: ["Stops chronic gum bleeding and bad breath", "Prevents loose teeth and bone damage", "Stimulates healthy tissue regeneration", "Advanced painless laser disinfection"],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleBookClick = () => {
    setSelectedService(null);
    const targetElement = document.getElementById("appointment");
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
    <section id="services" className="py-24 bg-slate-50 dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-blue">
            Our Specialties
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark dark:text-white">
            World-Class Care, <br />
            <span className="bg-gradient-to-r from-brand-blue to-cyan-500 bg-clip-text text-transparent">
              Tailored For Your Smile
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            From luxury smile designs to advanced implantology, experience painless, precise treatments in a serene environment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="glass-card flex flex-col justify-between p-8 rounded-[32px] group relative overflow-hidden"
              >
                {/* Visual hover background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-2xl group-hover:bg-brand-blue/15 transition-colors duration-500 z-0" />

                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-lightBlue/60 dark:bg-brand-blue/10 border border-brand-blue/10 flex items-center justify-center text-brand-blue shadow-sm group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-bold text-brand-dark dark:text-white group-hover:text-brand-blue transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-sky-400 group-hover:text-brand-blue flex items-center gap-1.5 transition-colors duration-300"
                  >
                    Learn More
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Details Modal/Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 animate-fade-in-up">
            
            {/* Header image/color accent */}
            <div className="h-4 bg-gradient-to-r from-brand-blue via-cyan-400 to-brand-blue" />
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-8 right-8 w-10 h-10 rounded-full border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-8 sm:p-10 space-y-6 max-h-[85vh] overflow-y-auto">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-lightBlue/60 dark:bg-brand-blue/10 border border-brand-blue/10 flex items-center justify-center text-brand-blue">
                  {React.createElement(selectedService.icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                    Treatment Details
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark dark:text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {selectedService.longDesc}
                </p>
                
                {/* Duration */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span className="text-brand-blue">Estimated duration:</span>
                  {selectedService.duration}
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Clinical Benefits
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
                  {selectedService.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Have questions? Speak to our orthodontists and implants coordinators directly.
                </p>
                <button
                  onClick={handleBookClick}
                  className="px-6 py-3 rounded-full text-center text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-brand-dark to-slate-800 dark:from-sky-500 dark:to-brand-blue dark:text-brand-dark flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Free Consultation
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
