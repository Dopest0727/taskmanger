import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch {
      console.error("Failed to parse todos from localStorage");
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string): void => {
    if (text.trim() === "") return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: text.trim(), completed: false },
    ]);
  };

  const toggleTodo = (id: number): void => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-sm bg-white dark:bg-gray-800 transition-all">
      <h1 className="text-3xl font-semibold mb-6 text-center tracking-tight">
        Maurii Todo
      </h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      {todos.length === 0 && (
        <p className="empty-message text-center text-gray-500 mt-4">
          No tasks yet! Add above ✏️
        </p>
      )}
    </div>
  );
}

export default TodoApp;
