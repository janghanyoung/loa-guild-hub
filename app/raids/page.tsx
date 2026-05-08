import RaidApplicationCard from "@/components/raid/RaidApplicationCard";
import { raidApplications } from "@/lib/mock-data";

export default function RaidsPage() {
  return (
    <section className="p-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">레이드</h1>

        <p className="mt-3 text-zinc-400">
          레이드 신청 현황과 이번 주 진행 상황을 확인합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        {raidApplications.map((raid) => (
          <RaidApplicationCard
            key={raid.id}
            raidName={raid.raidName}
            difficulty={raid.difficulty}
            time={raid.time}
            capacity={raid.capacity}
            applicants={raid.applicants}
          />
        ))}
      </div>
    </section>
  );
}