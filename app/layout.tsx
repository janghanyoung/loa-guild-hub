import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "오늘도 대환장",
  description: "LOA Guild Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-zinc-950">
        <div className="flex">
          <Sidebar />

          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}