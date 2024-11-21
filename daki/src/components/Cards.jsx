import React from 'react'

const Cards = ({description}) => {


  return (
    <div>
        <h1>{description.titulo}</h1>
        <img src={description.imagen} alt="" srcset="" />

    </div>
  )
}

export default Cards