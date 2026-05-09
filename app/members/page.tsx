import MemberCard from "@/components/member/MemberCard";
import PageContainer from "@/components/ui/PageContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import { guildMembers } from "@/lib/data/guild-members";
import { getLostArkSiblings } from "@/lib/lostark/siblings";

function parseItemLevel(value: string) {
  return Number(value.replaceAll(",", ""));
}

export default async function MembersPage() {
  const membersWithSiblings = await Promise.all(
    guildMembers.map(async (member) => {
      try {
        const siblings = await getLostArkSiblings(member.mainCharacter);

        const mainCharacter =
          siblings.find(
            (character) => character.CharacterName === member.mainCharacter
          ) ??
          [...siblings].sort(
            (a, b) => parseItemLevel(b.ItemAvgLevel) - parseItemLevel(a.ItemAvgLevel)
          )[0];

        return {
          member,
          mainCharacter,
        };
      } catch {
        return {
          member,
          mainCharacter: null,
        };
      }
    })
  );

  return (
    <PageContainer>
      <SectionTitle
        title="길드원"
        description="대표 캐릭터 기준으로 원정대 정보를 확인합니다."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {membersWithSiblings.map(({ member, mainCharacter }) => (
          <MemberCard
            key={member.owner}
            name={member.mainCharacter}
            job={mainCharacter?.CharacterClassName ?? "조회 실패"}
            itemLevel={mainCharacter?.ItemAvgLevel ?? "-"}
            expeditionLevel={0}
          />
        ))}
      </div>
    </PageContainer>
  );
}
