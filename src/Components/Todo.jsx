

function Todo(props){
    return(
        <div className="Todo">
            <p>{props.item.Task}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
export default Todo