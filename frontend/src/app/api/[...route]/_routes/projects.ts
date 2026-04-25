import { Hono } from "hono";
import projects from "@/shared/data-storage/projects";

const route = new Hono().basePath("/projects");

route.get("/", (c) => {
  const slug = c.req.query("slug");
  const size = Number(c.req.query("size") || 10);
  const skip = Number(c.req.query("skip") || 0);

  if (slug) {
    return c.json(
      projects.find(
        (project) => project.slug === slug && project.status === "published",
      ),
    );
  }

  return c.json(
    projects
      .filter((project) => project.status === "published")
      .slice(skip, size),
  );
});

export default route;
