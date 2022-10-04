import React from 'react';
import './MenuAdmin.css';
import iconNavbar from '../../../assets/iconNavbar.png';
import { Link } from 'react-router-dom';
import { AiFillDatabase } from 'react-icons/ai';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';

export default function MenuAdmin(){
  const handleClick = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("user_id");
    window.location.reload(false);
  }

  return (
    <section className='menu-admin'>
      <IconContext.Provider value={{ size: '1em', style: { margin: '0 0.2em' } }}>
        <ul className='menu-admin-container '>
          {' '}
          <li className='menu-admin-li' id='menu-admin-li'>
            <button className='menu-admin-profile'>
              <img src={iconNavbar} alt='mujer de perfil' className='icon-Navbar'/>
            </button>
                    
            <section className='menu-admin-links'>
              <p>
                <Link to='/edicion' className='menu-admin-l-info'>Edición<AiFillDatabase/></Link>
              </p>

              <p>
                <Link onClick={handleClick} className='menu-admin-l-info'>Cerrar sesión<RiLogoutBoxFill/></Link>
              </p>
            </section>
          </li>
        </ul>
      </IconContext.Provider>
    </section>
  )
}