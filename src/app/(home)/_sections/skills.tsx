"use client";

import Link from "next/link";

import { Button } from "@/shared/components/ui/button";

export function HomeSkillsSection() {
  return (
    <section
      className={
        "h-screen flex flex-col p-4 sm:grid sm:grid-cols-3 items-stretch gap-4 sm:gap-10"
      }
    >
      <h2 className={"text-4xl text-center col-span-full"}>
        Изучил более
        <span className={"italic"}> 89 </span>
        инструментов
      </h2>

      <Slot>Fullstack</Slot>
      <Slot>Frontend</Slot>
      <Slot>Backend</Slot>
      <Slot>Mobile</Slot>
      <Slot disabled />
      <Slot>Native</Slot>

      <Button
        variant={"ghost"}
        className={
          "w-full max-w-4xl justify-self-center text-2xl p-8 col-span-full rounded-xl"
        }
        asChild
      >
        <Link href={"/skills"}>And also more things</Link>
      </Button>
    </section>
  );
}

function Slot({
  children,
  disabled = false,
}: {
  children?: React.ReactNode | undefined;
  disabled?: boolean;
}) {
  return (
    <div
      className={`w-full min-h-44 h-44 content-center rounded-xl ${
        !disabled ? "bg-primary" : "bg-card hidden sm:block"
      }`}
    >
      <p className={"text-2xl font-medium text-center"}>{children}</p>
    </div>
  );
}
