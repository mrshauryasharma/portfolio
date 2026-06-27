"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, Code2, Users, Building2 } from "lucide-react";

const experiences = [
  {
    icon: BookOpen,
    title: "Teacher & Educator",
    company: "Various Institutions",
    period: "2017 – 2024",
    duration: "7 Years",
    description:
      "Taught students across different age groups, developed curriculum, and mentored hundreds of learners. Built strong communication, patience, and leadership skills that translate directly into client work.",
    tags: ["Teaching", "Mentoring", "Curriculum Design", "Communication"],
    color: "text-yellow-400",
    borderColor: "border-yellow-500/30",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Building2,
    title: "Principal & Administrator",
    company: "Educational Institution",
    period: "2022 – 2024",
    duration: "2 Years",
    description:
      "Managed school operations, staff coordination, parent communication, and administrative responsibilities. Developed strong project management and organizational skills.",
    tags: ["Administration", "Leadership", "Project Management", "Team Building"],
    color: "text-pink-400",
    borderColor: "border-pink-500/30",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Users,
    title: "Freelance Social Media Manager",
    company: "Multiple Clients",
    period: "2022 – Present",
    duration: "2+ Years",
    description:
      "Managed social media accounts for local businesses, created content strategies, designed graphics using Canva, and grew follower counts for clients.",
    tags: ["Social Media", "Content Creation", "Canva", "Strategy"],
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Code2,
    title: "Web Developer & Freelancer",
    company: "Self-Employed",
    period: "2024 – Present",
    duration: "1+ Year",
    description:
      "Building responsive websites for businesses, restaurants, hotels, startups, and individuals. Working with HTML, CSS, JavaScript, Tailwind CSS, and modern frameworks. Delivered multiple client projects.",
    tags: ["Web Dev", "HTML/CSS/JS", "Tailwind CSS", "Freelance", "Client Work"],
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/10",
  },
];

export default function ExperienceSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-block font-mono text-sm text-purple-400 mb-4 tracking-widest uppercase"
          >
            My Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold"
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500 opacity-30 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-purple-500 -translate-y-1 md:-translate-x-1/2 z-10 ring-4 ring-purple-500/20" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />

                {/* Card */}
                <div className="flex-1 ml-10 md:ml-0">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`glass-card rounded-2xl p-6 border ${exp.borderColor} hover:shadow-card-hover transition-all duration-300`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${exp.bgColor} flex-shrink-0`}>
                        <exp.icon className={`w-6 h-6 ${exp.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-bold text-lg leading-tight">{exp.title}</h3>
                        <p className="text-sm opacity-60 mt-1">{exp.company}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${exp.bgColor} ${exp.color}`}>
                          {exp.duration}
                        </span>
                        <p className="text-xs opacity-40 mt-1">{exp.period}</p>
                      </div>
                    </div>

                    <p className="text-sm opacity-70 leading-relaxed mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full glass-card opacity-70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
