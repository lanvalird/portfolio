import { Hono } from "hono";
import { skills } from "@/shared/data-storage/skills";
import { Skill } from "@/shared/data-storage/skills/types";

const route = new Hono().basePath("/skills");

function filterByCategories(skills: Skill[], categories: string[]) {
  const loweredCategories = categories.map((category) => category.toLowerCase());
  return loweredCategories.length === 0
    ? skills
    : skills.filter((skill) =>
        skill.categories
          .map((skillCategory) => skillCategory.toLowerCase())
          .some((skillCategory) => loweredCategories.includes(skillCategory)),
      );
}

route.get("/", (c) => {
  const size =
    c.req.query("size")?.toLowerCase() === "all"
      ? undefined
      : Number(c.req.query("size")) === -1
        ? undefined
        : Number(c.req.query("size") || 10);
  const skip = Number(c.req.query("skip") || 0);
  const categories = c.req.queries("categories") || [];
  const filtered = filterByCategories(skills, categories).slice(skip, size);

  return c.json(filtered);
});

route.get("/length", (c) => {
  const categories = c.req.queries("categories") || [];

  if (categories.length > 0) {
    return c.json(filterByCategories(skills, categories).length);
  }

  return c.json(skills.length);
});

export default route;
