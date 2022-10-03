import React, { useState } from 'react';
import './MenuUser.css';
import iconNavbar from'../../../assets/iconNavbar.png';
import { Link } from 'react-router-dom';

export default function MenuUser(){
  const handleClick = () => {
    localStorage.removeItem("user");
    window.location.reload(false);
  }

  return (
    <section>
      <ul className='menu-user-container '>
        {' '}
        <li className='menu-user' id='menu-user'>
          <button className='menu-user-profile'>
            <img src={iconNavbar} alt='mujer de perfil' className='icon-Navbar'/>
          </button>
            
          <section className='menu-user-link'>
            <p>
              <Link to='/mi-perfil'> Mi perfil </Link>
            </p>

            <p>
              <Link to='/mis-publicaciones'> Mis comentarios </Link>
            </p>

            <p>
              <Link onClick={handleClick}>Cerrar sesion </Link>
            </p>
          </section>
        </li>
      </ul>
    </section>
  )
}