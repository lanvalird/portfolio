"use client";

import { Button } from "@/shared/components/ui/button";
import { refreshPageData } from "./actions";
import { useRouter } from "next/navigation";

export function ReloadButton() {
  const router = useRouter();
  return (
    <Button
      className="px-16 py-4"
      variant="ghost"
      onClick={() => {
        refreshPageData();
        router.refresh();
      }}
    >
      Попробовать ещё раз
    </Button>
  );
}
