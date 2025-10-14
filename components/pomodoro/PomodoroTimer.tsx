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
    <div
      className="flex flex-col items-center justify-center p-6 rounded-md 
      bg-stone-800 border border-stone-700 shadow-md transition-all
      light:bg-white light:border-stone-300"
    >
      <span className="text-sm text-stone-400 mb-2 font-medium">
        {isWorkSession ? (
          <span className="text-red-500">Work Session</span>
        ) : (
          "Break"
        )}
      </span>
      <span className="text-5xl font-bold text-stone-400 light:text-stone-800">
        {minutes}:{seconds}
      </span>
    </div>
  );
};

export default PomodoroTimer;
