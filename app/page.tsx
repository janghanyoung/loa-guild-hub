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
    desc: "오늘의 모험섬과 진행중인 이벤트를 확인합니다.",
  },
  {
    title: "공략 바로가기",
    desc: "레이드, 내실, 업적 공략으로 이동합니다.",
  },
];

export default function HomePage() {
  return (
    <section className="p-10">
      <div className="mb-10">
        <h2 className="text-4xl font-bold">메인</h2>
        <p className="mt-3 text-zinc-400">
          길드원들이 필요한 정보를 가볍게 확인하는 첫 화면입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}