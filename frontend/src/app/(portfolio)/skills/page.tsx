import type { Skill } from "@/shared/data-storage/skills/types";

import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";

import { DEVELOPMENT_TYPE } from "@/shared/data-storage/skills/lib";
import { HOBBY_TYPE } from "@/shared/data-storage/skills/programs/enums";
import { REVALIDATE_TIME_FOR_SKILLS_IN_SECONDS } from "@/shared/lib/constants";

import { skills } from "@/shared/data-storage/skills";
import { getSkills } from "@/shared/lib/api";

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

  const designArtSkills = skills.filter(
    (skill) => skill.categories.includes(HOBBY_TYPE.DESIGN) || skill.categories.includes(HOBBY_TYPE.ART),
  );

  const musicSkills = await getSkills(HOBBY_TYPE.MUSIC);

  return (
    <div className="flex w-full flex-col gap-6 p-2 sm:p-6">
      {devSkills.map(({ category, skills }) => (
        <SkillsSection key={category} skills={skills || []} category={category} />
      ))}

      <SkillsSection skills={designArtSkills} heading="Хобби ∷ Дизайн и Рисование" />
      <SkillsSection skills={musicSkills} heading="Хобби ∷ Музыка" />
      <SkillsSection skills={skills} category="Весь список навыков" />
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
    <section className="w-full px-4 flex flex-col text-center sm:px-8 md:px-12 md:items-center md:grid grid-cols-2 lg:grid-cols-3 gap-12">
      <h3 className="col-span-full font-semibold tracking-tight">{heading}</h3>
      {skills.map(({ name, categories, description }) => (
        <Card
          key={name}
          style={{
            background:
              "radial-gradient(closest-corner at 50% 2em, color-mix(in oklab,var(--primary)40%,transparent), transparent 30%",
          }}
        >
          <CardHeader>
            <CardTitle>{name}</CardTitle>
            <div className="flex w-full flex-wrap justify-center mt-4 -mb-2 gap-2">
              {categories.map((category) => (
                <Badge key={category} variant="outline">
                  {category}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent className="h-full">
            <CardDescription>{description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
