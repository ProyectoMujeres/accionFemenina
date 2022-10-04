import React, { useState } from 'react';
import './MenuUser.css';
import iconNavbar from'../../../assets/iconNavbar.png';
import { Link } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import { MdLocalPostOffice } from 'react-icons/md';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';

export default function MenuUser(){
  const handleClick = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("user_id");
    window.location.reload(false);
  }

  return (
    <section>
       <IconContext.Provider value={{ size: '1em', style: { margin: '0 0.2em' } }}>
        <ul className='menu-user-container '>
          {' '}
          <li className='menu-user' id='menu-user'>
            <button className='menu-user-profile'>
              <img src={iconNavbar} alt='mujer de perfil' className='icon-Navbar'/>
            </button>
              
            <section className='menu-user-link'>
              <p>
                <Link to='/mi-perfil' className='menu-user-l-i'>Mi perfil<FaUserEdit/></Link>
              </p>

              <p>
                <Link to='/mis-publicaciones' className='menu-user-l-i'>Mis publicaciones<MdLocalPostOffice/></Link>
              </p>

              <p>
                <Link onClick={handleClick} className='menu-user-l-i'>Cerrar sesion<RiLogoutBoxFill/></Link>
              </p>
            </section>
          </li>
        </ul>
      </IconContext.Provider>
    </section>
  )
}