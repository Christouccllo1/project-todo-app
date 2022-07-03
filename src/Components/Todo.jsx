

function Todo(props) {
    return (
        <tr className="Todo">
            <td className="Task">{props.item.Task}</td>
            <td className="Action">
                <button>Edit</button>
                <button>Delete</button>
            </td>

        </tr>
    )
}
export default Todo