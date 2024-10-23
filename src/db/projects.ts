import Project from "../types/Project.ts";

const response = await fetch("https://api.github.com/users/aculaOne/repos");
const repos: Project[] = await response.json();

export default repos;
