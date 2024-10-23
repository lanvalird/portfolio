import Posts from "../components/lists/Posts";
import Projects from "../components/lists/Projects";

import posts from "../db/posts";
import projects from "../db/projects";

export default function Home() {
  return (
    <>
      <Posts title="События" posts={posts} max={3} />
      <Projects title="Мои проекты" projects={projects} />
    </>
  );
}
