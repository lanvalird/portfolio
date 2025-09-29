"use client";

import { useState, useEffect } from "react";
import { useMDXComponents } from "@/mdx-components";

import { Button } from "@/shared/components/ui/button";
import { Link } from "lucide-react";

import { SerializeResult, MDXClient } from "next-mdx-remote-client";
import { serialize } from "next-mdx-remote-client/serialize";

type Props = { mdx: string };

export function MDXContent({ mdx }: Props) {
  const [mdxSource, setMdxSource] = useState<SerializeResult | null>(null);
  const components = useMDXComponents();

  useEffect(() => {
    const render = async () => {
      const mdxSource: SerializeResult = await serialize({
        source: mdx,
      });
      return setMdxSource(mdxSource);
    };

    render();
  }, [mdx]);

  if (mdxSource && "error" in mdxSource) {
    return (
      <main className='flex flex-col gap-12 py-16 px-4 justify-center items-center aspect-square min-h-screen mx-auto my-0'>
        <h1 className='scroll-m-20 text-[12rem] font-semibold tracking-tight'>
          Ошибка {mdxSource.error.name}: {mdxSource.error.message}
        </h1>

        <Button className='px-16 py-4' variant={"ghost"} asChild>
          <Link href={"/"}>Быстро домой!</Link>
        </Button>
      </main>
    );
  }

  if (mdxSource?.compiledSource) {
    return <MDXClient {...mdxSource} components={components} />;
  }
}
