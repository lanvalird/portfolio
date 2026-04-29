import type { MDXComponents } from "mdx/types";
import { LinearHeading, LinearList, LinearText } from "./shared/components/ui/typographic";

const components: MDXComponents = {
  h1: ({ children }) => <LinearHeading level={1}>{children}</LinearHeading>,
  h2: ({ children }) => <LinearHeading level={2}>{children}</LinearHeading>,
  h3: ({ children }) => <LinearHeading level={3}>{children}</LinearHeading>,
  h4: ({ children }) => <LinearHeading level={4}>{children}</LinearHeading>,
  h5: ({ children }) => <LinearHeading level={5}>{children}</LinearHeading>,
  h6: ({ children }) => <LinearHeading level={6}>{children}</LinearHeading>,
  p: LinearText,
  ul: ({ children }) => <LinearList variant={"figured"}>{children}</LinearList>,
  ol: ({ children }) => <LinearList variant={"numeric"}>{children}</LinearList>,
  a: ({ children, ...props }) => (
    <a className="marker:text-primary underline" {...props}>
      {children}
    </a>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
