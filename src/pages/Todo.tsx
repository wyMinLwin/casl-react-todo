import React from 'react'
import TasksManager from '../components/TasksManager'
import Tasks from '../components/Tasks'
import UserType from '../components/UserType'

const Todo = () => {
  return (
    <div className='text-lg text-black w-1/3  flex flex-col items-center'>
        <p className='my-1 mx-auto text-sm text-center opacity-60'>
          This is <a className='text-blue-600 font-semibold italic underline' href='https://casl.js.org/v6/en'>CASL</a> react todo projects. You can add tasks with everyrole. But you can finish when you are Admin and can delete and edit when u are super admin.
        </p>
        <UserType />
        <TasksManager />
        <p className='text-sm opacity-50'>Todos:</p>
        <Tasks />
    </div>
  )
}

export default Todo