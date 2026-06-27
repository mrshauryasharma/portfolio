"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Cpu, Globe, Lock, Camera, Droplets, Flame, Bot, Wifi } from "lucide-react";

const projects = [
  {
    icon: Globe,
    title: "Pixeloid Pro Website",
    description:
      "A professional website for my personal brand Pixeloid Pro. Built with modern UI/UX, fully responsive and optimized for performance.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    features: ["Responsive Design", "Modern UI", "SEO Optimized", "Fast Loading"],
    github: "https://github.com/mrshauryasharma",
    demo: "#",
    color: "from-purple-500/20 to-violet-500/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    icon: Cpu,
    title: "RFID Attendance System",
    description:
      "An IoT-based attendance system using RFID, NodeMCU, Google Sheets integration and automation. Real-time attendance tracking.",
    tech: ["NodeMCU", "RFID", "Arduino IDE", "Google Sheets API"],
    features: ["RFID Authentication", "LCD Display", "Auto Logging", "Real-time Data"],
    github: "https://github.com/mrshauryasharma",
    demo: "#",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    icon: Lock,
    title: "Smart Door Lock System",
    description:
      "A smart door lock using ESP32 CAM, RFID authentication, LCD display, servo motor and IoT functionality for secure access.",
    tech: ["ESP32", "RFID", "Servo Motor", "LCD Display"],
    features: ["RFID Auth", "Remote Access", "Security Alerts", "Log System"],
    github: "https://github.com/mrshauryasharma",
    demo: "#",
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-400",
  },
  {
    icon: Camera,
    title: "ESP32 CAM Security System",
    description:
      "Multiple IoT projects using ESP32 CAM including surveillance, security monitoring, and real-time image capture.",
    tech: ["ESP32 CAM", "Arduino IDE", "WiFi", "HTTP Server"],
    features: ["Live Stream", "Motion Detect", "Remote View", "Alerts"],
    github: "https://github.com/mrshauryasharma",
    demo: "#",
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/30",
    iconColor: "text-yellow-400",
  },
  {
    icon: Droplets,
    title: "Automatic Garden Watering",
    description:
      "An automated plant watering system using soil moisture sensor, Arduino, and water pump for smart gardening.",
    tech: ["Arduino", "Soil Sensor", "Water Pump", "Relay Module"],
    features: ["Auto Watering", "Moisture Detect", "Timer Control", "Low Power"],
    github: "https://github.com/mrshauryasharma",
    demo: "#",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400",
  },
  {
    icon: Flame,
    title: "Fire Detection System",
    description:
      "A fire detection and alert system using flame sensor, buzzer, Arduino and real-time alert mechanism.",
    tech: ["Arduino", "Flame Sensor", "Buzzer", "LED Indicators"],
    features: ["Real-time Alert", "Buzzer Alarm", "LED Alert", "Fast Response"],
    github: "https://github.com/mrshauryasharma",
    demo: "#",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    iconColor: "text-red-400",
  },
  {
    icon: Bot,
    title: "Line Follower Robot",
    description:
      "An autonomous robot that follows a line using IR sensors and dual motor control with precise path tracking.",
    tech: ["Arduino", "IR Sensors", "L298N Driver", "DC Motors"],
    features: ["Auto Navigation", "IR Sensing", "Dual Motor", "Path Track"],
    github: "https://github.com/mrshauryasharma",
    demo: "#",
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/30",
    iconColor: "text-violet-400",
  },
  {
    icon: Wifi,
    title: "IoT Based Projects",
    description:
      "Various IoT mini projects using Arduino, sensors, and real-time automation for smart home and monitoring systems.",
    tech: ["Arduino", "NodeMCU", "Various Sensors", "IoT Protocols"],
    features: ["Smart Home", "Remote Control", "Real-time Data", "Automation"],
    github: "https://github.com/mrshauryasharma",
    demo: "#",
    color: "from-sky-500/20 to-blue-500/20",
    borderColor: "border-sky-500/30",
    iconColor: "text-sky-400",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 4) * 0.1 }}
      whileHover={{ scale: 1.02, y: -6 }}
      className={`glass-card rounded-2xl border ${project.borderColor} overflow-hidden hover:shadow-card-hover transition-all duration-300 group flex flex-col`}
    >
      {/* Card Header */}
      <div className={`bg-gradient-to-br ${project.color} p-6`}>
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl glass-card`}>
            <project.icon className={`w-7 h-7 ${project.iconColor}`} />
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass-card hover:scale-110 transition-transform duration-200"
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass-card hover:scale-110 transition-transform duration-200"
              aria-label="Live Demo"
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
        <h3 className="font-display font-bold text-lg">{project.title}</h3>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col gap-4">
        <p className="text-sm opacity-70 leading-relaxed">{project.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5">
          {project.features.map((f) => (
            <span
              key={f}
              className={`text-xs px-2 py-1 rounded-md ${project.iconColor} bg-current/10`}
              style={{ backgroundColor: "rgba(124,58,237,0.1)" }}
            >
              {f}
            </span>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-auto">
          <p className="text-xs opacity-40 mb-2 font-mono">TECH STACK</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded glass-card opacity-70 font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl glass-card text-xs font-medium hover:border-purple-500/50 transition-all duration-200"
          >
            <Github size={12} /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl btn-primary text-xs"
          >
            <ExternalLink size={12} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-block font-mono text-sm text-purple-400 mb-4 tracking-widest uppercase"
          >
            What I&apos;ve Built
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 opacity-60 max-w-xl mx-auto"
          >
            A mix of web development and IoT projects that showcase my technical range.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/mrshauryasharma"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 text-sm"
          >
            <Github size={16} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
