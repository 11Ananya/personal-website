import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { WorkSection } from "@/components/sections/work";
import { SkillsSection } from "@/components/sections/skills";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
