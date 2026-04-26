interface SharedProps {
  children: React.ReactNode;
}

/**
 * Uses into Markdown Components
 */
export function LinearHeading({
  children,
  level,
}: SharedProps & { level: 1 | 2 | 3 | 4 | 5 | 6 }) {
  if (level === 1)
    return (
      <h1 className="scroll-m-20 my-8 text-center text-4xl font-extrabold tracking-tight text-balance">
        {children}
      </h1>
    );
  if (level === 2)
    return (
      <h2 className="scroll-m-20 border-b my-4 py-2 text-3xl font-semibold tracking-tight first:mt-0">
        {children}
      </h2>
    );

  return (
    <h3
      className={"scroll-m-20 my-4 py-2 text-2xl font-semibold tracking-tight"}
    >
      {children}
    </h3>
  );
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
export function LinearList({
  children,
  variant,
}: SharedProps & { variant: "numeric" | "figured" }) {
  if (variant === "numeric")
    return (
      <ol className="ml-6 list-decimal [&>li]:mt-2 marker:text-primary">
        {children}
      </ol>
    );
  else
    return (
      <ul className="ml-6 list-disc [&>li]:mt-2 marker:text-primary">
        {children}
      </ul>
    );
}
