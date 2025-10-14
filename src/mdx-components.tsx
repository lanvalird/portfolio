import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="scroll-m-20 my-8 text-center text-4xl font-extrabold tracking-tight text-balance">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="scroll-m-20 border-b my-4 py-2 text-3xl font-semibold tracking-tight first:mt-0">{children}</h2>
  ),
  p: ({ children }) => <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>,
  ul: ({ children }) => <ul className="ml-6 list-disc [&>li]:mt-2 marker:text-primary">{children}</ul>,
  a: ({ children, ...props }) => (
    <a className="marker:text-primary underline" {...props}>
      {children}
    </a>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
