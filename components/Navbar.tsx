"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Calendar from "./calendar/Calendar";

export default function Navigation() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [lightMode]);

  return (
    <nav className="w-full backdrop-blur-sm shadow-sm transition-all bg-stone-900/70 light:bg-white/70">
      <div className="grid grid-cols-3 items-center p-4 mx-auto max-w-5xl">
        {/* Logo */}
        <h1 className="justify-self-start text-xl font-semibold tracking-tight text-stone-100 light:text-stone-900">
          by Maurii <span className="text-red-500">.</span>
        </h1>

        {/* Calendar Centered */}
        <div className="justify-self-center">
          <Calendar />
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setLightMode(!lightMode)}
          aria-label="Toggle theme"
          className="justify-self-end p-2 rounded-md border transition-colors 
                 border-stone-700 light:border-gray-300 
                 hover:bg-stone-800 light:hover:bg-gray-100"
        >
          {lightMode ? (
            <Moon size={18} className="text-red-500" />
          ) : (
            <Sun size={18} className="text-red-500" />
          )}
        </button>
      </div>
    </nav>
  );
}
