import React, { useState } from 'react'

import {FiPlus} from 'react-icons/fi'
import { BtNewOptions } from './BtNewOptions';

interface BtNewSideMenuProps {
  onclick: React.MouseEventHandler;
  reduced: boolean;
}

export function BtNewSideMenu({onclick, reduced}:BtNewSideMenuProps) {

  const [showOptions, setShowOptions] = useState(false)

  return (
    <div className={`flex flex-row justify-${reduced?'center':'start'} items-center ml`} >
      <button 
        className={`
            ${
              reduced?
              'w-9':
              'w-36 ml-[25px]'
            }
            transition-all
            h-9
            bg-purple-100
            rounded-[22px]
            text-white-500
            font-bold
            flex fle-row
            items-center  
            justify-center
            hover:opacity-90
            active:opacity-60
        `}
        onClick={()=>{setShowOptions(true)}}
    >   
        <div className='w-[100%] flex flex-row justify-center items-center'>
            <FiPlus size={20} />
            {!reduced && <div className='ml-1' >Novo</div>}
        </div>
      </button>

      {showOptions && <>

        <div 
          className={`
            absolute h-36 w-52 mt-[104px] ${reduced? 'ml-[172px]': 'ml-[23px]'} z-10
          `}
        >
          <BtNewOptions closeFunc={()=>setShowOptions(false)} />
        </div>

        <div 
          className='absolute top-[30px] bottom-0 left-0 righ-0 w-screen h-page z-0' 
          onClick={()=>{setShowOptions(false)}}
        >

        </div>

      </>}




    </div>
  )
}
