"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiCanva, SiFigma } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Monitor, Code, Wrench, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    skills: [
      { name: "HTML5", icon: FaHtml5, level: 92, color: "#e34f26" },
      { name: "CSS3", icon: FaCss3Alt, level: 88, color: "#1572b6" },
      { name: "JavaScript", icon: FaJs, level: 80, color: "#f7df1e" },
      { name: "Bootstrap", icon: FaBootstrap, level: 78, color: "#7952b3" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 85, color: "#06b6d4" },
    ],
  },
  {
    title: "Programming",
    icon: Code,
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    skills: [
      { name: "Python", icon: FaPython, level: 72, color: "#3776ab" },
      { name: "Java", icon: FaJava, level: 65, color: "#007396" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "text-pink-400",
    borderColor: "border-pink-500/30",
    skills: [
      { name: "Git", icon: FaGitAlt, level: 80, color: "#f05032" },
      { name: "GitHub", icon: FaGithub, level: 82, color: "#181717" },
      { name: "VS Code", icon: VscVscode, level: 90, color: "#007acc" },
      { name: "Canva", icon: SiCanva, level: 88, color: "#00c4cc" },
    ],
  },
  {
    title: "Other Skills",
    icon: Lightbulb,
    color: "text-yellow-400",
    borderColor: "border-yellow-500/30",
    skills: [
      { name: "Website Design", icon: Monitor, level: 85, color: "#7c3aed" },
      { name: "Responsive Design", icon: Monitor, level: 90, color: "#06b6d4" },
      { name: "Video Editing", icon: Monitor, level: 80, color: "#ec4899" },
      { name: "Social Media Mgmt", icon: Monitor, level: 85, color: "#f59e0b" },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium opacity-80">{name}</span>
        <span className="opacity-50 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, #7c3aed, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-block font-mono text-sm text-purple-400 mb-4 tracking-widest uppercase"
          >
            What I Know
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * catIdx + 0.2 }}
              className={`glass-card rounded-2xl p-6 border ${cat.borderColor} hover:shadow-card-hover transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-xl glass-card`}>
                  <cat.icon className={`w-5 h-5 ${cat.color}`} />
                </div>
                <h3 className="font-display font-bold text-lg">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={skill.color}
                    delay={0.1 * catIdx + 0.1 * skillIdx + 0.3}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Icon Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 glass-card rounded-2xl p-8"
        >
          <p className="text-center text-sm opacity-50 mb-6 font-mono tracking-wider uppercase">
            Technologies & Tools
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[FaHtml5, FaCss3Alt, FaJs, SiTailwindcss, FaPython, FaJava, FaGitAlt, FaGithub, VscVscode, SiCanva].map(
              (Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.3, y: -6 }}
                  className="text-3xl opacity-60 hover:opacity-100 transition-all duration-200 cursor-pointer"
                >
                  <Icon />
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
