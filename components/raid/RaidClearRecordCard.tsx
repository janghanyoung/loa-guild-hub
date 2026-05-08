type RaidClearRecordCardProps = {
  raidName: string;
  difficulty: string;
  clearedAt: string;
  participants: string[];
};

export default function RaidClearRecordCard({
  raidName,
  difficulty,
  clearedAt,
  participants,
}: RaidClearRecordCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="mb-4">
        <p className="text-xs text-zinc-500">
          {difficulty} · {clearedAt}
        </p>

        <h3 className="mt-2 text-xl font-semibold">{raidName}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {participants.map((participant) => (
          <span
            key={participant}
            className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
          >
            {participant}
          </span>
        ))}
      </div>
    </div>
  );
}