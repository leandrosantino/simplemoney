import React from 'react'

import {FaSignOutAlt} from 'react-icons/fa'
import { useAuth } from '../hooks/useAuth';

interface UserFrameProps {
    reduced: boolean;
}

export function UserFrame({reduced}:UserFrameProps) {

  const {signOut} = useAuth()

  return (
    <div 
      className={`w-full h-full flex flex-row justify-center items-center px-1 ${reduced?'':'border-b-2 border-b-purple-500'} mt-2`}
    >

        <div className={`${reduced?'w-full':'w-[20%]'} flex flex-row justify-center items-center`}>
          <img 
            className='h-10 w-10 rounded-[20px]'
            src="https://github.com/leandrosantino.png" 
            alt="user" 
          />
        </div>

      {reduced?<></>:<>
        <div className='text-base px-2 text-center' >Leandro santino</div>
        <div className='w-[10%]' >
          <button
            className='hover:text-red-500 active:text-opacity-80'
            onClick={signOut}
          ><FaSignOutAlt size={16}/></button>
        </div>
      </>}
    </div>
  )
}
