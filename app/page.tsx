import TodoPage from "./todo/page";
import PomodoroPage from "./pomodoro/page";
import NotePage from "./notes/page";
import Weather from "@/components/Weather";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-2">
      {/* Top Row */}
      <PomodoroPage />
    </main>
  );
}
