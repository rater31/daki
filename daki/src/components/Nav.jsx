import React from 'react'
import Logo from '../assets/img/Daki.png'
import Carrito from '../assets/img/carro.png'

const Nav = () => {
  return (
    <>
    <div className='flex justify-around'>
        <img src={Logo} alt="Daki" srcset="" className='w-[200px]' />
          <div className='my-auto  text-[18px] flex '>
            <a href="" className='mx-5 hover:text-red-400 '>Inicio</a>
            <a href="" className='mx-5 hover:text-red-400 '>Categoria</a>
            <a href="" className='mx-5 hover:text-red-400 '>Nosotros</a>
            <a href="" className='mx-5 hover:text-red-400 '>Contacto</a>
            <a href='hola' className=''><img className='h-10 w-10' src={Carrito} alt="" /> </a>
          </div>
    </div>
    </>
  )
}

export default Nav