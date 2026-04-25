import { Hono } from "hono";
import { handle } from "hono/vercel";

import { projectsRoute, skillsRoute, teamsRoute } from "./_routes";

const app = new Hono().basePath("/api");

app.route("/", projectsRoute);
app.route("/", skillsRoute);
app.route("/", teamsRoute);

export const GET = handle(app);
