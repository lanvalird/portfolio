import type { Team } from "@/shared/types";

import Link from "next/link";

import { Button } from "@/shared/components/ui/button";
import Image from "next/image";

import { getAllTeams } from "@/shared/lib/api";

export async function HomeTeamsSection() {
  const projects = await getAllTeams();

  return (
    <section
      className={"min-h-screen flex flex-col p-4 sm:grid items-stretch gap-4"}
    >
      <h2 className={"text-4xl text-center col-span-full"}>My journey</h2>

      {projects.slice(0, 6).map((team) => (
        <Slot key={team.id} team={team} />
      ))}

      <Button
        variant={"ghost"}
        className={"w-full bg-card max-w-4xl justify-self-center col-span-full"}
        asChild
      >
        <Link href={"/teams"}>See all</Link>
      </Button>
    </section>
  );
}

function Slot({ team }: { team: Team }) {
  const logotype = team.images.logotype;
  const joinDate = new Date(team.job.join);
  const hireDate = team.job.hire ? new Date(team.job.hire) : undefined;

  return (
    <div
      className={
        "my-0 mx-auto w-full max-w-3xl h-min py-2 px-3 flex gap-4 content-center rounded-xl bg-card"
      }
    >
      <div className="inline-block aspect-square w-auto h-16 rounded-lg overflow-clip bg-secondary/80">
        {logotype && (
          <img
            src={logotype}
            className="aspect-square h-full w-auto"
            width={320}
            height={320}
            alt={`Logotype of team "${team.name}"`}
          />
        )}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h3 className="w-full line-clamp-1 text-xl font-medium">{team.name}</h3>
        <div className="flex w-full gap-2 items-center text-sm">
          {joinDate.getFullYear() === hireDate?.getFullYear() ? (
            joinDate.getFullYear()
          ) : (
            <span>
              {joinDate.getFullYear()}-
              {hireDate
                ? hireDate.getFullYear()
                : `${new Date().getFullYear()} (Now)`}
            </span>
          )}
          <span className="inline-block aspect-square w-auto h-1 rounded-full bg-current" />
          {!(team.roles.length > 2) ? (
            <span>
              {team.roles[0] || "Member"}
              {team.roles[1] && ` and ${team.roles[1]}`}
            </span>
          ) : (
            <span>
              {team.roles.slice(0, 2).join(", ")}
              {" and "}
              {team.roles.slice(2).length > 1
                ? "more"
                : team.roles[team.roles.length - 1]}
            </span>
          )}
        </div>
        <p className="line-clamp-2 h-min-max">{team.description}</p>
        <Button variant="ghost" asChild>
          <Link href={`/teams/${team.slug}`}>See more</Link>
        </Button>
      </div>
    </div>
  );
}
