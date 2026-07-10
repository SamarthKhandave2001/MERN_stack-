import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
   
    <input type="text" placeholder='Enter your task' />
    <input type="submit" value="Add Task" />
    </>
  )
}

export default App
