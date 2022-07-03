function InputTask(props){
    return(
        <div className="InputTask">
            <input type="text" onChange={(e)=>props.handleChange(e)} />

            <button onClick={()=>props.handleClick()}>Add Task</button>
        </div>
    )
}
export default InputTask 