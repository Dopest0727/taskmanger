import TodoPage from "./todo/page";
import PomodoroPage from "./pomodoro/page";
import NotePage from "./notes/page";

export default function Home() {
  return (
    <>
      <TodoPage />
      <NotePage />
      <PomodoroPage />
    </>
  );
}
