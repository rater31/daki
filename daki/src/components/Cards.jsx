import React from 'react'
// import productos from '../productos.json/'

const Cards = ({titulo,imagen,precio}) => {


  return (
    <div className=' rounded-lg text-xl  mb-10 font-bold my-5 mx-10 '>
         <img src={imagen} alt="" srcset=""  className='w-[250px] my-3 drop-shadow-lg mx-auto rounded-lg h-[350px] '/>
        <h1 className='text-[18px] text-[#605E5E]'>{titulo}</h1>
        <p className='text-start my-4'>{precio}</p>
        <button className='bg-[#FFC094] w-full rounded-lg drop-shadow-lg text-center text-[15px]'>Agregar al carrito</button>
    </div>
  )
}

export default Cards