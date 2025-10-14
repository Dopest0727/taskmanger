import { PomodoroProgressProps } from "@/types/pomodoro";

export default function PomodoroProgress({
  timeLeft,
  totalTime,
}: PomodoroProgressProps) {
  const progressPercent = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <div className="w-full h-5 bg-stone-800 light:bg-white light:border-stone-300 border border-stone-700 rounded-md mt-4 overflow-hidden shadow-inner border border-stone-700">
      <div
        className="h-full bg-red-500 transition-all duration-500 ease-out"
        style={{ width: `${progressPercent}%` }}
      ></div>
    </div>
  );
}
