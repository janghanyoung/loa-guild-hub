import { raidFormOptions } from "@/lib/mock-data";

export default function RaidApplyPage() {
  return (
    <section className="p-10">
      <div className="mb-10">
        <p className="text-sm text-zinc-500">레이드</p>
        <h1 className="mt-2 text-4xl font-bold">레이드 신청서</h1>
        <p className="mt-3 text-zinc-400">
          가능한 캐릭터와 시간, 숙련도를 남기는 조율용 신청서입니다.
        </p>
      </div>

      <form className="max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-sm text-zinc-400">캐릭터명</span>
            <input
              type="text"
              placeholder="예: 파이썬을쓰는자"
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none"
            />
          </label>

          <label className="block">
            <span className="text-sm text-zinc-400">아이템 레벨</span>
            <input
              type="text"
              placeholder="예: 1720"
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none"
            />
          </label>

          <label className="block">
            <span className="text-sm text-zinc-400">레이드</span>
            <select className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none">
              {raidFormOptions.raids.map((raid) => (
                <option key={raid}>{raid}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm text-zinc-400">난이도</span>
            <select className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none">
              {raidFormOptions.difficulties.map((difficulty) => (
                <option key={difficulty}>{difficulty}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm text-zinc-400">역할</span>
            <select className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none">
              {raidFormOptions.roles.map((role) => (
                <option key={role}>{role}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm text-zinc-400">숙련도</span>
            <select className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none">
              {raidFormOptions.masteries.map((mastery) => (
                <option key={mastery}>{mastery}</option>
              ))}
            </select>
          </label>

          <label className="block md:col-span-2">
            <span className="text-sm text-zinc-400">가능 시간</span>
            <select className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none">
              {raidFormOptions.times.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          </label>

          <label className="block md:col-span-2">
            <span className="text-sm text-zinc-400">메모</span>
            <textarea
              rows={5}
              placeholder="예: 1~2관 가능 / 22시 이후 가능 / 초행이라 설명 필요"
              className="mt-2 w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none"
            />
          </label>
        </div>

        <div className="mt-6 rounded-xl bg-zinc-800 px-4 py-3 text-sm text-zinc-400">
          지금은 화면 구조만 만든 상태입니다. 이후 Supabase 연결 후 실제 저장됩니다.
        </div>

        <button
          type="button"
          className="mt-6 rounded-xl bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-950"
        >
          신청서 미리보기
        </button>
      </form>
    </section>
  );
}