import Link from "next/link";

const menus = [
  { href: "/", label: "메인" },
  { href: "/members", label: "길드원" },
  { href: "/raids", label: "레이드" },
  { href: "/collectibles", label: "내실" },
  { href: "/achievements", label: "업적" },
  { href: "/guides", label: "공략집" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-zinc-900 border-r border-zinc-800 p-5">
      <h1 className="text-2xl font-bold text-white mb-8">
        오늘도 대환장
      </h1>

      <nav className="space-y-2">
        {menus.map((menu) => (
          <Link
            key={menu.href}
            href={menu.href}
            className="block rounded-xl px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-white transition"
          >
            {menu.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}