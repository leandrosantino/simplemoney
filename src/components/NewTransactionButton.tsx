import React, { useState } from 'react'

import {FiPlus} from 'react-icons/fi'
import { TransactionOptions } from './TransactionOptions';

interface BtNewSideMenuProps {
  onclick: React.MouseEventHandler;
  reduced: boolean;
}

export function NewTransactionButton({onclick, reduced}:BtNewSideMenuProps) {

  const [showOptions, setShowOptions] = useState(false)

  return (
    <div className={`flex flex-row justify-${reduced?'center':'start'} items-center mt-6`} >
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

      {showOptions && <TransactionOptions reduced={reduced} closeFunc={()=>setShowOptions(false)} />}

    </div>
  )
}
