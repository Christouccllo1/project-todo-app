

import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import InputTask from './Components/InputTask';
import Results from './Components/Results';


function App() {
  const [Todos, setTodos] = useState([])
  const [InputTodo, setInputTodo] = useState("")

  let addTodo = (task) => {
    let todo = {
      id: Date.now(),
      Task: task,
      statusType: "active"
    }

    setTodos([...Todos,todo])
  }

  let handleChange = (e) => {
    setInputTodo(e.target.value)
  }

  let handleClick=()=>{
    addTodo(InputTodo)
    document.querySelector('.InputTask input').value=""

  }

  let handleDelete=(id)=>{
    let filteredTodos=Todos.filter(el=>el.id!==id)
    setTodos(filteredTodos)

  }
  return (
    <div className="App">
      
      <Header></Header>
      <main>
        <div className="app-container">
          <InputTask handleChange={handleChange} handleClick={handleClick}></InputTask>
          <Results todos={Todos} handleDelete={handleDelete}></Results>
        </div>
      </main>
    </div>
  );
}

export default App;
