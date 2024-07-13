import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Board from './components/Board'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [taskList, setTaskList] = useState([]);

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();


  return (
    <>
      <div className='flex justify-between align-center bg-gray-200 p-3'>
      <Input taskList = {taskList} setTaskList = {setTaskList}/>
      {
        isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        className='bg-black text-white font-bold px-5 rounded rounded-xl h-[40px] my-4'>
        Log Out
      </button> : 
      <button onClick={() => loginWithRedirect()}
      className='bg-black text-white font-bold px-5 rounded rounded-xl h-[40px] my-4'>Log In</button>
      }
      
      </div>

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
