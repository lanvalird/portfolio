"use server";

import { revalidateTag } from "next/cache";
import { TAGS_TEAMS } from "@/shared/lib/constants";

export async function refreshPageData() {
  revalidateTag(TAGS_TEAMS, "max");
}
