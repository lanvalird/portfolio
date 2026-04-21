import { getProject } from "@/shared/lib/api";
import { ImageResponse } from "next/og";

export const size = { width: 256, height: 256 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Icon({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  const siteFaviconUrl = "https://github.com/lanvalird.png";

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
        backgroundColor: "transparent",
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
          borderRadius: 24,
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
          }}
        />
      )}
    </div>,
    {
      ...size,
    },
  );
}

export { generateStaticParams } from "./_lib/utils";
