
import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { ItemContext } from "./context/todoContext.js"

function App() {
  const [ itemName, setItemName ] = useState(() => {
    const saved = localStorage.getItem('myTodoItems')
    return saved ? JSON.parse(saved) : '';
  })


  useEffect(() => {
    localStorage.setItem('myTodoItems', JSON.stringify(itemName));
  }, [itemName]);

  return (
    <ItemContext value={{itemName, setItemName}}>
      <div className="flex flex-col justify-center items-center gap-2.5 h-screen bg-emerald-900">
        <h1 className="font-bold text-2xl mb-2 text-amber-300">Manage Your Todo</h1>
        <div className="bg-amber-100 p-3 flex flex-col justify-center items-center rounded-lg border-2 border-olive-800">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </ItemContext>
  )
}

export default App
