import { Request, Response, Router } from "express";
import { lcRepos } from "../database/projects";

const fetchRepos = async () =>
  fetch(
    `https://api.github.com/users/${process.env.GITHUB_PROFILE}/repos`
  ).then(async (v) => {
    const json = await v.json();

    if (json.message) {
      return [];
    } else return json;
  });

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.sendStatus(501);
});

router.get("/local", (req: Request, res: Response) => {
  res.status(200).send(lcRepos);
});

router.get("/local/:id", (req: Request, res: Response) => {
  const repo = lcRepos.find((v) => v.id === req.params.id);

  if (repo) res.status(200).send(repo);
  else res.sendStatus(404);
});

let lastUpdate: number | null = null;
let cachedGhRepos: never[] = [];
router.get("/github", async (req: Request, res: Response) => {
  const getRepos = async () =>
    (cachedGhRepos = await fetchRepos().then((v) =>
      v.filter((v: any) => !v.fork)
    ));

  if (lastUpdate === null) {
    await getRepos();
    lastUpdate = new Date().getTime();
  }

  if (Date.now() - lastUpdate > 5 * 60 * 1000) {
    res.status(200).send(await getRepos());
    lastUpdate = new Date().getTime();
  } else res.status(200).send(cachedGhRepos);
});

export default router;
