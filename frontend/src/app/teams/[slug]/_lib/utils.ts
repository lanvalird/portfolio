import { getAllTeams } from "@/shared/lib/api";

export async function generateStaticParams() {
  const teams = await getAllTeams();
  return teams.map((team) => ({
    slug: team.slug,
  }));
}
