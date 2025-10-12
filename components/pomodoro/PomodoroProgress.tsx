import { PomodoroProgressProps } from "@/types/pomodoro";

export default function PomodoroProgress({
  timeLeft,
  totalTime,
}: PomodoroProgressProps) {
  const progressPercent = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <div className="w-full h-4 bg-stone-200 dark:bg-stone-700 rounded-full mt-4 overflow-hidden">
      <div
        className="h-4 bg-stone-900 dark:bg-stone-100 transition-all duration-300"
        style={{ width: `${progressPercent}%` }}
      ></div>
    </div>
  );
}
