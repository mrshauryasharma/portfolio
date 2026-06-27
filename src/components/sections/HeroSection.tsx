"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiInstagram, FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Download, ArrowDown } from "lucide-react";
import HeroCanvas from "@/components/3d/HeroCanvas";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/mrshauryasharma", label: "GitHub" },
  { icon: FiInstagram, href: "https://www.instagram.com/mr_shauryasharma", label: "Instagram" },
  { icon: FiMail, href: "mailto:shauryaofficial.in@gmail.com", label: "Email" },
  { icon: FaWhatsapp, href: "https://wa.me/919450057439", label: "WhatsApp" },
];

export default function HeroSection() {
  const scrollToNext = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-12 py-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-purple-400 border border-purple-500/30"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for freelance work
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-4 leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Shaurya</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 h-12"
          >
            <span className="opacity-70">I&apos;m a </span>
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "Front-End Developer",
                2000,
                "UI Enthusiast",
                2000,
                "Problem Solver",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text font-bold"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-base sm:text-lg opacity-60 max-w-xl mb-8 mx-auto lg:mx-0"
          >
            Passionate about building modern, responsive, and interactive websites
            that deliver great user experiences. Let&apos;s create something amazing together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <motion.a
              href="mailto:shauryaofficial.in@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              Hire Me
            </motion.a>

            <motion.button
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline flex items-center gap-2"
            >
              View Projects
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-cyan-500/30 hover:border-cyan-500/60 text-cyan-400 font-medium transition-all duration-300 text-sm"
            >
              <Download size={16} />
              Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full glass-card hover:border-purple-500/50 transition-all duration-200 text-lg opacity-70 hover:opacity-100"
              >
                <s.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Animated ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-12px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #7c3aed, #06b6d4, #ec4899, #7c3aed)",
                padding: "2px",
                borderRadius: "50%",
              }}
            />
            <div className="absolute inset-[-10px] rounded-full bg-[var(--background)]" />

            {/* Profile */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-purple-500/30 glow-purple">
              <div
                className="w-full h-full flex items-center justify-center text-6xl sm:text-8xl font-display font-bold gradient-text"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2))",
                }}
              >
                SS
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-8 glass-card px-3 py-2 rounded-xl text-xs font-medium text-purple-400 border border-purple-500/30"
            >
              🚀 Web Developer
            </motion.div>
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-8 glass-card px-3 py-2 rounded-xl text-xs font-medium text-cyan-400 border border-cyan-500/30"
            >
              💡 Problem Solver
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToNext}
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
      >
        <span className="text-xs font-mono">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
