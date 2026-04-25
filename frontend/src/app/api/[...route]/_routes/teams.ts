import { Hono } from "hono";
import teams from "@/shared/data-storage/teams";

const route = new Hono().basePath("/teams");

route.get("/", (c) => {
  const slug = c.req.query("slug");
  const size = Number(c.req.query("size")) || undefined;
  const skip = Number(c.req.query("skip") || 0);

  if (slug) {
    return c.json(teams.find((team) => team.slug === slug));
  }

  return c.json(teams.slice(skip, size));
});

export default route;
