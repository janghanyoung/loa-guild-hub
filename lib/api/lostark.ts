import type { LostArkSibling } from "@/lib/types/lostark";

export async function getSiblings(characterName: string): Promise<LostArkSibling[]> {
  const response = await fetch(
    `/api/lostark/siblings/${encodeURIComponent(characterName)}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return Array.isArray(data) ? data : [];
}
