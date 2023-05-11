import { useState } from 'react'
import Todo from './components/Todo'
import "./App.css"
import TodoForm from './components/TodoForm'

function App() { 
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Primeira tarefa",
      category: "Pessoal",
      isComplete: false,
    },
    {
      id: 2,
      text: "Segunda tarefa",
      category: "Profissional",
      isComplete: false,
    },
    {
      id: 3,
      text: "Terceira tarefa",
      category: "Estudos",
      isComplete: false,
    }
  ])

  return (
      <div className='app'>
        <h1>Hello World</h1>
        <div className="todo-list">
          {todos.map((todo) => (
            <Todo todo={todo}/>
          ))}
        </div>
        <TodoForm/>
      </div>
      
  )
}

export default App
