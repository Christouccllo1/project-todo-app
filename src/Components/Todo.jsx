

function Todo(props) {
    return (
        <div className="todo">

            <h4>{props.item.Task}</h4>

            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
export default Todo