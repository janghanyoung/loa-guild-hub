import CharacterCard from "@/components/member/CharacterCard";
import CollectibleSummary from "@/components/member/CollectibleSummary";
import { expeditions } from "@/lib/mock-data";

type MemberDetailPageProps = {
  params: Promise<{
    name: string;
  }>;
};

export default async function MemberDetailPage({
  params,
}: MemberDetailPageProps) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);

  const expedition = expeditions.find(
    (expedition) => expedition.owner === decodedName
  );

  if (!expedition) {
    return (
      <section className="p-10">
        <h1 className="text-3xl font-bold">길드원을 찾을 수 없습니다.</h1>
      </section>
    );
  }

  return (
    <section className="p-10">
      <div className="mb-10">
        <p className="text-sm text-zinc-500">길드원 상세</p>

        <h1 className="mt-2 text-4xl font-bold">{decodedName}</h1>

        <p className="mt-3 text-zinc-400">
          원정대 캐릭터와 내실 진행도를 확인합니다.
        </p>
      </div>

      <div className="mb-8">
        <CollectibleSummary items={expedition.collectibles} />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {expedition.characters.map((character) => (
          <CharacterCard
            key={character.name}
            name={character.name}
            job={character.job}
            itemLevel={character.itemLevel}
            combatPower={character.combatPower}
            weeklyGold={character.weeklyGold}
          />
        ))}
      </div>
    </section>
  );
}