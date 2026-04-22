"use client";

import { Button } from "@/shared/components/ui/button";
import { revalidateTag } from "next/cache";

export function ReloadButton() {
  return (
    <Button className="px-16 py-4" variant="ghost" onClick={() => revalidateTag("projects", "max")}>
      Попробовать ещё раз
    </Button>
  );
}
