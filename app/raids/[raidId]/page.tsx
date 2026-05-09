import { raidGuides } from "@/lib/mock-data";

type RaidGuideDetailPageProps = {
  params: Promise<{
    raidId: string;
  }>;
};

export default async function RaidGuideDetailPage({
  params,
}: RaidGuideDetailPageProps) {
  const { raidId } = await params;

  const guide = raidGuides.find((guide) => guide.id === raidId);

  if (!guide) {
    return (
      <section className="p-10">
        <h1 className="text-3xl font-bold">레이드 공략을 찾을 수 없습니다.</h1>
      </section>
    );
  }

  return (
    <section className="p-10">
      <div className="mb-10">
        <p className="text-sm text-zinc-500">{guide.category}</p>
        <h1 className="mt-2 text-4xl font-bold">{guide.name}</h1>
        <p className="mt-3 text-zinc-400">{guide.difficulty}</p>
      </div>

      <div className="space-y-5">
        {guide.gates.map((gate) => (
          <article
            key={gate.gate}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <p className="text-sm text-zinc-500">{gate.gate}</p>
            <h2 className="mt-2 text-2xl font-semibold">{gate.title}</h2>
            <p className="mt-3 text-zinc-400">{gate.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}