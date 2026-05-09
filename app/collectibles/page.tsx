import CollectibleGuideCard from "@/components/collectible/CollectibleGuideCard";
import { collectibleGuides } from "@/lib/mock-data";

export default function CollectiblesPage() {
  return (
    <section className="p-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">내실</h1>

        <p className="mt-3 text-zinc-400">
          수집형 포인트와 연결된 공략을 확인합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {collectibleGuides.map((collectible) => (
          <CollectibleGuideCard
            key={collectible.id}
            id={collectible.id}
            name={collectible.name}
            total={collectible.total}
            category={collectible.category}
            description={collectible.description}
            guideId={collectible.guideId}
          />
        ))}
      </div>
    </section>
  );
}