type Raid = {
  name: string;
  difficulty: string;
  cleared: boolean;
  gold: number;
};

type Character = {
  name: string;
  weeklyRaids: Raid[];
};

type WeeklyRaidSummaryProps = {
  characters: Character[];
};

export default function WeeklyRaidSummary({
  characters,
}: WeeklyRaidSummaryProps) {
  const totalGold = characters.reduce((sum, character) => {
    const characterGold = character.weeklyRaids
      .filter((raid) => !raid.cleared)
      .reduce((raidSum, raid) => raidSum + raid.gold, 0);

    return sum + characterGold;
  }, 0);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold">이번 주 레이드 현황</h2>

        <span className="text-sm text-zinc-400">
          남은 예상 골드 {totalGold.toLocaleString()}G
        </span>
      </div>

      <div className="space-y-5">
        {characters.map((character) => (
          <div key={character.name}>
            <h3 className="mb-2 text-sm font-semibold text-zinc-300">
              {character.name}
            </h3>

            <div className="space-y-2">
              {character.weeklyRaids.map((raid) => (
                <div
                  key={`${character.name}-${raid.name}`}
                  className="flex items-center justify-between rounded-xl bg-zinc-800 px-4 py-3 text-sm"
                >
                  <div>
                    <p className="text-zinc-200">{raid.name}</p>
                    <p className="text-xs text-zinc-500">{raid.difficulty}</p>
                  </div>

                  <div className="text-right">
                    <p
                      className={
                        raid.cleared ? "text-zinc-500" : "text-emerald-400"
                      }
                    >
                      {raid.cleared ? "클리어 완료" : "미클리어"}
                    </p>
                    <p className="text-xs text-zinc-500">
                      {raid.gold.toLocaleString()}G
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}