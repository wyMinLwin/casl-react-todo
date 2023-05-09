import React from 'react'
import Todo from './pages/Todo'
import GlobalContextComponent from './context/GlobalContext'

const App = () => {
  return (
    <GlobalContextComponent>
      <div className='min-h-screen w-screen bg-yellow-200 flex justify-center items-start p-5'>
        <Todo />
      </div>
    </GlobalContextComponent>
  )
}

export default App