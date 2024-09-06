//import React from 'react'
import './Nav.scss'
import Search from '../Search/Search';
import icon from '../../assets/media/whiteCoctailIcon.png';

const Nav = () => {
  return ( 
      <nav className='nav' >
        {/* <div className='nav__brand'>
          M
          <img  className="nav__brand--img-size" src={icon} alt="" />
          XOLOGIST
        </div>
        <button className='nav__toggle-btn'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1em" viewBox="0 0 1536 1280"><path fill="black" d="M1536 1088v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45m0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 704V576q0-26 19-45t45-19h1408q26 0 45 19t19 45m0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 192V64q0-26 19-45T64 0h1408q26 0 45 19t19 45"/></svg>
        </button> */}
        <ul className='nav__container'>
          <li className='nav__items nav__brand'>
          M
          <img  className="nav__brand-icon" src={icon} alt="" />
          XOLOGIST
          </li>
            <li className='nav__items nav__link'>
              <svg xmlns="http://www.w3.org/2000/svg" className=""  viewBox="0 0 24 24"><path fill="white" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg>              
            </li>
            <li className='nav__items'>
              <Search/>
            </li>
        </ul>
      </nav>
  )
}

export default Nav
