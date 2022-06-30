import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import InputTask from './Components/InputTask';

function App() {
  const [count, setCount]=useState(0)
  return (
    <div className="App">
      <Header></Header>
      <main>
        <div className="app-container">
          <InputTask></InputTask>
        </div>
      </main>
    </div>
  );
}

export default App;
