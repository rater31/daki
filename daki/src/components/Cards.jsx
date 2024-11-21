import React from 'react'

const Cards = ({imagen,titulo,precio}) => {


  return (
    <div className='w-[200px] py-3 col-span-1 grid '>
        <img className='mx-auto my-2 rounded-lg w-[150px]' src={imagen} alt="" srcset="" />
        <h1 className='text-xl text-center text-slate-500 font-bold'>{titulo}</h1>
        <span className='ml-3 my-4 font-bold'>{precio}</span>
        <button className='bg-red-400 rounded-full text-white'>Agregar al carrito</button>

    </div>
  )
}

export default Cards