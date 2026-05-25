import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

let counter = 15
const addValue = () => {
  counter = counter + 1
  console.log(counter)
}
  return (
    <>
      <h1>React Learning {counter} </h1>
      <h2> Counter Value {counter}</h2>
      <button>Remove Value</button>  {"   "}
      <button onClick={addValue}>Add Value</button>
      <p> Footer: {counter} </p>
    </>
  )
}

export default App
