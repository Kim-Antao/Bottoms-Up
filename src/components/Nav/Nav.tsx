import './Nav.scss'
import Search from '../Search/Search';
import icon from '../../assets/media/whiteCoctailIcon.png';

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
        <ul className='nav__container'>
          
            <li className='nav__items nav__brand'>
            <a href="#" className='nav__link'>
              M
              <img  className="nav__brand-icon" src={icon} alt="" />
              XOLOGIST
              </a>
              </li>
          {/*   <li className='nav__items nav__link'>
              <svg xmlns="http://www.w3.org/2000/svg" className=""  viewBox="0 0 24 24"><path fill="white" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg>              
            </li>
            <li className='nav__items'>
              <Search/>
            </li> */}
        </ul>
      </nav>
  )
}

export default Nav
