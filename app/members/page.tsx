import MemberCard from "@/components/member/MemberCard";

const members = [
  {
    name: "파이썬을쓰는자",
    job: "도화가",
    itemLevel: "1720",
    expeditionLevel: 320,
  },
  {
    name: "감자칩도둑",
    job: "브레이커",
    itemLevel: "1695",
    expeditionLevel: 301,
  },
  {
    name: "오늘도대환장",
    job: "바드",
    itemLevel: "1680",
    expeditionLevel: 287,
  },
];

export default function MembersPage() {
  return (
    <section className="p-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          길드원
        </h1>

        <p className="mt-3 text-zinc-400">
          길드원 원정대 정보를 확인합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {members.map((member) => (
          <MemberCard
            key={member.name}
            name={member.name}
            job={member.job}
            itemLevel={member.itemLevel}
            expeditionLevel={member.expeditionLevel}
          />
        ))}
      </div>
    </section>
  );
}