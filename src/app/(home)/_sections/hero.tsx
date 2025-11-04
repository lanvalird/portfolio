'use client';

import Link from "next/link";
import Image from "next/image";

import { Button } from "../../../shared/components/ui/button";

import { cormorantGaramond } from "../_lib/fonts";

export function HomeHeroSection() {
  return (
    <section className={'h-screen flex flex-col sm:grid sm:grid-cols-2 items-center gap-12'}>
      <div className={'w-62 justify-self-end'}>
        <Avatar src={'https://github.com/lanvalird.png'} alt={'Me'} />
      </div>

      <div className={'flex flex-col gap-4 justify-self-start items-center'}>
        <h1 className={`text-6xl ${cormorantGaramond.className}`}>Valentin&nbsp;Bird</h1>
        <p className={'max-w-max italic font-medium bg-primary/25 px-4 py-1 rounded-md'}>Web Developer</p>

        <Button variant={'link'} className={'mt-2'} asChild>
          <Link href={"/skills"}>let's my skills →</Link></Button>
      </div>
    </section>
  )
}

function Avatar(props: { src: string; alt: string }) {
  return (
    <div className="h-full aspect-square relative m-4">
      <Image
        className="inline-flex rounded-4xl overflow-hidden"
        {...props}
        fill
      />
      <Image
        className="inline-flex rounded-4xl overflow-hidden scale-110 -z-1 blur-xl opacity-50"
        {...props}
        fill
        quality={1}
      />
    </div>
  )
}