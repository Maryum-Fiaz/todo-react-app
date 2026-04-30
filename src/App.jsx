import { useEffect, useState } from 'react';
import { TodoContext } from './context/todoContext.js'
import TodoForm from './components/TodoForm.jsx';

function App() {

  const [ todos, setTodos ] = useState([])

  // add item
  const addTodos = (todo) => {
    setTodos(prev => [{id: Date.now(), ...todo}, ...prev])
  }

  // Update item
  const updateTodo = (id, todo) => {
    setTodos(prev => 
      prev.map(obj => 
        obj.id === id ? {...obj, title: todo} : obj
      )
    )
  }

  // delete item
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id ))
  }

  // toggle to show todo completed
  const toggleComplete = (id) => {
    setTodos(prev =>
      prev.map(obj => 
        obj.id === id ? {...obj, completed: !obj.completed} : obj
      )
    )
  }

  //local Storage

  useEffect(() =>{
    JSON.parse(localStorage.getItem('myTodos')) || []
  }, [])

  useEffect(() => {
    localStorage.setItem('myTodos', JSON.stringify(todos))
  }, [todos])


   return (
    <TodoContext.Provider value={{todos, addTodos, updateTodo, deleteTodo, toggleComplete}}>
      <div className="flex flex-col justify-center items-center gap-2.5 h-screen bg-emerald-900">
        <h1 className="font-bold text-2xl mb-2 text-amber-300">
          Manage Your Todo
        </h1>
        <div className="bg-amber-100 p-3 flex flex-col justify-center items-center rounded-lg border-2 border-olive-800 w-2xl min-w-2xs">
          <div className="mb-4">
          <TodoForm />

          </div>

          <div>
          <p>items here</p>

          </div>
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App