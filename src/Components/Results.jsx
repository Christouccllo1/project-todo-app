import Todo from "./Todo"

function Results(props){
    return(
        <div className="Todos">
         {
          props.todos.map(task=>{
            return <Todo item={task} key={task.id}></Todo>
          })
         } 

        </div>
    )
}
export default Results