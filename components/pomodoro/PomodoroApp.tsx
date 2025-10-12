import { useState, useEffect, useRef, useCallback } from "react";
import PomodoroTimer from "./PomodoroTimer";
import PomodoroControls from "./PomodoroControls";
import PomodoroSettings from "./PomodoroSettings";
import PomodoroProgress from "./PomodoroProgress";

const DEFAULT_WORK_DURATION = 25 * 60;
const DEFAULT_BREAK_DURATION = 5 * 60;

const PomodoroApp = () => {
  const [workDuration, setWorkDuration] = useState(DEFAULT_WORK_DURATION);
  const [breakDuration, setBreakDuration] = useState(DEFAULT_BREAK_DURATION);
  const [timeLeft, setTimeLeft] = useState(workDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);
  const intervalRef = useRef<number | null>(null);

  const switchSession = useCallback(() => {
    const nextSession = !isWorkSession;
    setIsWorkSession(nextSession);
    setTimeLeft(nextSession ? workDuration : breakDuration);
    setIsRunning(false);
  }, [isWorkSession, workDuration, breakDuration]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            switchSession();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, switchSession]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(isWorkSession ? workDuration : breakDuration);
  };

  return (
    <div className="app-container">
      <h1 className="text-3xl font-semibold mb-6 text-center tracking-tight">
        Maurii Pomodoro
      </h1>

      <PomodoroTimer timeLeft={timeLeft} isWorkSession={isWorkSession} />
      <div className="mt-4">
        <PomodoroProgress
          timeLeft={timeLeft}
          totalTime={isWorkSession ? workDuration : breakDuration}
        />
      </div>

      <PomodoroSettings
        workDuration={workDuration / 60}
        breakDuration={breakDuration / 60}
        onChangeWork={(minutes) => {
          setWorkDuration(minutes * 60);
          if (isWorkSession) setTimeLeft(minutes * 60);
        }}
        onChangeBreak={(minutes) => {
          setBreakDuration(minutes * 60);
          if (!isWorkSession) setTimeLeft(minutes * 60);
        }}
      />
      <PomodoroControls
        isRunning={isRunning}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
      />
    </div>
  );
};

export default PomodoroApp;
