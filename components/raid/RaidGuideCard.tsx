import Link from "next/link";

type Gate = {
  gate: string;
  title: string;
  summary: string;
};

type RaidGuideCardProps = {
  id: string;
  name: string;
  category: string;
  difficulty: string;
  gates: Gate[];
};

export default function RaidGuideCard({
  id,
  name,
  category,
  difficulty,
  gates,
}: RaidGuideCardProps) {
  return (
    <Link
      href={`/raids/${id}`}
      className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-zinc-600"
    >
      <div className="mb-5">
        <p className="text-sm text-zinc-500">{category}</p>
        <h2 className="mt-1 text-2xl font-semibold">{name}</h2>
        <p className="mt-1 text-sm text-zinc-400">{difficulty}</p>
      </div>

      <div className="space-y-2">
        {gates.map((gate) => (
          <div
            key={gate.gate}
            className="rounded-xl bg-zinc-800 px-4 py-3 text-sm"
          >
            <p className="font-medium text-zinc-200">{gate.gate}</p>
            <p className="mt-1 text-xs text-zinc-500">{gate.title}</p>
          </div>
        ))}
      </div>
    </Link>
  );
}