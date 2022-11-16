import React from 'react'

import { useAuth } from '../hooks/useAuth'

export function SignIn() {

  const {signIn} = useAuth()

  return (
    <div>
      <button
        className='bg-white-500'
        onClick={signIn}
      >Logar</button>
    </div>
  )
}
