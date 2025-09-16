import type { NextRequest } from "next/server";
import projects from "./_db/projects";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const slug = searchParams.get("slug");

  if (slug) {
    return Response.json(projects.find((project) => project.slug === slug));
  }

  return Response.json(projects);
}
