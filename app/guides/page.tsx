import GuideFilterList from "@/components/guide/GuideFilterList";
import PageContainer from "@/components/ui/PageContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import { guidePosts } from "@/lib/mock-data";

export default function GuidesPage() {
  return (
    <PageContainer>
      <SectionTitle
        title="공략집"
        description="내실, 업적, 레이드 공략을 카드형 갤러리로 정리합니다."
      />

      <GuideFilterList guides={guidePosts} />
    </PageContainer>
  );
}
