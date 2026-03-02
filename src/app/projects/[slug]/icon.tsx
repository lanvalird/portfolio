import { ImageResponse } from "next/og";
import type { Project } from "@/shared/types";

async function getProject(slug: string): Promise<Project | null> {
  try {
    const response = await fetch(`${process.env.API_URL}/projects?slug=${slug}`, {
      cache: "force-cache",
    });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

async function getAllProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${process.env.API_URL}/projects`, {
      cache: "force-cache",
    });
    if (!response.ok) return [];
    return await response.json();
  } catch {
    return [];
  }
}

export const size = { width: 256, height: 256 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Icon({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  const siteFaviconUrl = process.env.APP_URL
    ? new URL("/favicon.ico", process.env.APP_URL).toString()
    : "https://lanvalird.ru/favicon.ico";

  let mainImageUrl: string;
  let showCornerFavicon: boolean;

  if (project?.images?.logotype) {
    mainImageUrl = project.images.logotype;
    showCornerFavicon = true;
  } else {
    mainImageUrl = siteFaviconUrl;
    showCornerFavicon = false;
  }

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={mainImageUrl}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
      {showCornerFavicon && (
        <img
          src={siteFaviconUrl}
          alt=""
          style={{
            position: "absolute",
            bottom: 4,
            right: 4,
            width: 128,
            height: 128,
            borderRadius: 8,
            objectFit: "cover",
            boxShadow: "-8px -8px 4px rgba(0,0,0,0.1)",
          }}
        />
      )}
    </div>,
    {
      ...size,
    },
  );
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
