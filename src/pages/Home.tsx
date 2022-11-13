import React from 'react'

export interface HomeProps {nome:string}

export function Home({nome} : HomeProps) {
  return (
    <div>Home {nome}</div>
  )
}
