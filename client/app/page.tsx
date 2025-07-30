"use client";

import { useEffect, useState } from "react";
import Skeleton from "../components/Skeleton";
import Image from "next/image";
import Section from "../components/Section";

import skills from "../db/skills";

export default function Home() {
  return (
    <main className="container mx-auto flex w-full max-w-7xl flex-col items-start justify-center gap-6 p-6 sm:flex-row">
      <div className="flex w-full flex-col gap-6">
        <Section className="welcome">
          <Image src={"/assets/face.png"} alt="Me" width="200" height="200" />
          <div className="heading">
            Привет, меня зовут <span>Валентином Бёрдэ</span>
            <div className="roles">
              {["Фронтенд-разработчик", "Веб-дизайнер"].map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
          </div>
        </Section>
        <div className="skills-section">
          <h2>Навыки:</h2>
          <div className="skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
        <Section
          title="Мои репозитории"
          description="Все мои публичные репозитории на GitHub"
        >
          <Projects type="github" />
        </Section>
        <Section
          title="Другое"
          description="Что-то, что не попало в предыдущую секцию"
        >
          <Projects type="local" />
        </Section>
      </div>
    </main>
  );
}

function Projects({ type }: { type: "local" | "github" }) {
  const [projects, setProjects] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: any[] = await fetch(
          `${import.meta.env.VITE_BACKEND_API}/projects/${type}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        ).then((r) =>
          r.json().then((data) => {
            data.forEach((p) => {
              if (type === "local") p.cover = `/project/${p.id}/cover.png`;

              const githubProfile = import.meta.env.VITE_GITHUB_PROFILE_NAME;
              p.href =
                type === "local"
                  ? `/project/${p.id}`
                  : `https://github.com/${githubProfile}/${p.name}`;
            });
            return data;
          }),
        );

        setProjects(data);
      } catch {
        setError(true);
      }
    };

    fetchData();
  }, [type]);

  if (error)
    return (
      <div className="projects-list grid grid-cols-1 text-center text-rose-500">
        Серверная ошибка, попробуйте зайти позже
      </div>
    );

  return (
    <div className="projects-list">
      {projects.length === 0 ? (
        <>
          <Skeleton
            className={type === "local" ? "aspect-[3_/_2]" : "aspect-[4_/_1]"}
          />
          <Skeleton
            className={type === "local" ? "aspect-[3_/_2]" : "aspect-[4_/_1]"}
          />
          <Skeleton
            className={type === "local" ? "aspect-[3_/_2]" : "aspect-[4_/_1]"}
          />
          <Skeleton
            className={type === "local" ? "aspect-[3_/_2]" : "aspect-[4_/_1]"}
          />
          <Skeleton
            className={type === "local" ? "aspect-[3_/_2]" : "aspect-[4_/_1]"}
          />
        </>
      ) : (
        projects
          .filter((p) => p.sub !== true)
          .map((p) => (
            <Post
              key={p.id}
              type={type === "github" ? "minimaze" : undefined}
              post={{
                id: p.id,
                name: p.name,
                href: p.href,
                cover: type === "github" ? undefined : p.cover,
              }}
              targetBlank={type === "github"}
            />
          ))
      )}
    </div>
  );
}

function Post({
  post,
  type = "full",
  post: { cover: originCover },
  targetBlank,
}: {
  type?: "full" | "minimaze";
  post: {
    name: string;
    id: number | string;
    href: string;
    cover?: string;
  };
  targetBlank?: boolean;
}) {
  return (
    <div
      className="flow overflow-hidden p-0 shadow-sm hover:shadow-md"
      title={post.name}
    >
      {!targetBlank ? (
        <Link to={post.href}>
          {type !== "minimaze" && (
            <Image
              src={
                originCover ||
                `/repos/covers/${post.name}.png` ||
                `/blog/cover.png`
              }
              alt={`${post.id}-${post.name}`}
              className="aspect-[3_/_1] object-cover"
            />
          )}
          <div className="px-4 py-2">
            <h3 className="line-clamp-2">{post.name}</h3>
          </div>
        </Link>
      ) : (
        <a href={post.href} target="_blank">
          {type !== "minimaze" && (
            <Image
              src={
                originCover ||
                `/repos/covers/${post.name}.png` ||
                `/blog/cover.png`
              }
              alt={`${post.id}-${post.name}`}
              className="aspect-[3_/_1] object-cover"
            />
          )}
          <div className="px-4 py-2">
            <h3 className="line-clamp-2">{post.name}</h3>
          </div>
        </a>
      )}
    </div>
  );
}
