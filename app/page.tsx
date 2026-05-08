const notices = [
  "이번 주 하드 에기르 공대 모집중",
  "디스코드 공지 확인 바랍니다",
  "신규 길드원 가입 환영",
];

const raids = [
  {
    title: "하드 에기르",
    status: "6 / 8",
    time: "오늘 21:00",
  },
  {
    title: "노말 카멘",
    status: "4 / 8",
    time: "오늘 22:00",
  },
];

const events = [
  "메데이아",
  "블루홀 섬",
  "핫타임 이벤트 진행중",
];

export default function HomePage() {
  return (
    <section className="p-10">
      <div className="mb-10">
        <h1 className="text-5xl font-bold">오늘도 대환장</h1>

        <p className="mt-3 text-zinc-400">
          로스트아크 길드 통합 관리 플랫폼
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        {/* 공지사항 */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-5 text-2xl font-semibold">
            공지사항
          </h2>

          <div className="space-y-3">
            {notices.map((notice) => (
              <div
                key={notice}
                className="rounded-xl bg-zinc-800 px-4 py-3 text-sm text-zinc-300"
              >
                {notice}
              </div>
            ))}
          </div>
        </div>

        {/* 오늘의 레이드 */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-5 text-2xl font-semibold">
            오늘의 레이드
          </h2>

          <div className="space-y-4">
            {raids.map((raid) => (
              <div
                key={raid.title}
                className="rounded-xl border border-zinc-800 bg-zinc-950 p-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">
                    {raid.title}
                  </h3>

                  <span className="text-sm text-emerald-400">
                    {raid.status}
                  </span>
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  {raid.time}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 모험섬 / 이벤트 */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-5 text-2xl font-semibold">
            모험섬 / 이벤트
          </h2>

          <div className="space-y-3">
            {events.map((event) => (
              <div
                key={event}
                className="rounded-xl bg-zinc-800 px-4 py-3 text-sm text-zinc-300"
              >
                {event}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}