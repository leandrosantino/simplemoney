import { usePages } from '../contexts/PagesContext'

import {VscHome, VscArrowRight} from "react-icons/vsc";

import { HomeProps } from '../pages/Home'
import { ButtonSideMenu } from './ButtonSideMenu'
import { BtNewSideMenu } from './BtNewSideMenu';

interface SideMenuProps {
  reduced: boolean
}

export function SideMenu({reduced} : SideMenuProps) {

  const {goToPage, currentPage} = usePages()

  return (
    <div
      className={`
        transition-all
        h-[100%] bg-purple-900
        ${
          reduced?
          'w-[50px]':
          'w-[256px]'
        }
      `} 
    >

      
      <div className='text-white-500 w-[100%] h-16 text-2xl flex justify-center items-center'>
        {reduced?"SP":"Simple Money"}
      </div>
      

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
          activated={currentPage === "Dashboard"} 
          title="Dashboard" 
          onclick={()=>goToPage<HomeProps>('Dashboard', {nome:'Leandro'})}
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
