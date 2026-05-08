type CollectibleSummaryProps = {
  items: {
    name: string;
    current: number;
    total: number;
  }[];
};

export default function CollectibleSummary({
  items,
}: CollectibleSummaryProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <h2 className="text-xl font-semibold">내실 요약</h2>

      <div className="mt-5 space-y-3">
        {items.map((item) => {
          const percent = Math.round((item.current / item.total) * 100);

          return (
            <div key={item.name} className="text-sm">
              <div className="mb-1 flex justify-between">
                <span className="text-zinc-300">{item.name}</span>
                <span className="text-zinc-500">
                  {item.current} / {item.total}
                </span>
              </div>

              <div className="h-2 rounded-full bg-zinc-800">
                <div
                  className="h-2 rounded-full bg-zinc-400"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}