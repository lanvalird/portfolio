import "dotenv/config";

import express, { Request, Response } from "express";
import cors from "cors";

import projectsRoutes from "./routes/projects";

const app = express();
const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    maxAge: 3600,
  })
);
app.use(express.json());
app.use("/projects", projectsRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
