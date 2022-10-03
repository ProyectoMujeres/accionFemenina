import React from 'react';
import './MenuAdmin.css';
import iconNavbar from '../../../assets/iconNavbar.png';
import { Link } from 'react-router-dom';

export default function MenuAdmin(){
  const handleClick = () => {
    localStorage.removeItem("user");
    window.location.reload(false);
  }

  return (
    <section className='menu-admin'>
      <ul className='menu-admin-container '>
        {' '}
        <li className='menu-admin-li' id='menu-admin-li'>
          <button className='menu-admin-profile'>
            <img src={iconNavbar} alt='mujer de perfil' className='icon-Navbar'/>
          </button>
                  
          <section className='menu-admin-links'>
            <p>
              <Link to='/edición'>Edición</Link>
            </p>

            <p>
              <Link onClick={handleClick}>Cerrar sesión</Link>
            </p>
          </section>
        </li>
      </ul>
    </section>
  )
}