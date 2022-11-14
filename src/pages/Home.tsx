import React from 'react'
import { BalanceCards } from '../components/BalanceCards'
import { DateSelector } from '../components/DateSelector'

import {RiBankLine} from 'react-icons/ri'
import {VscArrowDown, VscArrowUp} from "react-icons/vsc";
import {BsFillCreditCardFill} from "react-icons/bs";

export interface HomeProps {nome:string}

export function Home({nome} : HomeProps) {
  return (
    <div className='w-full h-full' >
      
      <div className='w-full p-6 flex flex-row justify-center items-center ' >
        <DateSelector/>
      </div>

      <div className='w-[96%] h-56 mx-[2%] px-6 py-5 flex flex-col justify-start items-center' >

        <h4
          className='text-3xl font-bold text-white-500 w-full text-start'
        >Dashboard</h4>

        <div 
          className='w-full mt-4 grid grid-cols-4 gap-3'
        >
          <BalanceCards color='blue' title="Saldo atual"       Icon={RiBankLine} value="0,00" />
          <BalanceCards color='green' title="Receitas"          Icon={VscArrowUp} value="0,00" />
          <BalanceCards color='red' title="Despesas"          Icon={VscArrowDown} value="0,00" />
          <BalanceCards color='cyan' title="Cartão de crédito" Icon={BsFillCreditCardFill} value="0,00" />
        </div>

      </div>

    </div>
  )
}
