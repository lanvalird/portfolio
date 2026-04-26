import { HomeHeroSection } from "./_sections/hero";
import { HomeProjectsSection } from "./_sections/projects";
import { HomeSkillsSection } from "./_sections/skills";
import { HomeTeamsSection } from "./_sections/teams";

export const dynamic = "force-static";
export const revalidate = 10_800; // 3 hours

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <HomeSkillsSection />
      <HomeProjectsSection />
      <HomeTeamsSection />
    </>
  );
}
