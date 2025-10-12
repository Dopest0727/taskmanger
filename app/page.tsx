import TodoPage from "./todo/page";
import PomodoroPage from "./pomodoro/page";
import NotePage from "./notes/page";
import Weather from "@/components/Weather";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Top Row */}
      <div className="card-base">
        <PomodoroPage />
      </div>
      <div className="card-base">
        <Weather />
      </div>

      {/* Bottom Row */}
      <div className="card-base">
        <TodoPage />
      </div>
      <div className="card-base">
        <NotePage />
      </div>
    </main>
  );
}
