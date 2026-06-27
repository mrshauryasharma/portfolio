"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, BookOpen, School } from "lucide-react";

const education = [
  {
    icon: School,
    year: "2022",
    degree: "10th Standard",
    institution: "Dehradoon Public School",
    description: "Completed secondary education with focus on Science and Mathematics.",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
  },
  {
    icon: BookOpen,
    year: "2025",
    degree: "12th Standard",
    institution: "NIOS Axis Academy",
    description: "Completed senior secondary education through NIOS board with academic excellence.",
    color: "text-pink-400",
    borderColor: "border-pink-500/30",
    bg: "bg-pink-500/10",
  },
  {
    icon: GraduationCap,
    year: "2025 – 2029",
    degree: "B.Tech – Electronics & Communication Engineering",
    institution: "Gautam Buddha University",
    description:
      "Currently pursuing B.Tech in ECE, combining hardware engineering with software development. Active in web development, IoT projects, and technical clubs.",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    bg: "bg-purple-500/10",
    current: true,
  },
];

export default function EducationSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-block font-mono text-sm text-purple-400 mb-4 tracking-widest uppercase"
          >
            Academic Background
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold"
          >
            My <span className="gradient-text">Education</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-purple-500 to-cyan-500 opacity-30" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.year}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2 + 0.2 }}
                className="relative flex gap-8"
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full ${edu.bg} border ${edu.borderColor} flex items-center justify-center z-10`}>
                    <edu.icon className={`w-5 h-5 ${edu.color}`} />
                  </div>
                  {edu.current && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  )}
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex-1 glass-card rounded-2xl p-6 border ${edu.borderColor} hover:shadow-card-hover transition-all duration-300`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <span className={`text-xs font-bold font-mono px-3 py-1 rounded-full ${edu.bg} ${edu.color}`}>
                        {edu.year}
                      </span>
                      {edu.current && (
                        <span className="ml-2 text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                          Currently Pursuing
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-1">{edu.degree}</h3>
                  <p className={`font-medium text-sm mb-3 ${edu.color}`}>{edu.institution}</p>
                  <p className="text-sm opacity-65 leading-relaxed">{edu.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
