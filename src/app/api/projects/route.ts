import type { NextRequest } from "next/server";
import projects from "@/shared/db/storage/projects";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const slug = searchParams.get("slug");

  if (slug) {
    return Response.json(
      projects.find(
        (project) => project.slug === slug && project.status === "published"
      )
    );
  }

  return Response.json(projects);
}
