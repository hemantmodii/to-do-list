import React, { useState } from 'react'

const Input = ({taskList, setTaskList}) => {

  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  }
  return (
    <div>
      <h1
      className='my-2 mx-auto font-extrabold text-4xl mb-8'
      >To-do List</h1>
      <form action="">
        <input 
        className='rounded-lg border px-2 mx-2 text-green'
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Add your task'
        />
        <button 
        className='text-green-900'
        type="submit"
        onClick={handleAddTask}
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default Input