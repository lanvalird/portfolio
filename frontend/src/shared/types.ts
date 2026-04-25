export type Project = {
  id: string;
  slug: string;

  name: string;
  description: string;

  status: "draft" | "published";

  markdown: string;

  urls: {
    homepage?: string;
    github?: string;
  };

  images: {
    logotype?: string;
    cover?: string;

    screenshots?: string[];
  };
  tags: string[];
  linked: string[];

  updated: string;
  created: string;
};

export type Team = {
  id: string;
  slug: string;

  name: string;
  description: string;

  job: {
    join: Date;
    hire: Date | undefined;
  };

  roles: string[];

  urls: {
    homepage?: string;
    github?: string;
  };

  images: {
    logotype?: string;
  };

  linked: string[];

  updated: string;
  created: string;
};
