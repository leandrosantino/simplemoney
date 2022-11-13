import React from 'react'
import { IconType } from 'react-icons/lib';

interface ButtonSideMenuProps {
    title: string;
    onclick: React.MouseEventHandler;
    activated: boolean; 
    Icon: IconType;
    reduced: boolean;
    activeColor?: string
}

export function ButtonSideMenu(
    {title, onclick, activated, Icon, reduced, activeColor}:ButtonSideMenuProps
){
  return (
    <button 
        onClick={onclick} 
        className={`
            w-[100%] h-10  
            hover:bg-purple-800 
            ${activated?
                `border-l-solid border-l-4 text-purple-100 border-l-purple-100`:
                'text-white-500'
            }
            flex
            fle-row
            items-center
            justify-center

        `}
    >   
        <div className='w-[80px] flex flex-row justify-center items-center'>
            <Icon size={20} />
        </div>
        {!reduced && <div className='w-[70%] flex flex-row justify-start items-center'>
            {title}
        </div>}
    </button>
  )
}
