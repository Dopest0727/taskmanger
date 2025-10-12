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
      className={`todo-item flex items-center justify-between p-3 rounded-md border-base ${
        todo.completed
          ? "bg-white line-through opacity-60"
          : "bg-white dark:bg-stone-800"
      }`}
    >
      <div className="flex items-center gap-3 flex-grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
          className="w-4 h-4 accent-gray-300"
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
          className="p-1 hover:bg-stone-200 dark:hover:bg-stone-700 rounded transition-colors duration-200"
        >
          <PencilSquareIcon className="w-5 h-5 text-stone-700 dark:text-stone-200" />
        </button>
        <button
          onClick={onDelete}
          className="p-1 hover:bg-red-200 dark:hover:bg-red-700 rounded transition-colors duration-200"
        >
          <TrashIcon className="w-5 h-5 text-stone-700 dark:text-red-400" />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
