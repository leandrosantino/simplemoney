import React from 'react'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { RiBankLine } from 'react-icons/ri'
import { VscArrowDown, VscArrowRight, VscArrowUp } from 'react-icons/vsc'
import { BalanceCards } from './BalanceCards'

export function BalanceFrame() {
  return (
    <div className='w-full' >
          <h4 className='text-3xl font-bold text-white-500 w-full text-start'>Dashboard</h4>
          <div className='w-full mt-4 grid gap-3 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4'>
            <BalanceCards color='blue' title="Saldo atual"       Icon={RiBankLine} value="0,00" />
            <BalanceCards color='green' title="Receitas"         Icon={VscArrowUp} value="0,00" />
            <BalanceCards color='red' title="Despesas"           Icon={VscArrowDown} value="0,00" />
            <BalanceCards color='cyan' title="Cartão de crédito" Icon={BsFillCreditCardFill} value="0,00" />
            <div className='w-full h-7 mt-3' >
              <button 
                className='
                text-center  w-44 h-7 text-purple-200 
                rounded-[12px] hover:bg-purple-700 active:bg-purple-600 
                flex flex-row justify-center items-center font-medium
                ' 
                >
                Meu desenpenho
                <span className='ml-1'><VscArrowRight size={20} /></span>
              </button>
            </div>
          </div>
        </div>
  )
}
