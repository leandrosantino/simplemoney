import React from 'react'

import {IconType} from 'react-icons'
import {HiOutlineArrowTrendingDown, HiOutlineArrowTrendingUp, HiArrowPath} from 'react-icons/hi2'
import {BsCreditCard2Back} from 'react-icons/bs'
import { usePages } from '../contexts/PagesContext';

interface BtOptionsType {
  title: string;
  Icon: IconType;
  className?: string;
  color: string;
  onClick: ()=>void;
}

function BtOptions({title, className, Icon, color, onClick}:BtOptionsType){
  return (
    <button
      onClick={onClick}
      className={`
        flex felx-row justify-start items-center
        w-full h-[25%] p-2 text-white-500
        hover:bg-purple-600 active:bg-purple-500 
      `+className}
    >
      <div className={'w-[20%] flex justify-center items-center '+ color} >
        <Icon size={15} />
      </div>
      <div className='w-[80%] text-start'>{title}</div>
    </button> 
  )
}

export function BtNewOptions({closeFunc}:{closeFunc: ()=>void;}) {

  const {goToPage} = usePages()

  return (
    <div 
      className='
        w-full h-full flex flex-col justify-center items-start
        rounded-2xl shadow-md bg-purple-700 text-blue-600
      '
    >
      <BtOptions 
        onClick={()=>{
          console.log('teste')
          goToPage('Expenses', {})
          closeFunc()
        }}
        color='text-red-500' 
        Icon={HiOutlineArrowTrendingDown} 
        className='rounded-t-2xl' 
        title='Despesa' 
      />
      <BtOptions
        onClick={()=>{
          goToPage('Send', {})
          closeFunc()
        }} 
        color='text-green-500' 
        Icon={HiOutlineArrowTrendingUp} 
        title='Receita' 
      />
      <BtOptions 
        onClick={()=>{
          goToPage('Send', {})
          closeFunc()
        }}
        color='text-blue-500'  
        Icon={BsCreditCard2Back} 
        title='Despesa Cartão' 
      />
      <BtOptions
        onClick={()=>{
          goToPage('Send', {})
          closeFunc()
        }} 
        color='text-blue-600'  
        Icon={HiArrowPath} 
        className='rounded-b-2xl' 
        title='Transferência' 
      />
    </div>
  )
}
