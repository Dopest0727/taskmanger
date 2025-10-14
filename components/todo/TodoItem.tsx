import { useState } from "react";
import { TodoItemProps } from "@/types/todo";
import { Edit2, Trash2 } from "lucide-react";

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) {
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
      className={`flex items-center card-light justify-between p-3 rounded-md card-base ${
        todo.completed
          ? "bg-stone-800 light:bg-gray-100 line-through opacity-60"
          : "bg-stone-900 light:bg-white"
      }`}
    >
      <div className="flex items-center gap-3 flex-grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
          className="w-4 h-4 accent-red-500"
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
            className="flex-grow input-accent px-2 py-1 rounded focus:outline-none"
            autoFocus
          />
        ) : (
          <span className="flex-grow text-primary">{todo.text}</span>
        )}
      </div>

      <div className="flex items-center gap-2 ml-3">
        <button
          onClick={() => setIsEditing(true)}
          className="p-1 hover:bg-stone-700 light:hover:bg-gray-200 rounded transition-colors duration-200"
        >
          <Edit2 className="w-5 h-5 text-stone-400 light:text-stone-900" />
        </button>
        <button
          onClick={onDelete}
          className="p-1 hover:bg-red-600 rounded transition-colors duration-200"
        >
          <Trash2 className="w-5 h-5 text-red-500" />
        </button>
      </div>
    </div>
  );
}
