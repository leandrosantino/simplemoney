import React, { useState } from 'react'
import {IoIosArrowDown} from 'react-icons/io'

export function DateSelector() {

  const [showDateSelector, setShowDateSelector] = useState(false)

  return (
    <div className='w-full flex flex-row justify-center items-center' >
      <button 
        className={`
          rounded-[15px]
          w-36 h-[30px]
          bg-purple-800
          text-white-500
          text-center
          flex flex-row
          justify-center
          items-center
          border
          border-purple-400
          text-sm
          hover:bg-purple-700
          active:bg-purple-600
        `} 
        onClick={()=>{
          console.log('on')
          setShowDateSelector(true)
        }}
      >
        <div className="mr-2">
          Janeiro 2022
        </div>
        <IoIosArrowDown/>
      </button>


      {showDateSelector &&
        <div 
          className='
            absolute w-56 h-56 bg-purple-600 
            z-10 mt-[275px] rounded-3xl shadow-md
            flex flex-col justify-center items-center
          '
        >

          <div
            className='h-[25%] w-full bg-purple-500 rounded-t-3xl'
          >

          </div>

          <div
            className='h-[75%] w-full'
          >

          </div>

        </div>
      }

      {showDateSelector &&
        <div 
          onClick={()=>setShowDateSelector(false)}
          className='absolute top-[30px] bottom-0 left-0 righ-0 w-screen h-page z-0' 
        >

        </div>
      }

    </div>
  )
}
