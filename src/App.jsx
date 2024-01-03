import "./styles.css"

export default function App() {
  return (
    <>
      <form className="new-task-form">
        <div className="form-row">
          <label htmlFor="task">New Task</label>
          <input type="text" id="task" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Task 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}