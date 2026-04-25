import { Hono } from "hono";
import { skills } from "@/shared/data-storage/skills";

const route = new Hono().basePath("/skills");

route.get("/", (c) => {
  const size = Number(c.req.query("size") || 10);
  const skip = Number(c.req.query("skip") || 0);
  const categories = (c.req.queries("categories") || []).map((category) =>
    category.toLowerCase(),
  );
  const filtered = (
    categories.length === 0
      ? skills
      : skills.filter((skill) =>
          skill.categories
            .map((skillCategory) => skillCategory.toLowerCase())
            .some((skillCategory) => categories.includes(skillCategory)),
        )
  ).slice(skip, size);

  return c.json(filtered);
});

export default route;
