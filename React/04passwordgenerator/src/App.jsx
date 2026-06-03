import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)
  const[characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (numberAllowed) str += "0123456789";
  if (symbolAllowed) str += "!@#$%^&*()_+";
  if (characterAllowed) str += "abcdefghijklmnopqrstuvwxyz";

  for (let i = 1; i <= length; i++) {
    const char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
  }

  setPassword(pass);
}, [length, numberAllowed, symbolAllowed, characterAllowed]);

  useEffect(() => {
generatePassword()

  }, [length, numberAllowed, symbolAllowed, characterAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
     alert("Password copied!");
  }
  

  return (

    <>
  <div className='w-full max-w-md mx-autom shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'> 
    <h1 className= 'text-white  mb-2 text-center my-3'>Password Generator</h1>
  
<div className='flex shadow rounded-lg overflow-hidden mb-4'>
<input type="text" value={password}
className = 'outline-none w-full py-1 px-3' placeholder='password' readOnly />

<button onClick={copyPasswordToClipboard} className ='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >copy</button>
  </div>
  <button
  onClick={generatePassword}
 className="bg-orange-400 hover:bg-orange-300 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
>
  Generate Password
</button>
<div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
  <input type="range"
  min={6}
  max={20}
  value={length}
  className= 'cursor-pointer '
  onChange={(e) => setLength(e.target.value)}
  name=""
  id="" />
<label htmlFor="length">Length: {length}</label>

</div>

</div>

<div className='flex items-center gap-x-1'>
<input type='checkbox'
defaultChecked={numberAllowed}
onChange={() => {setNumberAllowed((prev) => !prev)}}
name=''
id=''/>
<label htmlFor='number'>Numbers</label>

</div>


<div className='flex items-center gap-x-1'>
<input type='checkbox'
defaultChecked={characterAllowed}
onChange={() => {setCharacterAllowed((prev) => !prev)}}
name=''
id=''/>
<label htmlFor='charInput'>Characters</label>

</div>

</div>

    </>
  )
}

export default App
