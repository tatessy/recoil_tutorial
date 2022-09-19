import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AddTask from './components/AddTask/AddTask'
import InputTask from './components/InputTask/InputTask'

function App() {

  return (
    <div className="task"> 
      <InputTask />
      <AddTask />
    </div>
  )
}

export default App
