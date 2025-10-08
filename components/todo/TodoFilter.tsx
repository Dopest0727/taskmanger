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
    <div className="flex mb-4 w-full max-w-md mx-auto">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`flex-1 px-4 py-2 border transition-colors duration-200
        ${
          filter === f
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-gray-200 text-gray-800 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700"
        } 
        first:rounded-l-lg last:rounded-r-lg`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
