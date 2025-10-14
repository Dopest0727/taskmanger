import { PomodoroProgressProps } from "@/types/pomodoro";

export default function PomodoroProgress({
  timeLeft,
  totalTime,
}: PomodoroProgressProps) {
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <div className="w-full card-light h-4 mt-4 rounded-md border border-stone-700 bg-stone-800 shadow-inner overflow-hidden">
      <div
        className="h-full bg-red-500 transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
