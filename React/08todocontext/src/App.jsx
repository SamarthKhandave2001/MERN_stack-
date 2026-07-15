import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import {useTodo} from './context/TodoContext'




function App() {
  const [todos, setTodos] = useState([])
 const addTodo = (todo) => {
  setTodos((prevTodos) => [{id: Date.now(), ...todo},    ...prevTodos])
 }

 const updateTodo = (id, Todo) => {
setTodos((prev) => prev.map((prevTodo) => (prevTodo.id===todo.id ? {...prevTodo, ...Todo} : prevTodo)))

 }

 const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id))
 }

const toggleComplete = (id) => {
  setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
}



  return (
    <TodoProvider values = {{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
   
    <input type="text" placeholder='Enter your task' />
    <input type="submit" value="Add Task" />
    </TodoProvider>
  )
}

export default App
