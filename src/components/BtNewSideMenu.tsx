import React from 'react'

import {FiPlus} from 'react-icons/fi'

interface BtNewSideMenuProps {
  onclick: React.MouseEventHandler;
  reduced: boolean;
}

export function BtNewSideMenu({onclick, reduced}:BtNewSideMenuProps) {
  return (
    <div className={`flex flex-row justify-${reduced?'center':'start'} items-center ml`} >
      <button 
        onClick={onclick} 
        className={`
            ${
              reduced?
              'w-9':
              'w-28 ml-[25px]'
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
    >   
        <div className='w-[100%] flex flex-row justify-center items-center'>
            <FiPlus size={20} />
            {!reduced && <div className='ml-1' >Novo</div>}
        </div>
        
      </button>
    </div>
  )
}
