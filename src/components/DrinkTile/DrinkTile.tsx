//import React from 'react'
import "./DrinkTile.scss";

type DrinkTileProps = {
    name: string,
    image: string,
}

const DrinkTile = ({name, image}: DrinkTileProps) => {
    
  return (
    <div className="drink-tile">
      <img className="drink-tile__image" src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  )
}

export default DrinkTile
