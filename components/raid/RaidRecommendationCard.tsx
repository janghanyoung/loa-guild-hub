type RecommendedRaid = {
  raidName: string;
  reason: string;
  priority: string;
};

type RaidRecommendationCardProps = {
  characterName: string;
  itemLevel: string;
  recommendedRaids: RecommendedRaid[];
};

export default function RaidRecommendationCard({
  characterName,
  itemLevel,
  recommendedRaids,
}: RaidRecommendationCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="mb-5">
        <p className="text-xs text-zinc-500">추천 캐릭터</p>
        <h3 className="mt-2 text-xl font-semibold">{characterName}</h3>
        <p className="mt-1 text-sm text-zinc-500">아이템 레벨 {itemLevel}</p>
      </div>

      <div className="space-y-3">
        {recommendedRaids.map((raid) => (
          <div
            key={`${characterName}-${raid.raidName}`}
            className="rounded-xl bg-zinc-800 px-4 py-3"
          >
            <div className="mb-1 flex items-center justify-between gap-3">
              <p className="font-medium">{raid.raidName}</p>

              <span className="text-xs text-zinc-400">{raid.priority}</span>
            </div>

            <p className="text-xs text-zinc-500">{raid.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}