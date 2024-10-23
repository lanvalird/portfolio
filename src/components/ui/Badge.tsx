import style from "./Badge.module.css";

interface BadgeParams extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  noBackground?: boolean;
}

export default function Badge(params: BadgeParams) {
  return (
    <span
      {...params}
      className={`${params.noBackground ? style["no-bg"] + " " : ""} ${
        params.className ? params.className + " " : ""
      }${style.container}`}
    >
      {params.children}
    </span>
  );
}
