"use client";

import { useState } from "react";
import GuideCard from "@/components/guide/GuideCard";

type GuidePost = {
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

type GuideFilterListProps = {
  guides: GuidePost[];
};

export default function GuideFilterList({ guides }: GuideFilterListProps) {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("전체");

  const categories = [
    "전체",
    ...Array.from(new Set(guides.map((guide) => guide.category))),
  ];

  const filteredGuides = guides.filter((guide) => {
    const searchableText = [
      guide.title,
      guide.category,
      guide.type,
      guide.summary,
      guide.description,
    ]
      .filter(Boolean)
      .join(" ");

    const matchesKeyword = searchableText.includes(keyword);
    const matchesCategory = category === "전체" || guide.category === category;

    return matchesKeyword && matchesCategory;
  });

  return (
    <div>
      <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-[1fr_180px]">
        <input
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="공략 검색"
          className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none"
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredGuides.map((guide) => (
          <GuideCard
            key={guide.id}
            id={guide.id}
            title={guide.title}
            category={guide.category}
            type={guide.type}
            difficulty={guide.difficulty}
            estimatedTime={guide.estimatedTime}
            reward={guide.reward}
            summary={guide.summary}
            description={guide.description}
          />
        ))}
      </div>
    </div>
  );
}
