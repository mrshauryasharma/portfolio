"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/mrshauryasharma", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/mr_shauryasharma", label: "Instagram" },
  { icon: FaWhatsapp, href: "https://wa.me/919450057439", label: "WhatsApp" },
  { icon: Mail, href: "mailto:shauryaofficial.in@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="glass-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-2xl font-display font-bold gradient-text">{"<Shaurya />"}</h3>
              <p className="opacity-60 text-sm leading-relaxed max-w-sm">
                Web Developer & Front-End Developer passionate about building modern,
                responsive, and interactive websites for businesses and individuals.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    className="p-2.5 rounded-xl glass-card hover:border-purple-500/50 transition-all duration-200 opacity-60 hover:opacity-100"
                  >
                    <s.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 opacity-80 text-sm uppercase tracking-wider font-mono">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm opacity-60 hover:opacity-100 hover:text-purple-400 transition-all duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 opacity-80 text-sm uppercase tracking-wider font-mono">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:shauryaofficial.in@gmail.com"
                    className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <Mail size={13} />
                    shauryaofficial.in@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919450057439"
                    className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <Phone size={13} />
                    +91 9450057439
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919450057439"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity text-green-400"
                  >
                    <FaWhatsapp size={13} />
                    WhatsApp Me
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs opacity-40">
              © {new Date().getFullYear()} Shaurya Sharma. All rights reserved.
            </p>
            <p className="text-xs opacity-40">
              Built with ❤️ using Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
