import React from "react";
import { PomodoroControlsProps } from "@/types/pomodoro";

const PomodoroControls: React.FC<PomodoroControlsProps> = ({
  isRunning,
  onStart,
  onPause,
  onReset,
}) => {
  return (
    <div className="flex justify-center gap-3 mt-4">
      {isRunning ? (
        <button
          onClick={onPause}
          className="btn-base bg-red-500 text-white rounded hover:bg-red-600 active:scale-95"
        >
          Pause
        </button>
      ) : (
        <button
          onClick={onStart}
          className="btn-base bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 rounded hover:bg-stone-700 dark:hover:bg-stone-200 active:scale-95"
        >
          Start
        </button>
      )}
      <button
        onClick={onReset}
        className="btn-base bg-stone-200 dark:bg-stone-700 dark:text-stone-100 rounded hover:bg-stone-300 dark:hover:bg-stone-600 active:scale-95"
      >
        Reset
      </button>
    </div>
  );
};

export default PomodoroControls;
