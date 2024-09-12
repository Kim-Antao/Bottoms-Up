import './Nav.scss'
import icon from '../../assets/media/whiteCoctailIcon.png';
import { Link } from 'react-router-dom';

const Nav = () => {

  document.addEventListener('scroll',()=>{
    const navigation = document.querySelector<HTMLElement>('.nav')!;
    if (window.scrollY > 0){
      navigation.classList.add('scrolled');
    }else{
      navigation.classList.remove('scrolled');

    }
  })
  return ( 
      <nav className='nav' >
        <div className='nav__container'>
          
           <Link to="/" className='nav__items nav__brand'>
              M
              <img  className="nav__brand-icon" src={icon} alt="" />
              XOLOGIST
              </Link>
              <Link to="/drinks" className='nav__items'>Drinks</Link>
        </div>
      </nav>
  )
}

export default Nav
