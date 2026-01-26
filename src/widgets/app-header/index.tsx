"use client";

import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

import { usePathname } from "next/navigation";

export function AppHeader() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row gap-2 px-2">
      <Button variant={"outline"} className={"mt-2"} asChild>
        <Link href={"/"}>lanvalird</Link>
      </Button>
      {["/projects", "/skills"].map((route) => (
        <Button key={route} variant={"link"} className={"mt-2"} disabled={pathname === route} asChild={!(pathname === route)}>
          <Link href={route}>{route}</Link>
        </Button>
      ))}{" "}
    </div>
  );
}
