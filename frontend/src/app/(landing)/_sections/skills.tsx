import Link from "next/link";

import { Button } from "@/shared/components/ui/button";
import { getSkills, getSkillsLength } from "@/shared/lib/api";

export async function HomeSkillsSection() {
  return (
    <section className={"min-h-screen flex flex-col p-4 sm:grid sm:grid-cols-3 items-stretch gap-4 sm:gap-10"}>
      <h2 className={"text-4xl text-center col-span-full"}>
        Изучил более
        <span className={"italic"}>{` ${await getSkillsLength()} `}</span>
        инструментов
      </h2>

      <Slot>Fullstack</Slot>
      <Slot>Frontend</Slot>
      <Slot>Backend</Slot>
      <Slot>Mobile</Slot>
      <Slot disabled />
      <Slot>Native</Slot>

      <Button variant={"ghost"} className={"w-full bg-card max-w-4xl justify-self-center col-span-full"} asChild>
        <Link href={"/skills"}>And also more things</Link>
      </Button>
    </section>
  );
}

async function Slot({ children: category, disabled = false }: { children?: string; disabled?: boolean }) {
  if (disabled || !category) {
    return (
      <div className={"w-full h-44 content-center rounded-xl bg-card hidden sm:block"}>
        <p
          className={
            "text-3xl font-medium text-center text-card-foreground/70 hover:text-card-foreground transition-colors"
          }
        >
          {category}
        </p>
      </div>
    );
  }

  const skills = await getSkills(category);
  const skillsLength = skills.length;

  return (
    <Button
      className={[
        "relative w-full h-44 content-center rounded-xl bg-primary shadow-sm shadow-primary",
        "transition-[shadow_transform] hover:-rotate-3 hover:shadow-lg",
      ].join(" ")}
      asChild
    >
      <Link href={`/skills?categories=${category}`}>
        <div className="py-2 px-4 text-center">
          <h3 className={"text-3xl font-medium"}>{category}</h3>
          <p className="z-1 text-primary-foreground/80">
            {skills &&
              skills
                .filter((skill) => skill.categories.some((category) => category.toLowerCase() === "language"))
                .map((skill) => skill.name)
                .join(", ")}
          </p>
          <span className="absolute inset-0 z-0 flex justify-end items-center text-8xl text-primary-foreground/20 p-4">
            {skillsLength}
          </span>
        </div>
      </Link>
    </Button>
  );
}
