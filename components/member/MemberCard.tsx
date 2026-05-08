import Link from "next/link";

type MemberCardProps = {
  name: string;
  job: string;
  itemLevel: string;
  expeditionLevel: number;
};

export default function MemberCard({
  name,
  job,
  itemLevel,
  expeditionLevel,
}: MemberCardProps) {
  return (
    <Link
      href={`/members/${encodeURIComponent(name)}`}
      className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-600 hover:bg-zinc-800"
    >
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="mt-1 text-sm text-zinc-400">{job}</p>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-zinc-500">아이템 레벨</span>
          <span>{itemLevel}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-500">원정대 레벨</span>
          <span>Lv.{expeditionLevel}</span>
        </div>
      </div>
    </Link>
  );
}