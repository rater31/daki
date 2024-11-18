import React from 'react'
import foto1 from'../assets/img/gomon1.jpg' 
import foto2 from'../assets/img/gomon2.jpg' 
import foto3 from'../assets/img/remera-lisa-negra.jpg' 
import left from '../assets/left.png'
import right from '../assets/right.png'
import '../js/slider.js'


const Carrusel = () => {
    const slider = document.querySelector("#slider");
    const childreSlider = [...slider.querySelectorAll("figure")];

    childreSlider.forEach(function(child, index){
    child.dataset.idSlider = index;
    })


    function getCurrentImage(){
        const currentImage=slider.queSelector("[data-active]");

        return currentImage;
    }

getCurrentImage();
  return (
    <section className='w-[90%] mx-auto max-w-screen-lg  overflow-hidden rounded-lg my-10 slider' id='slider'>
        {/* foto1 */}
        <figure className='relative w-full h-full aspect-video slider-childer' data-active>
            <img src={foto1} alt="Imagen 1" className='w-full  h-full block object-cover'/>
            <div className='absolute inset-0 w-[90%] mx-auto h-max mt-auto text-white  space-y-4 py-8 hidden md:block'>

                <h2 className='text-3xl font-bold'>Imagen: 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum nam quaerat, cupiditate a debitis recusandae consequatur id nihil commodi.</p>

            </div>
        </figure>

        {/* foto2 */}
        <figure className='relative w-full h-full aspect-video slider-childer'>
            <img src={foto2} alt="Imagen 2" className='w-full  h-full block object-cover'/>
            <div className='absolute inset-0 w-[90%] mx-auto h-max mt-auto text-white  space-y-4 py-8 hidden md:block'>

                <h2 className='text-3xl font-bold'>Imagen: 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum nam quaerat, cupiditate a debitis recusandae consequatur id nihil commodi.</p>

            </div>
        </figure>

        {/* foto3 */}
        <figure className='relative w-full h-full aspect-video slider-childer'>
            <img src={foto3} alt="Imagen 3" className='w-full  h-full block object-cover'/>
            <div className='absolute inset-0 w-[90%] mx-auto h-max mt-auto text-white  space-y-4 py-8 hidden md:block'>

                <h2 className='text-3xl font-bold'>Imagen: 3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum nam quaerat, cupiditate a debitis recusandae consequatur id nihil commodi.</p>

            </div>
        </figure>

        <button className='slider-prev   bg-white rounded-full ml-4' data-button="prev">
            <img src={left} alt="" className='w-8 aspect-square md:-12' />
        </button>

        <button className='slider-next   bg-white rounded-full mr-4' data-button="next">
            <img src={right} alt="" className='w-8 aspect-square md:-12' />
        </button>

    </section>
  )
}

export default Carrusel