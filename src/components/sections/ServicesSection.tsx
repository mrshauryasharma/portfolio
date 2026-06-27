"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Globe, ShoppingCart, Building2, Utensils, Plane, User, 
  Briefcase, Rocket, GraduationCap, Calendar, Home,
  Heart, Dumbbell, BookOpen, Layout, Settings, Zap,
  Search, Palette, Share2, Video
} from "lucide-react";

const services = [
  { icon: Globe, title: "Business Websites", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Utensils, title: "Restaurant Websites", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Building2, title: "Hotel & Resort Websites", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Plane, title: "Travel & Tourism", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: User, title: "Portfolio Websites", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: Briefcase, title: "Company Websites", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Rocket, title: "Startup Websites", color: "text-violet-400", bg: "bg-violet-500/10" },
  { icon: GraduationCap, title: "School & College", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: ShoppingCart, title: "E-commerce Websites", color: "text-red-400", bg: "bg-red-500/10" },
  { icon: Calendar, title: "Event Websites", color: "text-teal-400", bg: "bg-teal-500/10" },
  { icon: Home, title: "Real Estate Websites", color: "text-amber-400", bg: "bg-amber-500/10" },
  { icon: Heart, title: "Healthcare Websites", color: "text-rose-400", bg: "bg-rose-500/10" },
  { icon: Dumbbell, title: "Gym & Fitness", color: "text-lime-400", bg: "bg-lime-500/10" },
  { icon: BookOpen, title: "Blogging Websites", color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { icon: Layout, title: "Landing Pages", color: "text-sky-400", bg: "bg-sky-500/10" },
  { icon: Settings, title: "Website Maintenance", color: "text-gray-400", bg: "bg-gray-500/10" },
  { icon: Zap, title: "Speed Optimization", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Search, title: "SEO Optimization", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: Palette, title: "UI/UX Design", color: "text-fuchsia-400", bg: "bg-fuchsia-500/10" },
  { icon: Share2, title: "Social Media Mgmt", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: Video, title: "Video Editing", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Globe, title: "Website Redesign", color: "text-purple-400", bg: "bg-purple-500/10" },
];

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-block font-mono text-sm text-purple-400 mb-4 tracking-widest uppercase"
          >
            What I Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold"
          >
            My <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 opacity-60 max-w-2xl mx-auto"
          >
            I build professional websites for all industries — from restaurants and hotels
            to startups and healthcare. Let me help your business grow online.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.04 + 0.2 }}
              whileHover={{ scale: 1.08, y: -6 }}
              className="glass-card rounded-2xl p-4 flex flex-col items-center gap-3 text-center hover:shadow-card-hover transition-all duration-300 border border-white/5 hover:border-purple-500/30 cursor-default group"
            >
              <div className={`p-3 rounded-xl ${service.bg} transition-transform duration-300 group-hover:scale-110`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <p className="text-xs font-medium leading-tight opacity-80">{service.title}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 glass-card rounded-3xl p-8 sm:p-12 text-center border border-purple-500/20"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              Need a Website for Your Business?
            </h3>
            <p className="opacity-60 mb-8">
              I deliver modern, fast, and responsive websites tailored to your industry.
              Let&apos;s discuss your project and create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/919450057439"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 text-sm"
              >
                💬 WhatsApp Me
              </a>
              <a
                href="mailto:shauryaofficial.in@gmail.com"
                className="btn-outline text-sm"
              >
                📧 Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
