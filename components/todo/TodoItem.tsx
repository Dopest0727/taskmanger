interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
        className="todo-checkbox"
      />
      <span className="todo-item">{todo.text}</span>
      <button className="delet-button" onClick={onDelete}>
        X
      </button>
    </div>
  );
}

export default TodoItem;
