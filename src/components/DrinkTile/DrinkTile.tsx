//import React from 'react'

type DrinkTileProps = {
    name: string,
    image: string,
}

const DrinkTile = ({name, image}: DrinkTileProps) => {
    
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  )
}

export default DrinkTile
