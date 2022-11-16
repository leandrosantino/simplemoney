import React from 'react'

export function ExpanseForm({closeFunc}: {closeFunc: ()=>void}) {
  return (
    <div 
        className='
          flex flex-row justify-center items-center
          w-[450px] h-[550px] bg-purple-400 shadow-md rounded-3xl
        '
    >
        <button onClick={closeFunc}> Teste </button>
    </div>
  )
}
