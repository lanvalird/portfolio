import { InformationCard } from "@/shared/components/information-card";
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
        <InformationCard
          key={team.id}
          title={team.name}
          content={team.description}
          badges={team.roles}
          link={`/teams/${team.slug}`}
        />
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
