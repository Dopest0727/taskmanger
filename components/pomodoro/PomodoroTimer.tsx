import React from "react";
import { PomodoroTimerProps } from "@/types/pomodoro";

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({
  timeLeft,
  isWorkSession,
}) => {
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-md border-base bg-white dark:bg-stone-800 shadow-sm transition-all">
      <span className="text-sm text-stone-500 dark:text-stone-300 mb-2 font-medium">
        {isWorkSession ? "Work Session" : "Break"}
      </span>
      <span className="text-5xl font-bold text-stone-800 dark:text-stone-100">
        {minutes}:{seconds}
      </span>
    </div>
  );
};

export default PomodoroTimer;
