

import './App.css';
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, setTodos} from './actions/index';
import Header from './Components/Header';
import InputTask from './Components/InputTask';
import Results from './Components/Results';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'




function App() {
  // const [Todos, dispatch(setTodos] = useState([])
  const dispatch = useDispatch()
  const Todos = useSelector((state) => state.todoReducers.Todos)
  const [InputTodo, setInputTodo] = useState("")
  const [InProgressTodos, setInProgressTodos] = useState([])
  const [CompletedTodos, setCompletedTodos] = useState([])
  const [active, setActive] = useState("all")




  // let addTodo = (task) => {
  //   let todo = {
  //     id: Date.now(),
  //     Task: task,
  //     statusType: "all"
  //   }

  //   dispatch(setTodos([...Todos, todo])
  // }

  let handleChange = (e) => {
    setInputTodo(e.target.value)
  }

  let handleClick = () => {
    dispatch(addTodo(InputTodo))
    document.querySelector('.InputTask input').value = ""

  }

  let handleDelete = (id) => {
    dispatch(deleteTodo(id))
    setCompletedTodos(...[CompletedTodos.filter(el=> el.id !== id)])
    setInProgressTodos(...[InProgressTodos.filter(el => el.id !== id)])

  }



  let handleSelectChange = (e, id) => {
    let status = e.target.value
    Todos.forEach(t => {
      if(t.id === id){
        let nT = {
          id:t.id,
          Task:t.Task,
          statusType:e.target.value
        }

          if(status === "inprogress"){
            setInProgressTodos([...InProgressTodos, nT])
            dispatch(setTodos(Todos.filter(t => t.id !== id)))
            setCompletedTodos(CompletedTodos.filter(t => t.id !== id))
          }else if(status === "completed") {
            setCompletedTodos([...CompletedTodos, nT])
            dispatch(setTodos(Todos.filter(t => t.id !== id)))
            setInProgressTodos(InProgressTodos.filter(t => t.id !== id))
          }
        }
      }
    
    )
    InProgressTodos.forEach(t => {
      if(t.id === id){
        let nT = {
          id:t.id,
          Task:t.Task,
          statusType:e.target.value
        }

          if(status === "inprogress"){
            setInProgressTodos([...InProgressTodos, nT])
            dispatch(setTodos(Todos.filter(t => t.id !== id)))
            setCompletedTodos(CompletedTodos.filter(t => t.id !== id))
          }else if(status === "completed") {
            setCompletedTodos([...CompletedTodos, nT])
            dispatch(setTodos(Todos.filter(t => t.id !== id)))
            setInProgressTodos(InProgressTodos.filter(t => t.id !== id))
          }
        }
      }
    
    )
    CompletedTodos.forEach(t => {
      if(t.id === id){
        let nT = {
          id:t.id,
          Task:t.Task,
          statusType:e.target.value
        }

          if(status === "inprogress"){
            setInProgressTodos([...InProgressTodos, nT])
            dispatch(setTodos(Todos.filter(t => t.id !== id)))
            setCompletedTodos(CompletedTodos.filter(t => t.id !== id))
          }else if(status === "completed") {
            setCompletedTodos([...CompletedTodos, nT])
            dispatch(setTodos(Todos.filter(t => t.id !== id)))
            setInProgressTodos(InProgressTodos.filter(t => t.id !== id))
          }
        }
      }
    
    )
  

  }
  return (
    <Router>

   

      <div className="App">

        <Header></Header>
        <main>
          
          <div className="app-container">
            
            <InputTask handleChange={handleChange} handleClick={handleClick}></InputTask>
          
            <Routes>
              <Route path='/' element = {<Results type="Todos" todos={Todos} handleDelete={handleDelete} handleSelectChange={handleSelectChange}/>}/>
              <Route path='/Inprogress' element = {<Results type="In Progress" todos={InProgressTodos} handleDelete={handleDelete} handleSelectChange={handleSelectChange}/>}/>
              <Route path='/Completed' element = {<Results type="Completed" todos={CompletedTodos} handleDelete={handleDelete} handleSelectChange={handleSelectChange}/>}/>

            </Routes>
           
          </div>
        
        </main>
        <div className="routes">
            <Link to = "/" className="link" onClick={() => setActive("all")} style={active === "all" ? {backgroundColor: "#09162e", color: "aliceblue"}: {backgroundColor:"#c2dafd", color:"#09162e"}}>Todos</Link>
            <Link to = "/Inprogress" className="link" onClick={() => setActive("inprogress")} style={active === "inprogress" ? {backgroundColor: "#09162e", color: "aliceblue"}: {backgroundColor:"#c2dafd", color:"#09162e"}}>In Progress</Link>
            <Link to = "/Completed" className="link" onClick={() => setActive("completed")} style={active === "completed" ? {backgroundColor: "#09162e", color: "aliceblue"}: {backgroundColor:"#c2dafd", color:"#09162e"}}>Completed</Link>

        </div>
      </div>
      </Router>

  );
}

export default App;
