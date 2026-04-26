import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ReloadButton } from "./_ui/reload-button";

import { getAllTeams } from "@/shared/lib/api";

export const revalidate = 10_800; // 3 hours

export default async function ProjectsPage() {
  const teams = await getAllTeams();

  return (
    <div className="grid grid-cols-1 justify-start text-center sm:grid-cols-2 lg:grid-cols-3 gap-12 p-8">
      {teams.length === 0 && (
        <>
          Не удалось загрузить данные с сервера, либо их вовсе нет 😭
          <ReloadButton />
        </>
      )}

      {teams.map((team) => (
        <Card
          key={team.slug}
          className="overflow-hidden"
          style={{
            background:
              "radial-gradient(closest-corner at 50% 2em, color-mix(in oklab,var(--primary)40%,transparent), transparent 30%",
          }}
        >
          <CardHeader>
            <CardTitle>{team.name}</CardTitle>
            <div className="flex w-full flex-wrap justify-center mt-4 -mb-2 gap-2">
              {team.roles.slice(0, 3).map((role) => (
                <Badge key={role} variant="outline">
                  {role}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent className="h-full relative">
            <CardDescription>{team.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={"secondary"} asChild>
              <Link href={`/teams/${team.slug}`}>Посмотрим!</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: "Команды, в которых я участвовал",
    description: "Команды, в которых я (lanvalird) принял участие.",
  };
}
