import React, { createContext, useReducer, useRef, useState } from 'react'
import { GlobalContextComponentProps, GlobalContextType, Task, TaskActionType } from '../types/GlobalContext';


export const GlobalContext = createContext<GlobalContextType>(null!);
const initialTasks:Task[] = []
const tasksReducer = (state: typeof initialTasks,action: TaskActionType) => {
    switch (action.type) {
        case 'add':
            return [action.payload,...state];
        case 'delete':
            return state = state.filter(task => task.id !== action.payload.id)
         case 'finish':
            return state = state.filter(task => task.id !== action.payload.id)
        case 'edit':
            let updatedState:Task[] = [];
            state.map(task => {
                if (task.id === action.payload.id) {
                    updatedState = [ {
                        id: action.payload.id,
                        task: action.payload.task
                    },...updatedState]
                } else {
                    updatedState = [...updatedState,task]
                }
            })
            return state = updatedState
        default:
            throw new Error();
    }
}

const GlobalContextComponent = (props:GlobalContextComponentProps) => {
    const [tasks,dispatchTasks] = useReducer(tasksReducer,initialTasks)
    const [editId,setEditId] = useState('')
    const [currentUserType,setCurrentUserType] = useState('user')
    const inputRef = useRef<HTMLInputElement>(null!)
  return (
    <GlobalContext.Provider value={{tasks,dispatchTasks,inputRef,editId,setEditId,currentUserType,setCurrentUserType}}>
        {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextComponent