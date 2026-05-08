import CharacterCard from "@/components/member/CharacterCard";
import CollectibleSummary from "@/components/member/CollectibleSummary";
import WeeklyRaidSummary from "@/components/member/WeeklyRaidSummary";
import RaidRecommendationCard from "@/components/raid/RaidRecommendationCard";
import { expeditions, raidRecommendations } from "@/lib/mock-data";

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

  const recommendations = raidRecommendations.filter(
    (recommendation) => recommendation.owner === decodedName
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
          원정대 캐릭터, 내실, 주간 레이드 현황을 확인합니다.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <CollectibleSummary items={expedition.collectibles} />
        <WeeklyRaidSummary characters={expedition.characters} />
      </div>

      {recommendations.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-5 text-2xl font-semibold">추천 레이드</h2>

          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            {recommendations.map((recommendation) => (
              <RaidRecommendationCard
                key={recommendation.characterName}
                characterName={recommendation.characterName}
                itemLevel={recommendation.itemLevel}
                recommendedRaids={recommendation.recommendedRaids}
              />
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="mb-5 text-2xl font-semibold">원정대 캐릭터</h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {expedition.characters.map((character) => (
            <CharacterCard
              key={character.name}
              name={character.name}
              job={character.job}
              itemLevel={character.itemLevel}
              combatPower={character.combatPower}
              weeklyGold={character.weeklyGold.toLocaleString()}
            />
          ))}
        </div>
      </div>
    </section>
  );
}