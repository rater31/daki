import React from 'react'
import foto1 from'../assets/img/gomon1.jpg' 
import foto2 from'../assets/img/gomon2.jpg' 
import foto3 from'../assets/img/remera-lisa-negra.jpg' 
import ImageGalery from 'react-image-gallery'
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css'
const Carrusel = () => {

    const image =[
        {
        original:`${foto1}`,
        thumbnail:`${foto1}`,
        },
        {
            original:`${foto2}`,
            thumbnail:`${foto2}`,
            },
            {
                original:`${foto3}`,
                thumbnail:`${foto3}`,
                },
    ]


  return (
    <div className='w-full h-full mx-auto max-w-screen-lg  rounded-lg my-10 aspect-video overflow-clip'>

    <ImageGalery
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showNav={false}
        showBullets={true}
        autoPlay={true}
        infinite={true}
        slideInterval={3000}
        slideDuration={1000}
        items={image}
    />

    </div>
  )
}

export default Carrusel