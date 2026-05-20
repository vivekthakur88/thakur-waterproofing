"use client";

import React, { useState, useRef } from "react";
import { toast } from "sonner";
import { User, Phone, Mail, Calendar, MessageSquare, ShieldCheck, HelpCircle } from "lucide-react";

export default function Appointment() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    message: "",
    honeypot: "", // Anti-spam honey-pot field
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
  });

  const treatments = [
    "Dental Implants",
    "Root Canal Treatment",
    "Teeth Whitening",
    "Smile Makeover",
    "Clear Aligners",
    "Dental Braces",
    "Kids Dentistry",
    "Dental Veneers",
    "Tooth Extraction",
    "Gum Treatment",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", phone: "", email: "", treatment: "" };

    // Name check
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }

    // Phone check (10 digits standard)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Treatment check
    if (!formData.treatment) {
      newErrors.treatment = "Please select a treatment type";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Anti-spam check
    if (formData.honeypot) {
      console.log("Spam detected!");
      return;
    }

    if (!validateForm()) {
      toast.error("Please correct the highlighted form errors.");
      return;
    }

    setLoading(true);
    toast.loading("Securing your luxury consultation slot...");

    setTimeout(() => {
      setLoading(false);
      toast.dismiss();
      toast.success("Details secured! Redirecting you to our direct WhatsApp...");

      // Short delay for user to read toast before final FormSubmit + WhatsApp redirect
      setTimeout(() => {
        if (formRef.current) {
          formRef.current.submit();
        }
      }, 1000);
    }, 1500);
  };

  return (
    <section id="appointment" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Form Details & High-End Copy */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-blue">
                Priority Booking
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark dark:text-white leading-[1.15]">
                Secure Your <br />
                <span className="bg-gradient-to-r from-brand-blue to-cyan-500 bg-clip-text text-transparent">
                  Luxury Slot
                </span>
              </h2>
            </div>
            
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Schedule your dental diagnostic session today. Dentazone&apos;s appointment coordinators will secure your requested timing, evaluate initial details, and establish your personalized digital diagnosis plan instantly.
            </p>

            <div className="space-y-6">
              {[
                { title: "Direct Contact Coordination", desc: "Instantly connected with our head implants coordinator.", icon: User },
                { title: "No Extra Fees", desc: "No booking charges or upfront processing fees.", icon: ShieldCheck },
                { title: "Immediate WhatsApp Booking", desc: "Redirects directly to WhatsApp chat for real-time slot selection.", icon: HelpCircle }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-lightBlue/60 dark:bg-brand-blue/10 flex items-center justify-center text-brand-blue flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-dark dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Working Appointment Form */}
          <div className="lg:col-span-7 relative">
            {/* Visual glow frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-cyan-400 opacity-10 rounded-[40px] blur-3xl z-0" />
            
            <div className="relative z-10 glass-panel p-8 sm:p-10 rounded-[38px] shadow-glass border border-slate-100 dark:border-slate-800">
              
              <form
                ref={formRef}
                action="https://formsubmit.co/vith84852@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* FormSubmit Config Parameters */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://wa.link/7oj64s" />
                {/* Anti-spam honey-pot */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-dark dark:text-slate-300 uppercase tracking-wider block">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Vivek Salunkhe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full py-3.5 pl-12 pr-4 text-sm rounded-2xl bg-white dark:bg-slate-900 border ${
                        errors.name ? "border-red-500" : "border-slate-200 dark:border-slate-800"
                      } focus:outline-none focus:border-brand-blue transition-colors duration-300`}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-[10px] font-bold">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-dark dark:text-slate-300 uppercase tracking-wider block">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="e.g. 9970418588"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full py-3.5 pl-12 pr-4 text-sm rounded-2xl bg-white dark:bg-slate-900 border ${
                          errors.phone ? "border-red-500" : "border-slate-200 dark:border-slate-800"
                        } focus:outline-none focus:border-brand-blue transition-colors duration-300`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-[10px] font-bold">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-dark dark:text-slate-300 uppercase tracking-wider block">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        placeholder="e.g. name@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full py-3.5 pl-12 pr-4 text-sm rounded-2xl bg-white dark:bg-slate-900 border ${
                          errors.email ? "border-red-500" : "border-slate-200 dark:border-slate-800"
                        } focus:outline-none focus:border-brand-blue transition-colors duration-300`}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-[10px] font-bold">{errors.email}</p>}
                  </div>
                </div>

                {/* Treatment Type */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-dark dark:text-slate-300 uppercase tracking-wider block">
                    Treatment Type
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className={`w-full py-3.5 pl-12 pr-4 text-sm rounded-2xl bg-white dark:bg-slate-900 border ${
                        errors.treatment ? "border-red-500" : "border-slate-200 dark:border-slate-800"
                      } focus:outline-none focus:border-brand-blue appearance-none transition-colors duration-300`}
                    >
                      <option value="">Select Treatment</option>
                      {treatments.map((t, idx) => (
                        <option key={idx} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {/* Custom Arrow */}
                    <div className="absolute right-4 top-4.5 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-slate-400 pointer-events-none" />
                  </div>
                  {errors.treatment && <p className="text-red-500 text-[10px] font-bold">{errors.treatment}</p>}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-dark dark:text-slate-300 uppercase tracking-wider block">
                    Message / Notes
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Specify dates, medical history, or details about your pain..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full py-3.5 pl-12 pr-4 text-sm rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-blue transition-colors duration-300 resize-none"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl text-center text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-brand-dark to-slate-800 dark:from-sky-500 dark:to-brand-blue dark:text-brand-dark hover:shadow-lg dark:hover:from-white dark:hover:to-sky-300 hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 rounded-full border-2 border-white dark:border-brand-dark border-t-transparent animate-spin" />
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      Book Appointment Now
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
