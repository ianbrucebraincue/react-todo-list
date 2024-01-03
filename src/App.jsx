import "./styles.css"

export default function App() {
  return <form className="new-task-form">
    <div className="form-row">
      <label htmlFor="item">New Task</label>
      <input type="text" id="task" />
    </div>
    <button className="btn">Add</button>
  </form>
}