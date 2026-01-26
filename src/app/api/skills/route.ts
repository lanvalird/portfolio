import type { NextRequest } from "next/server";
import { skills } from "@/shared/data-storage/skills";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const size = Number(searchParams.get("size") || 10);
  const skip = Number(searchParams.get("skip") || 0);

  const filtered = skills.slice(skip, size);

  return Response.json(filtered);
}
