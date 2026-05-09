export type LostArkSibling = {
  ServerName: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterClassName: string;
  ItemAvgLevel: string;
  ItemMaxLevel: string;
};

export async function getLostArkSiblings(
  characterName: string
): Promise<LostArkSibling[]> {
  const apiKey = process.env.LOA_API_KEY;

  if (!apiKey) {
    throw new Error("LOA_API_KEY가 없습니다.");
  }

  const response = await fetch(
    `https://developer-lostark.game.onstove.com/characters/${encodeURIComponent(
      characterName
    )}/siblings`,
    {
      headers: {
        accept: "application/json",
        authorization: `bearer ${apiKey}`,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(`로아 API 호출 실패: ${response.status}`);
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    return [];
  }

  return data;
}
