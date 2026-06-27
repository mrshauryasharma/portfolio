"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { BarChart2, Clock, Code2, Coffee, Users } from "lucide-react";

const stats = [
  { icon: Code2, value: 15, suffix: "+", label: "Projects Completed", color: "text-purple-400" },
  { icon: Clock, value: 7, suffix: "+", label: "Years of Experience", color: "text-cyan-400" },
  { icon: BarChart2, value: 10, suffix: "+", label: "Technologies Known", color: "text-pink-400" },
  { icon: Coffee, value: 500, suffix: "+", label: "Learning Hours", color: "text-yellow-400" },
  { icon: Users, value: 10, suffix: "+", label: "Happy Clients", color: "text-green-400" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="stats" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-purple-500/20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-center font-mono text-sm text-purple-400 mb-8 tracking-widest uppercase"
          >
            Numbers That Speak
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="p-3 rounded-2xl glass-card">
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div className={`text-4xl sm:text-5xl font-display font-black ${stat.color}`}>
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="text-xs sm:text-sm opacity-60 font-medium leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
