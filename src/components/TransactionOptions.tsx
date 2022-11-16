import {useState} from 'react'

import {IconType} from 'react-icons'
import {HiOutlineArrowTrendingDown, HiOutlineArrowTrendingUp, HiArrowPath} from 'react-icons/hi2'
import {BsCreditCard2Back} from 'react-icons/bs'
import { ExpanseForm } from './ExpanseForm';

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

export function TransactionOptions({closeFunc, reduced}:{closeFunc: ()=>void;reduced: boolean}) {

  const [form, setForm] = useState<JSX.Element>()
  const [showForm, setShowForm] = useState<boolean>(false)

  return (
    <>
      {!showForm ? 
      
        <div 
          className={`
            absolute h-36 w-52 mt-[104px] ${reduced? 'ml-[172px]': 'ml-[23px]'} z-10
          `}
        >   
          <div 
            className='
              w-full h-full flex flex-col justify-center items-start
              rounded-2xl shadow-md bg-purple-700 text-blue-600
            '
          >
            <BtOptions 
              onClick={()=>{
                setForm(<ExpanseForm closeFunc={closeFunc} />)
                setShowForm(true)
              }}
              color='text-red-500' 
              Icon={HiOutlineArrowTrendingDown} 
              className='rounded-t-2xl' 
              title='Despesa' 
            />
            <BtOptions
              onClick={()=>{
                setForm(<ExpanseForm closeFunc={closeFunc} />)
                setShowForm(true)
              }} 
              color='text-green-500' 
              Icon={HiOutlineArrowTrendingUp} 
              title='Receita' 
            />
            <BtOptions 
              onClick={()=>{
                setForm(<ExpanseForm closeFunc={closeFunc} />)
                setShowForm(true)
              }}
              color='text-blue-500'  
              Icon={BsCreditCard2Back} 
              title='Despesa Cartão' 
            />
            <BtOptions
              onClick={()=>{
                setForm(<ExpanseForm closeFunc={closeFunc} />)
                setShowForm(true)
              }} 
              color='text-blue-600'  
              Icon={HiArrowPath} 
              className='rounded-b-2xl' 
              title='Transferência' 
            />
          </div> 
        </div>
      
      :
      
        <div 
          className='
            absolute w-screen h-page z-10 flex flex-row justify-center items-center left-0 top-[30px]
          '
        >
          {form}
        </div>

        }

        <div 
          className={
            `absolute top-[30px] bottom-0 left-0 righ-0 w-screen h-page z-0 ${showForm && 'bg-black opacity-40'}`
          } 
          onClick={()=>{if(!showForm) closeFunc() }}
        >
        </div>

    </>  
  )
} 
