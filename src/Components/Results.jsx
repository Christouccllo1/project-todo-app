import Todo from "./Todo"

function Results(props) {
  return (
    <div className="Todos">
        <div className="todo head">
          <h2>Tasks</h2>
          <h2>Actions</h2>
        </div>
        {
          props.todos.map(task => {
            return (
              <Todo item={task} key={task.id} handleDelete={props.handleDelete}></Todo>
            )
          })
        }
    </div>
  )
}
export default Results