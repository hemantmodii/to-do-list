import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Board from './components/Board'

function App() {
  const [taskList, setTaskList] = useState([]);


  return (
    <>
      <Input taskList = {taskList} setTaskList = {setTaskList}/>
      <div>
        {taskList.map((task, index) => 
          <Board 
          key={index}
          index={index}
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}
          />
        )}
      </div>
    </>
  )
}

export default App
