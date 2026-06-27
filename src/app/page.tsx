import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseMeSection from "@/components/sections/WhyChooseMeSection";
import EducationSection from "@/components/sections/EducationSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ParticleBackground from "@/components/ui/ParticleBackground";
import LenisProvider from "@/components/ui/LenisProvider";

export default function Home() {
  return (
    <LenisProvider>
      <main className="relative min-h-screen animated-gradient-bg">
        <ParticleBackground />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ServicesSection />
        <WhyChooseMeSection />
        <EducationSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </main>
    </LenisProvider>
  );
}
