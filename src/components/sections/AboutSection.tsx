"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Cpu, Layout, Users } from "lucide-react";

const cards = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable code", color: "text-purple-400" },
  { icon: Layout, title: "Modern UI", desc: "Beautiful, responsive interfaces", color: "text-cyan-400" },
  { icon: Cpu, title: "IoT Projects", desc: "Hardware + Software integration", color: "text-pink-400" },
  { icon: Users, title: "7+ Years", desc: "Teaching & leadership experience", color: "text-yellow-400" },
];

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-block font-mono text-sm text-purple-400 mb-4 tracking-widest uppercase"
            >
              Get to Know Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-display font-bold"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg opacity-80 leading-relaxed">
                I&apos;m <span className="text-purple-400 font-semibold">Shaurya Sharma</span>, a passionate
                Web Developer and Front-End Developer who enjoys building modern, responsive,
                and interactive websites. I love solving real-world problems through technology,
                creating beautiful digital experiences, and continuously learning new tools and frameworks.
              </p>
              <p className="opacity-70 leading-relaxed">
                Currently pursuing <span className="text-cyan-400">B.Tech in Electronics and
                Communication Engineering</span> at Gautam Buddha University. Alongside my
                studies, I work on web development, UI/UX design, video editing, social media
                management, IoT projects, and freelance solutions.
              </p>
              <p className="opacity-70 leading-relaxed">
                I also have <span className="text-pink-400">7 years of experience</span> in
                teaching, administration, and leadership, which has strengthened my communication,
                project management, and problem-solving abilities. My mission is to build innovative
                digital products that combine creativity, functionality, and outstanding user experience.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {["Problem Solver", "Quick Learner", "Team Player", "Creative Thinker"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full glass-card text-sm text-purple-400 border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="mailto:shauryaofficial.in@gmail.com"
                  className="btn-primary text-sm"
                >
                  Let&apos;s Talk
                </a>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-outline text-sm"
                >
                  See My Work
                </a>
              </div>
            </motion.div>

            {/* Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass-card rounded-2xl p-6 flex flex-col gap-3 hover:shadow-card-hover transition-all duration-300"
                >
                  <card.icon className={`w-8 h-8 ${card.color}`} />
                  <h3 className="font-display font-bold text-lg">{card.title}</h3>
                  <p className="text-sm opacity-60">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
