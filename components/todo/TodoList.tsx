import TodoItem from "./TodoItem";

interface Todos {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todos[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

function TodoList({ todos, onToggle, onDelete, onEdit }: TodoListProps) {
  return (
    <div className="todo-list space-y-2">
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

export default TodoList;
