
import React from 'react';
import './Menu.css'
import iconNavbar from"../../assets/iconNavbar.png";

export default function MenuAdmin() {
  return (

<div className="menu-admin">
<ul className="menu-admin-container ">
  {" "}
  <li className="menuadminli" id="menuadminli">
  <button className="menuadmin-profile"><img src={iconNavbar} alt="mujer de perfil" className="icon-Navbar"/></button>
            
  <section className="navlink">
      <p>
         <a href="/Edición"> Edición </a>
      </p>
      <p>
        <a href="/Cerrar_sesión"> Cerrar sesión </a>
      </p>
    </section>
  </li>
</ul>
</div>)
}