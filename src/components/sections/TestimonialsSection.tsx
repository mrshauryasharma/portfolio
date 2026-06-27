"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Restaurant Owner",
    location: "Lucknow, UP",
    content:
      "Shaurya built a stunning website for my restaurant. It looks incredible on mobile and desktop, and I&apos;ve seen a real increase in online orders since launch. Highly professional and delivered on time!",
    rating: 5,
    avatar: "RS",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    name: "Priya Singh",
    role: "Business Owner",
    location: "Noida, UP",
    content:
      "I needed a company website quickly and Shaurya delivered an amazing design. The animations and UI are top-notch. Communication was excellent throughout the entire project.",
    rating: 5,
    avatar: "PS",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    name: "Amit Kumar",
    role: "Startup Founder",
    location: "Greater Noida",
    content:
      "Working with Shaurya was a great experience. He understood my vision perfectly and created a modern, fast-loading website for my startup. SEO results improved within weeks!",
    rating: 5,
    avatar: "AK",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="testimonials" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-block font-mono text-sm text-purple-400 mb-4 tracking-widest uppercase"
          >
            Client Words
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold"
          >
            What Clients <span className="gradient-text">Say</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="glass-card rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 hover:shadow-card-hover transition-all duration-300 flex flex-col gap-5"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-purple-400/40" />

              {/* Content */}
              <p className="opacity-75 leading-relaxed text-sm flex-1">{t.content}</p>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div
                  className={`w-10 h-10 rounded-full ${t.bg} flex items-center justify-center font-bold text-sm ${t.color}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs opacity-50">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
