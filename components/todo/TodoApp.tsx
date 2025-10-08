import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Todo } from "@/types/todo";

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

  const [filter, setFilter] = useState<"all" | "inclomplete" | "completed">(
    "all"
  );
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    return !todo.completed;
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

  const editTodo = (id: number, newText: string) => {
    if (newText === "") return;
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="todo-container max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-sm bg-white dark:bg-gray-800 transition-all">
      <h1 className="text-3xl font-semibold mb-6 text-center tracking-tight">
        Maurii Todo
      </h1>
      <TodoForm onAdd={addTodo} />
      <div className="flex justify-center gap-4 mt-2">
        {["all", "incomplete", "completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab as typeof filter)}
            className={`px-3 py-1 rounded ${
              filter === tab
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
      {todos.length === 0 && (
        <p className="empty-message text-center text-gray-500 mt-4">
          No tasks yet! Add above ✏️
        </p>
      )}
    </div>
  );
}

export default TodoApp;
