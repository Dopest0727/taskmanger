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
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
        className="todo-input"
      />
      <button className="add-button" type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
