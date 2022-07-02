

import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import InputTask from './Components/InputTask';
import Todos from './Components/Todos';

function App() {
  // const [Todos, setTodos] = useState([])
  const [InputTodo, setInputTodo] = useState("")

  let addTodo = (task) => {
    let todo = {
      id: Date.now(),
      Task: task,
      statusType: "active"
    }
  }

  let handleChange = (e) => {
    setInputTodo(e.target.value)
  }

  return (
    <div className="App">
      <h1>{InputTodo}</h1>
      <Header></Header>
      <main>
        <div className="app-container">
          <InputTask handleChange={handleChange}></InputTask>
          <Todos></Todos>
        </div>
      </main>
    </div>
  );
}

export default App;
