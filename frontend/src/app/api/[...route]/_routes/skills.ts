import { Hono } from "hono";
import { skills } from "@/shared/data-storage/skills";

const route = new Hono().basePath("/skills");

route.get("/", (c) => {
  const size = Number(c.req.query("size") || 10);
  const skip = Number(c.req.query("skip") || 0);

  const filtered = skills.slice(skip, size);

  return c.json(filtered);
});

export default route;
