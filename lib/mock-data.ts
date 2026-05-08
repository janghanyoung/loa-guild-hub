export const raidClearRecords = [
  {
    id: "clear-001",
    raidName: "노말 카멘",
    difficulty: "Normal",
    clearedAt: "2026-05-07",
    participants: [
      "파이썬을쓰는자",
      "파이썬부캐1",
      "감자칩도둑",
    ],
  },
  {
    id: "clear-002",
    raidName: "하드 베히모스",
    difficulty: "Hard",
    clearedAt: "2026-05-06",
    participants: [
      "감자칩도둑",
      "오늘도대환장",
    ],
  },
];

export const islandEvents = [
  {
    id: "island-001",
    name: "메데이아",
    type: "모험섬",
    time: "11:00 / 19:00 / 23:00",
    reward: "골드 / 카드 / 실링",
    note: "PVP 섬",
  },
  {
    id: "island-002",
    name: "블루홀 섬",
    type: "모험섬",
    time: "13:00 / 21:00",
    reward: "룬 / 카드 / 골드",
    note: "보스 처치",
  },
];

export const loaEvents = [
  {
    id: "event-001",
    title: "핫타임 이벤트",
    period: "2026-05-08 ~ 2026-05-15",
    reward: "재련 재료 / 실링",
  },
  {
    id: "event-002",
    title: "출석 이벤트",
    period: "진행중",
    reward: "카드팩 / 배틀 아이템",
  },
];


export const notices = [
  {
    id: "notice-001",
    title: "이번 주 레이드 일정 안내",
    category: "레이드",
    date: "2026-05-08",
    pinned: true,
    summary: "이번 주 하드 에기르와 노말 카멘 모집 일정을 확인해 주세요.",
  },
  {
    id: "notice-002",
    title: "길드 공략집 작성 안내",
    category: "공략",
    date: "2026-05-07",
    pinned: false,
    summary: "내실, 업적, 레이드 공략은 공략집 메뉴에서 순차적으로 정리합니다.",
  },
  {
    id: "notice-003",
    title: "신규 길드원 환영",
    category: "길드",
    date: "2026-05-06",
    pinned: false,
    summary: "새로 가입한 길드원은 길드원 페이지에서 원정대 정보를 확인할 수 있습니다.",
  },
];



export const collectibleGuides = [
  {
    id: "mokoko",
    name: "모코코",
    total: 1270,
    category: "수집형 포인트",
    description: "전 대륙과 섬에 흩어진 모코코 씨앗 수집 현황입니다.",
    guideId: "mokoko-basics",
  },
  {
    id: "ignea",
    name: "이그네아의 징표",
    total: 15,
    category: "모험의 서",
    description: "대륙별 모험의 서 100% 달성 보상입니다.",
    guideId: "ignea-route",
  },
  {
    id: "giants-heart",
    name: "거인의 심장",
    total: 15,
    category: "수집형 포인트",
    description: "퀘스트, 호감도, 에포나 등을 통해 획득하는 수집 요소입니다.",
    guideId: null,
  },
  {
    id: "masterpiece",
    name: "위대한 미술품",
    total: 64,
    category: "수집형 포인트",
    description: "내실 보상과 각종 콘텐츠를 통해 수집하는 항목입니다.",
    guideId: null,
  },
  {
    id: "orpheus-star",
    name: "오르페우스의 별",
    total: 9,
    category: "수집형 포인트",
    description: "보스, 에포나, 교환 등을 통해 획득하는 고급 수집 요소입니다.",
    guideId: null,
  },
  {
    id: "world-tree-leaf",
    name: "세계수의 잎",
    total: 75,
    category: "생활",
    description: "생활 콘텐츠를 통해 획득하는 수집 요소입니다.",
    guideId: null,
  },
];

export const achievements = [
  {
    id: "hidden-001",
    name: "수상한 발자국",
    category: "히든",
    area: "루테란 동부",
    condition: "특정 NPC와 대화 후 숨겨진 오브젝트 조사",
    reward: "업적 점수 10",
    difficulty: "쉬움",
    hasGuide: true,
    guideId: "hidden-achievement-start",
  },
  {
    id: "hidden-002",
    name: "기억을 걷는 자",
    category: "히든",
    area: "로헨델",
    condition: "선행 퀘스트 완료 후 특정 위치 방문",
    reward: "업적 점수 20",
    difficulty: "보통",
    hasGuide: true,
    guideId: "hidden-achievement-start",
  },
  {
    id: "normal-001",
    name: "모험의 시작",
    category: "일반",
    area: "전 지역",
    condition: "모험의 서 첫 항목 등록",
    reward: "업적 점수 5",
    difficulty: "쉬움",
    hasGuide: false,
    guideId: null,
  },
];



export const raidGuides = [
  {
    id: "aegir-hard",
    name: "하드 에기르",
    category: "카제로스 레이드",
    difficulty: "Hard",
    gates: [
      {
        gate: "1관문",
        title: "1관문 핵심 기믹",
        summary: "주시, 장판 유도, 파티별 산개 위치를 정리합니다.",
      },
      {
        gate: "2관문",
        title: "2관문 핵심 기믹",
        summary: "무력화, 카운터, 즉사 패턴 대응을 정리합니다.",
      },
    ],
  },
  {
    id: "kamen-normal",
    name: "노말 카멘",
    category: "군단장 레이드",
    difficulty: "Normal",
    gates: [
      {
        gate: "1관문",
        title: "1관문 기본 흐름",
        summary: "초반 패턴과 주요 전멸기 대응을 정리합니다.",
      },
      {
        gate: "2관문",
        title: "2관문 기믹 정리",
        summary: "분신, 안전지대, 파티별 자리 배치를 정리합니다.",
      },
      {
        gate: "3관문",
        title: "3관문 핵심 패턴",
        summary: "격돌, 검기, 낙사 위험 구간을 정리합니다.",
      },
    ],
  },
];


export const raidApplications = [
  {
    id: 1,
    raidName: "하드 에기르",
    difficulty: "Hard",
    time: "오늘 21:00",
    capacity: 8,
    applicants: [
      {
        characterName: "파이썬을쓰는자",
        owner: "파이썬을쓰는자",
        job: "도화가",
        itemLevel: "1720",
        role: "서폿",
        mastery: "반숙",
        memo: "1~2관 가능",
      },
      {
        characterName: "감자칩도둑",
        owner: "감자칩도둑",
        job: "소울이터",
        itemLevel: "1710",
        role: "딜러",
        mastery: "숙련",
        memo: "",
      },
    ],
  },
  {
    id: 2,
    raidName: "노말 카멘",
    difficulty: "Normal",
    time: "오늘 22:00",
    capacity: 8,
    applicants: [
      {
        characterName: "파이썬부캐1",
        owner: "파이썬을쓰는자",
        job: "브레이커",
        itemLevel: "1690",
        role: "딜러",
        mastery: "트라이",
        memo: "시간 맞으면 가능",
      },
    ],
  },
];

export const expeditions = [
  {
    owner: "파이썬을쓰는자",

    characters: [
      {
        name: "파이썬을쓰는자",
        job: "도화가",
        itemLevel: "1720",
        combatPower: "312만",
        weeklyGold: 245000,
        weeklyRaids: [
          { name: "하드 에기르", difficulty: "Hard", cleared: false, gold: 85000 },
          { name: "노말 카멘", difficulty: "Normal", cleared: true, gold: 65000 },
          { name: "하드 베히모스", difficulty: "Hard", cleared: false, gold: 95000 },
        ],
      },
      {
        name: "파이썬부캐1",
        job: "브레이커",
        itemLevel: "1690",
        combatPower: "280만",
        weeklyGold: 180000,
        weeklyRaids: [
          { name: "노말 에기르", difficulty: "Normal", cleared: false, gold: 60000 },
          { name: "노말 카멘", difficulty: "Normal", cleared: false, gold: 65000 },
          { name: "하드 상아탑", difficulty: "Hard", cleared: true, gold: 55000 },
        ],
      },
      {
        name: "파이썬부캐2",
        job: "바드",
        itemLevel: "1660",
        combatPower: "240만",
        weeklyGold: 120000,
        weeklyRaids: [
          { name: "노말 카멘", difficulty: "Normal", cleared: false, gold: 65000 },
          { name: "노말 상아탑", difficulty: "Normal", cleared: false, gold: 35000 },
          { name: "하드 일리아칸", difficulty: "Hard", cleared: true, gold: 20000 },
        ],
      },
    ],

    collectibles: [
      { name: "모코코", current: 1200, total: 1270 },
      { name: "이그네아의 징표", current: 12, total: 15 },
      { name: "거인의 심장", current: 14, total: 15 },
      { name: "위대한 미술품", current: 58, total: 64 },
      { name: "오르페우스의 별", current: 8, total: 9 },
      { name: "세계수의 잎", current: 68, total: 75 },
    ],
  },

  {
    owner: "감자칩도둑",

    characters: [
      {
        name: "감자칩도둑",
        job: "소울이터",
        itemLevel: "1710",
        combatPower: "301만",
        weeklyGold: 220000,
        weeklyRaids: [
          { name: "하드 에기르", difficulty: "Hard", cleared: false, gold: 85000 },
          { name: "노말 카멘", difficulty: "Normal", cleared: false, gold: 65000 },
          { name: "하드 베히모스", difficulty: "Hard", cleared: true, gold: 95000 },
        ],
      },
    ],

    collectibles: [
      { name: "모코코", current: 950, total: 1270 },
      { name: "이그네아의 징표", current: 8, total: 15 },
      { name: "거인의 심장", current: 11, total: 15 },
      { name: "위대한 미술품", current: 45, total: 64 },
      { name: "오르페우스의 별", current: 6, total: 9 },
      { name: "세계수의 잎", current: 50, total: 75 },
    ],
  },
];