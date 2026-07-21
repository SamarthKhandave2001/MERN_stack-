import React from 'react';
import  {useState} from 'react';
import {useTodo} from '../contexts/TodoContext'

function TodoForm() {
const [todos, setTodos] = useState([""])
const {addTodo} = useTodo()

const add = (e) => {
  e.preventDefault()
  if(!todo)  return 
  addTodo({text: todo, completed: false})
  setTodo("")
 
}

    return(
<form onSubmit={add} className ='flex'>
<input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Write Todo...' className='W-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white 20 py-1.5'/>

<button type='submit' className='bg-blue-500 text-white px-3 py-1.5 rounded-r-lg hover:bg-blue-600 duration-150'>Add</button> 

</form>


    )
}


export default TodoForm;