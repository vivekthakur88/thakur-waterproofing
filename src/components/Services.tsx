"use client";

import React, { useState } from "react";
import {
  Layers,
  Home,
  Grid,
  Droplet,
  Flame,
  Paintbrush,
  Sparkles,
  X,
  MessageCircle,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { whatsappLink } from "@/config/whatsapp";

interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  shortDesc: string;
  longDesc: string;
  chemicals: string;
  warranty: string;
  benefits: string[];
}

const servicesList: Service[] = [
  {
    id: "terrace",
    icon: Layers,
    title: "Terrace Waterproofing",
    shortDesc: "Premium multi-layer elastomeric coatings and PU membranes to seal leaky concrete slabs permanently.",
    longDesc: "Terraces face direct thermal expansion and heavy rainfall. Our premium treatment includes deep concrete cleaning, crack filling, applying a fiber-mesh reinforced primer layer, and putting down multiple coats of high-elasticity polyurethane (PU) membrane that stretches up to 300% to withstand cracking.",
    chemicals: "Dr. Fixit, Fosroc PU, Sika Elastomeric Membranes",
    warranty: "10 - 15 Years",
    benefits: ["Reinforced with high-tensile glass-fiber mesh", "Jointless, seamless, and elastomeric protective barrier", "Resists heavy ponding water for weeks", "Withstands extreme thermal weather stress"],
  },
  {
    id: "roof",
    icon: Home,
    title: "Roof Waterproofing",
    shortDesc: "Robust shielding and pre-construction/post-construction heavy duty membrane barriers for structural roofs.",
    longDesc: "Roofs bear the brunt of severe monsoons. We seal all expansion joints, drain pipes, and parapet wall corners using professional APP modified bituminous torch-on membranes or advanced liquid acrylic membranes, creating a completely impermeable umbrella over your building.",
    chemicals: "APP Bituminous Membranes, Sika Liquid Acrylics",
    warranty: "10+ Years",
    benefits: ["Complete water impermeability", "Excellent adhesion to brick bat coba & concrete", "Parapet wall joint sealing included", "UV-resistant and flexible coatings"],
  },
  {
    id: "bathroom",
    icon: Grid,
    title: "Bathroom Waterproofing",
    shortDesc: "Non-destructive epoxy tiling grouting & sub-tile high-strength crystalline barrier protection.",
    longDesc: "Bathroom leakage damages lower ceilings rapidly. We provide specialized non-destructive pressure injection grouting behind tiles and replace standard weak grout with high-strength anti-fungal epoxy grout. For new bathrooms, we apply a robust multi-coat acrylic waterproofing polymer layer below the tiles.",
    chemicals: "Laticrete Epoxy Grout, Sika Topseal, Dr. Fixit Bathseal",
    warranty: "7 - 10 Years",
    benefits: ["Zero tile-breaking required (in standard cases)", "Anti-fungal, anti-bacterial waterproof epoxy grout", "Blocks internal pipe-sleeve moisture seepage", "Prevents paint peeling on lower-floor ceilings"],
  },
  {
    id: "watertank",
    icon: Droplet,
    title: "Water Tank Waterproofing",
    shortDesc: "Certified food-grade non-toxic epoxy crystalline coatings for concrete drinking water tanks.",
    longDesc: "Drinking water tanks require sterile, non-toxic waterproofing. We use crystal-growth active chemicals that penetrate deep into the concrete capillaries, sealing pores from the inside, followed by a hygienic 100% food-grade blue epoxy protective coating.",
    chemicals: "Food-Grade Epoxy (Sika / Berger), Crystalline active sealers",
    warranty: "10 Years",
    benefits: ["100% non-toxic, safe for drinking water", "Prevents hazardous fungal & moss formation", "Resists strong hydrostatic water pressure", "Seals micro-pores and active honeycombs"],
  },
  {
    id: "wall",
    icon: ShieldCheck,
    title: "Wall Seepage Treatment",
    shortDesc: "Capillary blocking chemical injections & dampness barrier structural coats for peeling plaster walls.",
    longDesc: "Wall dampness leads to respiratory issues and unsightly mold. We strip the affected plaster, inject high-pressure damp-proof chemicals into the brickwork to block capillary action, apply crystalline plaster undercoats, and finish with structural primer that blocks saltpetre.",
    chemicals: "Dr. Fixit Dampguard, Berger Latex Polymers",
    warranty: "8 Years",
    benefits: ["Blocks internal brickwork moisture travel", "Eliminates salty white powder (efflorescence)", "Creates perfect, dry base for fresh luxury paint", "Anti-fungal properties kill structural mold"],
  },
  {
    id: "crack",
    icon: WrenchIcon,
    title: "Crack Filling",
    shortDesc: "V-groove concrete repair using heavy-duty flexible polyurethane sealant injection techniques.",
    longDesc: "Active crack movements quickly tear thin paints. Our process includes cutting open all structural cracks into V-grooves, treating with active rust-preventers if rebar is exposed, and filling them with heavy-duty, fast-curing polyurethane (PU) sealants that stay flexible forever.",
    chemicals: "Sika Flex PU Sealants, Fosroc Conbextra Grout",
    warranty: "5+ Years",
    benefits: ["Withstands continuous structural vibration", "Permanently bonds to old concrete surfaces", "Non-shrinking, high-durability polymers", "Prevents oxygen and moisture reaching iron bars"],
  },
  {
    id: "exterior",
    icon: Paintbrush,
    title: "Exterior Wall Protection",
    shortDesc: "Weatherproof anti-carbonation coatings that resist heavy monsoon rains and UV peeling.",
    longDesc: "Exterior walls are exposed to harsh monsoons and high temperatures. We seal hairline cracks and coat walls with premium elastomeric acrylic weathercoats that act as a high-build, rain-resistant, elastic raincoat, keeping interiors completely dry.",
    chemicals: "Asian Paints SmartCare, Dulux Aquatech, Berger Weathercoat",
    warranty: "10 Years",
    benefits: ["Elastomeric paint bridges up to 2mm cracks", "Protects against structural carbonation damage", "Dust and dirt pick-up resistant technology", "Vibrant colors with high UV resistance"],
  },
  {
    id: "heatproof",
    icon: Flame,
    title: "Heatproof Coating",
    shortDesc: "Dual-action thermal reflective coatings that prevent structural roof heating and water leakage.",
    longDesc: "Save energy while preventing leakage! We apply advanced reflective ceramic glass micro-sphere coatings that reflect up to 90% of solar heat, dropping roof surface temperatures by up to 15°C, while acting as an excellent seamless waterproofing shield.",
    chemicals: "Nippon Paint Cool-Coat, Asian Paints Damp Proof Cool",
    warranty: "7 - 10 Years",
    benefits: ["Reflects UV & IR rays back into atmosphere", "Reduces building interior AC bill by up to 20%", "Minimizes structural expansions & cracks", "Acts as an additional water-resistant top shield"],
  },
];

function WrenchIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleConsultClick = () => {
    if (selectedService) {
      const url = `${whatsappLink}&text=Hi!%20I%20am%20interested%20in%20your%20${encodeURIComponent(selectedService.title)}%20service.%20Please%20provide%20more%20details.`;
      window.open(url, "_blank");
      setSelectedService(null);
    }
  };

  return (
    <section id="services" className="py-24 bg-brand-lightBg dark:bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Specialized Services</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy dark:text-white leading-tight">
            Comprehensive Leakage Stop <br />
            <span className="bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent">Solutions For Your Property</span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
            From heavy-duty PU coatings on rooftops to precision capillary blockers inside damp walls, we protect your structure from foundation to roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="glass-card flex flex-col justify-between p-7 rounded-[28px] group relative overflow-hidden border border-slate-200 dark:border-brand-navyLight"
              >
                {/* Visual hover background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl group-hover:bg-brand-orange/10 transition-colors duration-500 z-0" />

                <div className="relative z-10 space-y-5">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange shadow-sm group-hover:scale-115 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="font-outfit text-lg font-extrabold text-brand-navy dark:text-white group-hover:text-brand-orange transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="relative z-10 pt-5 mt-5 border-t border-slate-200 dark:border-brand-navyLight">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold uppercase tracking-widest text-brand-navy dark:text-brand-orange hover:text-brand-orange flex items-center gap-1.5 transition-colors duration-300"
                  >
                    Technical Spec
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
            className="absolute inset-0 bg-brand-navyDark/85 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-2xl bg-white dark:bg-brand-navy rounded-[32px] overflow-hidden shadow-2xl border border-slate-200 dark:border-brand-navyLight animate-fade-in-up">
            
            {/* Header color accent */}
            <div className="h-4 bg-gradient-to-r from-brand-orange via-red-500 to-brand-orange" />
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-8 right-8 w-10 h-10 rounded-full border border-slate-200 dark:border-brand-navyLight flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-brand-navyLight transition-colors duration-300"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-8 sm:p-10 space-y-6 max-h-[85vh] overflow-y-auto">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                  {React.createElement(selectedService.icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-orange">
                    TECHNICAL DATA SHEET
                  </span>
                  <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-brand-navy dark:text-white leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                  {selectedService.longDesc}
                </p>
                
                {/* Meta details */}
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-brand-navyLight text-xs font-bold text-slate-700 dark:text-slate-300">
                    <span className="text-brand-orange">Chemical Brand:</span>
                    {selectedService.chemicals}
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-brand-navyLight text-xs font-bold text-slate-700 dark:text-slate-300">
                    <span className="text-brand-orange">Written Warranty:</span>
                    {selectedService.warranty}
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  Key Structural Benefits
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300 font-semibold">
                  {selectedService.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-slate-200 dark:border-brand-navyLight flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Facing this specific leakage? Book a free on-site chemical inspection today.
                </p>
                <button
                  onClick={handleConsultClick}
                  className="px-6 py-3.5 rounded-full text-center text-xs font-extrabold uppercase tracking-widest text-white bg-brand-orange hover:bg-brand-orangeHover shadow-orange flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                  Inquire Now
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
