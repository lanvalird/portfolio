"use client";

import { Button } from "@/shared/components/ui/button";
import { HEADER_NAVIGATION_LINKS } from "@/shared/lib/constants";
import Link from "next/link";

import { usePathname } from "next/navigation";

export function AppHeader() {
  const pathname = usePathname();

  return (
    <div className="max-w-7xl mx-auto flex flex-row flex-wrap gap-2 px-2">
      <Button variant={"outline"} className={"mt-2"} asChild>
        <Link href={"/"}>lanvalird</Link>
      </Button>
      {HEADER_NAVIGATION_LINKS.map((route) => (
        <Button
          key={route}
          variant={"link"}
          className={"mt-2"}
          disabled={pathname === route}
          asChild={!(pathname === route)}
        >
          <Link href={route}>{route}</Link>
        </Button>
      ))}
    </div>
  );
}
