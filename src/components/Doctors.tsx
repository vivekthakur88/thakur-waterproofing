"use client";

import React from "react";
import { Award, GraduationCap, Calendar } from "lucide-react";

interface Doctor {
  name: string;
  image: string;
  qualification: string;
  specialty: string;
  experience: string;
  bio: string;
}

const doctorsList: Doctor[] = [
  {
    name: "Dr. Vivek Sharma",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    qualification: "BDS, MDS (Oral & Maxillofacial Surgery)",
    specialty: "Implantologist & Full-Mouth Reconstruction",
    experience: "12+ Years Experience",
    bio: "Dr. Vivek Sharma is an expert oral surgeon specializing in dental implants, bone grafting, and complex wisdom teeth extractions. He has successfully placed over 2000+ implants.",
  },
  {
    name: "Dr. Anjali Mehta",
    image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=600",
    qualification: "BDS, MDS (Cosmetic Dentistry & Endodontics)",
    specialty: "Smile Makeovers & Single-Sitting RCTs",
    experience: "8+ Years Experience",
    bio: "Dr. Anjali Mehta is a master of micro-endodontics and digital smile design. She excels in fabricating high-end veneers, composite bonding, and painless root canal treatments.",
  },
  {
    name: "Dr. Rohan Deshmukh",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600",
    qualification: "BDS, MDS (Orthodontics)",
    specialty: "Clear Aligners & Pediatric Dentistry",
    experience: "10+ Years Experience",
    bio: "Dr. Rohan Deshmukh is a certified aligner specialist, helping children and adults achieve perfect dental alignment using invisible custom aligners and modern low-friction brackets.",
  },
];

export default function Doctors() {
  const handleScrollToAppointment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
    <section id="doctors" className="py-24 bg-slate-50 dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-blue">
            Our Elite Panel
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark dark:text-white">
            Meet Our Experienced <br />
            <span className="bg-gradient-to-r from-brand-blue to-cyan-500 bg-clip-text text-transparent">
              Dental Specialists
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Our panel comprises highly qualified, Board-certified specialists dedicated to rendering the highest level of care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctorsList.map((doc, idx) => (
            <div
              key={idx}
              className="glass-card flex flex-col items-center justify-between p-8 rounded-[36px] text-center group"
            >
              <div className="flex flex-col items-center space-y-6">
                {/* Circular image wrapper with gold/blue double ring border */}
                <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg ring-4 ring-brand-blue/20 group-hover:ring-brand-blue/50 transition-all duration-500">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="object-cover w-full h-full transform scale-105 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                    {doc.specialty}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-brand-dark dark:text-white group-hover:text-brand-blue transition-colors duration-300">
                    {doc.name}
                  </h3>

                  {/* Credentials list */}
                  <div className="flex flex-col items-center gap-1.5 pt-1 text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5 text-xs font-semibold">
                      <GraduationCap className="w-4 h-4 text-brand-blue" />
                      <span>{doc.qualification}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold">
                      <Award className="w-4 h-4 text-brand-blue" />
                      <span>{doc.experience}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans pt-2">
                    {doc.bio}
                  </p>
                </div>
              </div>

              {/* Consultation trigger */}
              <div className="w-full pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <button
                  onClick={handleScrollToAppointment}
                  className="w-full py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-brand-dark bg-slate-100/80 hover:bg-brand-blue hover:text-white dark:text-sky-400 dark:bg-slate-900/60 dark:hover:bg-brand-blue dark:hover:text-brand-dark transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-4 h-4" />
                  Consult Doctor
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
