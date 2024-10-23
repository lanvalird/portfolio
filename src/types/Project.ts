type Project = {
  id: number;

  name: string;
  description: string;
  topics: string[];

  stargazers_count: number;
  language: string | null;

  created_at: string;
  // updated_at: string;
  pushed_at: string;
};

export default Project;
