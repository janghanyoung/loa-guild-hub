import AchievementCard from "@/components/achievement/AchievementCard";
import { achievements } from "@/lib/mock-data";

export default function AchievementsPage() {
  return (
    <section className="p-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">업적</h1>

        <p className="mt-3 text-zinc-400">
          업적 DB와 연결된 공략을 확인합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            id={achievement.id}
            name={achievement.name}
            category={achievement.category}
            area={achievement.area}
            condition={achievement.condition}
            reward={achievement.reward}
            difficulty={achievement.difficulty}
            hasGuide={achievement.hasGuide}
            guideId={achievement.guideId}
          />
        ))}
      </div>
    </section>
  );
}