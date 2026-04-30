import { useState } from "react";
import { useTodo } from "../context/todoContext";

function TodoItem({ todo }) {
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  const [todoMsg, setTodoMsg] = useState(todo.title);
  const [ isEditing, setIsEditing ] = useState(true)


  const update = () => {
    setIsEditing(prev => !prev)
    updateTodo(todo.id, todoMsg)

  }

  const toggleTodoComplete = () => {
    toggleComplete(todo.id)
  }

  return (
    <>
      <div className="font-semibold flex gap-3 items-center">
        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodoComplete()} className="cursor-pointer" />

        <input
          type="text"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={isEditing}
          className={`${todo.completed ? 'line-through': ''} outline-none`}
        />
      </div>

      <div className="font-semibold flex gap-2">
        <button className="p-2 bg-olive-300 rounded cursor-pointer hover:bg-olive-400"
        onClick={() => update()}
        >
          {isEditing ? '✏' : '📁'}
        </button>
        <button className="p-2 bg-olive-300 rounded cursor-pointer hover:bg-olive-400"
        onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    </>
  );
}

export default TodoItem;
