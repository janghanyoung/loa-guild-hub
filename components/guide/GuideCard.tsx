import Link from "next/link";

type GuideCardProps = {
  id: string;
  title: string;
  category: string;
  type?: string;
  difficulty?: string;
  estimatedTime?: string;
  reward?: string;
  summary?: string;
  description?: string;
};

export default function GuideCard({
  id,
  title,
  category,
  type = "일반",
  difficulty = "보통",
  estimatedTime = "미정",
  reward = "미정",
  summary,
  description,
}: GuideCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <p className="text-sm text-zinc-400">
        {category} · {type}
      </p>

      <h3 className="mt-3 text-xl font-bold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {summary ?? description ?? "공략 내용 준비 중입니다."}
      </p>

      <div className="mt-4 space-y-1 text-sm text-zinc-500">
        <p>난이도: {difficulty}</p>
        <p>예상 시간: {estimatedTime}</p>
        <p>보상: {reward}</p>
      </div>

      <Link
        href={`/guides/${id}`}
        className="mt-5 inline-block rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black"
      >
        공략 보기
      </Link>
    </article>
  );
}
