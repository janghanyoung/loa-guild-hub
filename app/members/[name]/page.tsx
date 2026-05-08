type MemberDetailPageProps = {
  params: Promise<{
    name: string;
  }>;
};

export default async function MemberDetailPage({
  params,
}: MemberDetailPageProps) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);

  return (
    <section className="p-10">
      <div className="mb-10">
        <p className="text-sm text-zinc-500">길드원 상세</p>
        <h1 className="mt-2 text-4xl font-bold">{decodedName}</h1>
        <p className="mt-3 text-zinc-400">
          원정대 캐릭터, 주간 골드, 내실 현황을 표시할 예정입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">원정대 캐릭터</h2>
          <p className="mt-3 text-sm text-zinc-400">
            본캐와 부캐 목록이 들어갑니다.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">주간 수급 골드</h2>
          <p className="mt-3 text-sm text-zinc-400">
            캐릭터별 주간 골드 가능량을 표시합니다.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">내실 요약</h2>
          <p className="mt-3 text-sm text-zinc-400">
            수집형 포인트 진행률을 표시합니다.
          </p>
        </div>
      </div>
    </section>
  );
}