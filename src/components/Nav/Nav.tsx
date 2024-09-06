//import React from 'react'
import './Nav.scss'
import Search from '../Search/Search';
import icon from '../../assets/media/whiteCoctailIcon.png';

const Nav = () => {
  return ( 
      <nav className='nav'>
        <div className='nav__brand'>
          M
          <img  className="nav__brand--img-size" src={icon} alt="" />
          XOLOGIST
        </div>
        <div className='nav__items'>
            <svg xmlns="http://www.w3.org/2000/svg" className="nav__img"  viewBox="0 0 24 24"><path fill="white" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg>
            <Search/>
        </div>
      </nav>
  )
}

export default Nav
