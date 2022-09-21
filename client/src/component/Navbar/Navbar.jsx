import React from "react";
import "./Navbar.css";
import logowomen from "../../assets/logowomen.png";
import iconNavbar from"../../assets/iconNavbar.png";
import MenuAdmin from "./MenuAdmin";


export default function Navbar() {
  return (
    <nav className="navigation">
      <a href = "/"> <img src={logowomen} alt="logowomen" className="logo"/></a>

      <h1>Acción Femenina</h1>
   <MenuAdmin/> 
      <div className="navigation-menu">
        <ul className="menu-container ">
          {" "}
          <li className="menu" id="menu">
            <button className="menu-profile"><img src={iconNavbar} alt="mujer de perfil" className="icon-Navbar"/></button>
            
            <section className="navlink">
              <p>
                <a href="/mi_perfil"> Mi perfil </a>
              </p>

              <p>
                <a href="/mis_comentarios"> Mis comentarios </a>
              </p>

              <p>
                <a href="/cerrar_sesión"> Cerrar sesion </a>
              </p>
            </section>
          </li>
        </ul>
      </div>
    </nav>
  );
}
