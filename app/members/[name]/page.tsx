import CharacterCard from "@/components/member/CharacterCard";
import PageContainer from "@/components/ui/PageContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import { getLostArkSiblings, type LostArkSibling } from "@/lib/lostark/siblings";

type MemberDetailPageProps = {
  params: Promise<{
    name: string;
  }>;
};

function parseItemLevel(value: string) {
  return Number(value.replaceAll(",", ""));
}

export default async function MemberDetailPage({
  params,
}: MemberDetailPageProps) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);

  let siblings: LostArkSibling[] = [];

  try {
    siblings = await getLostArkSiblings(decodedName);
  } catch {
    siblings = [];
  }

  const sortedSiblings = [...siblings].sort(
    (a, b) => parseItemLevel(b.ItemAvgLevel) - parseItemLevel(a.ItemAvgLevel)
  );

  return (
    <PageContainer>
      <SectionTitle
        title={decodedName}
        description="로아 API 기반 원정대 캐릭터 목록입니다."
      />

      {sortedSiblings.length === 0 ? (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-zinc-400">
          원정대 캐릭터를 불러오지 못했습니다. 캐릭터명 또는 LOA_API_KEY를 확인하세요.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sortedSiblings.map((character) => (
            <CharacterCard
              key={character.CharacterName}
              name={character.CharacterName}
              job={`${character.ServerName} · ${character.CharacterClassName}`}
              itemLevel={character.ItemAvgLevel}
              combatPower="-"
              weeklyGold="-"
            />
          ))}
        </div>
      )}
    </PageContainer>
  );
}
