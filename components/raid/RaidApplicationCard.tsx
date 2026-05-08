type Applicant = {
  characterName: string;
  owner: string;
  job: string;
  itemLevel: string;
  role: string;
  mastery: string;
  memo: string;
};

type RaidApplicationCardProps = {
  raidName: string;
  difficulty: string;
  time: string;
  capacity: number;
  applicants: Applicant[];
};

export default function RaidApplicationCard({
  raidName,
  difficulty,
  time,
  capacity,
  applicants,
}: RaidApplicationCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">{raidName}</h2>
          <p className="mt-1 text-sm text-zinc-500">
            {difficulty} · {time}
          </p>
        </div>

        <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
          {applicants.length} / {capacity}
        </span>
      </div>

      <div className="space-y-3">
        {applicants.map((applicant) => (
          <div
            key={`${raidName}-${applicant.characterName}`}
            className="rounded-xl bg-zinc-800 p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold">{applicant.characterName}</h3>
                <p className="mt-1 text-xs text-zinc-500">
                  {applicant.owner} · {applicant.job} · {applicant.itemLevel}
                </p>
              </div>

              <div className="text-right text-xs text-zinc-400">
                <p>{applicant.role}</p>
                <p>{applicant.mastery}</p>
              </div>
            </div>

            {applicant.memo && (
              <p className="mt-3 rounded-lg bg-zinc-900 px-3 py-2 text-xs text-zinc-400">
                {applicant.memo}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}