import { HomeHeroSection } from "./_sections/hero";
import { HomeProjectsSection } from "./_sections/projects";
import { HomeSkillsSection } from "./_sections/skills";
import { HomeTeamsSection } from "./_sections/teams";

import { DEFAULT_REVALIDATE_TIME_IN_SECONDS } from "@/shared/lib/constants";

export const dynamic = "force-static";
export const revalidate = DEFAULT_REVALIDATE_TIME_IN_SECONDS;

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
