import React, {useContext} from 'react'
import {FcCheckmark,FcEmptyTrash} from 'react-icons/fc'
import {FiEdit} from 'react-icons/fi'
import { TaskItemProps } from '../types/TaskItem'
import { GlobalContext } from '../context/GlobalContext'
import {Can} from '@casl/react'
import abilities from '../casl/abilities'

const TaskItem = (props:TaskItemProps) => {
    const {dispatchTasks,inputRef,setEditId, currentUserType} = useContext(GlobalContext)
  return (
    <div className='flex flex-row justify-between items-start shadow-lg p-3 rounded-md bg-yellow-100 m-2 relative 
    '
    // after:w-full 
    // after:h-full 
    // after:rounded-md
    // after:top-0 after:left-0 after:right-0 after:bottom-0 
    // after:bg-green-500/20 after:absolute after:duration-500 after:ease
    
    >
        <div className='p-1'> {props.task.task}</div>

        {/* Finish button */}
        <div className=' flex flex-row justify-start items-center'>
            <Can I={'finish'} a={'Task'} ability={abilities(currentUserType)} passThrough>
                {
                    allowed => (
                        <button
                        disabled={!allowed}
                        onClick={
                            () => {
                                dispatchTasks({type:"finish",payload:{id:props.task.id,task:props.task.task}})  
                            }
                        }
                        className='mx-1 p-1'>
                            <FcCheckmark size={24} />
                        </button>
                    )
                }
            </Can>

            {/* Delete button */}
            <Can I={'delete'} a={'Task'} ability={abilities(currentUserType)} passThrough>
                {
                    allowed => (
                        <button
                        disabled={!allowed}
                        onClick={
                            () => {
                                dispatchTasks({type:"delete",payload:{id:props.task.id,task:props.task.task}})  
                            }
                        }
                        className='mx-1 p-1'>
                            <FcEmptyTrash size={24} />
                        </button>
                    )
                }
            </Can>

            {/* edit button */}
            <Can I={'update'} a={'Task'} ability={abilities(currentUserType)} passThrough>
                {
                    allowed => (
                        <button 
                        disabled={!allowed}
                        onClick={
                            () => {
                                inputRef.current.value = props.task.task
                                setEditId(props.task.id)
                            }
                        }
                        className='mx-1 p-1'>
                            <FiEdit size={24} />
                        </button>
                    )
                }
            </Can>
            
        </div>
    </div>
  )
}

export default TaskItem