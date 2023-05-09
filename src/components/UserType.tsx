import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'

const UserType = () => {
  const {currentUserType,setCurrentUserType} = useContext(GlobalContext);
  

  return (
    <div className='ml-auto my-2'>
        <select value={currentUserType} className='p-1 rounded-md'
        onChange={(e) => {
          setCurrentUserType(prev => prev = e.target.value)
        }}
        >
            <option className='text-sm' value={'user'}>User</option>
            <option className='text-sm' value={'admin'}>Admin</option>
            <option className='text-sm' value={'super_admin'}>Super Admin</option>
        </select>
        {/* <div>{currentUserType}</div> */}
    </div>
  )
}

export default UserType