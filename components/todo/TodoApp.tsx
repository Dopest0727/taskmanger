import { useEffect, useState } from "react";
import { Todo } from "@/types/todo";
import { filterTodos, FilterType } from "@/lib/TodoFilters";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

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

  {
    /*================== ADD ==================*/
  }
  const addTodo = (text: string): void => {
    if (text.trim() === "") return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: text.trim(), completed: false },
    ]);
  };

  {
    /*================== TOGGLE ==================*/
  }
  const toggleTodo = (id: number): void => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  {
    /*================== DELETE ==================*/
  }
  const deleteTodo = (id: number): void => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  {
    /*================== FILTER ==================*/
  }
  const [filter, setFilter] = useState<FilterType>("all");
  const filteredTodos = filterTodos(todos, filter);

  {
    /*================== EDIT ==================*/
  }
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
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
      {todos.length === 0 && (
        <p className="empty-message text-center text-gray-500 mt-10 mb-5">
          No tasks yet! Add above ✏️
        </p>
      )}
    </div>
  );
}

export default TodoApp;
