"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Calendar from "./calendar/Calendar";

export default function Navigation() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="w-full bg-white/70 dark:bg-stone-900/70 backdrop-blur-sm shadow-sm transition-all">
      <div className="flex items-center justify-between p-4 mx-auto max-w-5xl rounded-md">
        <h1 className="text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-100">
          by Maurii.
        </h1>
        <Calendar />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-md border border-gray-300 dark:border-stone-600 hover:bg-gray-100 dark:hover:bg-stone-800 transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun size={18} className="text-red-500" />
          ) : (
            <Moon size={18} className="text-stone-700 dark:text-stone-200" />
          )}
        </button>
      </div>
    </nav>
  );
}
