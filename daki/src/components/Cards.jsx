import React from 'react'
// import productos from '../productos.json/'

const Cards = ({titulo,imagen,precio}) => {


  return (
    <div className='bg-red-400 rounded-lg text-white text-xl  mb-10 font-bold'>
         <img src={imagen} alt="" srcset=""  className='w-[70%] my-3 mx-auto rounded-lg'/>
        <h1 className='text-center'>{titulo}</h1>
        <p className='ms-5'>{precio}</p>
    </div>
  )
}

export default Cards