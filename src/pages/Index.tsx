import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import PublicationsCertifications from "@/components/PublicationsCertifications";
import Profexp from "@/components/Profexp"; // ✅ Import your new Professional Experience section

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="publications">
        <PublicationsCertifications />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      {/* ✅ New Professional Experience section */}
      <section id="Profexp">
        <Profexp />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="resume">
        <ResumeSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Index;
