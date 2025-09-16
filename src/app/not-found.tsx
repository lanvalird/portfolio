import type { Metadata } from "next/types";

import { Button } from "@/shared/components/ui/button";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Страница не найдена или утеряна в бытие",
};

export default function NotFoundPage() {
  return (
    <main className='flex flex-col gap-12 py-16 px-4 justify-center items-center aspect-square min-h-screen mx-auto my-0'>
      <h1 className='scroll-m-20 text-[12rem] font-semibold tracking-tight'>
        404
      </h1>

      <Button className='px-16 py-4' variant={"ghost"} asChild>
        <Link href={"/"}>Быстро домой!</Link>
      </Button>
    </main>
  );
}
