import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2.5 h-screen bg-emerald-900">
        <h1 className="font-bold text-2xl mb-2 text-amber-300">Manage Your Todo</h1>
        <div className="bg-amber-100 p-3 flex flex-col justify-center items-center rounded-lg border-2 border-olive-800">
        <TodoInput />
        <TodoList />

        </div>
      </div>
    </>
  )
}

export default App
