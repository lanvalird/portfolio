import { Hono } from "hono";
import { handle } from "hono/vercel";

import { projectsRoute, skillsRoute } from "./_routes";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello from Hono!",
  });
});

app.route("/", projectsRoute);
app.route("/", skillsRoute);

export const GET = handle(app);
