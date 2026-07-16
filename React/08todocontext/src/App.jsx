import { useState } from 'react';
import './App.css';
import { TodoProvider } from './contexts/TodoContext';
import { useTodo } from './contexts/TodoContext';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [
      { id: Date.now(), ...todo },
      ...prevTodos,
    ]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, ...todo }
          : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

useEffect(() => {

}, [])



  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
      }}
    >
      <h1 className="text-3xl font-bold underline">
        Hello World!
      </h1>

      <input type="text" placeholder="Enter your task" />
      <input type="submit" value="Add Task" />
    </TodoProvider>
  );
}

export default App;