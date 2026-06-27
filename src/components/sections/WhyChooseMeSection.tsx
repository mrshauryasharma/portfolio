"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Palette, Zap, Smartphone, Search, Code2, Layers, 
  Shield, MessageCircle, Clock, HeartHandshake 
} from "lucide-react";

const reasons = [
  { icon: Palette, title: "Modern UI/UX", desc: "Clean, beautiful designs that make users stay longer", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Zap, title: "Fast Loading", desc: "Optimized code ensuring sub-second load times", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Smartphone, title: "Mobile Responsive", desc: "Perfect on every device — mobile, tablet, desktop", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: Search, title: "SEO Optimized", desc: "Rank higher on Google with proper SEO practices", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Code2, title: "Clean Code", desc: "Maintainable, well-documented, scalable codebase", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Layers, title: "Scalable Architecture", desc: "Built to grow with your business needs", color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { icon: Shield, title: "Secure Development", desc: "Best security practices built into every project", color: "text-red-400", bg: "bg-red-500/10" },
  { icon: MessageCircle, title: "Clear Communication", desc: "Regular updates and transparent project progress", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: Clock, title: "On-Time Delivery", desc: "Committed to deadlines without compromising quality", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: HeartHandshake, title: "Long-Term Support", desc: "I&apos;m here after launch for ongoing maintenance", color: "text-teal-400", bg: "bg-teal-500/10" },
];

export default function WhyChooseMeSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why-me" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-block font-mono text-sm text-purple-400 mb-4 tracking-widest uppercase"
          >
            Why Work With Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold"
          >
            Why Choose <span className="gradient-text">Me?</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 + 0.2 }}
              whileHover={{ scale: 1.05, y: -6 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-3 border border-white/5 hover:border-purple-500/30 hover:shadow-card-hover transition-all duration-300"
            >
              <div className={`w-fit p-3 rounded-xl ${reason.bg}`}>
                <reason.icon className={`w-6 h-6 ${reason.color}`} />
              </div>
              <h3 className="font-display font-bold">{reason.title}</h3>
              <p className="text-xs opacity-60 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
