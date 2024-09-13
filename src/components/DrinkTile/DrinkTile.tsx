import { Link } from "react-router-dom";
import "./DrinkTile.scss";

type DrinkTileProps = {
    name: string,
    image: string,
    id: string,
}

const DrinkTile = ({name, image, id}: DrinkTileProps) => {
    
  return (
    <div className="drink-tile">
      <Link to={`/Mixologist/drinks/${id}`}>
        <img className="drink-tile__image" src={image} alt={name} />
      </Link>
      <h3>{name}</h3>
    </div>
  )
}

export default DrinkTile
