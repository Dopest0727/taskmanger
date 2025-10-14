import React from "react";
import { PomodoroSettingsProps } from "@/types/pomodoro";

const PomodoroSettings: React.FC<PomodoroSettingsProps> = ({
  workDuration,
  breakDuration,
  onChangeWork,
  onChangeBreak,
}) => {
  return (
    <div
      className="flex flex-col gap-4 p-4 mt-4 rounded-md 
      bg-stone-800 border border-stone-700 shadow-md transition-all light:bg-white light:border-stone-300"
    >
      <div className="flex items-center justify-between">
        <label
          htmlFor="work-duration"
          className="text-stone-200 font-medium light:text-stone-500"
        >
          Work Duration <span className="text-red-500">(min)</span>
        </label>
        <input
          id="work-duration"
          type="number"
          min={1}
          max={120}
          value={workDuration}
          onChange={(e) => onChangeWork(Number(e.target.value))}
          className="pomodoro-settings"
        />
      </div>

      <div className="flex items-center justify-between">
        <label
          htmlFor="break-duration"
          className="text-stone-200 font-medium light:text-stone-500"
        >
          Break Duration <span className="text-red-500">(min)</span>
        </label>
        <input
          id="break-duration"
          type="number"
          min={1}
          max={60}
          value={breakDuration}
          onChange={(e) => onChangeBreak(Number(e.target.value))}
          className="pomodoro-settings"
        />
      </div>
    </div>
  );
};

export default PomodoroSettings;
