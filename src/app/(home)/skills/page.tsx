"use client";

import type { Skill } from "@/shared/storage/skills/types";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../shared/components/ui/card";
import { Badge } from "../../../shared/components/ui/badge";

import { DEVELOPMENT_TYPE } from "@/shared/storage/skills/lib";
import { HOBBY_TYPE } from "@/shared/storage/skills/programs/enums";

import { skills } from "@/shared/storage/skills";

export default function SkillsPage() {
  return (
    <div className="flex w-full flex-col gap-6 p-2 sm:p-6">
      <SkillsSection
        skills={skills.filter((skill) =>
          skill.categories.includes(DEVELOPMENT_TYPE.FULLSTACK)
        )}
        category="Фуллстек"
      />
      <SkillsSection
        skills={skills.filter((skill) =>
          skill.categories.includes(DEVELOPMENT_TYPE.FRONTEND)
        )}
        category="Фронтенд"
      />
      <SkillsSection
        skills={skills.filter((skill) =>
          skill.categories.includes(DEVELOPMENT_TYPE.BACKEND)
        )}
        category="Бэкенд"
      />
      <SkillsSection
        skills={skills.filter((skill) =>
          skill.categories.includes(DEVELOPMENT_TYPE.MOBILE)
        )}
        category="Мобильная разработка"
      />
      <SkillsSection
        skills={skills.filter((skill) =>
          skill.categories.includes(DEVELOPMENT_TYPE.NATIVE)
        )}
        category="Нативная разработка"
      />

      <SkillsSection
        skills={skills.filter(
          (skill) =>
            skill.categories.includes(HOBBY_TYPE.DESIGN) ||
            skill.categories.includes(HOBBY_TYPE.ART)
        )}
        heading="Хобби ∷ Дизайн и Рисование"
      />
      <SkillsSection
        skills={skills.filter((skill) =>
          skill.categories.includes(HOBBY_TYPE.MUSIC)
        )}
        heading="Хобби ∷ Музыка"
      />

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
    <section className="w-full px-4 flex flex-col text-center sm:px-8 md:px-12 md:items-center md:grid md:grid-cols-3 gap-12">
      <h3 className="col-span-full font-semibold tracking-tight">{heading}</h3>
      {skills.map(({ name, categories, description }) => (
        <Card
          key={name}
          style={{
            background:
              "radial-gradient(closest-corner at 50% 2em, var(--primary), transparent 30%",
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
