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