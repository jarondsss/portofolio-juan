import PersonaToggle from "@/components/PersonaToggle";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import ContactSection from "@/components/ContactSection";
import PixelFishCanvas from "@/components/PixelFishCanvas";
import DepthHUD from "@/components/DepthHUD";
import DiveVignette from "@/components/DiveVignette";

export default function Home() {
  return (
    <>
      {/* Fixed canvas layer — behind everything */}
      <PixelFishCanvas />

      {/* Dive vignette — darkens as you scroll deeper */}
      <DiveVignette />

      {/* Depth HUD — progress hairline + left depth rail */}
      <DepthHUD />

      {/* Fixed toggle — above everything */}
      <PersonaToggle />

      {/* Page content — above canvas */}
      <main>
        <HeroSection />
        <ContentSection />
        <ProjectShowcase />
        <ContactSection />
      </main>
    </>
  );
}
