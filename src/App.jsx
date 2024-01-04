import { useState, useEffect } from "react"

import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

import "./styles.css"

export default function App() {
  // const [todos, setTodos] = useState([])
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("TASKS")
    if (localValue == null) return []
    
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(todos)) // takes a key and string
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
        return [
        ...currentTodos,
        {
            id: crypto.randomUUID(),
            title,
            completed: false
        }
        ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}