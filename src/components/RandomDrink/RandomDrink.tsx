import './RandomDrink.scss';
import { Link } from 'react-router-dom';

const RandomDrink = () => {
  return (
    <div className='random-drink'>
      <h2 className='random-drink__heading'> Can't decide which one to try? </h2>
      <div className="random-drink__content">
        <p className='random-drink__para'>Click on the button and we will help you select a drink</p>
        <Link to="/random ">
        <button className='random-drink__button'>CHEERS !!</button>
        </Link>
      </div>
    </div>
  )
}

export default RandomDrink
