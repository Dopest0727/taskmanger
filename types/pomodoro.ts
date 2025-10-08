export interface PomodoroControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export interface PomodoroTimerProps {
  timeLeft: number;
  isWorkSession: boolean;
}

export interface PomodoroSettingsProps {
  workDuration: number;
  breakDuration: number;
  onChangeWork: (minutes: number) => void;
  onChangeBreak: (minutes: number) => void;
}

export interface PomodoroProgressProps {
  timeLeft: number;
  totalTime: number;
  size?: number;
}
