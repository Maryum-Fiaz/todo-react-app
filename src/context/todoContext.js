import { createContext, useContext } from "react";

// creating context
export const TodoContext = createContext({
    todos: [{
        id: 1,
        title: 'Todo msg',
        completed: false
    }],
    addTodos: (todo) => {},  //won't define here
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


// custom hook
export const useTodo = () => {
    if(!TodoContext) {
        throw new Error ('Context not found!')
    }
    
    return useContext(TodoContext)
}
