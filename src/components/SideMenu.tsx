import React from 'react'
import {Resizable} from 're-resizable'
import { usePages } from '../contexts/PagesContext'

import {VscHome, VscArrowRight} from "react-icons/vsc";

import { HomeProps } from '../pages/Home'
import { ButtonSideMenu } from './ButtonSideMenu'
import { BtNewSideMenu } from './BtNewSideMenu';
import { BtNewOptions } from './BtNewOptions';

interface SideMenuProps {
  reduced: boolean
}

export function SideMenu({reduced} : SideMenuProps) {

  const {goToPage, currentPage} = usePages()

  return (
    <div
      className={`
        h-[100%] bg-purple-900
        ${
          reduced?
          'w-[50px]':
          'w-[256px]'
        }
      `} 
    >

      {!reduced && 
        <div className='text-white-500 w-[100%] h-16 text-2xl flex justify-center items-center'>
          Simple Money
        </div>
      }

      <div className='mt-3'>
        <BtNewSideMenu
          onclick={()=>{}}
          reduced={reduced}
        />
      </div>

      <div className='mt-10'>
        <ButtonSideMenu 
          reduced={reduced}
          Icon={VscHome} 
          activated={currentPage === "Home"} 
          title="Home" 
          onclick={()=>goToPage<HomeProps>('Home', {nome:'Leandro'})}
        />
        <ButtonSideMenu 
          reduced={reduced}
          Icon={VscArrowRight} 
          activated={currentPage === "Send"} 
          title="Send" 
          activeColor='blue-500'
          onclick={()=>goToPage('Send', {})}
        />
      </div>
     
    </div>
  )
}