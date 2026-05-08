import Link from "next/link";

type AchievementCardProps = {
  id: string;
  name: string;
  category: string;
  area: string;
  condition: string;
  reward: string;
  difficulty: string;
  hasGuide: boolean;
  guideId: string | null;
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
}: AchievementCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="mb-5">
        <p className="text-sm text-zinc-500">
          {category} · {area}
        </p>

        <h2 className="mt-2 text-2xl font-semibold">{name}</h2>

        <p className="mt-3 text-sm leading-6 text-zinc-400">{condition}</p>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-2 text-sm">
        <div className="flex justify-between rounded-xl bg-zinc-800 px-4 py-3">
          <span className="text-zinc-500">난이도</span>
          <span>{difficulty}</span>
        </div>

        <div className="flex justify-between rounded-xl bg-zinc-800 px-4 py-3">
          <span className="text-zinc-500">보상</span>
          <span>{reward}</span>
        </div>
      </div>

      {hasGuide && guideId ? (
        <Link
          href={`/guides/${guideId}`}
          className="block rounded-xl bg-zinc-100 px-4 py-3 text-center text-sm font-semibold text-zinc-950"
        >
          연결된 공략 보기
        </Link>
      ) : (
        <div className="rounded-xl bg-zinc-800 px-4 py-3 text-center text-sm text-zinc-500">
          연결된 공략 없음
        </div>
      )}
    </div>
  );
}