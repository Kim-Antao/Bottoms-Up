import './Nav.scss'
import icon from '../../assets/media/whiteCoctailIcon.png';
import { Link } from 'react-router-dom';

const Nav = () => {

  document.addEventListener('scroll',()=>{
    const navigation = document.querySelector<HTMLElement>('.nav')!;
    if (window.scrollY > 0){
      navigation.classList.add('nav--scrolled');
    }else{
      navigation.classList.remove('nav--scrolled');

    }
  })
  return ( 
    <nav className='nav nav--scrolled' >          
      <Link to="/" className='nav__items nav__brand'>
        M
        <img  className="nav__brand-icon" src={icon} alt="" />
        XOLOGIST
      </Link>
      <Link to="/drinks" className='nav__items'>Drinks</Link>
    </nav>
  )
}

export default Nav
