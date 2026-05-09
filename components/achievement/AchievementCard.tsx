import Link from "next/link";

type Props = {
  id: string;
  name: string;
  category: string;
  area: string;
  condition: string;
  reward: string;
  difficulty: string;
  hasGuide: boolean;
  guideId?: string;
};

export default function AchievementCard({
  id,
  name,
  category,
  area,
  condition,
  reward,
  difficulty,
  hasGuide,
  guideId,
}: Props) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-xs text-zinc-500">{category}</span>
        <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
          {difficulty}
        </span>
      </div>

      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="mt-1 text-sm text-zinc-500">{area}</p>

      <p className="mt-4 text-sm leading-6 text-zinc-400">{condition}</p>

      <div className="mt-4 rounded-xl bg-zinc-800 px-4 py-3 text-sm">
        보상: {reward}
      </div>

      {hasGuide && (
        <Link
          href={`/achievements/${guideId ?? id}`}
          className="mt-4 inline-block text-sm font-semibold text-zinc-100 underline"
        >
          공략 보기
        </Link>
      )}
    </div>
  );
}
