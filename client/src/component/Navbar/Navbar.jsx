import React from 'react';
import './Navbar.css';
import logowomen from '../../assets/logowomen.png';
import iconNavbar from'../../assets/iconNavbar.png';
import MenuAdmin from './MenuAdmin/MenuAdmin';
import MenuUser from './MenuUser/MenuUser';
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navigation'>
      <Link to='/'><img src={logowomen} alt='logowomen' className='logo'/></Link>

      <h1>Acción Femenina</h1>

      <MenuAdmin/>

      <MenuUser/>

      <button className='menu-profile'>
            <Link to='/registro'>
              <img src={iconNavbar} alt='mujer de perfil' className='icon-Navbar'/>
            </Link>
      </button>
    </nav>
  );
}
