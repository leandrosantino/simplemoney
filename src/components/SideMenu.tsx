import { usePages } from '../hooks/usePages'

import {VscHome, VscArrowRight} from "react-icons/vsc";

import { HomeProps } from '../pages/Home'
import { SideMenuButton } from './SideMenuButton'
import { NewTransactionButton } from './NewTransactionButton';
import { UserFrame } from './UserFrame';

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
        <UserFrame reduced={reduced} />
      </div>
      

      <div className='mt-3'>
        <NewTransactionButton
          onclick={()=>{}}
          reduced={reduced}
        />
      </div>

      <div className='mt-6'>
        <SideMenuButton 
          reduced={reduced}
          Icon={VscHome} 
          activated={currentPage === "Dashboard"} 
          title="Dashboard" 
          onclick={()=>goToPage<HomeProps>('Dashboard', {nome:'Leandro'})}
        />
        <SideMenuButton 
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
