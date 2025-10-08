import { PomodoroProgressProps } from "@/types/pomodoro";

export default function PomodoroProgress({
  timeLeft,
  totalTime,
}: PomodoroProgressProps) {
  const progressPercent = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div
        className="bg-indigo-500 h-2 rounded-full transition-all"
        style={{ width: `${progressPercent}%` }}
      ></div>
    </div>
  );
}
