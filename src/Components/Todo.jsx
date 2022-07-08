

function Todo(props) {
    return (
        <div className="todo">

            <h4>{props.item.Task}</h4>

            <select onChange={(e) => props.handleChange(e, props.item.id)}>
                <option value="all">Todos</option>
                <option value="inprogress">Add to In Prgress</option>
                <option value="completed">Add to completed</option>
            </select>
            <button onClick={() => props.handleDelete(props.item.id)}><i class="fa-solid fa-trash-can fa-2x"></i></button>
        </div>
    )
}
export default Todo