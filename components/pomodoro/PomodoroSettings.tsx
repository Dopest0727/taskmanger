import React from "react";
import { PomodoroSettingsProps } from "@/types/pomodoro";

const PomodoroSettings: React.FC<PomodoroSettingsProps> = ({
  workDuration,
  breakDuration,
  onChangeWork,
  onChangeBreak,
}) => {
  return (
    <div className="flex flex-col gap-4 p-4 mt-4 rounded-md border-base bg-white dark:bg-stone-800 shadow-sm">
      <div className="flex items-center justify-between">
        <label
          htmlFor="work-duration"
          className="text-stone-700 dark:text-stone-200 font-medium"
        >
          Work Duration (min)
        </label>
        <input
          id="work-duration"
          type="number"
          min={1}
          max={120}
          value={workDuration}
          onChange={(e) => onChangeWork(Number(e.target.value))}
          className="input-base w-20 text-center rounded"
        />
      </div>

      <div className="flex items-center justify-between">
        <label
          htmlFor="break-duration"
          className="text-stone-700 dark:text-stone-200 font-medium"
        >
          Break Duration (min)
        </label>
        <input
          id="break-duration"
          type="number"
          min={1}
          max={60}
          value={breakDuration}
          onChange={(e) => onChangeBreak(Number(e.target.value))}
          className="input-base w-20 text-center rounded"
        />
      </div>
    </div>
  );
};

export default PomodoroSettings;
