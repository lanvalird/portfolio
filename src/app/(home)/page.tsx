"use client";

import type { SVGProps } from "react";
import type { Skill } from "./_config/skills/types";

import { DEVELOPMENT_TYPE } from "./_config/skills/lib";

import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import { skills } from "./_config";
import { HOBBY_TYPE } from "./_config/skills/programs/enums";

export default function HomePage() {
  return (
    <main className="max-w-[1270px] min-h-screen mx-auto my-0">
      <div className="flex w-full flex-col gap-6 p-2 sm:p-6">
        <section className="w-full px-4 sm:px-8 md:px-16 flex flex-col-reverse md:items-center md:grid md:grid-cols-[60%_1fr]">
          <div className="flex flex-col">
            <p className="scroll-m-20 text-4xl font-semibold tracking-tight text-center md:text-left">Валентин Бёрд</p>
            <blockquote className="max-w-[400px] w-[80%] mx-auto my-0 md:mx-0 mt-6 border-l-2 pl-6 italic">
              Веб-разработчик, Веб-дизайнер, музыкант
            </blockquote>

            <Button variant={"ghost"} className="w-[70%] mx-auto md:ml-0 my-0 md:w-[50%] mt-12 md:border-none" asChild>
              <Link href={"/projects"}>
                <SolarIconAlbumLineDuotone />
                Портфолио
              </Link>
            </Button>
          </div>

          <div className="p-8 sm:p-10 md:p-6 lg:p-12 shrink-0 justify-center items-center">
            <div className="h-full aspect-square relative m-4">
              <Image
                className="inline-flex rounded-4xl overflow-hidden"
                src="https://github.com/lanvalird.png"
                alt="Me"
                fill
              />
              <Image
                className="inline-flex rounded-4xl overflow-hidden scale-110 -z-1 blur-xl opacity-50"
                src="https://github.com/lanvalird.png"
                alt="Me"
                fill
                quality={1}
              />
            </div>
          </div>
        </section>

        <SkillsSection
          skills={skills.filter((skill) => skill.categories.includes(DEVELOPMENT_TYPE.FULLSTACK))}
          category="Фуллстек"
        />
        <SkillsSection
          skills={skills.filter((skill) => skill.categories.includes(DEVELOPMENT_TYPE.FRONTEND))}
          category="Фронтенд"
        />
        <SkillsSection
          skills={skills.filter((skill) => skill.categories.includes(DEVELOPMENT_TYPE.BACKEND))}
          category="Бэкенд"
        />
        <SkillsSection
          skills={skills.filter((skill) => skill.categories.includes(DEVELOPMENT_TYPE.MOBILE))}
          category="Мобильная разработка"
        />
        <SkillsSection
          skills={skills.filter((skill) => skill.categories.includes(DEVELOPMENT_TYPE.NATIVE))}
          category="Нативная разработка"
        />

        <SkillsSection
          skills={skills.filter((skill) => skill.categories.includes(HOBBY_TYPE.DESIGN) || skill.categories.includes(HOBBY_TYPE.ART))}
          heading="Хобби ∷ Дизайн и Рисование"
        />
        <SkillsSection
          skills={skills.filter((skill) => skill.categories.includes(HOBBY_TYPE.MUSIC))}
          heading="Хобби ∷ Музыка"
        />

        <SkillsSection
          skills={skills}
          category="Весь список навыков"
        />
      </div>
    </main>
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
            background: "radial-gradient(closest-corner at 50% 2em, var(--primary), transparent 30%",
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

function SolarIconAlbumLineDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024s.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464z" />
        <path
          d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"
          opacity="0.5"
        />
        <circle cx="16.5" cy="11.5" r="1.5" opacity="0.5" />
        <path
          strokeLinecap="round"
          d="m20 20l-2.884-2.149c-.93-.692-2.316-.761-3.34-.166l-.266.155c-.712.414-1.68.345-2.294-.164l-3.839-3.177c-.766-.634-1.995-.668-2.81-.078l-1.324.96"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}
