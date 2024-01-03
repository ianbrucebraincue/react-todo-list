import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newTask, setNewTask] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newTask,
          completed: false
        }
      ]
    })
  }

  console.log(todos)

  return (
    <>
      <form className="new-task-form">
        <div className="form-row">
          <label htmlFor="task">New Task</label>
          <input 
            value={newTask} 
            onChange={e => setNewTask(e.target.value)} 
            type="text" 
            id="task" 
          />
        </div>
        <button 
        onClick={handleSubmit}
        className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map(todo => {
          return (
          <li key={todo.key}>
            <label>
              <input type="checkbox" checked={todo.completed}/>
              {todo.title}
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
          )
        })}
      </ul>
    </>
  )
}