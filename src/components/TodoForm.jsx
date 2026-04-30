import { useState } from "react";
import { useTodo } from "../context/todoContext";


function TodoForm() {

  const [todo, setTodo] = useState('')
  const { addTodos } = useTodo()

  const addingTodo = (e) => {
    e.preventDefault()
    if(!todo.trim()) return;
    
    addTodos({title: todo, completed: false})
    // setTodo('')
  }

  console.log("todo: ", todo);
  
  return (
    <>
      <form onSubmit={addingTodo} className="w-full flex">

        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="outline-none border border-olive-700 rounded-l-lg p-1 focus:border-olive-800"
          placeholder="Enter your item..."
        />
        <button type="submit"
          className="bg-olive-700 border border-olive-700 text-amber-200 font-bold px-3 py-1 rounded-r-lg cursor-pointer hover:bg-olive-800 hover:border-olive-800 transition-all"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default TodoForm