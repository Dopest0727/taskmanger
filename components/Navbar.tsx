"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Sync class on the <html> element whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-md">
      {/* Left: toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-md border border-gray-300 dark:border-gray-600"
      >
        {darkMode ? "🌞" : "🌙"}
      </button>

      {/* Center logo */}
      <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
        By Maurii
      </div>

      {/* Right placeholder */}
      <div className="w-10"></div>
    </nav>
  );
}
