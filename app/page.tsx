const cards = [
  {
    title: "공지사항",
    desc: "길드 공지와 주요 안내를 확인합니다.",
  },
  {
    title: "오늘의 레이드",
    desc: "오늘 진행 예정인 레이드와 모집 현황입니다.",
  },
  {
    title: "모험섬 / 이벤트",
    desc: "오늘의 모험섬과 이벤트 정보를 표시합니다.",
  },
  {
    title: "공략집",
    desc: "레이드 / 내실 / 업적 공략으로 이동합니다.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <div className="mb-10">
        <h1 className="text-5xl font-bold mb-3">오늘도 대환장</h1>

        <p className="text-zinc-400">
          로스트아크 길드 통합 관리 플랫폼
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h2 className="text-xl font-semibold mb-2">
              {card.title}
            </h2>

            <p className="text-sm text-zinc-400">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
