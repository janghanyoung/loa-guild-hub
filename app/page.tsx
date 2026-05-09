import EventCard from "@/components/event/EventCard";
import NoticeCard from "@/components/notice/NoticeCard";
import {
  islandEvents,
  loaEvents,
  notices,
  raidApplications,
} from "@/lib/mock-data";

export default function HomePage() {
  const pinnedNotices = notices.filter((notice) => notice.pinned);
  const recentNotices = notices.filter((notice) => !notice.pinned).slice(0, 2);

  return (
    <section className="p-10">
      <div className="mb-10">
        <h1 className="text-5xl font-bold">오늘도 대환장</h1>

        <p className="mt-3 text-zinc-400">
          로스트아크 길드 통합 관리 플랫폼
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <h2 className="mb-5 text-2xl font-semibold">공지사항</h2>

          <div className="space-y-4">
            {[...pinnedNotices, ...recentNotices].map((notice) => (
              <NoticeCard
                key={notice.id}
                title={notice.title}
                category={notice.category}
                date={notice.date}
                pinned={notice.pinned}
                summary={notice.summary}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-semibold">모집중 레이드</h2>

          <div className="space-y-4">
            {raidApplications.map((raid) => (
              <div
                key={raid.id}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold">{raid.raidName}</h3>

                  <span className="text-sm text-zinc-400">
                    {raid.applicants.length} / {raid.capacity}
                  </span>
                </div>

                <p className="text-sm text-zinc-500">
                  {raid.difficulty} · {raid.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div>
          <h2 className="mb-5 text-2xl font-semibold">오늘의 모험섬</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {islandEvents.map((island) => (
              <EventCard
                key={island.id}
                title={island.name}
                subtitle={`${island.type} · ${island.time}`}
                description={`${island.reward} · ${island.note}`}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-semibold">진행중 이벤트</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {loaEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                subtitle={event.period}
                description={event.reward}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}