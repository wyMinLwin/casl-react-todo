import React, {useContext} from 'react'
import {FcPlus} from 'react-icons/fc'
import { GlobalContext } from '../context/GlobalContext';
import { v4 as uuidv4 } from 'uuid';


const TasksManager = () => {
  const {dispatchTasks,inputRef,editId,setEditId} = useContext(GlobalContext)
  return (
    <div className='flex flex-row justify-center items-center gap-2 my-2'>
        <input 
        ref= {inputRef}
        type='text' className='p-2 text-sm rounded-md border-2 border-black focus:outline-none' />
        <button 
        onClick={
          () => {
            // console.log(Boolean(editId))
            dispatchTasks({type:`${editId ? 'edit' : 'add'}`,payload:{id:`${editId ? editId : uuidv4() }`,task:inputRef.current.value}});
            inputRef.current.value=''
            inputRef.current.focus();
            setEditId('')
          }
        }
        className='flex flex-row ju items-center gap-1 bg-violet-200 text-dark rounded-md p-1 px-2 hover:shadow-md hover:-translate-y-0.5 ease-in-out duration-300 active:translate-y-0.5'> 
            <div>Add</div> 
            <FcPlus size={24} color={'blue'} /> 
        </button>
    </div>
  )
}

export default TasksManager