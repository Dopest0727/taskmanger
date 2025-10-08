import { Todo } from "@/types/todo";

export type FilterType = "all" | "completed" | "uncompleted";

export function filterTodos(todos: Todo[], filter: FilterType): Todo[] {
  switch (filter) {
    case "completed":
      return todos.filter((todo) => todo.completed);
    case "uncompleted":
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
}
