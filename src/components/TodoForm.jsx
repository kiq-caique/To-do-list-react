import React from 'react'

const TodoForm = () => {
  return (
    <div className="todo-form">
        <h2>Criar Tarefa</h2>
        <form>
            <input type='text' placeholder='Digiti o título'></input>
            <select>
                <option></option>
                <option></option>
                <option></option>
            </select>
        </form>
    </div>
  )
}

export default TodoForm