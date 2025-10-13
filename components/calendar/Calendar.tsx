"use client";

import { useState, useEffect } from "react";
import { CalendarProps } from "@/types/calendar";

const Calendar: React.FC<CalendarProps> = () => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    // Only run on client — prevents SSR mismatch
    setDate(new Date());
  }, []);

  if (!date)
    return (
      <div className="text-center">
        <div className="text-xs text-stone-500 dark:text-stone-400 mb-1">
          ---
        </div>
        <div className="text-sm font-medium text-stone-900 dark:text-stone-100">
          Loading...
        </div>
      </div>
    );

  const dayOfWeek = date.toLocaleDateString(undefined, { weekday: "long" });
  const month = date.toLocaleDateString(undefined, { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <div className="text-center">
      <div className="text-xs text-stone-500 dark:text-stone-400 mb-1 capitalize">
        {dayOfWeek}
      </div>
      <div className="text-sm font-medium text-stone-900 dark:text-stone-100">
        {day} {month} {year}
      </div>
    </div>
  );
};

export default Calendar;
