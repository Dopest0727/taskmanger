import { useEffect, useState } from "react";
import { Todo } from "@/types/todo";
import { filterTodos, FilterType } from "@/lib/TodoFilters";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    if (!text.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: text.trim(), completed: false },
    ]);
  };

  const toggleTodo = (id: number) =>
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const deleteTodo = (id: number) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

  const [filter, setFilter] = useState<FilterType>("all");
  const filteredTodos = filterTodos(todos, filter);

  const editTodo = (id: number, newText: string) =>
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );

  return (
    <div className="app-container flex flex-col items-center justify-start text-primary">
      <h1 className="text-3xl font-semibold mb-6 text-center tracking-tight">
        Maurii Todo
      </h1>
      <TodoForm onAdd={addTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
      {todos.length === 0 && (
        <p className="text-center text-muted mt-10 mb-5">Add a todo!</p>
      )}
    </div>
  );
}
