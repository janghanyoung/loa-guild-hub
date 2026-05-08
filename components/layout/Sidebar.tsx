import Link from "next/link";

const menus = [
  { href: "/", label: "메인" },
  { href: "/members", label: "길드원" },
  { href: "/raids", label: "레이드" },
  { href: "/collectibles", label: "내실" },
  { href: "/achievements", label: "업적" },
  { href: "/guides", label: "공략집" },
  { href: "/admin", label: "관리자" },
];

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-64 border-r border-zinc-800 bg-zinc-950 p-5">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-white">오늘도 대환장</h1>
        <p className="mt-1 text-xs text-zinc-500">Lost Ark Guild Hub</p>
      </div>

      <nav className="space-y-2">
        {menus.map((menu) => (
          <Link
            key={menu.href}
            href={menu.href}
            className="block rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
          >
            {menu.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}