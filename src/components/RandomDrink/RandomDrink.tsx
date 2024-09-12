import './RandomDrink.scss';
import { Link } from 'react-router-dom';

const RandomDrink = () => {
  return (
    <div className='random-drink__container'>
      <h2 className='random-drink__heading'> Can't decide which one to try? </h2>
      <p className='random-drink__content'>Click on the button below and we will help you select one</p>
      <Link to="/random ">
      <button className='random-drink__button'>CHEERS !!</button>
      </Link>
    </div>
  )
}

export default RandomDrink
