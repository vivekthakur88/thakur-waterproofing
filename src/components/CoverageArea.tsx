"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Search, Navigation, Phone } from "lucide-react";
import { contactPhone } from "@/config/whatsapp";

interface CityRegion {
  id: string;
  cityName: string;
  regions: string[];
  responseTime: string;
}

const coverageCities: CityRegion[] = [
  {
    id: "mumbai-thane",
    cityName: "Mumbai & Thane",
    responseTime: "Within 12 Hours",
    regions: [
      "Thane West",
      "Mulund",
      "Ghodbunder Road",
      "Bhandup",
      "Kolshet",
      "Kalyan & Dombivli",
      "Navi Mumbai (Vashi & Belapur)",
      "Borivali & Kandivali",
      "Bandra & Andheri",
      "South Mumbai"
    ]
  },
  {
    id: "pune",
    cityName: "Pune",
    responseTime: "Within 24 Hours",
    regions: [
      "Koregaon Park",
      "Kalyani Nagar",
      "Baner",
      "Kothrud",
      "Hinjewadi",
      "Wakad",
      "Aundh",
      "Hadapsar",
      "Viman Nagar",
      "Pimple Saudagar"
    ]
  },
  {
    id: "bangalore",
    cityName: "Bangalore",
    responseTime: "Within 24 Hours",
    regions: [
      "Whitefield",
      "Indiranagar",
      "Koramangala",
      "Jayanagar",
      "HSR Layout",
      "Electronic City",
      "Marathahalli",
      "JP Nagar",
      "Hebbal",
      "Sarjapur Road"
    ]
  },
  {
    id: "delhi-ncr",
    cityName: "Delhi & NCR",
    responseTime: "Within 24 Hours",
    regions: [
      "Gurugram (Sector 1-110)",
      "Noida & Greater Noida",
      "Dwarka",
      "South Delhi",
      "West Delhi",
      "East Delhi",
      "Ghaziabad",
      "Faridabad",
      "Vasant Kunj",
      "Rohini"
    ]
  }
];

export default function CoverageArea() {
  const [selectedCity, setSelectedCity] = useState<CityRegion>(coverageCities[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResult(null);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    
    // Check if query matches any region in any city
    let matchedLocation = false;
    let matchedCityName = "";
    
    for (const city of coverageCities) {
      const match = city.regions.find(r => r.toLowerCase().includes(query));
      if (match) {
        matchedLocation = true;
        matchedCityName = city.cityName;
        break;
      }
    }

    if (matchedLocation) {
      setSearchResult(`✅ Yes! We serve "${searchQuery}" with fast 24-Hour Inspection. Contact our ${matchedCityName} team now!`);
    } else {
      setSearchResult(`ℹ️ We are expanding! Contact us at ${contactPhone} to check if we can arrange a special expert visit to your location.`);
    }
  };

  return (
    <section id="coverage" className="py-24 bg-white dark:bg-brand-navyDark relative overflow-hidden">
      {/* Background Graphic Blurs */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Regional Coverage Index</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy dark:text-white leading-tight">
            Waterproofing Experts <br />
            <span className="bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent">Near Your Location</span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
            We provide fast, on-site diagnostics and turnkey waterproofing solutions across major metro hubs in India.
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="max-w-xl mx-auto mb-16">
          <form onSubmit={handleSearch} className="relative flex items-center">
            <Search className="absolute left-5 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search your neighborhood or city (e.g. Thane, baner, noida...)"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSearchResult(null);
              }}
              className="w-full pl-14 pr-32 py-4 rounded-full border border-slate-200 dark:border-brand-navyLight bg-slate-50 dark:bg-brand-navy text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-orange dark:text-white"
            />
            <button
              type="submit"
              className="absolute right-2 px-6 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orangeHover text-xs font-extrabold uppercase tracking-widest text-white shadow-orange"
            >
              Check
            </button>
          </form>
          {searchResult && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center text-xs sm:text-sm font-extrabold text-brand-orange"
            >
              {searchResult}
            </motion.p>
          )}
        </div>

        {/* Dynamic Display Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* City Selection Tabs - 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-black uppercase text-slate-400 tracking-wider mb-2 block">
              Select Major Metro Hub
            </span>
            {coverageCities.map((city) => (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city)}
                className={`w-full text-left p-5 rounded-2xl border flex items-center justify-between transition-all duration-300 ${
                  selectedCity.id === city.id
                    ? "bg-brand-orange/5 border-brand-orange text-brand-orange shadow-sm translate-x-2"
                    : "bg-white dark:bg-brand-navy border-slate-200 dark:border-brand-navyLight text-slate-700 dark:text-slate-300 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Navigation className={`w-5 h-5 ${selectedCity.id === city.id ? "text-brand-orange animate-pulse" : "text-slate-400"}`} />
                  <span className="font-outfit text-base font-extrabold">{city.cityName}</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  {city.responseTime}
                </span>
              </button>
            ))}
          </div>

          {/* Coverage Regions Display - 8 cols */}
          <div className="lg:col-span-8 glass-card p-8 sm:p-10 rounded-[32px] border border-slate-200 dark:border-brand-navyLight relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl z-0" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-brand-navyLight pb-4">
                <div>
                  <span className="text-[10px] font-black uppercase text-brand-orange tracking-widest block mb-0.5">
                    ACTIVE SERVICE RANGE
                  </span>
                  <h3 className="font-outfit text-xl sm:text-2xl font-extrabold text-brand-navy dark:text-white">
                    {selectedCity.cityName} Regions
                  </h3>
                </div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-brand-navyLight px-3 py-1.5 rounded-xl border border-slate-200 dark:border-brand-navyLight">
                  🕒 Response Time: {selectedCity.responseTime}
                </span>
              </div>

              {/* Grid of Micro Regions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedCity.regions.map((region, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-brand-navy/60 rounded-xl border border-slate-200/50 dark:border-brand-navyLight hover:border-brand-orange/20 transition-all font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-orange flex-shrink-0 animate-pulse" />
                    <span>{region}</span>
                  </div>
                ))}
              </div>

              {/* Hotline Quick Call CTA */}
              <div className="pt-6 border-t border-slate-200 dark:border-brand-navyLight flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Don&apos;t see your area listed? We can arrange inspections for nearby sub-towns too.
                </p>
                <a
                  href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                  className="px-6 py-3 rounded-full bg-brand-navyLight text-brand-navy dark:text-white border border-slate-300 dark:border-brand-navyLight font-extrabold text-xs uppercase tracking-widest flex items-center gap-2 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange animate-bounce" />
                  Call Local Hotline
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
