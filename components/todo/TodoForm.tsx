import { useState } from "react";
import { TodoFormProps } from "@/types/todo";

function TodoForm({ onAdd }: TodoFormProps) {
  const [newTodo, setNewTodo] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(newTodo);
    setNewTodo("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="todo-form flex mb-4 border border-base rounded-md"
    >
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
        className="flex-grow input-base border-none rounded-l-md"
      />
      <button
        type="submit"
        className="btn-base hover:bg-stone-900 dark:hover:bg-stone-100 dark:hover:text-stone-800 hover:text-stone-100 rounded-r-md"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
