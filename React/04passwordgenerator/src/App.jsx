import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)

  return (

    <>
    <h1 className="bg-red-400">
      Setup Ready
    </h1>
    </>
  )
}

export default App
