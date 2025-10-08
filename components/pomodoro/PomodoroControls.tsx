import React from "react";
import { PomodoroControlsProps } from "@/types/pomodoro";

const PomodoroControls: React.FC<PomodoroControlsProps> = ({
  isRunning,
  onStart,
  onPause,
  onReset,
}) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      {isRunning ? (
        <button
          onClick={onPause}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 active:scale-95 transition-transform"
        >
          Pause
        </button>
      ) : (
        <button
          onClick={onStart}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 active:scale-95 transition-transform"
        >
          Start
        </button>
      )}
      <button
        onClick={onReset}
        className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 active:scale-95 transition-transform"
      >
        Reset
      </button>
    </div>
  );
};

export default PomodoroControls;
