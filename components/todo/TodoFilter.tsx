import React from "react";
import { FilterType } from "@/lib/TodoFilters";

interface TodoFilterProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter }) => {
  const filters: FilterType[] = ["all", "completed", "uncompleted"];

  return (
    <div className="flex mb-4 w-full max-w-md mx-auto rounded-md overflow-hidden">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`flex-1 px-4 py-2 text-sm font-medium transition-colors duration-200 first:rounded-l-md last:rounded-r-md
            ${
              filter === f
                ? "bg-stone-100 text-stone-800 light:bg-stone-900 light:text-stone-100"
                : "bg-stone-800 text-stone-100 border border-stone-700 light:bg-white light:border light:border-stone-300 light:text-stone-900 hover:bg-stone-700 light:hover:bg-gray-200"
            }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
