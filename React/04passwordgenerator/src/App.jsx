import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [length, setLength] = useState(8)

  return (

    <>
    <h1 className="bg-red-400">
      Setup Ready
    </h1>
    </>
  )
}

export default App
