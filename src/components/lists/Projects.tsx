import {
  ClockCircleFilled,
  CodeFilled,
  ReloadOutlined,
  StarFilled,
} from "@ant-design/icons";
import ProjectType from "../../types/Project.ts";
import style from "./Projects.module.css";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import Badge from "../ui/Badge.tsx";

export default function Projects({
  projects,
  title,
}: {
  projects: ProjectType[];
  title?: string;
}) {
  return (
    <section className={style.container}>
      {title && <h2 className={style.title}>{title}</h2>}

      {projects.length !== 0
        ? projects
            .sort(
              (a, b) =>
                DateTime.fromISO(b.pushed_at).toMillis() -
                DateTime.fromISO(a.pushed_at).toMillis()
            )
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .map((project) => <Project key={project.id} project={project} />)
        : "Ошибка загрузки репозиториев."}
    </section>
  );
}

function Project({ project }: { project: ProjectType }) {
  const [cover, setCover] = useState<string | null>(null);
  useEffect(() => {
    const url = `/repos/covers/${project.name}.png`;
    const fetchCover = async () => {
      const res = await fetch(url);
      const data = await res.blob();
      if (data.type === "image/png") setCover(url);
    };

    try {
      fetchCover();
    } catch {
      /* empty */
    }
  }, [project.name]);
  return (
    <div className={style.post}>
      <div className={style.post__info}>
        {cover ? (
          <div className={style.post__image}>
            <img src={cover} alt="Обложка поста" width="128" height="128" />
          </div>
        ) : (
          <div className={`${style.post__image} ${style.placeholder}`} />
        )}
        <h3
          className={`${style.post__title} ${style.post__group} ${style["sm-gap"]}`}
        >
          {project.language && (
            <Badge noBackground>
              {" "}
              <CodeFilled /> {project.language}
            </Badge>
          )}
          <a
            href={`http://github.com/aculaOne/${project.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.name}
          </a>
        </h3>
        <div className={`${style.post__group} ${style["sm-gap"]}`}>
          <Badge>
            <ClockCircleFilled />{" "}
            {DateTime.fromISO(project.created_at).toLocaleString() ?? "Никогда"}
          </Badge>
          <Badge>
            <ReloadOutlined />{" "}
            {DateTime.fromISO(project.pushed_at).toLocaleString() ?? "Никогда"}
          </Badge>
          <Badge
            noBackground
            style={{
              color: "#ffe23f",
              border: "1px dotted #ffe23f",
            }}
          >
            <StarFilled /> {project.stargazers_count}
          </Badge>
        </div>
        <p className={style.post__description}>
          {project.description ??
            `Репозиторий aculaOne/${project.name} не имеет описания.`}
        </p>
        <p className={style.post__topics}>
          {project.topics.map((topic) => (
            <span key={topic} className={style.post__topic}>
              {topic}
            </span>
          ))}
        </p>
        <a
          href={`http://github.com/aculaOne/${project.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className={style.post__button}
        >
          К проекту
        </a>
      </div>
    </div>
  );
}
