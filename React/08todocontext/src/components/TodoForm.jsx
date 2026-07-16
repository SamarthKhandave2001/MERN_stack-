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
        <div></div>
    )
}


export default TodoForm;