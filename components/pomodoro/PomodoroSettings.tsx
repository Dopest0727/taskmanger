// components/pomodoro/PomodoroSettings.tsx
import React from "react";
import { PomodoroSettingsProps } from "@/types/pomodoro";

const PomodoroSettings: React.FC<PomodoroSettingsProps> = ({
  workDuration,
  breakDuration,
  onChangeWork,
  onChangeBreak,
}) => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg mt-4">
      <div className="flex items-center justify-between">
        <label
          htmlFor="work-duration"
          className="text-gray-700 dark:text-gray-200 font-medium"
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
          className="w-20 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-indigo-400"
        />
      </div>
      <div className="flex items-center justify-between">
        <label
          htmlFor="break-duration"
          className="text-gray-700 dark:text-gray-200 font-medium"
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
          className="w-20 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-indigo-400"
        />
      </div>
    </div>
  );
};

export default PomodoroSettings;
