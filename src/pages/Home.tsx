import { WeeklyHighlights } from "../components/highlights/WeeklyHighlights";
import { Header } from "../components/Header";

export function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-page-bg text-text">
      <Header />
      <div className="mx-auto min-h-screen w-[calc(100%-32px)] bg-neutral-900 md:w-[calc(100%-80px)] lg:w-[calc(100%-142px)]">
        <WeeklyHighlights />
      </div>
    </main>
  );
}