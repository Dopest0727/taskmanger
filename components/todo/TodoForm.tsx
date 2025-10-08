import { useState } from "react";

interface TodoFormProps {
  onAdd: (text: string) => void;
}

function TodoForm({ onAdd }: TodoFormProps) {
  const [newTodo, setNewTodo] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form flex gap-2 mb-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
        className="todo-input flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400"
      />
      <button
        className="add-button px-4 py-2 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 active:scale-95 transition-transform"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
