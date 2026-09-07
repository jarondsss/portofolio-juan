import PersonaToggle from "@/components/PersonaToggle";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <PersonaToggle />
      <HeroSection />
      <ContentSection />
      <ProjectShowcase />
      <ContactSection />
    </main>
  );
}
