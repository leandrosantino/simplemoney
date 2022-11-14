import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'

export function DateSelector() {
  return (
    <div>
      <div 
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
          cursor-pointer
        `} 
      >
        <div className="mr-2">
          Janeiro 2022
        </div>
        <IoIosArrowDown/>
      </div>
    </div>
  )
}
