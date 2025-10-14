import TodoItem from "./TodoItem";
import { TodoListProps } from "@/types/todo";

export default function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit,
}: TodoListProps) {
  return (
    <div className="w-full max-w-md flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
