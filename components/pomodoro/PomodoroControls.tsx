import React from "react";
import { PomodoroControlsProps } from "@/types/pomodoro";

const PomodoroControls: React.FC<PomodoroControlsProps> = ({
  isRunning,
  onStart,
  onPause,
  onReset,
}) => {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {isRunning ? (
        <button
          onClick={onPause}
          className="btn-base w-full bg-red-500 text-stone-200 rounded-md hover:bg-red-600 active:scale-95 transition-all"
        >
          Pause
        </button>
      ) : (
        <button
          onClick={onStart}
          className="btn-base w-full bg-stone-800 text-stone-200 rounded-md hover:bg-stone-700 active:scale-95 transition-all"
        >
          Start
        </button>
      )}
      <button
        onClick={onReset}
        className="btn-base w-full light:bg-white light:border-stone-300 light:text-stone-600 bg-stone-900 text-stone-100 border border-stone-700 rounded-md hover:bg-stone-800 active:scale-95 transition-all"
      >
        Reset
      </button>
    </div>
  );
};

export default PomodoroControls;
