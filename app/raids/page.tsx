import RaidApplicationCard from "@/components/raid/RaidApplicationCard";
import RaidClearRecordCard from "@/components/raid/RaidClearRecordCard";
import RaidGuideCard from "@/components/raid/RaidGuideCard";
import Link from "next/link";
import {
  raidApplications,
  raidClearRecords,
  raidGuides,
} from "@/lib/mock-data";

export default function RaidsPage() {
  return (
    <section className="p-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">레이드</h1>

        <p className="mt-3 text-zinc-400">
          레이드 신청 현황, 이번 주 클리어 기록, 레이드별 공략을 확인합니다.
        </p>
        <div className="mt-5">
  <Link
    href="/raids/apply"
    className="inline-block rounded-xl bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-950"
  >
    레이드 신청서 작성
  </Link>
</div>
      </div>

      <div className="mb-12">
        <h2 className="mb-5 text-2xl font-semibold">신청 현황</h2>

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
      </div>

      <div className="mb-12">
        <h2 className="mb-5 text-2xl font-semibold">
          이번 주 길드 클리어 기록
        </h2>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {raidClearRecords.map(
            (record: typeof raidClearRecords[number]) => (
              <RaidClearRecordCard
                key={record.id}
                raidName={record.raidName}
                difficulty={record.difficulty}
                clearedAt={record.clearedAt}
                participants={record.participants}
              />
            )
          )}
        </div>
      </div>

      <div>
        <h2 className="mb-5 text-2xl font-semibold">레이드 공략</h2>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {raidGuides.map((guide) => (
            <RaidGuideCard
              key={guide.id}
              id={guide.id}
              name={guide.name}
              category={guide.category}
              difficulty={guide.difficulty}
              gates={guide.gates}
            />
          ))}
        </div>
      </div>
    </section>
  );
}