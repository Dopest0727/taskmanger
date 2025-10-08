import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (id: number, newText: string) => void;
}

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
      className={`todo-item flex items-center justify-between p-3 rounded-lg border ${
        todo.completed
          ? "bg-gray-100 dark:bg-gray-700 line-through"
          : "bg-white dark:bg-gray-800"
      }`}
    >
      <div className="flex items-center gap-3">
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
            className="border-b border-gray-300 focus:outline-none dark:bg-gray-700 dark:border-gray-500"
            autoFocus
          />
        ) : (
          <span
            onDoubleClick={() => setIsEditing(true)}
            className="cursor-pointer"
          >
            {todo.text}
          </span>
        )}
      </div>

      <button onClick={onDelete} className="text-red-500 hover:text-red-700">
        ✕
      </button>
    </div>
  );
}

export default TodoItem;
