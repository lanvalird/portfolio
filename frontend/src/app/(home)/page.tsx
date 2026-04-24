import { HomeHeroSection } from "./_sections/hero";
import { HomeProjectsSection } from "./_sections/projects";
import { HomeSkillsSection } from "./_sections/skills";

export const dynamic = "force-static";
export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <HomeSkillsSection />
      <HomeProjectsSection />
    </>
  );
}
