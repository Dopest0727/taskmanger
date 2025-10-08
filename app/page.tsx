import TodoPage from "./todo/page";
import PomodoroPage from "./pomodoro/page";

export default function Home() {
  return (
    <>
      <PomodoroPage />
      <TodoPage />
    </>
  );
}
