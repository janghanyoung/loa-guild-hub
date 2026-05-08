type CharacterCardProps = {
  name: string;
  job: string;
  itemLevel: string;
  combatPower: string;
  weeklyGold: string;
};

export default function CharacterCard({
  name,
  job,
  itemLevel,
  combatPower,
  weeklyGold,
}: CharacterCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">
          {name}
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          {job}
        </p>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-zinc-500">
            아이템 레벨
          </span>

          <span>{itemLevel}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-500">
            전투력
          </span>

          <span>{combatPower}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-500">
            주간 골드
          </span>

          <span>{weeklyGold}</span>
        </div>
      </div>
    </div>
  );
}