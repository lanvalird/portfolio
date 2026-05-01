import type { Skill } from "@/shared/data-storage/skills/types";

import { InformationCard } from "@/shared/components/information-card";

import { getSkills } from "@/shared/lib/api";

import { DEVELOPMENT_TYPE } from "@/shared/data-storage/skills/lib";
import { HOBBY_TYPE } from "@/shared/data-storage/skills/programs/enums";

export const dynamic = "force-static";
export const revalidate = 10_800; // 3 hours

export default async function SkillsPage() {
  const DEVELOPMENT_TYPES = [
    DEVELOPMENT_TYPE.FULLSTACK,
    DEVELOPMENT_TYPE.FRONTEND,
    DEVELOPMENT_TYPE.BACKEND,
    DEVELOPMENT_TYPE.MOBILE,
    DEVELOPMENT_TYPE.NATIVE,
  ] as const;

  const devSkills = await Promise.all(
    DEVELOPMENT_TYPES.map(async (type) => ({
      category: type,
      skills: await getSkills(type),
    })),
  );

  const hobbySkills = await Promise.all(
    [[HOBBY_TYPE.DESIGN, HOBBY_TYPE.ART], HOBBY_TYPE.MUSIC].map(
      async (type) => ({
        category: type,
        skills: await getSkills(type),
      }),
    ),
  );

  const allSkills = await getSkills();

  return (
    <div className="flex w-full flex-col gap-8 p-2 sm:p-6">
      {devSkills.map(({ category, skills }) => (
        <SkillsSection
          key={category}
          skills={skills || []}
          category={category}
        />
      ))}
      {hobbySkills.map(({ category, skills }) => (
        <SkillsSection
          key={category.toString()}
          skills={skills || []}
          heading={`Hobby :: ${Array.isArray(category) ? category.join(" & ") : category}`}
        />
      ))}

      <SkillsSection skills={allSkills} category="Весь список навыков" />
    </div>
  );
}

function SkillsSection({
  heading: customHeading,
  category = "Мои навыки",
  skills,
}: {
  heading?: string;
  category?: string;
  skills: Skill[];
}) {
  const heading = customHeading || `${category} (${skills.length})`;

  return (
    <section className="w-full mt-4 px-4 flex flex-col text-center sm:px-8 md:px-12 md:items-center md:grid grid-cols-2 lg:grid-cols-3 gap-12">
      <h3 className="col-span-full font-semibold tracking-tight">{heading}</h3>
      {skills.map((skill) => (
        <InformationCard
          key={skill.name}
          title={skill.name}
          content={skill.description}
          badges={skill.categories}
        />
      ))}
    </section>
  );
}
