interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div
      className={`todo-item flex items-center justify-between p-3 rounded-lg border transition-all ${
        todo.completed
          ? "bg-gray-100 border-gray-300 line-through opacity-70 dark:bg-gray-700 dark:border-gray-600"
          : "bg-white border-gray-200 hover:border-indigo-400 dark:bg-gray-800 dark:border-gray-700"
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
          className="todo-checkbox w-4 h-4 accent-indigo-500"
        />
        <span className="text-base">{todo.text}</span>
      </div>
      <button
        className="delete-button text-red-500 hover:text-red-700 transition-transform hover:scale-110"
        onClick={onDelete}
      >
        ✕
      </button>
    </div>
  );
}

export default TodoItem;
