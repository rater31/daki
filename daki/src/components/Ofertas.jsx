import React from 'react'

const Ofertas = () => {
  return (
    <div className='bg-[#FFF6E3] flex '>
        <img className='ms-4 rounded-lg p-3' src="../public/img/vestido.jpg" alt="" srcset="" />
        <div className='mx-auto text-center'>
            <h2 className='my-32 text-[40px]'>Remera Negra</h2>
            <span className='line-through font-bold text-red-600'>$9500</span><br/>
            <span className='font-bold text-xl'>$7900</span>
            <button className='bg-[#FFC094] w-full rounded-lg font-bold mt-10 text-center text-[15px]'>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default Ofertas