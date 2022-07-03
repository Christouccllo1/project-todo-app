import Todo from "./Todo"

function Results(props) {
  return (
    <div className="Todos">
      <table>
        <tr>
          <th>Task</th>
          <th>Actions</th>
        </tr>
        {
          props.todos.map(task => {
            return (


              <Todo item={task} key={task.id}></Todo>
            )
          })
        }


      </table>


    </div>
  )
}
export default Results