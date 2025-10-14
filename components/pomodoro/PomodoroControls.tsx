import { PomodoroControlsProps } from "@/types/pomodoro";

export default function PomodoroControls({
  isRunning,
  onStart,
  onPause,
  onReset,
}: PomodoroControlsProps) {
  return (
    <div className="flex justify-center gap-3 mt-4">
      {isRunning ? (
        <button onClick={onPause} className="btn-base btn-accent">
          Pause
        </button>
      ) : (
        <button onClick={onStart} className="btn-base btn-primary">
          Start
        </button>
      )}
      <button onClick={onReset} className="btn-base btn-secondary">
        Reset
      </button>
    </div>
  );
}
