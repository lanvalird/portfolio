"use server";

import { revalidateTag } from "next/cache";
import { TAGS_PROJECTS } from "@/shared/lib/constants";

export async function refreshPageData() {
  revalidateTag(TAGS_PROJECTS, "max");
}
