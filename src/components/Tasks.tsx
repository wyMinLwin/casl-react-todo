import React, {useContext} from 'react'
import TaskItem from './TaskItem'
import { GlobalContext } from '../context/GlobalContext'
import {Can} from '@casl/react'
import abilities from '../casl/abilities'

const Tasks = () => {
  const {tasks,currentUserType} = useContext(GlobalContext)
  return (
    <div>
        {
          tasks.map(task => (
           <Can key={task.id}  I='read' this={'Task'} ability={abilities(currentUserType)} passThrough>
             <TaskItem task={task} />
           </Can>
          ))
        }
    </div>
  )
}

export default Tasks