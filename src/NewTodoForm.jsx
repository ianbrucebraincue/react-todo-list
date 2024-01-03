import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
    const [newTask, setNewTask] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (newTask === "") return

        onSubmit(newTask)

        setNewTask("")
    }

    return (
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
    )
}