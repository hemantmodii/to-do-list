import React, {useState} from 'react';

const Board = ({task, index, taskList, setTaskList}) => {

  const handleDelete = () => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTasks => currentTasks.filter(todo => index === removeIndex)))
  }

  return (
    <>
    <div className='bg-red-200 py-5 px-5 decoration-transparent my-2 rounded-md list-none flex flex-row justify-between align-center gap-10 text-xl'>
    <span className='text-left'>
      {task}
    </span>
    <span><button className='bg-red-500 px-2 rounded-sm text-gray-100' onClick={handleDelete}>Delete</button></span>
    </div>
    </>
  )
}

export default Board