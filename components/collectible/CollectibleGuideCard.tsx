import Link from "next/link";

type CollectibleGuideCardProps = {
  id: string;
  name: string;
  total: number;
  category: string;
  description: string;
  guideId: string | null;
};

export default function CollectibleGuideCard({
  name,
  total,
  category,
  description,
  guideId,
}: CollectibleGuideCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="mb-5">
        <p className="text-sm text-zinc-500">{category}</p>
        <h2 className="mt-2 text-2xl font-semibold">{name}</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
      </div>

      <div className="mb-5 rounded-xl bg-zinc-800 px-4 py-3 text-sm">
        <div className="flex justify-between">
          <span className="text-zinc-500">전체 개수</span>
          <span>{total}</span>
        </div>
      </div>

      {guideId ? (
        <Link
          href={`/guides/${guideId}`}
          className="block rounded-xl bg-zinc-100 px-4 py-3 text-center text-sm font-semibold text-zinc-950"
        >
          공략 보기
        </Link>
      ) : (
        <div className="rounded-xl bg-zinc-800 px-4 py-3 text-center text-sm text-zinc-500">
          공략 준비중
        </div>
      )}
    </div>
  );
}