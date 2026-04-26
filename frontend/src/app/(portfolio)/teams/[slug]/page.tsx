import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { GitBranchIcon, Link as LinkIcon } from "lucide-react";

import { getTeam } from "@/shared/lib/api";
import { notFound } from "next/navigation";
import { humanizeDate } from "@/shared/lib/utils";

export const revalidate = 10_800; // 3 hours

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const team = await getTeam(slug);

  if (!team) {
    return {
      title: "Команда не найдена",
      description: "Запрошенной команды не существует",
    };
  }

  return {
    title: team.name,
    description: `Страница с информацией о команде ${team.name}`,
    openGraph: {
      title: team.name,
      description: team.description,
      images: team.images.logotype,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const team = await getTeam(slug);

  if (!team) {
    return notFound();
  }

  return (
    <article className="mx-auto my-o px-16 py-8 max-w-5xl">
      {team.images.logotype && (
        <div className="fixed inset-0 -z-900 opacity-25">
          <Image src={team.images.logotype} alt={team.name} fill />
        </div>
      )}
      <div className="relative">
        <h1 className="scroll-m-20 my-8 text-center text-4xl font-extrabold tracking-tight text-balance">
          {team.name}
        </h1>
        <div className="absolute top-1 right-8">
          {team.urls.homepage && (
            <Button variant={"ghost"} asChild>
              <Link href={team.urls.homepage} target="_blank" rel="noopener noreferrer">
                <LinkIcon />
              </Link>
            </Button>
          )}
          {team.urls.github && (
            <Button variant={"ghost"} asChild>
              <Link href={team.urls.github} target="_blank" rel="noopener noreferrer">
                <GitBranchIcon />
              </Link>
            </Button>
          )}
        </div>
      </div>

      <p className="text-muted-foreground text-xl text-center mb-6">{team.description}</p>

      <div className="flex w-full justify-center flex-wrap gap-2">
        {team.roles.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      <p className="text-base mb-2">
        Работал с {humanizeDate(new Date(team.job.join))}
        {" по "}
        {team.job.hire ? humanizeDate(new Date(team.job.hire)) : "сейчас"}
      </p>

      <hr className="mt-8 mb-6" />

      <p className="text-muted-foreground text-base text-center mb-2">
        {humanizeDate(new Date(team.created))} — {humanizeDate(new Date(team.updated))}
      </p>
    </article>
  );
}

export { generateStaticParams } from "./_lib/utils";
