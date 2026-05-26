import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className= 'w-full h-screen duration-300 bg-black' > 
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x px-2'>
  <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>  

<button> test </button>
<button> New</button>


</div>
      </div>
      </div>

    </>
  )
}

export default App
