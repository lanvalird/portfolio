import type { NextRequest } from "next/server";
import projects from "@/shared/data-storage/projects";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const slug = searchParams.get("slug");
  const size = Number(searchParams.get("size") || 10);
  const skip = Number(searchParams.get("skip") || 0);

  if (slug) {
    return Response.json(projects.find((project) => project.slug === slug && project.status === "published"));
  }

  return Response.json(projects.slice(skip, size));
}
