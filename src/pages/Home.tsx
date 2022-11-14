import React from 'react'
import { BalanceCards } from '../components/BalanceCards'
import { DateSelector } from '../components/DateSelector'

import {TbLayoutCards} from 'react-icons/tb'

import { BalanceFrame } from '../components/BalanceFrame';
import { CardsContainer } from '../components/CardsContainer';

export interface HomeProps {nome:string}

export function Home({nome} : HomeProps) {
  return (
    <div 
      className='
        w-full h-full 
        overflow-y-auto
        scrollbar-thumb-purple-500
        scrollbar-thumb-rounded-xl
        scrollbar-track-purple-800
        scrollbar-thin
      '  
    
    >
      
      <div className='w-full p-6 flex flex-row justify-center items-center ' >
        <DateSelector/>
      </div>

      <div className='w-[96%] h-56 mx-[2%] px-6 py-5 flex justify-start items-center flex-wrap ' >
        <BalanceFrame/>
        
        <div className='grid grid-cols-1 lg:grid-cols-2  w-full gap-6 pb-24' >

          <div className='w-full'>
            <CardsContainer title='Despesas por Categoria' className='h-72 w-full'></CardsContainer>
            <CardsContainer title='Balanço Mensal' className='h-52 w-full'></CardsContainer>
            <CardsContainer title='Planejamento Mensal' className='h-32 w-full'></CardsContainer>
          </div>

          <div className='w-full'>
            <CardsContainer title='Receitas por Categoria' className='h-36 w-full'></CardsContainer>
            <CardsContainer title='Cartçao de crédito' className='h-36 w-full'></CardsContainer>
            <CardsContainer title='Simple Money Education' className='h-72 w-full'></CardsContainer>
          </div>


        </div>
        
        <div className='w-full flex justify-center items-center pb-36' > 
          <button
            className='
              w-40 p-2 hover:bg-purple-600 active:bg-purple-700 
              rounded-2xl flex flex-col justify-center items-center 
              text-white-500 text-xs 
            '
          > 
            <TbLayoutCards size={40} />
            <span className='mt-2' >GERENCIAR TELA INICIAL</span>
          </button>
        </div>

      </div>

    </div>
  )
}
