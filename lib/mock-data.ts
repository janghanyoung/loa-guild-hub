export const notices = [
  {
    id: "notice-1",
    title: "길드 공지사항 안내",
    category: "공지",
    date: "2026.05.09",
    pinned: true,
    summary: "길드 일정과 레이드 모집 현황을 정리합니다.",
  },
];

export const raidApplications = [
  {
    id: "raid-1",
    raidName: "카제로스 레이드",
    difficulty: "하드",
    time: "토요일 21:00",
    capacity: 8,
    applicants: [
      {
        characterName: "파이썬을쓰는자",
        owner: "포테이토",
        job: "도화가",
        itemLevel: "1700",
        role: "서포터",
        mastery: "숙련",
        memo: "시간 조율 가능",
      },
    ],
  },
];

export const raidClearRecords = [
  {
    id: "clear-1",
    raidName: "카멘",
    difficulty: "하드",
    clearedAt: "2026.05.08",
    participants: ["파이썬을쓰는자"],
  },
];

export const achievements = [
  {
    id: "achievement-1",
    name: "모코코 수집가",
    category: "수집",
    area: "전 대륙",
    condition: "모코코 씨앗을 일정 수량 이상 수집합니다.",
    reward: "칭호 / 수집 포인트",
    difficulty: "보통",
    hasGuide: true,
    guideId: "mokoko",
  },
  {
    id: "achievement-2",
    name: "레이드 숙련자",
    category: "레이드",
    area: "군단장 레이드",
    condition: "길드 레이드 클리어 기록을 누적합니다.",
    reward: "길드 내 기록",
    difficulty: "어려움",
    hasGuide: false,
  },
];


export const raidGuides = [
  {
    id: "kazeros",
    name: "카제로스 레이드",
    category: "엔드 콘텐츠",
    difficulty: "노말 / 하드",
    gates: [
      {
        gate: "1관문",
        title: "기믹 정리",
        summary: "기본 기믹 설명",
      },
    ],
  },
];

export const islandEvents = [
  {
    id: "island-1",
    name: "잠자는 노래의 섬",
    type: "모험섬",
    time: "21:00",
    reward: "실링",
    note: "협동 퀘스트",
  },
];

export const loaEvents = [
  {
    id: "event-1",
    title: "출석 이벤트",
    period: "진행 중",
    reward: "재련 재료",
  },
];
