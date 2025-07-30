export type BaseProject = {
  id: string;

  name: string;
  description: string;
  topics: string[];

  language: string | null;
};

export type NetworkProject = Omit<BaseProject, 'id'> & {
  id: number;
  stargazers_count: number;
  created_at: string;
  // updated_at: string;
  pushed_at: string;
};

export type LocalProject = BaseProject & {
  url: string | null;
  sub?: boolean;
  images?: string[];
  requirements?: string[];
  subprojects?: string[];
  links?: string[];
};
