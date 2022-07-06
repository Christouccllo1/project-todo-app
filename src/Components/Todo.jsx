

function Todo(props) {
    return (
        <div className="todo">

            <h4>{props.item.Task}</h4>

            
            <button onClick={()=>props.handleDelete(props.item.id)}>Delete</button>
        </div>
    )
}
export default Todo