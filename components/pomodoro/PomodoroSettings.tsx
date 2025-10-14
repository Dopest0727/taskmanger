import React from "react";
import { PomodoroSettingsProps } from "@/types/pomodoro";

const PomodoroSettings: React.FC<PomodoroSettingsProps> = ({
  workDuration,
  breakDuration,
  onChangeWork,
  onChangeBreak,
}) => {
  return (
    <div className="card-base flex flex-col card-light gap-4 p-4 mt-4">
      <div className="flex items-center justify-between">
        <label htmlFor="work-duration" className="text-label">
          Work Duration <span className="text-red-500">(min)</span>
        </label>
        <input
          id="work-duration"
          type="number"
          min={1}
          max={120}
          value={workDuration}
          onChange={(e) => onChangeWork(Number(e.target.value))}
          className="input-accent"
        />
      </div>

      <div className="flex items-center justify-between">
        <label htmlFor="break-duration" className="text-label">
          Break Duration <span className="text-red-500">(min)</span>
        </label>
        <input
          id="break-duration"
          type="number"
          min={1}
          max={60}
          value={breakDuration}
          onChange={(e) => onChangeBreak(Number(e.target.value))}
          className="input-accent"
        />
      </div>
    </div>
  );
};

export default PomodoroSettings;
