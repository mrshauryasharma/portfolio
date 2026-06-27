"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send, Github, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  { icon: Mail, label: "Email", value: "shauryaofficial.in@gmail.com", href: "mailto:shauryaofficial.in@gmail.com", color: "text-purple-400" },
  { icon: Phone, label: "Phone", value: "+91 9450057439", href: "tel:+919450057439", color: "text-cyan-400" },
  { icon: FaWhatsapp, label: "WhatsApp", value: "+91 9450057439", href: "https://wa.me/919450057439", color: "text-green-400" },
  { icon: MapPin, label: "Location", value: "Ramnagar, Chandauli, UP, India", href: "#", color: "text-pink-400" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/mrshauryasharma", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/mr_shauryasharma", label: "Instagram" },
  { icon: FaWhatsapp, href: "https://wa.me/919450057439", label: "WhatsApp" },
];

export default function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:shauryaofficial.in@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoLink);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-block font-mono text-sm text-purple-400 mb-4 tracking-widest uppercase"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold"
          >
            Contact <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 opacity-60 max-w-xl mx-auto"
          >
            Have a project in mind? Let&apos;s discuss how I can help bring your vision to life.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-4 glass-card rounded-xl p-4 border border-white/5 hover:border-purple-500/30 transition-all duration-200"
                >
                  <div className="p-3 rounded-xl glass-card">
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div>
                    <p className="text-xs opacity-50 font-mono">{info.label}</p>
                    <p className="text-sm font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social */}
            <div className="glass-card rounded-xl p-6 border border-white/5">
              <p className="text-sm opacity-50 font-mono mb-4">FOLLOW ME</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.15, y: -4 }}
                    className="p-3 rounded-xl glass-card hover:border-purple-500/50 transition-all duration-200 text-lg opacity-70 hover:opacity-100"
                  >
                    <s.icon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919450057439?text=Hi%20Shaurya!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-green-500/20 border border-green-500/30 text-green-400 font-semibold hover:bg-green-500/30 transition-all duration-200"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8 border border-purple-500/20 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs opacity-50 font-mono mb-2 block">YOUR NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Rahul Kumar"
                    className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 focus:border-purple-500/50 bg-transparent text-sm outline-none transition-colors duration-200 placeholder:opacity-30"
                  />
                </div>
                <div>
                  <label className="text-xs opacity-50 font-mono mb-2 block">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="rahul@example.com"
                    className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 focus:border-purple-500/50 bg-transparent text-sm outline-none transition-colors duration-200 placeholder:opacity-30"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs opacity-50 font-mono mb-2 block">SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="I need a website for my restaurant"
                  className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 focus:border-purple-500/50 bg-transparent text-sm outline-none transition-colors duration-200 placeholder:opacity-30"
                />
              </div>
              <div>
                <label className="text-xs opacity-50 font-mono mb-2 block">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 focus:border-purple-500/50 bg-transparent text-sm outline-none transition-colors duration-200 placeholder:opacity-30 resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2 text-sm"
              >
                {sent ? "✓ Message Sent!" : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
