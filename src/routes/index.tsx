import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { SideMenu } from '../components/SideMenu';
import { PagesContextProvider} from '../contexts/PagesContext';

import AppRoutes from '../routes/app.routes'

import {useAuth} from '../hooks/useAuth'
import { SignIn } from '../pages/SignIn';

export function Routes() {

  const {user} = useAuth()

  const [displaySideMenu, setDisplaySideMenu] = useState<boolean>(false)

  return (
    <PagesContextProvider>
      <NavBar handleMenuClick={()=>setDisplaySideMenu(!displaySideMenu)} />
      {user.name ?
        <div className='h-page w-[100%] flex flex-row'>
          <SideMenu reduced={displaySideMenu}/>
          <AppRoutes/>
        </div>
      :
        <SignIn/>
      }
    </PagesContextProvider>
  )
}
