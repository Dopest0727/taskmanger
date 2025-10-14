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
    <div className="card-base card-light flex flex-col items-center justify-center p-6">
      <span className="text-label mb-2">
        {isWorkSession ? (
          <span className="text-red-500">Work Session</span>
        ) : (
          "Break"
        )}
      </span>
      <span className="text-5xl font-bold light:text-stone-700 text-stone-100">
        {minutes}:{seconds}
      </span>
    </div>
  );
};

export default PomodoroTimer;
