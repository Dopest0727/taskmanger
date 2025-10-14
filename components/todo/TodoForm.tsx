import { useState } from "react";
import { TodoFormProps } from "@/types/todo";

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    onAdd(newTodo.trim());
    setNewTodo("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex mb-4 w-full card-base card-light overflow-hidden"
    >
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
        className="flex-grow input-accent-todo border-none rounded-l-md px-3 py-2"
      />
      <button type="submit" className="btn-base-sm btn-accent rounded-r-md">
        Add
      </button>
    </form>
  );
}
