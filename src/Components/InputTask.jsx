function InputTask(props){
    return(
        <div className="InputTask">
            <input type="text" onChange={(e)=>props.handleChange(e)} />

            <button>Add Task</button>
        </div>
    )
}
export default InputTask 