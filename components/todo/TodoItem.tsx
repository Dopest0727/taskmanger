import { useState } from "react";
import { TodoItemProps } from "@/types/todo";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    } else if (e.key === "Escape") {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`todo-item flex items-center justify-between p-3 rounded-lg border border-gray-300 
        ${
          todo.completed
            ? "bg-gray-100 dark:bg-gray-700 line-through"
            : "bg-white dark:bg-gray-800"
        }`}
    >
      <div className="flex items-center gap-3 flex-grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
          className="w-4 h-4 accent-indigo-500"
        />

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => {
              onEdit(todo.id, editText.trim());
              setIsEditing(false);
            }}
            className="flex-grow border-b border-gray-300 focus:outline-none dark:bg-gray-700 dark:border-gray-500 px-1 py-0.5 rounded"
            autoFocus
          />
        ) : (
          <span className="flex-grow">{todo.text}</span>
        )}
      </div>

      <div className="flex items-center gap-2 ml-3">
        <button
          onClick={() => setIsEditing(true)}
          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors duration-200"
        >
          <PencilSquareIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>

        <button
          onClick={onDelete}
          className="p-1 hover:bg-red-100 dark:hover:bg-red-700 rounded transition-colors duration-200"
        >
          <TrashIcon className="w-5 h-5 text-red-600 dark:text-red-400" />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
