// components/todo/TodoFilter.tsx
import React from "react";
import { FilterType } from "@/lib/TodoFilters";

interface TodoFilterProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter }) => {
  const filters: FilterType[] = ["all", "completed", "uncompleted"];

  return (
    <div className="flex mb-4 w-full border-base max-w-md mx-auto rounded-md">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`flex-1 px-4 py-2 transition-colors duration-200 first:rounded-l-md last:rounded-r-md
    ${
      filter === f
        ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900"
        : "bg-white text-stone-900 dark:bg-stone-800 dark:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-700"
    }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
