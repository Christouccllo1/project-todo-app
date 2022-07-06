

function Todo(props) {
    return (
        <div className="todo">

            <h4>{props.item.Task}</h4>

            
            <button onClick={()=>props.handleDelete(props.item.id)}><i class="fa-solid fa-trash-can fa-2x"></i></button>
        </div>
    )
}
export default Todo