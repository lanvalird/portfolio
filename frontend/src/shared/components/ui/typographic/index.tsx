import { cn } from "@/shared/lib/utils";

type SharedProps = React.ComponentProps<"div">;

/**
 * Uses into Markdown Components
 */
export function LinearHeading({ children, level, className }: SharedProps & { level: 1 | 2 | 3 | 4 | 5 | 6 }) {
  const sharedStyle = "scroll-m-20 py-2 tracking-tight font-semibold";

  function mixStyles(styles: string) {
    return cn(sharedStyle, styles, className);
  }

  if (level === 1) {
    return <h1 className={mixStyles("my-8 text-center text-4xl font-extrabold text-balance")}>{children}</h1>;
  }
  if (level === 2) {
    return <h2 className={mixStyles("border-b text-3xl first:mt-0")}>{children}</h2>;
  }
  if (level === 3) {
    return <h3 className={mixStyles("text-2xl")}>{children}</h3>;
  }

  const forOthersStyle = mixStyles("my-4 text-1xl");
  if (level === 4) {
    return <h4 className={forOthersStyle}>{children}</h4>;
  }
  if (level === 5) {
    return <h5 className={forOthersStyle}>{children}</h5>;
  }
  return <h6 className={forOthersStyle}>{children}</h6>;
}

/**
 * Uses into Markdown Components
 */
export function LinearText({ children }: SharedProps) {
  return <p className="leading-7 not-first:mt-6">{children}</p>;
}

/**
 * Uses into Markdown Components
 */
export function LinearList({ children, variant }: SharedProps & { variant: "numeric" | "figured" }) {
  if (variant === "numeric") {
    return <ol className="ml-6 list-decimal [&>li]:mt-2 marker:text-primary">{children}</ol>;
  } else {
    return <ul className="ml-6 list-disc [&>li]:mt-2 marker:text-primary">{children}</ul>;
  }
}
