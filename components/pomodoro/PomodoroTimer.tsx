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
    <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-white dark:bg-gray-700 shadow-md transition-colors duration-300 w-full">
      <span className="text-sm text-gray-500 dark:text-gray-300 mb-2 font-medium">
        {isWorkSession ? "Work Session" : "Break"}
      </span>
      <span className="text-5xl font-bold text-gray-800 dark:text-gray-100">
        {minutes}:{seconds}
      </span>
    </div>
  );
};

export default PomodoroTimer;
