type NoticeCardProps = {
  title: string;
  category: string;
  date: string;
  pinned: boolean;
  summary: string;
};

export default function NoticeCard({
  title,
  category,
  date,
  pinned,
  summary,
}: NoticeCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {pinned && (
            <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-950">
              고정
            </span>
          )}

          <span className="text-xs text-zinc-500">{category}</span>
        </div>

        <span className="text-xs text-zinc-500">{date}</span>
      </div>

      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="mt-3 text-sm leading-6 text-zinc-400">{summary}</p>
    </div>
  );
}